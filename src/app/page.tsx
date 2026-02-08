"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Hero } from "@/components/Hero";
import { ProductCard } from "@/components/ProductCard";
import { CustomConfigurator } from "@/components/CustomConfigurator";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Navbar } from "@/components/Navbar";
import { Lightbox } from "@/components/Lightbox";
import { AboutSection } from "@/components/AboutSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { products, CATEGORIES, Product } from "@/lib/data";
import { ArrowBigRight } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightboxProduct, setLightboxProduct] = useState<Product | null>(null);

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const futbolProducts = products.filter((p) => p.category === "futbol");

  return (
    <main className="min-h-screen bg-cream dark:bg-charcoal transition-colors">
      <Navbar />
      <Hero />

      {/* About Section */}
      <AboutSection />

      {/* Futbol Collection */}
      <section id="coleccion" className="py-20 px-4 md:px-8 relative z-10 bg-cream dark:bg-charcoal">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-7xl mx-auto space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <div className="inline-block px-4 py-1 rounded-full border border-sage/30 dark:border-cream/20 text-sage-dark/60 dark:text-cream/60 text-sm uppercase tracking-widest mb-4">
              Colección Futbolera
            </div>
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-sage-dark dark:text-cream tracking-tighter">
              PASIÓN CHARRÚA
            </h2>
            <p className="text-sage-dark/70 dark:text-cream/70 text-lg md:text-xl max-w-2xl mx-auto font-light">
              Materas y cuadros que respiran fútbol. Nacional, Peñarol, y tu
              equipo del corazón tallados para siempre en madera noble.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start"
          >
            {futbolProducts.map((p, i) => (
              <motion.div key={p.id} variants={itemVariants}>
                <ProductCard
                  product={p}
                  onClick={() => setLightboxProduct(p)}
                  className={`h-[420px] ${i === 1 ? "md:translate-y-8" : ""}`}
                />
              </motion.div>
            ))}

            {/* CTA Card */}
            <motion.div variants={itemVariants}>
              <a
                href="#personalizar"
                className="glass dark:glass-dark flex flex-col items-center justify-center p-8 text-center h-[420px] hover:bg-sage/10 dark:hover:bg-sage/20 transition-colors cursor-pointer rounded-2xl group border-dashed border-2 border-sage/30 dark:border-cream/20 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-terracotta/5 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full blur-3xl opacity-50" />
                <div className="relative z-10 max-w-xs">
                  <h3 className="text-2xl font-bold text-sage-dark dark:text-cream font-serif mb-4 group-hover:translate-x-2 transition-transform">
                    ¿Tu cuadro no está aquí?
                  </h3>
                  <p className="text-sage-dark/80 dark:text-cream/80 mb-8 leading-relaxed text-sm">
                    Hago escudos de todos los clubes del interior, baby fútbol y
                    ligas amateur.
                  </p>
                  <span className="inline-flex items-center gap-2 font-bold text-terracotta group-hover:gap-4 transition-all">
                    Pedir el mío <ArrowBigRight />
                  </span>
                </div>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Full Catalog */}
      <section id="catalogo" className="py-24 px-4 bg-sage-light/50 dark:bg-sage-dark/20 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-7xl mx-auto space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-sage-dark dark:text-cream">
              CATÁLOGO COMPLETO
            </h2>
            <p className="text-sage-dark/60 dark:text-cream/60 text-lg max-w-xl mx-auto">
              Explora todas las creaciones o filtra por categoría
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full font-medium transition-all flex items-center gap-2 ${selectedCategory === cat.id
                    ? "bg-terracotta text-cream shadow-lg scale-105"
                    : "bg-white/60 dark:bg-white/10 text-sage-dark dark:text-cream hover:bg-white dark:hover:bg-white/20"
                  }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </motion.div>

          {/* Products Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProductCard
                  product={p}
                  onClick={() => setLightboxProduct(p)}
                  className="h-[380px]"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Process Section */}
      <section className="py-32 px-4 bg-sage-dark text-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] mix-blend-overlay pointer-events-none" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={itemVariants} className="space-y-8 relative z-10">
            <span className="text-terracotta font-bold tracking-[0.2em] uppercase">
              Arte y Fuego
            </span>
            <h2 className="text-5xl md:text-6xl font-serif font-bold leading-tight">
              EL PROCESO <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-terracotta to-wood-accent">
                ARTESANAL
              </span>
            </h2>
            <p className="text-xl leading-relaxed text-cream/70 font-light border-l-2 border-terracotta pl-6">
              &ldquo;El fuego dibuja la historia&rdquo;. Cada trazo es quemado a mano con
              precisión milimétrica, creando piezas con profundidad, textura y
              alma que ninguna máquina puede replicar.
            </p>

            <div className="flex gap-4 pt-4">
              <div className="text-center px-6 py-4 glass-dark rounded-xl">
                <span className="block text-3xl font-bold text-terracotta">40h</span>
                <span className="text-xs text-cream/50 uppercase">De Trabajo</span>
              </div>
              <div className="text-center px-6 py-4 glass-dark rounded-xl">
                <span className="block text-3xl font-bold text-terracotta">100%</span>
                <span className="text-xs text-cream/50 uppercase">Artesanal</span>
              </div>
              <div className="text-center px-6 py-4 glass-dark rounded-xl">
                <span className="block text-3xl font-bold text-terracotta">15+</span>
                <span className="text-xs text-cream/50 uppercase">Años Exp.</span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-terracotta/20 rounded-full blur-[100px]" />
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="glass-dark p-4 rounded-xl">
                  <span className="text-3xl">📐</span>
                  <h4 className="font-bold mt-2">1. Diseño</h4>
                  <p className="text-sm text-cream/60">Boceto a mano y aprobación</p>
                </div>
                <div className="glass-dark p-4 rounded-xl">
                  <span className="text-3xl">🔥</span>
                  <h4 className="font-bold mt-2">3. Pirograbado</h4>
                  <p className="text-sm text-cream/60">Trazo a trazo con fuego</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="glass-dark p-4 rounded-xl">
                  <span className="text-3xl">🪵</span>
                  <h4 className="font-bold mt-2">2. Selección</h4>
                  <p className="text-sm text-cream/60">Madera noble uruguaya</p>
                </div>
                <div className="glass-dark p-4 rounded-xl">
                  <span className="text-3xl">✨</span>
                  <h4 className="font-bold mt-2">4. Acabado</h4>
                  <p className="text-sm text-cream/60">Barniz protector mate</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Custom Configurator */}
      <section id="personalizar" className="py-24 px-4 relative bg-cream dark:bg-charcoal">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-3xl mx-auto text-center mb-16 space-y-4"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-serif font-bold text-sage-dark dark:text-cream"
          >
            CREA TU OBRA
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-sage-dark/60 dark:text-cream/60 text-xl font-light"
          >
            Cuéntame tu idea. Yo pongo las manos y el corazón.
          </motion.p>
        </motion.div>

        <CustomConfigurator />
      </section>

      {/* FAQ */}
      <FAQSection />

      <WhatsAppButton />
      <Lightbox product={lightboxProduct} onClose={() => setLightboxProduct(null)} />
      <Footer />
    </main>
  );
}
