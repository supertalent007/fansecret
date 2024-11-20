
import BaseLayout from "@/components/BaseLayout";

import UserPage from "@/components/home/home-screen/UserPage";
import MessagingPage from "@/components/home/home-screen/messagingPage";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";


const Page = async ({params}) => {
  const userId = params.userId
  const {getUser} = getKindeServerSession()
  const user = await getUser()



  return (
    <BaseLayout renderRightPanel={false}>
      <div className="mt-5"></div>
      <MessagingPage senderId={user?.id} receiverId={userId} />
    
    </BaseLayout>
  );
};
export default Page;
