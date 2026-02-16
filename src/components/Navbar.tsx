"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const NAV_LINKS = [
    { href: "#sobre-mi", label: "Sobre Mí" },
    { href: "#coleccion", label: "Colección" },
    { href: "#catalogo", label: "Catálogo" },
    { href: "#personalizar", label: "Personalizar" },
    { href: "#faq", label: "FAQ" },
];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? "bg-sage-dark/95 backdrop-blur-xl shadow-2xl py-2"
                    : "bg-transparent py-4"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                {/* Brand — new order: Arte y artesanías / Sandra */}
                <a href="#" className="group flex items-center gap-3">
                    <span className="text-2xl">🎨</span>
                    <div className="flex flex-col leading-tight">
                        <span
                            className={`text-xs tracking-[0.25em] uppercase transition-all ${scrolled ? "text-cream/60" : "text-cream/70"
                                }`}
                        >
                            Arte y artesanías
                        </span>
                        <span
                            className={`font-serif font-bold transition-all ${scrolled ? "text-lg text-cream" : "text-xl text-cream"
                                }`}
                        >
                            Sandra
                        </span>
                    </div>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={`font-medium transition-colors hover:text-terracotta ${scrolled ? "text-cream/80" : "text-cream/70"
                                }`}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-3">
                    {mounted && (
                        <button
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="p-2 rounded-full bg-cream/10 hover:bg-cream/20 text-cream transition-colors"
                            aria-label="Toggle theme"
                        >
                            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                    )}

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 rounded-full bg-cream/10 hover:bg-cream/20 text-cream"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Menu"
                    >
                        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <motion.nav
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden bg-sage-dark/95 backdrop-blur-xl border-t border-cream/10 px-6 py-6 space-y-4"
                >
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className="block text-cream/80 hover:text-terracotta transition-colors text-lg"
                        >
                            {link.label}
                        </a>
                    ))}
                </motion.nav>
            )}
        </motion.header>
    );
}
