"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const projects = [
    {
        title: "MyBioskopId",
        description: "A movie streaming platform with a modern and user-friendly interface. Features real-time movie updates, user profiles, and a responsive design.",
        image: "/projects/mybioskopid.png",
        tags: ["Vue.js", "TypeScript", "Tailwind CSS"],
        links: {
            demo: "https://my-bioskop-id-b3z1.vercel.app/",
            github: "https://github.com/Xvfikri/MyBioskopId"
        }
    },
    {
        title: "TODO List",
        description: "A simple todo list application with a modern and user-friendly interface. Features real-time movie updates, user profiles, and a responsive design.",
        image: "/projects/todolist.png",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Radix UI", "Lucide React"],
        links: {
            demo: "https://node-wave-front-end-assessment.vercel.app/",
            github: "https://github.com/Xvfikri/NodeWave-Front-End-Assessment?tab=readme-ov-file"
        }
    },
    {
        title: "Fleek Creative",
        description: "A productivity tool for agile teams. Kanban boards, sprint planning, and team collaboration features with dark mode support.",
        image: "/projects/fleek.png",
        tags: ["Next.js", "Prisma", "PostgreSQL", "Zustand"],
        links: {
            demo: "#",
            github: "#"
        }
    },
    {
        title: "AI Chat Assistant",
        description: "An intelligent chat interface powered by large language models. Features syntax highlighting for code, streaming responses, and chat history.",
        image: "/projects/ecommerce.png", // Reusing image for demo
        tags: ["Next.js", "OpenAI API", "Tailwind CSS", "Vercel SDK"],
        links: {
            demo: "#",
            github: "#"
        }
    },
]

export function Projects() {
    return (
        <section id="projects" className="py-24 bg-muted/30 relative">
            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold tracking-tight mb-4 sm:text-4xl">Featured Projects</h2>
                    <p className="text-muted-foreground text-lg">Swipe to explore my recent work.</p>
                </motion.div>

                <div className="max-w-[1400px] mx-auto px-4 md:px-12">
                    <Carousel
                        opts={{
                            align: "center",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-4">
                            {projects.map((project, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 xl:basis-1/3 pl-4">
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1, duration: 0.5 }}
                                        className="h-full p-1"
                                    >
                                        <Card className="overflow-hidden flex flex-col h-full hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 border-primary/10 bg-card/50 backdrop-blur-sm group">
                                            <div className="relative aspect-video overflow-hidden">
                                                <Image
                                                    src={project.image}
                                                    alt={project.title}
                                                    fill
                                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                                    <Button variant="secondary" size="sm" asChild className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                                        <Link href={project.links.github} target="_blank">
                                                            <Github className="mr-2 h-4 w-4" /> Code
                                                        </Link>
                                                    </Button>
                                                    <Button size="sm" asChild className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                                        <Link href={project.links.demo} target="_blank">
                                                            <ExternalLink className="mr-2 h-4 w-4" /> Demo
                                                        </Link>
                                                    </Button>
                                                </div>
                                            </div>
                                            <CardHeader className="p-6">
                                                <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                                                <CardDescription className="line-clamp-2 text-base mt-2">{project.description}</CardDescription>
                                            </CardHeader>
                                            <CardContent className="flex-1 px-6 pb-6 pt-0">
                                                <div className="flex flex-wrap gap-2">
                                                    {project.tags.map((tag) => (
                                                        <Badge key={tag} variant="secondary" className="px-2.5 py-1">
                                                            {tag}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="-left-4 md:-left-12 opacity-0 md:opacity-100 transition-opacity" />
                        <CarouselNext className="-right-4 md:-right-12 opacity-0 md:opacity-100 transition-opacity" />
                    </Carousel>
                </div>
            </div>
        </section>
    )
}
