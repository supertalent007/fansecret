import prisma from "@/db/prisma";

export const POST = async (req: any, { params }: any) => {
    try {
        const { receiverId } = params;
        console.log(receiverId, "RECEIVER ID123")
        const body = await req.json();
        console.log(body, "REQUEST BODY")

        // const message = {
        //     content: body.content,
        //     senderId: body.senderId,
        //     receiverId: receiverId
        // }

        const updatedUser = await prisma.user.findMany({
            where: {
                id: {
                  not: loggedInUserId, // Exclude the logged-in user's ID
                },
              },
              select: {
                id: true,
                name: true,
                email: true,
                age: true, // Include other fields as needed
              },
        });

        return new Response(JSON.stringify(updatedUser), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    }
    catch {

    }
}