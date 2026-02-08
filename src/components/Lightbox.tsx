"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Product } from "@/lib/data";
import { getWhatsAppUrl, generateProductMessage } from "@/lib/whatsapp";

interface LightboxProps {
    product: Product | null;
    onClose: () => void;
}

export function Lightbox({ product, onClose }: LightboxProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = product ? [product.image, product.image, product.image] : [];

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowLeft") setCurrentIndex((prev) => Math.max(0, prev - 1));
            if (e.key === "ArrowRight") setCurrentIndex((prev) => Math.min(images.length - 1, prev + 1));
        };

        document.body.style.overflow = product ? "hidden" : "";
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [product, images.length, onClose]);

    const handleBuy = () => {
        if (!product) return;
        const msg = generateProductMessage(product.name, product.price);
        window.open(getWhatsAppUrl(msg), "_blank");
    };

    return (
        <AnimatePresence>
            {product && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] bg-sage-dark/95 backdrop-blur-xl flex items-center justify-center"
                    onClick={onClose}
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 p-3 bg-cream/10 hover:bg-cream/20 rounded-full text-cream transition-colors z-10"
                        aria-label="Cerrar"
                    >
                        <X size={24} />
                    </button>

                    {/* Main Content */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ type: "spring", damping: 25 }}
                        className="relative max-w-6xl w-full mx-4 flex flex-col lg:flex-row gap-8 items-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Image Carousel */}
                        <div className="relative w-full lg:w-2/3 aspect-square max-h-[70vh]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    className="relative w-full h-full rounded-2xl overflow-hidden"
                                >
                                    <Image
                                        src={images[currentIndex]}
                                        alt={product.name}
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </motion.div>
                            </AnimatePresence>

                            {/* Navigation Arrows */}
                            {images.length > 1 && (
                                <>
                                    <button
                                        onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
                                        disabled={currentIndex === 0}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-cream/20 hover:bg-cream/40 rounded-full text-cream disabled:opacity-30 transition-all"
                                    >
                                        <ChevronLeft size={24} />
                                    </button>
                                    <button
                                        onClick={() => setCurrentIndex((prev) => Math.min(images.length - 1, prev + 1))}
                                        disabled={currentIndex === images.length - 1}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-cream/20 hover:bg-cream/40 rounded-full text-cream disabled:opacity-30 transition-all"
                                    >
                                        <ChevronRight size={24} />
                                    </button>
                                </>
                            )}

                            {/* Dots */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                {images.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrentIndex(i)}
                                        className={`w-2 h-2 rounded-full transition-all ${i === currentIndex ? "bg-terracotta w-6" : "bg-cream/50"
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="w-full lg:w-1/3 text-cream space-y-6">
                            <div>
                                <span className="text-terracotta text-sm font-bold uppercase tracking-widest">
                                    {product.category}
                                </span>
                                <h2 className="text-3xl lg:text-4xl font-serif font-bold mt-2">{product.name}</h2>
                            </div>

                            <p className="text-cream/70 leading-relaxed">{product.description}</p>

                            <div className="flex flex-wrap gap-2">
                                {product.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 text-xs rounded-full border border-cream/20 text-cream/60"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-end gap-4">
                                <span className="text-4xl font-bold text-terracotta">
                                    ${product.price.toLocaleString("es-UY")} <span className="text-lg font-normal text-cream/50">UYU</span>
                                </span>
                            </div>

                            <button
                                onClick={handleBuy}
                                className="w-full py-4 bg-terracotta text-cream font-bold rounded-xl hover:bg-white hover:text-sage-dark transition-colors flex items-center justify-center gap-2"
                            >
                                Personalizar con Sandra 💬
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
