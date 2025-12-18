"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function Hero() {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-background [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] opacity-20 dark:opacity-20 translate-z-0" />

            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 blur-[100px] -z-10 rounded-full dark:bg-primary/10" />

            <div className="container px-4 flex flex-col items-center text-center space-y-8 z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <div className="relative inline-block mb-4">
                        <span className="relative z-10 px-4 py-1.5 rounded-full bg-secondary/80 text-sm font-medium text-secondary-foreground backdrop-blur-sm border border-secondary transition-shadow hover:shadow-md cursor-default">
                            <span className="relative flex h-2 w-2 inline-flex mr-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            Available for new projects
                        </span>
                    </div>
                    <motion.h1
                        className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/70"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.7 }}
                    >
                        Muhamad ALfikri Syahputra
                    </motion.h1>
                    <motion.h2
                        className="text-xl md:text-3xl text-muted-foreground font-light tracking-wide max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.7 }}
                    >
                        Building <span className="text-primary font-medium">digital solutions</span>, one line of code at a time.
                    </motion.h2>
                </motion.div>

                <motion.p
                    className="max-w-2xl text-lg text-muted-foreground/80 md:text-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    Building digital solutions, one line of code at a time.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row gap-4 mt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    <Button size="lg" className="h-12 px-8 text-base" asChild>
                        <Link href="#projects">
                            View Projects <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="h-12 px-8 text-base" asChild>
                        <Link href="#contact">
                            Contact Me
                        </Link>
                    </Button>
                    <Button size="lg" variant="ghost" className="h-12 px-8 text-base" asChild>
                        <Link href="#" target="_blank">
                            Download CV <Download className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </motion.div>

                <motion.div
                    className="flex gap-6 mt-12 text-muted-foreground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                >
                    <Link href="https://github.com" target="_blank" className="hover:text-primary transition-colors">
                        <Github className="h-6 w-6" />
                        <span className="sr-only">GitHub</span>
                    </Link>
                    <Link href="https://linkedin.com" target="_blank" className="hover:text-primary transition-colors">
                        <Linkedin className="h-6 w-6" />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link href="mailto:email@example.com" className="hover:text-primary transition-colors">
                        <Mail className="h-6 w-6" />
                        <span className="sr-only">Email</span>
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
