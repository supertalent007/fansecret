import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import AdminSidebar from "./AdminSidebar";
import SuggestedProducts from "./SuggestedProducts";

const BaseLayout = async ({
	children,
	renderRightPanel = true,
}: {
	children: ReactNode;
	renderRightPanel?: boolean;
}) => {

	const { isAuthenticated } = getKindeServerSession();
	console.log("AAAAAAAA", isAuthenticated)
	const {getUser}= getKindeServerSession()
	const user = await getUser()
	console.log("BBBBBBBB", user?.id)
	const isAdmin = process.env.ADMIN_EMAIL === user?.email;
	console.log("CCCCCCCC", isAdmin)

	if (!(await isAuthenticated())) {
		return redirect("/");
	}

	
	if(user && (isAdmin == false)) {
		return (
			<div className='flex max-w-2xl lg:max-w-7xl mx-auto relative'>
				{/* <div className='flex max-w-2xl mx-auto relative' style={{marginLeft: 'unset', maxWidth: '100%'}}> */}
				<Sidebar id={user.id} />
				<div className='w-full lg:w-3/5 flex flex-col border-r'>{children}</div> 
				{/* </div><div className='w-full flex flex-col border-r'>{children}</div> */}
				{renderRightPanel && <SuggestedProducts />}
			</div>
		);
	}
	else if(user && (isAdmin ==true)) {
		return (
			<div className='flex max-w-2xl lg:max-w-7xl mx-auto relative'>
				{/* <div className='flex max-w-2xl mx-auto relative' style={{marginLeft: 'unset', maxWidth: '100%'}}> */}
				<AdminSidebar id={user.id} />
				<div className='w-full lg:w-3/5 flex flex-col border-r'>{children}</div> 
				{/* </div><div className='w-full flex flex-col border-r'>{children}</div> */}
				{renderRightPanel && <SuggestedProducts />}
			</div>
		);
	}
};
export default BaseLayout;
