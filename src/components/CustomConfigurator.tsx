"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { generateBriefMessage, getWhatsAppUrl } from "@/lib/whatsapp";
import { Camera, X } from "lucide-react";

const PRODUCT_TYPES = [
    { id: "matera", label: "Matera Personalizada", icon: "🧉", desc: "Para mate o termos" },
    { id: "cuadro", label: "Cuadro / Retrato", icon: "🖼️", desc: "Paisajes, mascotas, personas" },
    { id: "futbol", label: "Diseño Futbolero", icon: "⚽", desc: "Tu cuadro del alma" },
    { id: "otro", label: "Otra Idea", icon: "✨", desc: "Sorprendeme con tu idea" },
];

export function CustomConfigurator() {
    const [step, setStep] = useState(1);
    const [selection, setSelection] = useState("");
    const [details, setDetails] = useState({ name: "", idea: "", deadline: "" });
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const handleSelect = (id: string) => {
        setSelection(id);
        setStep(2);
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const removeImage = () => {
        setImagePreview(null);
    };

    const handleSubmit = () => {
        const msg = generateBriefMessage({
            name: details.name,
            idea: `Tipo: ${PRODUCT_TYPES.find(p => p.id === selection)?.label}. ${details.idea}`,
            deadline: details.deadline || "A coordinar",
            hasImage: !!imagePreview,
        });
        window.open(getWhatsAppUrl(msg), "_blank");
    };

    return (
        <div className="max-w-4xl mx-auto">
            {/* Progress Bar */}
            <div className="flex justify-center gap-2 mb-12">
                {[1, 2, 3].map((s) => (
                    <div
                        key={s}
                        className={`h-2 rounded-full transition-all duration-500 ${s <= step ? "bg-terracotta w-16" : "bg-sage/20 w-8"
                            }`}
                    />
                ))}
            </div>

            <AnimatePresence mode="wait">
                {/* Step 1: Product Selection */}
                {step === 1 && (
                    <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-serif font-bold text-sage-dark dark:text-cream text-center">
                            ¿Qué te gustaría crear?
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {PRODUCT_TYPES.map((type) => (
                                <motion.button
                                    key={type.id}
                                    whileHover={{ scale: 1.02, y: -4 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => handleSelect(type.id)}
                                    className="glass dark:glass-dark p-6 rounded-2xl text-left hover:border-terracotta/50 transition-all group"
                                >
                                    <span className="text-4xl mb-3 block group-hover:scale-110 transition-transform">
                                        {type.icon}
                                    </span>
                                    <h4 className="font-bold text-lg text-sage-dark dark:text-cream">{type.label}</h4>
                                    <p className="text-sage-dark/60 dark:text-cream/60 text-sm">{type.desc}</p>
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* Step 2: Details */}
                {step === 2 && (
                    <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-serif font-bold text-sage-dark dark:text-cream text-center">
                            Cuéntame más sobre tu idea
                        </h3>
                        <div className="glass dark:glass-dark p-8 rounded-2xl space-y-6">
                            <div>
                                <label className="block text-sm font-bold text-sage-dark dark:text-cream mb-2">Tu nombre</label>
                                <input
                                    type="text"
                                    value={details.name}
                                    onChange={(e) => setDetails({ ...details, name: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-white/10 border border-sage/20 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none text-sage-dark dark:text-cream transition-all"
                                    placeholder="¿Cómo te llamás?"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-sage-dark dark:text-cream mb-2">Describe tu idea</label>
                                <textarea
                                    value={details.idea}
                                    onChange={(e) => setDetails({ ...details, idea: e.target.value })}
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-white/10 border border-sage/20 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none resize-none text-sage-dark dark:text-cream transition-all"
                                    placeholder="Ejemplo: Quiero una matera con el escudo de Nacional y mi nombre..."
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-sage-dark dark:text-cream mb-2">
                                    ¿Para cuándo lo necesitás? (Opcional)
                                </label>
                                <input
                                    type="text"
                                    value={details.deadline}
                                    onChange={(e) => setDetails({ ...details, deadline: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-white/10 border border-sage/20 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none text-sage-dark dark:text-cream transition-all"
                                    placeholder="Ej: Para el cumple de mi viejo el 20 de marzo"
                                />
                            </div>

                            {/* Image Upload */}
                            <div>
                                <label className="block text-sm font-bold text-sage-dark dark:text-cream mb-2">
                                    📸 Imagen de referencia (Opcional)
                                </label>
                                {!imagePreview ? (
                                    <label className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-sage/30 rounded-xl cursor-pointer hover:border-terracotta/50 hover:bg-terracotta/5 transition-all">
                                        <Camera className="text-sage/50 mb-2" size={32} />
                                        <span className="text-sage-dark/60 dark:text-cream/60 text-sm">Subir foto</span>
                                        <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                                    </label>
                                ) : (
                                    <div className="relative inline-block">
                                        <img
                                            src={imagePreview}
                                            alt="Preview"
                                            className="w-32 h-32 object-cover rounded-xl border-2 border-terracotta"
                                        />
                                        <button
                                            onClick={removeImage}
                                            className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full"
                                        >
                                            <X size={16} />
                                        </button>
                                    </div>
                                )}
                            </div>

                            <div className="flex gap-4 pt-4">
                                <button
                                    onClick={() => setStep(1)}
                                    className="px-6 py-3 rounded-xl border border-sage/30 text-sage-dark dark:text-cream hover:bg-sage/10 transition-colors"
                                >
                                    Atrás
                                </button>
                                <button
                                    onClick={() => setStep(3)}
                                    disabled={!details.name || !details.idea}
                                    className="flex-1 py-3 bg-terracotta text-cream font-bold rounded-xl hover:bg-terracotta/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                >
                                    Continuar
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Step 3: Summary */}
                {step === 3 && (
                    <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-serif font-bold text-sage-dark dark:text-cream text-center">
                            ¡Listo! Revisá tu pedido
                        </h3>
                        <div className="glass dark:glass-dark p-8 rounded-2xl space-y-4">
                            <div className="flex justify-between items-center pb-4 border-b border-sage/20">
                                <span className="text-sage-dark/60 dark:text-cream/60">Tipo:</span>
                                <span className="font-bold text-sage-dark dark:text-cream">
                                    {PRODUCT_TYPES.find((p) => p.id === selection)?.label}
                                </span>
                            </div>
                            <div className="flex justify-between items-center pb-4 border-b border-sage/20">
                                <span className="text-sage-dark/60 dark:text-cream/60">Nombre:</span>
                                <span className="font-bold text-sage-dark dark:text-cream">{details.name}</span>
                            </div>
                            <div className="pb-4 border-b border-sage/20">
                                <span className="text-sage-dark/60 dark:text-cream/60 block mb-2">Tu idea:</span>
                                <p className="text-sage-dark dark:text-cream">{details.idea}</p>
                            </div>
                            {details.deadline && (
                                <div className="flex justify-between items-center pb-4 border-b border-sage/20">
                                    <span className="text-sage-dark/60 dark:text-cream/60">Fecha:</span>
                                    <span className="font-bold text-sage-dark dark:text-cream">{details.deadline}</span>
                                </div>
                            )}
                            {imagePreview && (
                                <div className="pb-4 border-b border-sage/20">
                                    <span className="text-sage-dark/60 dark:text-cream/60 block mb-2">Imagen de referencia:</span>
                                    <img
                                        src={imagePreview}
                                        alt="Tu referencia"
                                        className="w-24 h-24 object-cover rounded-lg border border-sage/20"
                                    />
                                    <p className="text-xs text-terracotta mt-2">
                                        ⚠️ Recordá adjuntar esta imagen en el chat de WhatsApp
                                    </p>
                                </div>
                            )}

                            <div className="flex gap-4 pt-4">
                                <button
                                    onClick={() => setStep(2)}
                                    className="px-6 py-3 rounded-xl border border-sage/30 text-sage-dark dark:text-cream hover:bg-sage/10 transition-colors"
                                >
                                    Editar
                                </button>
                                <button
                                    onClick={handleSubmit}
                                    className="flex-1 py-4 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#1fb855] transition-colors flex items-center justify-center gap-2 shadow-lg"
                                >
                                    Enviar por WhatsApp 💬
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
