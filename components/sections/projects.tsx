"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Github, ExternalLink, ArrowUpRight, Lock, EyeOff } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { projects } from "@/lib/data"

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
                    <p className="text-muted-foreground text-lg mb-8">Swipe to explore my recent work.</p>
                    <Button variant="outline" asChild>
                        <Link href="/projects">
                            View All Projects <ArrowUpRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
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
                                <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/2 xl:basis-1/3 pl-4">
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ delay: index * 0.1, duration: 0.5 }}
                                        className="h-full p-1"
                                    >
                                        <Card className="overflow-hidden flex flex-col h-full hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 border-primary/10 bg-card/50 backdrop-blur-[4px] md:backdrop-blur-sm group">
                                            <div className="relative aspect-video overflow-hidden">
                                                <Link href={`/projects/${project.slug}`}>
                                                    {project.isConfidential ? (
                                                        <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-950 flex flex-col items-center justify-center p-6 text-center group-hover:scale-105 transition-transform duration-700 aspect-video relative">
                                                            <div className="absolute inset-0 bg-primary/5 opacity-50 group-hover:opacity-100 transition-opacity" />
                                                            <Lock className="w-10 h-10 text-primary/40 mb-3 group-hover:text-primary/60 transition-colors" />
                                                            <h3 className="text-xl font-bold text-zinc-400 group-hover:text-zinc-200 transition-colors tracking-tight">{project.title}</h3>
                                                            <div className="mt-2 flex items-center gap-1.5 text-zinc-500 text-[10px] uppercase tracking-[0.2em] font-medium">
                                                                <EyeOff className="w-3 h-3" />
                                                                Private Implementation
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <Image
                                                            src={project.image}
                                                            alt={project.title}
                                                            fill
                                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                            className="object-cover transition-transform duration-700 group-hover:scale-110 cursor-pointer"
                                                        />
                                                    )}
                                                </Link>
                                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 pointer-events-none">
                                                    <div className="pointer-events-auto flex gap-4">
                                                        {!project.isConfidential && (
                                                            <Button variant="secondary" size="sm" asChild className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                                                <Link href={project.links.github} target="_blank">
                                                                    <Github className="mr-2 h-4 w-4" /> Code
                                                                </Link>
                                                            </Button>
                                                        )}
                                                        <Button size="sm" asChild className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                                            <Link href={`/projects/${project.slug}`}>
                                                                <ExternalLink className="mr-2 h-4 w-4" /> Detail
                                                            </Link>
                                                        </Button>
                                                    </div>
                                                </div>
                                                {project.isConfidential && (
                                                    <div className="absolute top-4 right-4 z-10">
                                                        <Badge variant="secondary" className="bg-background/80 backdrop-blur-md border-primary/20 text-xs py-1 px-2 uppercase tracking-wider font-bold">
                                                            Corporate
                                                        </Badge>
                                                    </div>
                                                )}
                                            </div>
                                            <CardHeader className="p-6">
                                                <div className="flex flex-col gap-1 mb-2">
                                                    {project.company && (
                                                        <span className="text-xs font-semibold text-primary uppercase tracking-widest">{project.company}</span>
                                                    )}
                                                    <Link href={`/projects/${project.slug}`} className="hover:underline decoration-primary underline-offset-4">
                                                        <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                                                    </Link>
                                                </div>
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
