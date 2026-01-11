"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Mail, Github, Linkedin, Send } from "lucide-react"
import Link from "next/link"

export function Contact() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // In a real app, this would send an email
        alert("Thanks for your message! This is a demo form.")
    }

    return (
        <section id="contact" className="py-24">
            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold tracking-tight mb-4 sm:text-4xl">Get in Touch</h2>
                    <p className="text-muted-foreground text-lg">Have a project in mind or just want to say hi?</p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-bold mb-2">Contact Information</h3>
                                <p className="text-muted-foreground">
                                    Feel free to reach out through any of these platforms. I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <Card className="bg-muted/50 border-none shadow-none">
                                    <CardContent className="flex items-center gap-4 p-4">
                                        <div className="p-3 bg-primary/10 rounded-full text-primary">
                                            <Mail className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium">Email Me</p>
                                            <a href="mail.google.com/muhamadalfikri077@gmail.com" className="text-lg font-semibold hover:text-primary transition-colors">muhamadalfikri077@gmail.com</a>
                                        </div>
                                    </CardContent>
                                </Card>

                                <div className="flex gap-4">
                                    <Button variant="outline" size="lg" className="flex-1" asChild>
                                        <Link href="https://github.com/Xvfikri" target="_blank">
                                            <Github className="mr-2 h-5 w-5" /> GitHub
                                        </Link>
                                    </Button>
                                    <Button variant="outline" size="lg" className="flex-1" asChild>
                                        <Link href="https://www.linkedin.com/in/alfikri1403/" target="_blank">
                                            <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <Card>
                            <CardHeader>
                                <CardTitle>Send a Message</CardTitle>
                                <CardDescription>I'll get back to you as soon as possible.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-medium">Name</label>
                                            <Input id="name" placeholder="name" required />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-medium">Email</label>
                                            <Input id="email" type="email" placeholder="muhamadalfikri077@gmail.com" required />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                                        <Input id="subject" placeholder="" required />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium">Message</label>
                                        <Textarea id="message" placeholder="Tell me about your project..." className="min-h-[150px]" required />
                                    </div>
                                    <Button type="submit" className="w-full">
                                        Send Message <Send className="ml-2 h-4 w-4" />
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
