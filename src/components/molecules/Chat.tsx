import { cn } from "@/lib/utils"
import React from "react"
import { ChatBubble } from "../atoms/ChatBubble"
import { Input } from "../ui/input"

type HTMLDivElement = React.HTMLAttributes<HTMLDivElement>
export const Chat = ({className}: HTMLDivElement) => {
    return(
        <div className={cn("w-full pb-4 bg-blue-500 flex-col justify-start items-start gap-2 flex ",className)}>
            {/* <div className="self-stretch px-4 pt-2 flex-col justify-start items-start flex">
                <div className="text-primary text-xl font-semibold font-['Inter'] leading-7">Chat</div>
            </div>
            <div className="self-stretch flex-col  justify-start items-start gap-2 flex overflow-auto ">
                <div className="self-stretch px-4 flex-col justify-start items-start flex h-full  ">
                    <div className="flex flex-col w-full">
                        {[1,2,3,4,5,6,7,8,9,0].map((number) => <ChatBubble isOwner={number%2 === 0}/>)}
                    </div>
                </div>
                <div className="self-stretch px-4 py-2 bg-background justify-start items-center gap-4 inline-flex">
                        <div className="grow shrink   bg-gray-200 rounded-lg" />
                            <Input/>
                        <div className="self-stretch px-2 py-1 bg-background rounded border border-gray-500 flex-col justify-center items-center gap-2 inline-flex">
                            <div className="text-black text-base font-light font-['Inter'] leading-normal">button</div>
                        </div>
                </div>
            </div> */}
        </div>
    )
}