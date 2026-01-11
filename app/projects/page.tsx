"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Github, ExternalLink, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { projects } from "@/lib/data"
import { FloatingNav } from "@/components/floating-nav"
import { Footer } from "@/components/footer"

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-background relative selection:bg-primary/20 selection:text-primary">
            <div className="fixed inset-0 z-[-1] bg-background bg-grid-small bg-repeat [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] opacity-30 dark:opacity-20" />
            <FloatingNav />

            <section className="pt-32 pb-24 px-4 container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16 space-y-4"
                >
                    <Badge variant="outline" className="px-4 py-1.5 text-sm rounded-full border-primary/50 text-foreground bg-primary/10 mb-4">
                        Portfolio
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
                        My Recent <span className="text-primary">Work</span>
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Here are some of the projects I've worked on. Each project represents a unique challenge and solution.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="h-full"
                        >
                            <div className="relative h-full group">
                                <Link href={`/projects/${project.slug}`} className="absolute inset-0 z-10" />
                                <Card className="overflow-hidden flex flex-col h-full hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 border-primary/10 bg-card/50 backdrop-blur-sm">
                                    <div className="relative aspect-video overflow-hidden">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                    <CardHeader className="p-6">
                                        <div className="flex justify-between items-start mb-2">
                                            <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                                                {project.title}
                                            </CardTitle>
                                        </div>
                                        <CardDescription className="line-clamp-3 text-base">
                                            {project.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex-1 px-6 pb-6 pt-0 mt-auto">
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.tags.slice(0, 3).map((tag) => (
                                                <Badge key={tag} variant="secondary" className="px-2.5 py-1">
                                                    {tag}
                                                </Badge>
                                            ))}
                                            {project.tags.length > 3 && (
                                                <Badge variant="outline" className="px-2.5 py-1">
                                                    +{project.tags.length - 3}
                                                </Badge>
                                            )}
                                        </div>
                                        <div className="flex gap-3 mt-auto relative z-20">
                                            <Button variant="outline" size="sm" asChild className="flex-1">
                                                <Link href={project.links.github} target="_blank">
                                                    <Github className="mr-2 h-4 w-4" /> Code
                                                </Link>
                                            </Button>
                                            <Button variant="outline" size="sm" asChild className="flex-1">
                                                <Link href={`/projects/${project.slug}`}>
                                                    <ExternalLink className="mr-2 h-4 w-4" /> Detail
                                                </Link>
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    )
}
