import { ChatUser } from "../atoms/ChatUser"

export const Chats = () => {
    return(
        <div className="w-full h-full bg-background flex-col justify-start items-start gap-2 inline-flex">
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