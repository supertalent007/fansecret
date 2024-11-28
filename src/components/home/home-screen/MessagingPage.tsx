"use client";
import React, { useEffect, useState } from "react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@radix-ui/react-tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import {  MessageCircle } from "lucide-react";
// import {HandleCredits} "fs/promises";

const Input = ({ className, ...props }: any) => (
  <input
    className={`p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    {...props}
  />
);

// Custom Button Component
const Button = ({ children, className, ...props }: any) => (
  <button
    className={`bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors ${className}`}
    {...props}
  >
    {children}
  </button>
);

const MessagingPage = ({ receiverId , senderId, style, body=false}: any) => {
    const searchParams = useSearchParams();
    const id = searchParams.get('id'); 

    const [fetchedMessages, setFetchedMessages] = useState([])
    const [newMessage, setNewMessage] = useState("");

    const handleOnPost =  async()=>{
        console.log(newMessage)   // message 
        const body = {
            content:newMessage,
            senderId:senderId
        }

        console.log(newMessage, "MESSAGE")
        const res = await axios.post(`/api/message/${receiverId}`, body );
        console.log(res, "POST RESPONSE")
    }

  const fetchMessages = async () => {
    try {
        const body : any = {
          senderId,
        }
        console.log("SenderId", senderId)
        console.log("ReceivedId", receiverId)
      const res = await axios.get(`/api/message/${receiverId}`, body );
      console.log(res, "RESPONSE");
      setFetchedMessages(res.data)
    } catch (error) {
      console.log(error, "RESPONSE ERROR");
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      fetchMessages();
    }, 2000); 

  
    return () => clearInterval(interval);
  }, []); 

  return (
    <div style={style} className="flex h-screen flex-col justify-end  ">
      {/* Messages List */}
      {body&& <div className="flex justify-center items-center mb-[40vh] flex-col gap-5 ">
        <div className=" font-bold text-xl">Start Chating...</div>
  <MessageCircle className="w-16 h-16"></MessageCircle>
       </div>}
      <div  style={style} className="p-4 overflow-auto ">
        {fetchedMessages.map((message : any) => (
          <div
            key={message?.id}
            className={`mb-4 flex items-start ${
              message?.senderId == senderId && "justify-end"
            }`}
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Avatar className="mr-2">
                    {/* <AvatarImage src="/user-avatar.png" alt={message.user} /> */}
                    {/* <AvatarFallback>{message.user.charAt(0)}</AvatarFallback> */}
                  </Avatar>
                </TooltipTrigger>
                <TooltipContent>{message?.user}</TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <div
              className={`${
                message?.senderId == senderId
                  ? "bg-blue-500 text-white text-end self-end"
                  : //   :  "bg-blue-500 text-white"
                    "bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
              } rounded-lg p-3 max-w-xs`}
            >
              <p className="text-sm">{message?.content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="p-4 border-t dark:border-gray-700">
        <div className="flex items-center">
          <Input
            type="text"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e : any) => setNewMessage(e.target.value)}
            className="flex-grow mr-2"
          />
          <Button onClick={handleOnPost}>Send</Button>
        </div>
      </div>
    </div>
  );
};

export default MessagingPage;
