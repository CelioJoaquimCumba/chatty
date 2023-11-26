import { cn } from "@/lib/utils"
import { ChatUser } from "../atoms/ChatUser"
import { Chat } from "@/models/Chat"

type ChatProps = React.HTMLAttributes<HTMLDivElement> & {
    chats: Chat[]
}

export const Chats = ({className, chats}: ChatProps) => {
    return(
        <div className={cn("w-full h-full bg-background flex-col justify-start items-start gap-2 inline-flex",className)}>
            <div className="self-stretch px-4 pb-2 bg-background flex-col justify-start items-start gap-2 flex">
                <div className="text-primary text-xl font-semibold leading-7">direct message</div>
            </div>
            <div className="self-stretch p-2 flex-col justify-start items-start gap-2 flex overflow-auto">
                {chats &&chats.map((chat) => <ChatUser image={chat.image} key={chat.id} username={chat.name} message={"last text here"} timestamp={chat.createdAt} />)}
            </div>
        </div>
    )
}