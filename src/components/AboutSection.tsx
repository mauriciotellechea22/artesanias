"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function AboutSection() {
    return (
        <section id="sobre-mi" className="py-24 px-4 bg-sage-light dark:bg-sage-dark/30 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid lg:grid-cols-2 gap-16 items-center"
                >
                    {/* Image — Sandra working */}
                    <motion.div variants={itemVariants} className="relative">
                        <div className="relative w-full aspect-[3/4] max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="/sandra/sandra-pintando.jpg"
                                alt="Sandra trabajando en su taller"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-sage-dark/60 to-transparent" />
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: 0.5, type: "spring" }}
                            className="absolute -bottom-6 -right-6 lg:right-10 bg-terracotta text-cream p-6 rounded-2xl shadow-xl"
                        >
                            <span className="text-4xl font-bold block">20+</span>
                            <span className="text-sm">Años de experiencia</span>
                        </motion.div>
                    </motion.div>

                    {/* Content — Sandra's real bio */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        <span className="text-terracotta font-bold tracking-widest uppercase text-sm">
                            Sobre Mí
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-sage-dark dark:text-cream leading-tight">
                            Creatividad, manos <br />
                            <span className="text-terracotta">y corazón</span>
                        </h2>
                        <p className="text-lg text-sage-dark/80 dark:text-cream/80 leading-relaxed">
                            Formada en <strong>comunicación visual y plástica</strong>, bellas artes y distintos talleres del área.
                            Docente en enseñanza pública y privada con más de 20 años de experiencia.
                        </p>
                        <p className="text-lg text-sage-dark/80 dark:text-cream/80 leading-relaxed">
                            Dedicada a la producción de artículos decorativos y utilitarios de diseño propio y personalizados.
                            Plasmando las ideas de aquellos que nos eligieron.
                        </p>
                        <p className="text-lg text-sage-dark/80 dark:text-cream/80 leading-relaxed">
                            Cada pieza se realiza desde el profesionalismo con gran dedicación y entusiasmo.
                            Logrando resultados totalmente exclusivos ya que son realizados <strong>de forma artesanal</strong>.
                            Se ponen en juego nuestra creatividad, manos y corazón.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <div className="flex items-center gap-3 bg-white/50 dark:bg-white/10 px-4 py-3 rounded-xl">
                                <span className="text-2xl">🎨</span>
                                <div>
                                    <span className="block font-bold text-sage-dark dark:text-cream">Pintura</span>
                                    <span className="text-sm text-sage-dark/60 dark:text-cream/60">Diferentes técnicas</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 bg-white/50 dark:bg-white/10 px-4 py-3 rounded-xl">
                                <span className="text-2xl">🔥</span>
                                <div>
                                    <span className="block font-bold text-sage-dark dark:text-cream">Pirograbado</span>
                                    <span className="text-sm text-sage-dark/60 dark:text-cream/60">100% a mano</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 bg-white/50 dark:bg-white/10 px-4 py-3 rounded-xl">
                                <span className="text-2xl">🏺</span>
                                <div>
                                    <span className="block font-bold text-sage-dark dark:text-cream">Cerámica</span>
                                    <span className="text-sm text-sage-dark/60 dark:text-cream/60">Decoración</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
