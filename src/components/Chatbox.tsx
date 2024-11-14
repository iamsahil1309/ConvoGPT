"use client";

import { SendIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Session } from "next-auth";
import { usePathname } from "next/navigation";
import { FormEvent, useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

const Chatbox = ({ session }: { session: Session }) => {
  const user = session.user!;
  const chatId = usePathname().split("/").pop()!;

  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!prompt) return;

    const input = prompt.trim();
    setPrompt("");

    const message: Message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: user.email!,
        name: user.name!,
        avatar: user.image!,
      },
    };
    await addDoc(collection(db,"users", user.email!, "chats", chatId, "messages"), message)

    await fetch("/api/chat", {
        method : "POST",
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify({
            input,
            chatId,
            user
        })
    })
  };

  return (
    <>
      {/* chat message */}

      <div className="p-4 border-t">
        <form onSubmit={sendMessage} className="flex space-x-2">
          <Input
            type="text"
            name="prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Message ConvoGPT"
            className="flex-grow"
          />
          <Button type="submit" size="icon">
            <SendIcon className="size-4" />
          </Button>
        </form>
      </div>
    </>
  );
};

export default Chatbox;
