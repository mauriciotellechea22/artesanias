"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
    {
        q: "¿Cuánto tiempo demora un pedido?",
        a: "De 1 a 10 días dependiendo de la complejidad del producto. Siempre te confirmo el plazo antes de empezar.",
    },
    {
        q: "¿Qué productos hacés?",
        a: "Materas, tablas para asado (cuadradas, redondas, rectangulares, con asa), cuadros con bastidor, cerámica, pirograbado, souvenirs y más. Todo personalizable.",
    },
    {
        q: "¿Hacés envíos?",
        a: "¡Sí! Envíos de cercanía sin costo. Para el resto del país, se coordina por agencia. Consultame por WhatsApp.",
    },
    {
        q: "¿Puedo pedir un diseño personalizado?",
        a: "¡Por supuesto! Esa es mi especialidad. Cuéntame tu idea por WhatsApp, hacemos un boceto juntos y una vez que lo aprobés, empiezo a trabajar.",
    },
    {
        q: "¿Los productos tienen protección?",
        a: "Sí, dependiendo del producto y su uso tiene su protección particular para garantizar durabilidad.",
    },
    {
        q: "¿Cómo es el pago?",
        a: "Se trabaja con una seña del 30% para iniciar el trabajo y el resto contra entrega. Acepto todos los medios de pago.",
    },
    {
        q: "¿Qué técnicas de pintura usás?",
        a: "Utilizo diferentes técnicas de pintura según el producto y el resultado buscado. Trabajo en pintura, pirograbado y cerámica.",
    },
    {
        q: "¿Qué tipos de tablas de madera tenés?",
        a: "Las tablas pueden ser cuadradas, redondas, rectangulares o con asa. Todas personalizables con el diseño que quieras.",
    },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-24 px-4 bg-sage-light/50 dark:bg-sage-dark/20">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className="text-center mb-16"
                >
                    <motion.div variants={itemVariants} className="flex justify-center mb-4">
                        <HelpCircle className="text-terracotta" size={40} />
                    </motion.div>
                    <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-serif font-bold text-sage-dark dark:text-cream">
                        Preguntas Frecuentes
                    </motion.h2>
                    <motion.p variants={itemVariants} className="text-sage-dark/60 dark:text-cream/60 mt-4">
                        Todo lo que necesitás saber antes de hacer tu pedido
                    </motion.p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className="space-y-4"
                >
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            className="bg-white dark:bg-white/5 rounded-2xl overflow-hidden shadow-sm border border-sage/10"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-sage/5 transition-colors"
                            >
                                <span className="font-bold text-sage-dark dark:text-cream pr-4">{faq.q}</span>
                                <motion.div
                                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ChevronDown className="text-terracotta flex-shrink-0" size={20} />
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="px-6 pb-5 text-sage-dark/70 dark:text-cream/70 leading-relaxed">
                                            {faq.a}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
