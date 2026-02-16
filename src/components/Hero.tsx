"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section ref={ref} className="h-screen w-full flex items-center justify-center relative overflow-hidden bg-sage-dark">
            {/* Background Parallax */}
            <motion.div
                style={{ y: yBg }}
                className="absolute inset-0 z-0 bg-cover bg-center"
            >
                <Image
                    src="/sandra/sandra-pintando.jpg"
                    alt="Sandra trabajando en su taller"
                    fill
                    className="object-cover opacity-30 mix-blend-overlay"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-sage-dark/40 via-transparent to-sage-dark/95" />
            </motion.div>

            {/* Content */}
            <motion.div
                style={{ y: yText, opacity }}
                className="z-10 text-center space-y-6 px-4"
            >
                {/* Brand: Arte y artesanías → Sandra */}
                <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-cream/70 text-lg md:text-xl tracking-[0.3em] uppercase font-light"
                >
                    Arte y artesanías
                </motion.p>

                <motion.h1
                    initial={{ y: 50, opacity: 0, filter: "blur(10px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-7xl md:text-9xl lg:text-[10rem] font-serif text-cream font-bold drop-shadow-2xl tracking-tight"
                >
                    Sandra
                </motion.h1>

                <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-cream/60 text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed"
                >
                    Pintura · Pirograbado · Cerámica<br />
                    Hecho a mano en Montevideo / Canelones
                </motion.p>

                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
                >
                    <a
                        href="#catalogo"
                        className="px-8 py-4 bg-terracotta text-cream font-bold rounded-full hover:scale-105 hover:shadow-xl transition-all shadow-lg"
                    >
                        Ver Catálogo
                    </a>
                    <a
                        href="#personalizar"
                        className="px-8 py-4 border-2 border-cream/40 text-cream font-bold rounded-full hover:bg-cream/10 hover:border-cream/60 transition-all"
                    >
                        Pedir Personalizado
                    </a>
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
            >
                <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-6 h-10 rounded-full border-2 border-cream/40 flex justify-center pt-2"
                >
                    <div className="w-1 h-2 bg-cream/60 rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
}
