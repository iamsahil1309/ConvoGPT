import { DocumentData } from "firebase/firestore";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Markdown from "react-markdown";

function Message({ message }: { message: DocumentData }) {
  const isAIMessage = message.user._id === "convo-gpt";
  return (
    <div
      className={`flex mb-4 ${isAIMessage ? "justify-start" : "justify-end"}`}
      key={message.id}
    >
      <div
        className={`flex items-start max-w-[80%] ${
          isAIMessage ? "flex-row" : "flex-row-reverse"
        }`}
      >
        <Avatar className="size-8">
            <AvatarImage src={message.user.avatar} />
          <AvatarFallback>
            {`${message.user.name
              ?.split(" ")
              .map((name: string) => name[0])
              .join("")}`}
          </AvatarFallback>
        </Avatar>
        <div
          className={`mx-2 p-3 rounded-lg ${
            isAIMessage ? "bg-secondary" : "bg-primary text-primary-foreground"
          }`}
        >
          <Markdown>{message.text}</Markdown>
        </div>
      </div>
    </div>
  );
}

export default Message;
