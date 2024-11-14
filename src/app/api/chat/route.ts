import { xai } from "@/lib/xai";
import { serverTimestamp } from "firebase/firestore";
import { NextRequest } from "next/server";

export async function POST(req: Request) {
    const {input, chatId, user} = await req.json()

    const res = await xai.chat.completions.create({
        model : "grok-beta",
        messages : [
            {
                role: "system",
                content : "You are a helpful assistant",
            },
            {
                role : "user",
                content : input
            }
        ]
    })
    const response = res.choices[0].message.content

    const message: Message = {
        text : response || "ConvoGpt was unable to find an answer for that",
        createdAt : serverTimestamp(),
        user: {
            _id: "convogpt",
            name : "ConvoGPT",
            avatar : "https://cdn-icons-png.flaticon.com/512/1787/1787077.png"
        }
    }
}