"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
    {
        q: "¿Cuánto tiempo demora un pedido personalizado?",
        a: "Depende de la complejidad del diseño. Una matera simple puede estar lista en 3-5 días. Un retrato detallado puede llevar 2-3 semanas. Siempre te confirmo el plazo antes de empezar.",
    },
    {
        q: "¿Hacés envíos a todo Uruguay?",
        a: "¡Sí! Envío a todo el país por DAC o agencia de tu preferencia. El costo del envío corre por cuenta del cliente. También podés retirar en mi taller en Márquez Castro.",
    },
    {
        q: "¿Qué necesito para pedir un retrato?",
        a: "Una foto de buena calidad, bien iluminada y en alta resolución. Cuanto mejor sea la foto, mejor quedará el pirograbado. Te guío en el proceso por WhatsApp.",
    },
    {
        q: "¿Puedo pedir un diseño que no esté en el catálogo?",
        a: "¡Por supuesto! Esa es mi especialidad. Cuéntame tu idea por WhatsApp, hacemos un boceto juntos y una vez que lo apruebes, empiezo a trabajar.",
    },
    {
        q: "¿Los productos llevan algún tipo de protección?",
        a: "Todos mis trabajos llevan varias capas de barniz mate protector, lo que los hace resistentes a la humedad y al uso diario. Están hechos para durar años.",
    },
    {
        q: "¿Cómo es el pago?",
        a: "Trabajo con seña del 50% para iniciar el trabajo y el resto contra entrega. Acepto transferencia bancaria, Mercado Pago y efectivo.",
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
