import { cn } from "@/lib/utils"
import React, { useState } from "react"
import { ChatBubble } from "../atoms/ChatBubble"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

type HTMLDivElement = React.HTMLAttributes<HTMLDivElement>
export const Chat = ({className}: HTMLDivElement) => {
    const [messages, setMessages] = useState<string[]>([])
    const [input, setInput] = useState("")
    const handleChange = (e:React.FormEvent<HTMLInputElement>) => {
        setInput(e.currentTarget.value)
    }
    const handleMessage = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setMessages([...messages, input])
        setInput("")
    }
    return(
        <div className={cn("self-stretch w-full h-full pb-4  flex-col justify-start items-start gap-2 flex p-4 overflow-hidden",className)}>
            <span className="self-stretch px-4 pt-2 flex-col justify-start items-start flex text-primary text-xl font-semibold leading-7">Chat</span>
            <div className="self-stretch h-full flex flex-col flex-grow  justify-end items-start gap-2 overflow-hidden ">
                <div className="self-stretch w-full h-full px-4 flex flex-col justify-start items-start  gap-2 overflow-y-auto overflow-x-hidden">
                        {messages.map((message, index) => <ChatBubble isOwner={index % 2 === 0} message={message} sender={"Bubble junior"} timestamp={formatTimestamp(new Date().getTime().toString())}/>)}
                </div>
                <form onSubmit={handleMessage} className="self-stretch px-4 py-2 bg-background justify-start items-center gap-4 flex h-20">
                    <Input autoFocus className="h-full" value={input} onChange={handleChange} placeholder="Type a message"/>
                    <Button className="h-full" variant={"outline"} type="submit" >button</Button>
                </form>
            </div>
        </div>
    )
}

function formatTimestamp(timestamp: string) {
  const now: any = new Date();
  const messageTime: any = new Date(timestamp);
  const timeDifference: number = now - messageTime;

  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return days === 1 ? 'yesterday' : `${days} days ago`;
  } else if (hours > 0) {
    return hours === 1 ? 'an hour ago' : `${hours} hours ago`;
  } else if (minutes > 0) {
    return minutes === 1 ? 'a minute ago' : `${minutes} minutes ago`;
  } else {
    return 'just now';
  }
}