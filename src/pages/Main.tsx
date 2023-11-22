import { NavigationBar } from "@/components/atoms/NavigationBar"
import { Chat } from "@/components/molecules/Chat"
import { Chats } from "@/components/molecules/Chats"
import { Profile } from "@/components/molecules/Profile"
import { ModeToggle } from "@/components/ui/mode-toggle"

export const Main = () => {
    return(
        <div className="flex flex-col h-screen px-9 bg-green-500">
            <ModeToggle/>
            <NavigationBar/>
            <div className="flex h-full ">
                <Chats className="hidden lg:flex w-1/4"/>
                <Chat className="w-full lg:w-3/4"/>
                <Profile className="hidden lg:flex w-1/4"/>
            </div>
        </div>
    )
}