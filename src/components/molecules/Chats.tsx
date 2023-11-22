import { cn } from "@/lib/utils"
import { ChatUser } from "../atoms/ChatUser"

type HTMLDivElement = React.HTMLAttributes<HTMLDivElement>

export const Chats = ({className}: HTMLDivElement) => {
    return(
        <div className={cn("w-full h-full bg-background flex-col justify-start items-start gap-2 inline-flex",className)}>
            <div className="self-stretch px-4 pb-2 bg-background flex-col justify-start items-start gap-2 flex">
                <div className="text-primary text-xl font-semibold leading-7">direct message</div>
            </div>
            <div className="self-stretch p-2 flex-col justify-start items-start gap-2 flex overflow-auto">
                <ChatUser username="Celio Cumba" message="hello man" timestamp="just now" />
                <ChatUser username="Celio Cumba" message="You: hello sup, how you doin? are you okay now man?" timestamp="just now" />
                <ChatUser username="Celio Cumba" message="hello man" timestamp="just now" />
                <ChatUser username="Celio Cumba" message="hello man" timestamp="just now" />
                <ChatUser username="Celio Cumba" message="hello man" timestamp="just now" />
                <ChatUser username="Celio Cumba" message="hello man" timestamp="just now" />
                <ChatUser username="Celio Cumba" message="hello man" timestamp="just now" />
                <ChatUser username="Celio Cumba" message="hello man" timestamp="just now" />
                <ChatUser username="Celio Cumba" message="hello man" timestamp="just now" />
            </div>
        </div>
    )
}