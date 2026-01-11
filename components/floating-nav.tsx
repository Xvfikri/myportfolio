"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function FloatingNav() {
    const [scrolled, setScrolled] = React.useState(false)
    const [isOpen, setIsOpen] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navItems = [
        { name: "About", link: "/#about" },
        { name: "Skills", link: "/#skills" },
        { name: "Experience", link: "/#experience" },
        { name: "Projects", link: "/projects" },
        { name: "Contact", link: "/#contact" },
    ]

    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className={cn(
                "fixed top-0 inset-x-0 z-50 flex justify-center pt-6 px-4 pointer-events-none",
                scrolled ? "pt-4" : "pt-6"
            )}
        >
            <nav className={cn(
                "flex items-center gap-4 bg-background/50 backdrop-blur-[6px] md:backdrop-blur-md border border-white/10 shadow-lg px-6 py-3 rounded-full pointer-events-auto transition-all duration-300",
                scrolled ? "scale-90" : "scale-100"
            )}>
                <Link href="/" className="font-bold text-lg mr-4 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                    AL.Dev
                </Link>

                <div className="hidden md:flex items-center gap-6 text-sm font-medium">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.link}
                            className="text-muted-foreground hover:text-primary transition-colors hover:scale-105"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                <div className="ml-4 pl-4 border-l border-white/10 flex items-center gap-2">
                    <ModeToggle />
                    {/* Simplified Resume Button for Floating Nav */}
                    <a
                        href="/cv.pdf"
                        target="_blank"
                        className="hidden sm:block text-xs font-semibold bg-primary/10 text-primary px-3 py-1.5 rounded-full hover:bg-primary/20 transition-colors"
                    >
                        Resume
                    </a>

                    {/* Mobile Menu Trigger */}
                    <div className="md:hidden">
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="h-8 w-8 ml-2">
                                    <Menu className="h-4 w-4" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="top" className="w-full pt-16 rounded-b-3xl bg-background/95 backdrop-blur-xl border-b border-primary/20">
                                <div className="flex flex-col items-center gap-6 text-lg font-medium">
                                    {navItems.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.link}
                                            onClick={() => setIsOpen(false)}
                                            className="text-foreground/80 hover:text-primary transition-colors"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                    <a
                                        href="/cv.pdf"
                                        target="_blank"
                                        onClick={() => setIsOpen(false)}
                                        className="text-primary font-semibold"
                                    >
                                        Download Resume
                                    </a>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </nav>
        </motion.div>
    )
}
