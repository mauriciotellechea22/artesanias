"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Product } from "@/lib/data";
import { getWhatsAppUrl, generateProductMessage } from "@/lib/whatsapp";
import { ShoppingBag, Expand } from "lucide-react";

interface ProductCardProps {
    product: Product;
    className?: string;
    onClick?: () => void;
}

export function ProductCard({ product, className = "", onClick }: ProductCardProps) {
    const handleBuy = (e: React.MouseEvent) => {
        e.stopPropagation();
        const msg = generateProductMessage(product.name, product.price);
        window.open(getWhatsAppUrl(msg), "_blank");
    };

    const handleClick = () => {
        if (onClick) onClick();
    };

    return (
        <motion.div
            layoutId={`card-${product.id}`}
            whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
            className={`glass dark:glass-dark group relative overflow-hidden rounded-2xl flex flex-col cursor-pointer ${className}`}
            onClick={handleClick}
        >
            {/* Image Container */}
            <div className="relative flex-1 overflow-hidden">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />

                {/* Expand Icon */}
                <div className="absolute top-3 right-3 p-2 bg-sage-dark/50 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity text-cream">
                    <Expand size={16} />
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-terracotta text-cream rounded-full shadow-lg">
                        {product.category === "futbol" ? "⚽ Fútbol" : product.category === "pirograbado" ? "🔥 Pirograbado" : product.category === "madera" ? "🪵 Madera" : product.category === "ceramica" ? "🏺 Cerámica" : "✨ Otro"}
                    </span>
                </div>

                {/* Overlay Info */}
                <div className="absolute inset-0 bg-gradient-to-t from-sage-dark/90 via-sage-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                    <p className="text-cream/90 text-sm leading-relaxed translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100 line-clamp-3">
                        {product.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                        {product.tags.slice(0, 2).map((tag) => (
                            <span
                                key={tag}
                                className="text-terracotta text-xs border border-terracotta/50 px-2 py-0.5 rounded-full"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer Info */}
            <div className="p-4 bg-sage-dark/95 dark:bg-charcoal/95 backdrop-blur-xl border-t border-white/10 flex justify-between items-center">
                <div className="flex-1 min-w-0 mr-3">
                    <h3 className="font-serif text-base font-bold text-cream truncate">
                        {product.name}
                    </h3>
                    <span className="text-terracotta font-bold">
                        ${product.price.toLocaleString("es-UY")}{" "}
                        <span className="text-xs font-normal text-cream/50">UYU</span>
                    </span>
                </div>

                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleBuy}
                    className="bg-terracotta text-cream p-3 rounded-full hover:bg-white hover:text-sage-dark transition-colors shadow-lg flex-shrink-0"
                    aria-label="Personalizar con Sandra"
                >
                    <ShoppingBag size={18} strokeWidth={2.5} />
                </motion.button>
            </div>
        </motion.div>
    );
}
