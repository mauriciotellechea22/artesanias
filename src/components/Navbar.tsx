"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, MapPin, Phone } from "lucide-react";
import { useTheme } from "next-themes";

const NAV_LINKS = [
    { href: "#coleccion", label: "Colección" },
    { href: "#catalogo", label: "Catálogo" },
    { href: "#sobre-mi", label: "Sobre Mí" },
    { href: "#personalizar", label: "Tu Diseño" },
];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleTheme = () => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
    };

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
                    ? "py-3 bg-sage-dark/95 backdrop-blur-xl shadow-2xl"
                    : "py-6 bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <a href="#" className="group flex items-center gap-2">
                    <span className="text-2xl">🔥</span>
                    <div className="flex flex-col">
                        <span
                            className={`font-serif font-bold transition-all leading-tight ${scrolled ? "text-lg text-cream" : "text-xl text-cream"
                                }`}
                        >
                            SANDRA
                        </span>
                        <span className={`text-xs tracking-widest transition-all ${scrolled ? "text-cream/60" : "text-cream/70"}`}>
                            ARTESANÍAS
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

                    {/* Theme Toggle */}
                    {mounted && (
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full bg-cream/10 hover:bg-cream/20 transition-colors text-cream"
                            aria-label="Toggle theme"
                        >
                            {resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                    )}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden p-2 text-cream"
                    aria-label="Toggle mobile menu"
                >
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-sage-dark/95 backdrop-blur-xl border-t border-white/10"
                    >
                        <nav className="flex flex-col p-4 gap-4">
                            {NAV_LINKS.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="text-cream/80 font-medium py-2 hover:text-terracotta transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}
                            {mounted && (
                                <button
                                    onClick={toggleTheme}
                                    className="flex items-center gap-2 py-2 text-cream/80 hover:text-terracotta"
                                >
                                    {resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                                    <span>{resolvedTheme === "dark" ? "Modo Claro" : "Modo Oscuro"}</span>
                                </button>
                            )}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
