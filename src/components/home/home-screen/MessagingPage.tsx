"use client";
import React, { useEffect, useState, useRef, MutableRefObject } from "react";
// import {
//   Tooltip,
//   TooltipTrigger,
//   TooltipContent,
//   TooltipProvider,
// } from "@radix-ui/react-tooltip";
// import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { MessageCircle } from "lucide-react";
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

const MessagingPage = (props: any) => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id'); //Logined User Id

  const [fetchedMessages, setFetchedMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef() as MutableRefObject<HTMLDivElement>;

  const handleOnPost = async () => {
    const body = {
      content: newMessage,
      senderId: props.senderId
    }

    const res = await axios.post(`/api/message/${props.receiverId}`, body);
    setFetchedMessages([...fetchedMessages, res.data]);
    setNewMessage("");

    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 500);
  }

  useEffect(() => {
    setFetchedMessages(props.messageData);
    setNewMessage("");

    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 500);
  }, [props.messageData]);

  return (
    <div style={props.style} className="flex h-screen flex-col justify-end  ">
      {/* Messages List */}
      {
        fetchedMessages.length === 0 &&
        <div className="flex justify-center items-center mb-[40vh] flex-col gap-5 ">
          <div className=" font-bold text-xl">Start Chating...</div>
          <MessageCircle className="w-16 h-16"></MessageCircle>
        </div>
      }
      <div style={props.style} className="p-4 overflow-auto">
        {fetchedMessages !== undefined && fetchedMessages.map((message: any) => (
          message?.senderId == id ?
            <div
              key={message?.id}
              className={`mb-4 flex justify-end items-end `}
            >
              {/* <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Avatar className="mr-2"> */}
              {/* <AvatarImage src="/user-avatar.png" alt={message.user} /> */}
              {/* <AvatarFallback>{message.user.charAt(0)}</AvatarFallback> */}
              {/* </Avatar>
                </TooltipTrigger>
                <TooltipContent>{message?.user}</TooltipContent>
              </Tooltip>
            </TooltipProvider> */}

              <div className="bg-blue-500 text-white text-end self-endrounded-lg p-3 max-w-xs" style={{ borderRadius: "15px", paddingBottom: '7px' }}>
                <p className="text-sm"> {message?.content} </p>
                <p className="text-sm" style={{ fontSize: '8px', textAlign: 'right', lineHeight: '9px', marginTop: '8px' }}> {`${new Date(message?.createdAt).getHours()}:${new Date(message?.createdAt).getMinutes()}`} </p>
              </div>
            </div>
            :
            <div
              key={message?.id}
              className={`mb-4 flex justify-start items-start `}
            >
              {/* <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Avatar className="mr-2"> */}
              {/* <AvatarImage src="/user-avatar.png" alt={message.user} /> */}
              {/* <AvatarFallback>{message.user.charAt(0)}</AvatarFallback> */}
              {/* </Avatar>
                </TooltipTrigger>
                <TooltipContent>{message?.user}</TooltipContent>
              </Tooltip>
            </TooltipProvider> */}

              <div
                className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-lg p-3 max-w-xs" style={{ borderRadius: "15px", paddingBottom: '7px' }}>
                <p className="text-sm"> {message?.content} </p>
                <p className="text-sm" style={{ fontSize: '8px', textAlign: 'right', lineHeight: '9px', marginTop: '8px' }}> {`${new Date(message?.createdAt).getHours()}:${new Date(message?.createdAt).getMinutes()}`} </p>
              </div>
            </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <div className="p-4 border-t dark:border-gray-700">
        <div className="flex items-center">
          <Input
            type="text"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e: any) => setNewMessage(e.target.value)}
            className="flex-grow mr-2"
            style={{ border: "1px solid rgb(59, 130, 246)" }}
          />
          <Button onClick={handleOnPost} disabled={newMessage === ""}>Send</Button>
        </div>
      </div>
    </div>
  );
};

export default MessagingPage;
