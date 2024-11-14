import { Session } from "next-auth"
import { ScrollArea } from "./ui/scroll-area"
import {useCollection} from "react-firebase-hooks/firestore"
import { collection, orderBy, query } from "firebase/firestore"
import { db } from "@/lib/firebase"
import Message from "./Message"


function ChatMessage({chatId, session} : {chatId : string, session : Session}) {
    const user = session.user!
    const [messages] = useCollection(
        session && query(collection(db, "users", user.email!, "chats", chatId, "messages"), orderBy("createdAt"))
    )
  return (
    <ScrollArea className="flex-1 p-4">
        {messages?.docs.map((message) => (
            <Message key={message.id} message={message.data()} />
        ))}
    </ScrollArea>
  )
}

export default ChatMessage
