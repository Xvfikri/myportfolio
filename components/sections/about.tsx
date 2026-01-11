"use client"

import { motion } from "framer-motion"

export function About() {
    return (
        <section id="about" className="py-24 bg-muted/50">
            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <h2 className="text-3xl font-bold tracking-tight mb-8 sm:text-4xl">About Me</h2>
                    <div className="text-lg text-muted-foreground space-y-6 leading-relaxed">
                        <p>
                            I am a passionate and dedicated Fullstack Developer and a proud graduate of <span className="text-primary font-semibold">Telkom University</span>.
                            My journey in web development is driven by a desire to create seamless user experiences and solve complex problems through code.
                            Efficiency and performance are key to my development philosophy.
                        </p>
                        <p>
                            With a strong foundation in modern web technologies, I specialize in building robust applications using
                            <span className="text-foreground font-medium"> Next.js, Nuxt.js, Laravel, Vue.js,</span> and <span className="text-foreground font-medium">Flutter</span>.
                            I bring ideas to life with clean, efficient, and maintainable code, whether it&apos;s a complex web ecosystem or a high-performance mobile application.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
