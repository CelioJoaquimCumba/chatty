import { NavigationBar } from "@/components/atoms/NavigationBar"
import { Chats } from "@/components/molecules/Chats"
import { Profile } from "@/components/molecules/Profile"
import { ModeToggle } from "@/components/ui/mode-toggle"

export const Main = () => {
    return(
        <div className="flex flex-col h-screen">
            <ModeToggle/>
            <NavigationBar/>
            <div className="flex h-full">
                <Chats className="hidden lg:flex w-1/4"/>
                <div className="w-2/4">
                </div>
                <Profile className="hidden lg:flex w-1/4"/>
            </div>
        </div>
    )
}