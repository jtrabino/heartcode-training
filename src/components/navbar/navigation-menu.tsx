import Link from "next/link";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from "../ui/navigation-menu";
import { ModeToggle } from "../mode-toggle";

export function NavigationBar() {
    return (
        <NavigationMenu className="flex flex-row list-none h-16 sticky top-0 min-w-full p-6 justify-between">
            <div className="flex flex-row">
                <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Home
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/quiz" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Quiz
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/about-me" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            About Me
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </div>
            <div><ModeToggle /></div>
        </NavigationMenu>
    )
}