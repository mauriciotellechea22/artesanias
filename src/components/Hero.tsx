"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section ref={ref} className="h-screen w-full flex items-center justify-center relative overflow-hidden bg-sage-dark">
            {/* Background Parallax */}
            <motion.div
                style={{ y: yBg }}
                className="absolute inset-0 z-0 bg-cover bg-center"
            >
                <Image
                    src="https://images.unsplash.com/photo-1621252179027-94459d27d3ee?q=80&w=2070&auto=format&fit=crop"
                    alt="Artesana trabajando"
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
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-6xl mb-4"
                >
                    🔥
                </motion.div>

                <motion.h1
                    initial={{ y: 50, opacity: 0, filter: "blur(10px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-6xl md:text-8xl lg:text-9xl font-serif text-cream font-bold drop-shadow-2xl tracking-tight"
                >
                    SANDRA <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-terracotta via-wood-accent to-terracotta">
                        ARTESANÍAS
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-xl md:text-2xl text-cream/80 font-light tracking-wide"
                >
                    Pirograbado, Maté y más &bull; Hecho a mano en Montevideo
                </motion.p>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
                >
                    <a
                        href="#catalogo"
                        className="px-8 py-4 bg-terracotta text-cream font-bold rounded-full hover:bg-terracotta/90 transition-colors shadow-lg"
                    >
                        Ver Catálogo
                    </a>
                    <a
                        href="#personalizar"
                        className="px-8 py-4 bg-cream/10 backdrop-blur-sm text-cream font-bold rounded-full border border-cream/30 hover:bg-cream/20 transition-colors"
                    >
                        Pedir Personalizado
                    </a>
                </motion.div>
            </motion.div>

            <ScrollIndicator />
        </section>
    );
}

function ScrollIndicator() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-cream flex flex-col items-center gap-3 z-20"
        >
            <span className="text-xs uppercase tracking-[0.3em] opacity-70">Descubrir</span>
            <div className="w-[1px] h-24 bg-white/20 overflow-hidden relative">
                <motion.div
                    className="absolute top-0 left-0 w-full h-1/2 bg-terracotta"
                    animate={{ top: ["-100%", "100%"] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                />
            </div>
        </motion.div>
    );
}
