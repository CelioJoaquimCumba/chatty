import { NavigationBar } from "@/components/atoms/NavigationBar"
import { Chat } from "@/components/molecules/Chat"
import { Chats } from "@/components/molecules/Chats"
import { Profile } from "@/components/molecules/Profile"
import { ModeToggle } from "@/components/ui/mode-toggle"

export const Main = () => {
    return(
        <div className="flex flex-col h-[calc(100dvh)] inset-0">
            <ModeToggle/>
            <NavigationBar/>
            <div className="flex h-full overflow-hidden">
                <Chats className="hidden w-full lg:flex lg:w-1/4"/>
                <Chat className="lg:w-2/4"/>
                <Profile className="hidden lg:flex w-1/4"/>
            </div>
        </div>
    )
}