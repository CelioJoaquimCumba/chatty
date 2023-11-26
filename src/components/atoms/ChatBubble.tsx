type ChatBubbleProps = {
    isOwner?: boolean
    message: string
    sender: string
    timestamp : string
}

export const ChatBubble = ({isOwner, message, sender, timestamp}: ChatBubbleProps) => {
    return(
        <div className={` max-w-[75%] px-4 py-4 bg-background rounded-lg justify-start items-start gap-2 flex text-justify ${isOwner ? "flex-row-reverse text-end  self-end bg-primary text-background" : "flex-row text-start bg-secondary  self-start text-foreground"} break-all`}>
            <img className="w-10 h-10 rounded-lg border border-gray-300" src="https://via.placeholder.com/40x40" />
            <div className={`self-stretch  flex-col gap-2 flex overflow-hidden ${isOwner ? "items-end" : "items-start"}`}>
                <div className="justify-end items-center gap-2 flex flex-wrap ">
                    <div className="text-base font-semibold leading-normal">{isOwner ? "You" : sender}</div>
                    <div className=" text-xs font-normal leading-none">{timestamp}</div>
                </div>
                <div className="text-sm font-normal leading-tight">{message}</div>
            </div>
        </div>
    )
}