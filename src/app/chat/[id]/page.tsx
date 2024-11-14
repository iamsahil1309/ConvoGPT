import { auth } from "@/auth";
import Chatbox from "@/components/Chatbox";
import { redirect } from "next/navigation";

export default async function SinglePage() {
    const session = await auth()
    return <>{session && session.user ? <Chatbox session = {session} /> : redirect("/")}</>;
}