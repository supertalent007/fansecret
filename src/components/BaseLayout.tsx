import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import SuggestedProducts from "./SuggestedProducts";

const BaseLayout = async ({
	children,
	renderRightPanel = true,
}: {
	children: ReactNode;
	renderRightPanel?: boolean;
}) => {

	const { isAuthenticated } = getKindeServerSession();
	const {getUser}= getKindeServerSession()
	const user = await getUser()

	if (!(await isAuthenticated())) {
		return redirect("/");
	}

	return (
		<div className='flex max-w-2xl lg:max-w-7xl mx-auto relative'>
			<Sidebar id={user?.id} />

			<div className='w-full lg:w-3/5 flex flex-col border-r'>{children}</div>
			{renderRightPanel && <SuggestedProducts />}
		</div>
	);
};
export default BaseLayout;