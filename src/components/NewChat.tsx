"use client"
import { PlusIcon } from "lucide-react";
import { Button } from "./ui/button";
import { SidebarMenuButton } from "./ui/sidebar";
import { User } from "next-auth";
import { useRouter } from "next/navigation";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export const NewChat = ({ user }: { user: User }) => {
  const router = useRouter();

  const createNewChat = async () => {
    const doc = await addDoc(collection(db, "users", user.email!, "chats"), {
      userId: user.email,
      createdAt: serverTimestamp(),
    });
    router.push(`/chat/${doc.id}`);
  };
  return (
    <SidebarMenuButton asChild>
      <Button onClick={createNewChat} variant="outline" className="w-full">
        <PlusIcon className="mr-2 size-4" /> New Chat
      </Button>
    </SidebarMenuButton>
  );
};
