'use client';
import Image from "next/image";
import { useState } from "react"; // Import useState hook
//import AuthButtons from "@/components/homeAuthButtons";
import {
	RegisterLink,
	LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import styles from '../page.module.css';

const Page = () => {
	const [firstname, setFirstname] = useState("");
	const [lastname, setLastname] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	// const [confirmPassword, setConfirmPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [isViewContent, setIsViewContent] = useState(false);
	const [termsAccepted, setTermsAccepted] = useState(false); // State for "Terms and Conditions" checkbox

	const handleSignUp = async (e: React.FormEvent) => {
		e.preventDefault();

		// Basic validation

		if (!termsAccepted) {
			setErrorMessage("You must accept the terms and conditions.");
			return;
		}

		try {
			const response = await fetch("/api/auth", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ firstname, email, password }),
			});

			const data = await response.json();

			if (!response.ok) {
				setErrorMessage(data.error || "An error occurred during sign-up.");
				return;
			}

			// Successfully created user
			alert("Account created successfully!");
			setFirstname("");
			setLastname("");
			setEmail("");
			setErrorMessage("");
			setTermsAccepted(false);
		} catch (error) {
			console.error("Error during sign-up:", error);
			setErrorMessage("An unexpected error occurred.");
		}
	};

	const handleChangeFirstname = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFirstname(event.target.value);
		localStorage.setItem("isViewContent", event.target.value);
	};

	const handleChangeLastname = (event: React.ChangeEvent<HTMLInputElement>) => {
		setLastname(event.target.value);
		localStorage.setItem("lastname", event.target.value);
	};

	const saveIsViewContent = () => {
		setIsViewContent(!isViewContent);
		localStorage.setItem("isViewContent", !isViewContent ? "true" : "false");
	}

	return (
		<div className='flex h-screen w-full'>
			<div className='flex-1 flex overflow-hidden bg-[#ffa885] relative justify-center items-center z-10 bg-noise'>
				<img style={{ marginLeft: '220px', marginBottom: '170px', opacity: '0.04' }}
					src='/fansSecret-logo.jpeg'
					alt='fansSecret-logo.jpeg'
					className='absolute -left-1/4 opacity-15 -bottom-52 lg:scale-150 xl:scale-105 scale-[2]
            					pointer-events-none select-none border'
				/>
				<div className='flex flex-col gap-2 px-4 xl:ml-40 text-center md:text-start font-semibold'>
					{/* <Image
					
						src={"/fansSecret-logo.jpeg"}
						alt='fansSecret-logo.jpeg'
						width={769}
						height={182}
						className='mt-20 w-[420px] z-0 pointer-events-none select-none rounded-full'
					/> */}

					<p className='text-2xl md:text-3xl text-balance' style={{ textAlign: 'center' }}>
						Welcome to FansSecret<span className=' px-2 font-bold text-white'></span>
					</p>
					{/* <p style={{ fontWeight: '250' }}> */}
					<div className={styles.authMethods}>
						{/* <form onSubmit={handleSignUp} className="flex flex-col gap-4"> */}
						{/* Username */}
						<br />
						<input
							type="text"
							id="firstname"
							value={firstname}
							onChange={(e) => handleChangeFirstname(e)}
							className="border border-gray-300 p-2 rounded-md"
							placeholder="Firstname"
							style={{ background: "#fafbff", color: "#808080" }}
							required
						/>
						<input
							type="text"
							id="lastname"
							value={lastname}
							onChange={(e) => handleChangeLastname(e)}
							className="border border-gray-300 p-2 rounded-md"
							placeholder="Lastname"
							style={{ background: "#fafbff", color: "#808080" }}
							required
						/>
						<input
							type="email"
							id="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="border border-gray-300 p-2 rounded-md"
							placeholder="Enter your email"
							style={{ background: "#fafbff", color: "#808080" }}
							required
						/>
						<div style={{ textAlign: 'left' }}>
							<div style={{ display: 'flex', marginBottom: '7px' }}>
								<input
									type="checkbox"
									id="terms-accepted"
									checked={isViewContent}
									onChange={() => saveIsViewContent()}
									style={{ background: "#fafbff", color: "#808080", marginRight: "7px" }}
								/>
								<label htmlFor="terms-accepted" className="text-sm">
									View Content
								</label>
							</div>
							<div style={{ display: 'flex', marginBottom: '7px' }}>
								<input
									type="checkbox"
									id="terms-accepted"
									checked={termsAccepted}
									onChange={() => setTermsAccepted(!termsAccepted)}
									style={{ background: "#fafbff", color: "#808080", marginRight: "7px" }}
								/>
								<label htmlFor="terms-accepted" className="text-sm">
									I agree to the terms and conditions
								</label>
							</div>
						</div>

						<RegisterLink style={{ width: "100%" }} authUrlParams={{
							// connection_id: 'conn_01927c776912fadb76f4cf992a79b07f',
							connection_id: 'conn_0193dbd2d48d5460e981e5c2043dd686',
							login_hint: email
						}}>
							<button type="button" className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors" style={{ width: "100%" }} disabled={!termsAccepted}>Create Account</button>
						</RegisterLink>
						<RegisterLink className={styles.googleButton} style={{ borderRadius: "0.5rem", height: "40px" }}
							authUrlParams={{
								// connection_id: 'conn_01927e7135c4f2b23cbe7a9b52130357'
								connection_id: 'conn_0193ddea33fd575f9a96199ed9f66406'
							}}>
							Sign up with Google
						</RegisterLink>


						{/* Error Message */}
						{errorMessage && (
							<p className="text-red-500 text-sm mt-2">{errorMessage}</p>
						)}

						{/* Sign Up Button */}
						{/* <button
							type="submit"
							className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4"
						>
							Create your Account
						</button> */}
						{/* </form> */}
					</div>
					<div className="mt-4 text-center">
						<p>
							Already have an account?{" "}
							<a href="/login" className="text-blue-500 hover:underline">
								Log in
							</a>
						</p>
					</div>
					{/* </p> */}
					{/* <AuthButtons /> */}
				</div>
			</div>

			<div className='flex-1 relative overflow-hidden justify-center items-center hidden md:flex'>
				<Image
					src={"/auth-cover.jpg"}
					alt='fanssecret'
					fill
					className='object-cover opacity-90 pointer-events-none select-none h-full'
				/>
			</div>
		</div>
	);
};
export default Page;
