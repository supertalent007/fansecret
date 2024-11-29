import Image from "next/image";
import AuthButtons from "./AuthButtons";
import Footer from "@/components/Footer";
const HeroSection = () => {
	return (
		<div className='flex h-screen w-full'>
			{/* <div className='flex-1 flex overflow-hidden bg-[#ffa885] relative justify-center items-center z-10 bg-noise'>
				<img
					src='/fansSecret-logo.jpeg'
					alt='fansSecret-logo.jpeg'
					className='absolute -left-1/4 opacity-15 -bottom-52 lg:scale-150 xl:scale-105 scale-[2]
            pointer-events-none select-none border'
				/>
				<div className='flex flex-col gap-2 px-4 xl:ml-40 text-center md:text-start font-semibold'>
					<Image
					
						src={"/fansSecret-logo.jpeg"}
						alt='fansSecret-logo.jpeg'
						width={769}
						height={182}
						className='mt-20 w-[420px] z-0 pointer-events-none select-none rounded-full'
					/>

					<p className='text-2xl md:text-3xl text-balance'>
						FansSecret <span className=' px-2 font-bold text-white'></span> 
					</p>
					<p className='text-2xl md:text-3xl mb-10 leading-snug text-balance'>
					
					</p>
					<AuthButtons />
				</div>
			</div>

			<div className='flex-1 relative overflow-hidden justify-center items-center hidden md:flex'>
				<Image
					src={"/auth-cover.jpg"}
					alt='fanssecret'
					fill
					className='object-cover opacity-90 pointer-events-none select-none h-full'
				/>
			</div> */}

			<div
				className="relative flex flex-col h-screen w-full bg-cover bg-center bg-no-repeat"
				style={{
					backgroundImage: "url('/fansSecret-logo.jpeg')",
				}}>
				
				<div className="flex-1 flex justify-center items-center bg-black/50 text-white flex-col gap-2 px-4 xl:ml-40 text-center md:text-start">
				<div className="flex gap-4">
					<AuthButtons />
					</div>
				</div>
				<footer className="w-full bg-black/50 text-white py-4 text-center">
					<Footer />
				</footer>
			</div>
		</div>
	);
};
export default HeroSection;
