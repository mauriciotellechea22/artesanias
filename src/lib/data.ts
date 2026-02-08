export type Product = {
    id: string;
    name: string;
    category: "futbol" | "pirograbado" | "cuadros";
    price: number;
    description: string;
    image: string;
    tags: string[];
};

export const products: Product[] = [
    // FÚTBOL
    {
        id: "matera-nacional",
        name: "Matera Gloriosa - Nacional",
        category: "futbol",
        price: 3500,
        description:
            "Matera de madera tallada con el escudo del Club Nacional de Football. Acabado premium con barniz mate protector.",
        image: "https://images.unsplash.com/photo-1614264629465-4d6d6e7e7272?auto=format&fit=crop&q=80",
        tags: ["Nacional", "Fútbol", "Madera"],
    },
    {
        id: "matera-penarol",
        name: "Matera Carbonera - Peñarol",
        category: "futbol",
        price: 3500,
        description:
            "Orgullo aurinegro plasmado en madera. Pirograbado a mano con detalles en oro y acabado satinado.",
        image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&q=80",
        tags: ["Peñarol", "Fútbol", "Madera"],
    },
    {
        id: "matera-wanderers",
        name: "Matera Bohemia - Wanderers",
        category: "futbol",
        price: 3500,
        description:
            "Homenaje al Club Atlético Wanderers. Tallado tradicional con el escudo bohemio en detalle.",
        image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80",
        tags: ["Wanderers", "Fútbol", "Madera"],
    },
    {
        id: "matera-defensor",
        name: "Matera Violeta - Defensor",
        category: "futbol",
        price: 3500,
        description:
            "Para los hinchas del Defensor Sporting. Pirograbado artesanal con detalles violetas.",
        image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80",
        tags: ["Defensor", "Fútbol", "Madera"],
    },

    // PIROGRABADOS
    {
        id: "pirograbado-leon",
        name: "Retrato León - Pirograbado",
        category: "pirograbado",
        price: 4500,
        description:
            "Retrato hiperrealista de un león. 40 horas de trabajo manual sobre madera noble de cedro.",
        image: "https://images.unsplash.com/photo-1549488497-6c2e36128795?auto=format&fit=crop&q=80",
        tags: ["Arte", "Fiera", "Decoración"],
    },
    {
        id: "pirograbado-caballo",
        name: "Caballo Criollo - Pirograbado",
        category: "pirograbado",
        price: 5200,
        description:
            "Homenaje al caballo criollo uruguayo. Detalles milimétricos que capturan la esencia gaucha.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80",
        tags: ["Caballo", "Campo", "Uruguay"],
    },
    {
        id: "pirograbado-mascota",
        name: "Retrato de Mascota Personalizado",
        category: "pirograbado",
        price: 4800,
        description:
            "Inmortaliza a tu compañero peludo en madera. Envía una foto y creamos una obra única.",
        image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80",
        tags: ["Mascota", "Personalizado", "Regalo"],
    },

    // CUADROS
    {
        id: "cuadro-rambla",
        name: "Atardecer en la Rambla",
        category: "cuadros",
        price: 5200,
        description:
            "Pirograbado capturando la esencia de la Rambla de Montevideo al caer el sol. Pieza única.",
        image: "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?auto=format&fit=crop&q=80",
        tags: ["Montevideo", "Paisaje", "Uruguay"],
    },
    {
        id: "cuadro-campo",
        name: "Amanecer en el Campo",
        category: "cuadros",
        price: 4800,
        description:
            "La tranquilidad del campo uruguayo capturada en madera. Ideal para decorar espacios amplios.",
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80",
        tags: ["Campo", "Naturaleza", "Decoración"],
    },
    {
        id: "cuadro-familia",
        name: "Retrato Familiar Pirograbado",
        category: "cuadros",
        price: 6500,
        description:
            "Transforma una foto familiar en una obra de arte atemporal. El regalo perfecto para ocasiones especiales.",
        image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&q=80",
        tags: ["Familia", "Personalizado", "Regalo"],
    },
];

export const CATEGORIES = [
    { id: "all", label: "Todos", icon: "✨" },
    { id: "futbol", label: "Fútbol", icon: "⚽" },
    { id: "pirograbado", label: "Pirograbados", icon: "🔥" },
    { id: "cuadros", label: "Cuadros", icon: "🖼️" },
];
