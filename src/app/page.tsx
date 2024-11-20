

import AuthScreen from "@/components/home/auth-screen/AuthScreen";
import HomeScreen from "@/components/home/home-screen/HomeScreen";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import OnboardingScreen from "@/components/onboarding/onboarding-screen/OnboardingScreen";
import prisma from "@/db/prisma";

export default async function Home() {
  let onBoarded = false;
  const { getUser } = getKindeServerSession();
  const user = await getUser();
console.log("real user id", user?.id)
  if (user) {
    const onboardedUser = await prisma.user.findUnique({
      where: { id: user.id },
    });

    console.log(user.id, "EXISTING ID"); 
    console.log(onboardedUser?.isVerified, "USERSSSSSSSSS");
    onBoarded = onboardedUser?.isVerified ?? false;
    console.log("this is user", user);
  } else {
    console.log("No user found");
  }

  return (
    <main>
      {user ? (
        !onBoarded ? (
          <OnboardingScreen user={user.id}/>
        ) : (
          <HomeScreen />
        )
      ) : (
        <AuthScreen />
      )}
    </main>
  );
}




