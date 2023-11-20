
import * as React from "react"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Link } from "@radix-ui/react-navigation-menu";
import { MessagesSquare, User } from "lucide-react";

export function NavigationBar() {
  return (
    <NavigationMenu className="flex w-full max-w-none">
      <NavigationMenuList className="flex justify-between">
        <NavigationMenuItem>
            <Link href="/docs" >
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <MessagesSquare size={32}/>
                </NavigationMenuLink>
            </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/docs" >
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <User size={32}/>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
