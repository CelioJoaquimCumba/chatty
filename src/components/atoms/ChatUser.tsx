type ChatUserProps = {
    username: string, 
    message: string,
    timestamp: string
}

export const ChatUser = ({username="Celio Cumba", message="hello man", timestamp="just now"}: ChatUserProps) => {
    return(
        <div className=" w-full px-4 py-0.5 bg-background rounded-lg justify-start items-center gap-2 inline-flex active:bg-primary-foreground hover:bg-secondary cursor-pointer">
            <img className="w-10 h-10 rounded-lg border border-gray-300" src="https://randomuser.me/api/portraits/men/41.jpg" />
            <div className="grow shrink basis-0 py-2 flex-col justify-start items-start gap-2 inline-flex">
                <div className="justify-start items-end gap-2 inline-flex">
                    <div className="text-primary text-base font-semibold leading-normal">{username}</div>
                    <div className="text-foreground text-xs font-normal leading-none">{timestamp}</div>
                </div>
                <div className="text-foreground text-sm font-normal leading-tight">{message}</div>
            </div>
        </div>
    )
}