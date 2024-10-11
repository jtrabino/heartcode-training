import Link from "next/link";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from "../ui/navigation-menu";
import { ModeToggle } from "../mode-toggle";
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

export function NavigationBar() {
    return (
        <div className="relative flex items-center px-6 sticky top-0 h-16 min-w-fit bg-background/70 backdrop-blur z-20">
            <NavigationMenu className="flex flex-row list-none h-full py-6 justify-between">
                <div className="flex flex-row">
                    <NavigationMenuItem>
                        <Link href="/" legacyBehavior passHref>
                            <NavigationMenuLink id="/" className={navigationMenuTriggerStyle()}>
                                Home
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/quiz" legacyBehavior passHref>
                            <NavigationMenuLink id="quiz" className={navigationMenuTriggerStyle()}>
                                Quiz
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/about-me" legacyBehavior passHref>
                            <NavigationMenuLink id="about-me" className={navigationMenuTriggerStyle()}>
                                About Me
                            </NavigationMenuLink>   
                        </Link>
                    </NavigationMenuItem>
                </div>
            </NavigationMenu>
            <div className="relative flex items-center ml-auto px-6 space-x-6">
                <ModeToggle />
                <SignedIn>
                    <UserButton />
                </SignedIn>
                <SignedOut>
                    <SignInButton>
                        <button className="place-content-center text-sm font-medium px-6">Sign in</button>
                    </SignInButton>
                </SignedOut>
            </div>
        </div>
    )
}