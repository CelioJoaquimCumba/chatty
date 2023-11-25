import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { MessagesSquare, User } from "lucide-react";
import { Sheet, SheetContent,SheetTrigger } from "../ui/sheet";
import { Profile } from "../molecules/Profile";
import { Chats } from "../molecules/Chats";

export function NavigationBar() {
  return (
    <div className="lg:hidden flex">
      <NavigationMenu className="flex w-full max-w-none py-2  border-b border-gray-100 " >
        <NavigationMenuList className="flex justify-between items-center px-4">
          <NavigationMenuItem>
                    <Sheet>
                      <SheetTrigger>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                          <MessagesSquare size={24}/>
                        </NavigationMenuLink>
                      </SheetTrigger>
                      <SheetContent side={"left"} className="w-full">
                        <Chats/>
                      </SheetContent>
                    </Sheet>
          </NavigationMenuItem>

          <NavigationMenuItem>
                <Sheet>
                  <SheetTrigger>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      <User size={24}/>
                    </NavigationMenuLink>
                  </SheetTrigger>
                  <SheetContent className="w-full">
                    <Profile/>
                  </SheetContent>
                </Sheet>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}