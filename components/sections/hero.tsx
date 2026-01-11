"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"


export function Hero() {
    return (
        <section id="hero" className="min-h-screen pt-16 flex items-center justify-center overflow-hidden">
            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 blur-[100px] -z-10 rounded-full dark:bg-primary/10" />

            <div className="container px-4 flex flex-col-reverse lg:flex-row items-center justify-center gap-8 lg:gap-24 z-10">
                {/* Text Content */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 max-w-2xl">
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
                            className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/70"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.7 }}
                        >
                            Muhamad ALfikri Syahputra
                        </motion.h1>
                        <motion.h2
                            className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide max-w-2xl mx-auto lg:mx-0"
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
                        Frontend And Mobile Developer passionate about creating seamless user experiences and robust backend systems.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 mt-4 justify-center lg:justify-start"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                    >
                        <Button size="lg" className="h-12 px-8 text-base bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25" asChild>
                            <Link href="#projects">
                                View Projects <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" className="h-12 px-8 text-base border-primary/50 text-foreground dark:text-white bg-background/50 backdrop-blur-sm hover:bg-primary/10 hover:border-primary/50 transition-all duration-300" asChild>
                            <Link href="#contact">
                                Contact Me
                            </Link>
                        </Button>
                        <Button size="lg" variant="ghost" className="h-12 px-8 text-base text-muted-foreground dark:text-zinc-300 hover:text-primary dark:hover:text-primary transition-colors" asChild>
                            <Link href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                                Download CV <Download className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </motion.div>

                    <motion.div
                        className="flex gap-6 mt-12 justify-center lg:justify-start"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    >
                        <Link href="https://github.com" target="_blank" className="text-zinc-400 dark:text-white/80 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110">
                            <Github className="h-6 w-6" />
                            <span className="sr-only">GitHub</span>
                        </Link>
                        <Link href="https://www.linkedin.com/in/alfikri1403/" target="_blank" className="text-zinc-400 dark:text-white/80 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110">
                            <Linkedin className="h-6 w-6" />
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                        <Link href="mailto:email@example.com" className="text-zinc-400 dark:text-white/80 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110">
                            <Mail className="h-6 w-6" />
                            <span className="sr-only">Email</span>
                        </Link>
                    </motion.div>
                </div>

                <motion.div
                    className="flex justify-center relative"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                >
                    <div className="relative w-72 h-72 md:w-96 md:h-96">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-purple-500 rounded-[2rem] rotate-6 opacity-20 blur-2xl" />
                        <div className="absolute inset-0 border-2 border-primary/20 rounded-[2rem] rotate-3 bg-background/50 backdrop-blur-sm z-10" />
                        <div className="absolute inset-2 rounded-[1.8rem] overflow-hidden bg-muted z-20 shadow-2xl border border-white/10">
                            <div className="w-full h-full flex items-center justify-center bg-zinc-100 dark:bg-zinc-800 text-muted-foreground">
                                <span className="text-sm">Your Photo Here</span>
                            </div>
                            {/* Uncomment below when you have an image */}

                            <Image
                                src="/projects/profile.jpg"
                                alt="Muhamad ALfikri Syahputra"
                                fill
                                sizes="(max-width: 768px) 288px, 384px"
                                className="object-cover"
                            />

                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            className="absolute -bottom-6 -left-6 z-30 bg-background/80 backdrop-blur-md p-4 rounded-xl border shadow-lg"
                            initial={{ y: 0 }}
                            animate={{ y: [0, -10, 0] }}
                            transition={{
                                repeat: Infinity,
                                duration: 3,
                                ease: "easeInOut"
                            }}
                        >
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                                    2+
                                </div>
                                <div className="text-sm">
                                    <p className="font-bold text-foreground">Years Experience</p>
                                    <p className="text-muted-foreground">Frontend & Mobile Dev</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
