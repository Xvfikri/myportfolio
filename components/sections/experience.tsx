"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"

const experiences = [
    {
        company: "Aku Pintar Indonesia",
        role: "Frontend Developer",
        type: "Contract",
        duration: "October 2025 – Present",
        description: "Building a web application for a local company using Next.js and TypeScript. Implementing responsive design and integrating third-party APIs.",
        skills: ["Next.js", "TypeScript", "Tailwind CSS", "AWS"],
    },
    {
        company: "United Transworld Trading",
        role: "Frontend Developer",
        type: "Contract",
        duration: "July 2025 – September 2025",
        description: "Building a web application for a local company using Next.js and TypeScript. Implementing responsive design and integrating third-party APIs.",
        skills: ["Nuxt.js", "Pinia", "Nuxt Ui", "TypeScript"],
    },
    {
        company: "Natural In Cosmetic",
        role: "Frontend web and mobile Developer",
        type: "Remote Contract",
        duration: "February 2025 – September 2025",
        description: "Building a e-commerce website for a local company using Laravel Jquery. Implementing responsive design and integrating third-party APIs.",
        skills: ["Laravel", "Jquery", "TypeScript", "Bootstrap", "Flutter"],
    },
    {
        company: "Salam Project",
        role: "Mobile Developer",
        type: "Freelance",
        duration: "May 2025 – July 2025",
        description: "Building a mobile application for a startup using Kotlin. Implementing responsive design and integrating Firebase",
        skills: ["Kotlin", "Firebase", "Android Studio", "Git", "Java"],
    },
    {
        company: "Fleek Creative Digital Agency",
        role: "Fullstack Developer",
        type: "Freelance",
        duration: "March 2025– Mei 2025",
        description: "Developed and maintained multiple client websites using Next.js and Node.js. Integrated various third-party APIs",
        skills: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Express"],
    },
    {
        company: "Cyber Army",
        role: "Frontend Developer Intern",
        type: "Internship",
        duration: "July 2024 – February 2025",
        description: "Collaborated with the design team to implement responsive UI components. Assisted in debugging and fixing cross-browser compatibility issues.",
        skills: ["Next.js", "TypeScript", "Vuetify"],
    },
]

export function Experience() {
    return (
        <section id="experience" className="py-24 bg-muted/50">
            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold tracking-tight mb-4 sm:text-4xl">Professional Experience</h2>
                    <p className="text-muted-foreground text-lg">My journey in the tech industry.</p>
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            className="relative pl-8 border-l-2 border-primary/20 last:border-0"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-[-9px] top-0 h-4 w-4 rounded-full bg-background border-2 border-primary" />

                            <Card className="mb-8">
                                <CardHeader>
                                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-2">
                                        <div>
                                            <CardTitle className="text-xl font-bold text-primary">{exp.role}</CardTitle>
                                            <CardDescription className="text-lg font-medium text-foreground">{exp.company}</CardDescription>
                                        </div>
                                        <div className="flex flex-col items-end gap-1">
                                            <Badge variant="outline">{exp.duration}</Badge>
                                            <span className="text-xs text-muted-foreground">{exp.type}</span>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.skills.map((skill) => (
                                            <Badge key={skill} variant="secondary" className="text-xs">
                                                {skill}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
