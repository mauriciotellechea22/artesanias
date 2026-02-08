# Guía de Implementación - Sandra Artesana

Este proyecto es una web de e-commerce artesanal de lujo construida con **Next.js 15+ (App Router)**, **Tailwind CSS v4** y **Framer Motion**.

## 🚀 Despliegue Rápido (Recomendado: Vercel)

1.  **Sube el código a GitHub**:
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    # Crea un repo en GitHub y sigue las instrucciones para push
    ```

2.  **Conecta con Vercel**:
    - Ve a [Vercel](https://vercel.com).
    - "Add New Project" -> Importa tu repositorio.
    - Framework Preset: Next.js (automático).
    - **Deploy**.

## 🛠️ Configuración Local

1.  **Instalar dependencias**:
    ```bash
    npm install
    ```

2.  **Correr en desarrollo**:
    ```bash
    npm run dev
    ```
    Visita `http://localhost:3000`.

## 🎨 Personalización

### Productos
Edita el archivo `src/lib/data.ts` para agregar o modificar productos.
- Las imágenes usan URLs externas (Unsplash). Reemplázalas por fotos reales subidas a `public/images` o un CDN.

### WhatsApp
Edita `src/lib/whatsapp.ts`:
- Cambia la constante `SANDRA_PHONE` por el número real (ej: `59899123456`).

### Estilos
Los colores y fuentes se definen en `src/app/globals.css` bajo la directiva `@theme`.
- `wood-light`, `wood-dark`, `wood-accent` son los colores principales.

## 📱 Funcionalidades Clave

1.  **Catálogo Futbolero**: Sección destacada para productos de Nacional/Peñarol.
2.  **Pirograbados**: Galería con efecto parallax y zoom.
3.  **Configurador**: Wizard de 3 pasos para pedidos personalizados.
4.  **WhatsApp Automation**:
    - Botón flotante.
    - Mensajes pre-cargados con detalles del producto.
    - Formulario de brief que genera un mensaje estructurado.

## 📦 Estructura del Proyecto

- `src/app`: Rutas y Layout global.
- `src/components`: Componentes reutilizables (Hero, ProductCard, etc.).
- `src/lib`: Lógica de negocio (WhatsApp, Datos).
