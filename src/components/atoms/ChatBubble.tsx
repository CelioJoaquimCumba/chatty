type ChatBubbleProps = {
    isOwner?: boolean
    message: string
    sender: string
    timestamp : string
}

export const ChatBubble = ({isOwner, message, sender, timestamp}: ChatBubbleProps) => {
    return(
        <div className={`w-full self-stretch px-4 py-0.5 bg-background rounded-lg justify-start items-center gap-2 flex text-justify ${isOwner ? "flex-row-reverse text-end" : "flex-row text-start"}`}>
            <img className="w-10 h-10 rounded-lg border border-gray-300" src="https://via.placeholder.com/40x40" />
            <div className={`self-stretch w-4/6  py-4 flex-col gap-2 flex overflow-hidden ${isOwner ? "items-end" : "items-start"}`}>
                <div className="justify-end items-end gap-1 flex ">
                    <div className="text-primary text-base font-semibold leading-normal">{isOwner ? "You" : sender}</div>
                    <div className="text-foreground text-xs font-normal leading-none">{timestamp}</div>
                </div>
                <div className="text-foreground text-sm font-normal leading-tight">{message}</div>
            </div>
        </div>
    )
}