"use client"

import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "./ui/button"

export function Footer() {
    return (
        <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-12">
            <div className="container px-4 mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <Link href="#" className="text-xl font-bold tracking-tight hover:text-primary/80 transition-colors">
                            ALfikri<span className="text-primary">.dev</span>
                        </Link>
                        <p className="text-sm text-muted-foreground mt-2 max-w-sm">
                            Building digital solutions with passion and precision.
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <Button variant="ghost" size="icon" asChild>
                            <Link href="https://github.com" target="_blank" aria-label="Github">
                                <Github className="h-5 w-5" />
                            </Link>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                            <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                                <Linkedin className="h-5 w-5" />
                            </Link>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                            <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
                                <Twitter className="h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} Muhamad ALfikri Syahputra. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
