"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { ModeToggle } from "@/components/mode-toggle"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"

const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
]

export function Nav() {
    const [isOpen, setIsOpen] = React.useState(false)
    const [hidden, setHidden] = React.useState(false)
    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0
        if (latest > previous && latest > 150) {
            setHidden(true)
        } else {
            setHidden(false)
        }
    })

    return (
        <>
            <motion.header
                variants={{
                    visible: { y: 0 },
                    hidden: { y: "-150%" },
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="fixed top-4 inset-x-0 z-50 mx-auto w-[95%] md:w-fit pointer-events-none"
            >
                <div className="pointer-events-auto flex items-center justify-between gap-4 md:gap-12 pl-6 pr-4 py-3 bg-background/60 backdrop-blur-xl border border-border/40 rounded-full shadow-lg dark:shadow-primary/5">
                    <Link href="#" className="text-xl font-bold tracking-tight hover:text-primary transition-colors whitespace-nowrap">
                        AL<span className="text-primary">.dev</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="px-4 py-1.5 text-sm font-medium hover:bg-primary/10 hover:text-primary rounded-full transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-2">
                        <div className="hidden md:block">
                            <ModeToggle />
                        </div>
                        <Button size="sm" className="hidden md:flex rounded-full px-6" asChild>
                            <Link href="#" target="_blank">Resume</Link>
                        </Button>

                        {/* Mobile Nav */}
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="md:hidden rounded-full">
                                    <Menu className="h-5 w-5" />
                                    <span className="sr-only">Toggle menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="top" className="w-full h-auto rounded-b-3xl border-b border-border/40 backdrop-blur-xl bg-background/90">
                                <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                                <div className="flex flex-col items-center gap-6 py-8">
                                    {navItems.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="text-lg font-medium hover:text-primary transition-colors"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                    <div className="flex items-center gap-4 mt-4">
                                        <ModeToggle />
                                        <Button className="rounded-full w-full" asChild>
                                            <Link href="#" target="_blank">Download Resume</Link>
                                        </Button>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </motion.header>
        </>
    )
}
