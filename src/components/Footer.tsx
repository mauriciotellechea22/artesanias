"use client";

import { MapPin, Phone, Instagram, Facebook, MessageCircle } from "lucide-react";
import { SANDRA_PHONE } from "@/lib/whatsapp";

export function Footer() {
    return (
        <footer className="bg-sage-dark text-cream py-16">
            <div className="max-w-7xl mx-auto px-6">
                {/* Main Footer Content */}
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="text-3xl">🎨</span>
                            <div>
                                <span className="text-cream/60 text-xs tracking-[0.25em] uppercase block">Arte y artesanías</span>
                                <h4 className="font-serif text-2xl font-bold">Sandra</h4>
                            </div>
                        </div>
                        <p className="text-cream/70 leading-relaxed">
                            Pintura, pirograbado, cerámica, decoración y utilitarios. Hecho a mano en Montevideo / Canelones.
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h5 className="font-bold text-lg text-terracotta">Contacto</h5>

                        <div className="flex items-start gap-3">
                            <Phone size={18} className="text-terracotta mt-1 flex-shrink-0" />
                            <div>
                                <a
                                    href={`https://wa.me/${SANDRA_PHONE}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-terracotta transition-colors font-medium"
                                >
                                    094 524 182
                                </a>
                                <p className="text-cream/50 text-sm">WhatsApp disponible</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <MapPin size={18} className="text-terracotta mt-1 flex-shrink-0" />
                            <div>
                                <p className="font-medium">Márquez Castro M42 S 9</p>
                                <p className="text-cream/50 text-sm">Entre James Summers y Giannatassio</p>
                                <p className="text-cream/50 text-sm">Ciudad de la Costa, Canelones</p>
                            </div>
                        </div>
                    </div>

                    {/* Social & Links */}
                    <div className="space-y-4">
                        <h5 className="font-bold text-lg text-terracotta">Seguime</h5>

                        <div className="flex gap-4">
                            <a
                                href="#"
                                className="p-3 bg-cream/10 rounded-full hover:bg-terracotta hover:text-white transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram size={20} />
                            </a>
                            <a
                                href="#"
                                className="p-3 bg-cream/10 rounded-full hover:bg-terracotta hover:text-white transition-colors"
                                aria-label="Facebook"
                            >
                                <Facebook size={20} />
                            </a>
                            <a
                                href={`https://wa.me/${SANDRA_PHONE}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-cream/10 rounded-full hover:bg-[#25D366] hover:text-white transition-colors"
                                aria-label="WhatsApp"
                            >
                                <MessageCircle size={20} />
                            </a>
                        </div>

                        <div className="pt-4 space-y-2 text-sm">
                            <a href="#coleccion" className="block text-cream/60 hover:text-cream transition-colors">Colección Futbolera</a>
                            <a href="#catalogo" className="block text-cream/60 hover:text-cream transition-colors">Catálogo Completo</a>
                            <a href="#personalizar" className="block text-cream/60 hover:text-cream transition-colors">Pedido Personalizado</a>
                            <a href="#faq" className="block text-cream/60 hover:text-cream transition-colors">Preguntas Frecuentes</a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-cream/40 text-sm">
                        © {new Date().getFullYear()} Arte y artesanías Sandra. Hecho a mano en Montevideo / Canelones.
                    </p>
                    <p className="text-cream/30 text-xs">
                        Todos los productos son artesanales y pueden variar ligeramente.
                    </p>
                </div>
            </div>
        </footer>
    );
}
