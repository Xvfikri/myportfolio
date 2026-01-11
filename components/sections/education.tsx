"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { GraduationCap } from "lucide-react"

const education = [
    {
        institution: "Telkom University",
        degree: "Diploma in Information Technology",
        duration: "2022 – 2025",
        description: "Graduated with Honors. Specialized in Software Engineering and Artificial Intelligence. Thesis on 'Optimizing Web Performance using Modern Frameworks'.",
    },
    {
        institution: "Udemy",
        degree: "Ethical Hacking / Penetesting & Bug Bounty ",
        duration: "2025",
        description: "Certified Udemy Ethical Hacking / Penetesting & Bug Bounty .",
    },
    {
        institution: "MongoDb",
        degree: "MongoDB Certified Developer",
        duration: "2023",
        description: "Certified MongoDB Developer.",
    },
    {
        institution: "Google Coursera",
        degree: "IT Support Google Aug 25 2025",
        duration: "2022",
        description: "Certified IT Support Google.",
    },
    {
        institution: "BuildWithAngga",
        degree: "Web Security Penetration Tester & Bug Bounty",
        duration: "2025",
        description: "Certified Web Security Penetration Tester & Bug Bounty.",
    },
]

export function Education() {
    return (
        <section id="education" className="py-24">
            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold tracking-tight mb-4 sm:text-4xl">Education</h2>
                    <p className="text-muted-foreground text-lg">Academic background and qualifications.</p>
                </motion.div>

                <div className="max-w-4xl mx-auto grid grid-cols-1 gap-6">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <Card className="hover:border-primary/50 transition-colors">
                                <CardHeader>
                                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                        <div className="flex items-center gap-4">
                                            <div className="p-2 bg-primary/10 rounded-full">
                                                <GraduationCap className="h-6 w-6 text-primary" />
                                            </div>
                                            <div>
                                                <CardTitle className="text-xl font-bold">{edu.institution}</CardTitle>
                                                <CardDescription className="text-base text-foreground/80">{edu.degree}</CardDescription>
                                            </div>
                                        </div>
                                        <Badge variant="secondary" className="whitespace-nowrap">{edu.duration}</Badge>
                                    </div>
                                </CardHeader>
                                <CardContent className="pl-20 md:pl-20">
                                    <p className="text-muted-foreground">{edu.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
