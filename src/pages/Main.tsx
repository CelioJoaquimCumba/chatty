import { NavigationBar } from "@/components/atoms/NavigationBar"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/ui/mode-toggle"
import { NavigationMenu } from "@radix-ui/react-navigation-menu"

export const Main = () => {
    return(
        <div className="flex flex-col">
            <ModeToggle/>
            <NavigationBar/>
        </div>
    )
}