"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

const skillCategories = [
    {
        title: "Frontend",
        skills: ["Next.js", "Laravel", "Nuxt.js", "Vuew.Js", "JavaScript", "TypeScript", "Tailwind CSS", "Framer Motion", "Vuetify", "Bootstrap", "Redux", "Zustand"],
    },
    {
        title: "Mobile Developer",
        skills: ["Kotlin", "Java", "Dart", "Flutter"],
    },
    {
        title: "Database",
        skills: ["MongoDB", "MySQL", "Firebase"],
    },
    {
        title: "Tools & Others",
        skills: ["Git", "GitHub", "BitBucket", "Figma", "Jest", "CI/CD", "Vercel"],
    },
]

export function Skills() {
    return (
        <section id="skills" className="py-24">
            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold tracking-tight mb-4 sm:text-4xl">Tech Stack & Skills</h2>
                    <p className="text-muted-foreground text-lg">Technologies I work with to build robust solutions.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <Card className="h-full hover:shadow-lg transition-shadow bg-card/50 backdrop-blur-[4px] md:backdrop-blur-sm border-primary/10">
                                <CardHeader>
                                    <CardTitle className="text-xl text-primary">{category.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill) => (
                                            <Badge key={skill} variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">
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
