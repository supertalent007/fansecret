
import prisma from "@/db/prisma";



export const POST = async (req:any, { params }:any) => {

  const sizeMap: { [key: string]: string } = {
    sm: "Small",
    md: "Medium",
    lg: "Large",
  };
  
  try {
   
    const { receiverId } = params;
    console.log(receiverId, "RECEIVER ID")
    const body = await req.json(); 
    console.log(body, "REQUEST BODY")


    console.log(receiverId, "SENDER ID")
  
console.log(body, "BODY")
  


const message = {
  
    content:body.content,
    senderId:body.senderId,
    receiverId:receiverId
  
  
}
    const updatedUser = await prisma.message.create({
      data: message,
    });

    return new Response(JSON.stringify(updatedUser), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error updating user:", error);
    return new Response(JSON.stringify({ error: "Failed to update user." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};





export const GET = async (req: any, { params }: any) => {
  try {
    const { receiverId } = params;
    console.log(receiverId, "RECEIVER ON API");

    let senderId;
    if (req.body) {
      const body = await req.json();
      senderId = body.senderId;
    } else {
      console.warn("Request body is empty or invalid.");
    }

    console.log(senderId, "SENDER ON API");

    const updatedUser = await prisma.message.findMany({
      where: {
        OR: [
          {
            senderId: senderId,
            receiverId: receiverId,
          },
          {
            senderId: receiverId,
            receiverId: senderId,
          }
        ]
   
      },
    });
    console.log(updatedUser, "messages");

    return new Response(JSON.stringify(updatedUser), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error updating user:", error);
    return new Response(JSON.stringify({ error: "Failed to update user." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};

