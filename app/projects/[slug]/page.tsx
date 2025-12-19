import { getProjectBySlug, projects } from "@/lib/data"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Github, Calendar, User, Code2, CheckCircle2 } from "lucide-react"
import { FloatingNav } from "@/components/floating-nav"
import { Footer } from "@/components/footer"
import { CustomCursor } from "@/components/ui/custom-cursor"

interface ProjectPageProps {
    params: Promise<{
        slug: string
    }>
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }))
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params
    const project = getProjectBySlug(slug)

    if (!project) {
        notFound()
    }

    return (
        <main className="min-h-screen bg-background relative selection:bg-primary/20 selection:text-primary">
            <div className="fixed inset-0 z-[-1] bg-background bg-grid-small bg-repeat [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] opacity-30 dark:opacity-20" />
            <FloatingNav />

            {/* Hero Banner */}
            <section className="relative h-[50vh] min-h-[400px] w-full mt-24 px-4 container mx-auto rounded-3xl overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover blur-sm scale-105 opacity-50"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
                </div>

                <div className="relative h-full flex flex-col justify-end pb-12 z-10 max-w-4xl mx-auto">
                    <div className="space-y-4">
                        <Button variant="ghost" size="sm" asChild className="mb-4 hover:bg-background/20 text-muted-foreground hover:text-foreground">
                            <Link href="/projects">
                                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
                            </Link>
                        </Button>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag) => (
                                <Badge key={tag} className="border-primary/50 bg-primary/20 text-primary hover:bg-primary/30">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black tracking-tight">{project.title}</h1>
                        <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl">{project.description}</p>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="container mx-auto px-4 py-16 max-w-4xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="md:col-span-2 space-y-12">
                        {/* Overview */}
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold flex items-center gap-2">
                                <span className="w-1 h-8 bg-primary rounded-full" />
                                Project Overview
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {project.longDescription || project.description}
                            </p>
                        </div>

                        {/* Key Features */}
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold flex items-center gap-2">
                                <span className="w-1 h-8 bg-primary rounded-full" />
                                Key Features
                            </h2>
                            <ul className="grid gap-4">
                                {project.features?.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-3 p-4 rounded-xl bg-secondary/30 border border-secondary">
                                        <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{feature}</span>
                                    </li>
                                )) || (
                                        <li className="text-muted-foreground">Detailed features not listed.</li>
                                    )}
                            </ul>
                        </div>

                        {/* Gallery / Detail Image */}
                        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-card">
                            <Image
                                src={project.image}
                                alt={`${project.title} Preview`}
                                width={1200}
                                height={675}
                                className="w-full h-auto"
                            />
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        <div className="p-6 rounded-2xl bg-card border border-primary/10 space-y-6 sticky top-24">
                            <div className="space-y-4">
                                <h3 className="font-semibold text-lg">Project Info</h3>

                                <div className="flex items-center gap-3 text-muted-foreground">
                                    <User className="h-5 w-5 text-primary" />
                                    <div>
                                        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground/70">Role</p>
                                        <p className="text-foreground">{project.role || "Developer"}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 text-muted-foreground">
                                    <Calendar className="h-5 w-5 text-primary" />
                                    <div>
                                        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground/70">Timeline</p>
                                        <p className="text-foreground">{project.timeline || "2024"}</p>
                                    </div>
                                </div>

                                <div className="space-y-3 pt-4 border-t border-border">
                                    <h4 className="text-sm font-medium flex items-center gap-2">
                                        <Code2 className="h-4 w-4 text-primary" />
                                        Tech Stack
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack?.map((tech) => (
                                            <Badge key={tech} variant="secondary" className="text-xs">
                                                {tech}
                                            </Badge>
                                        )) || project.tags.map(tag => (
                                            <Badge key={tag} variant="secondary" className="text-xs">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3 pt-4">
                                <Button className="w-full" size="lg" asChild>
                                    <Link href={project.links.demo} target="_blank">
                                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                                    </Link>
                                </Button>
                                <Button variant="outline" className="w-full" size="lg" asChild>
                                    <Link href={project.links.github} target="_blank">
                                        <Github className="mr-2 h-4 w-4" /> View Source
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
