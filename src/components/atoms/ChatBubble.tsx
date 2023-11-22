type ChatBubbleProps = {
    isOwner?: boolean
}

export const ChatBubble = ({isOwner}: ChatBubbleProps) => {
    return(
        <div className={`w-full self-stretch px-4 py-0.5 bg-background rounded-lg justify-start items-center gap-2 flex ${isOwner ? "flex-row-reverse" : "flex-row"}`}>
            <img className="w-10 h-10 rounded-lg border border-gray-300" src="https://via.placeholder.com/40x40" />
            <div className={`grow shrink basis-0 py-4 flex-col gap-2 flex ${isOwner ? "items-end" : "items-start"} `}>
                <div className="justify-start items-end gap-1 inline-flex">
                    <div className="text-primary text-base font-semibold font-['Inter'] leading-normal">Celio Cumba</div>
                    <div className="text-foreground text-xs font-normal leading-none">just now</div>
                </div>
                <div className="text-foreground text-sm font-normal leading-tight">you: hello man</div>
            </div>
        </div>
    )
}