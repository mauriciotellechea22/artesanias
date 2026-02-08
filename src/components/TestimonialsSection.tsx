"use client";

import { motion, Variants } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "María González",
        location: "Montevideo",
        text: "Le hice una matera de Nacional para mi viejo y casi llora. La calidad es increíble, cada detalle perfecto. Sandra es una genia.",
        rating: 5,
        product: "Matera Nacional",
    },
    {
        name: "Carlos Rodríguez",
        location: "Canelones",
        text: "Mandé una foto de mi perro que falleció y Sandra lo plasmó en madera de una forma hermosa. Un recuerdo para toda la vida.",
        rating: 5,
        product: "Retrato de mascota",
    },
    {
        name: "Laura Fernández",
        location: "Pando",
        text: "Pedí un cuadro de la rambla para regalar y quedó espectacular. La comunicación con Sandra fue excelente, muy atenta.",
        rating: 5,
        product: "Cuadro paisaje",
    },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

export function TestimonialsSection() {
    return (
        <section className="py-24 px-4 bg-cream dark:bg-charcoal">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className="text-center mb-16"
                >
                    <motion.span variants={itemVariants} className="text-terracotta font-bold tracking-widest uppercase text-sm">
                        Testimonios
                    </motion.span>
                    <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-serif font-bold text-sage-dark dark:text-cream mt-4">
                        Lo que dicen mis clientes
                    </motion.h2>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className="grid md:grid-cols-3 gap-8"
                >
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            className="bg-white dark:bg-white/5 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-sage/10"
                        >
                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(t.rating)].map((_, j) => (
                                    <Star key={j} size={18} className="fill-terracotta text-terracotta" />
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="text-sage-dark/80 dark:text-cream/80 leading-relaxed mb-6 italic">
                                "{t.text}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center justify-between">
                                <div>
                                    <span className="block font-bold text-sage-dark dark:text-cream">{t.name}</span>
                                    <span className="text-sm text-sage-dark/60 dark:text-cream/60">{t.location}</span>
                                </div>
                                <span className="text-xs bg-sage/10 text-sage-dark dark:text-cream px-3 py-1 rounded-full">
                                    {t.product}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
