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
    // FÚTBOL - Materas
    {
        id: "matera-nacional",
        name: "Matera Nacional",
        category: "futbol",
        price: 3500,
        description:
            "Matera de madera pintada con los colores del Club Nacional de Football. Compartimentos para mate, termo y azúcar.",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80",
        tags: ["Nacional", "Fútbol", "Madera"],
    },
    {
        id: "matera-penarol",
        name: "Matera Peñarol",
        category: "futbol",
        price: 3500,
        description:
            "Orgullo aurinegro plasmado en madera. Colores amarillo y negro con escudo pintado a mano.",
        image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=800&q=80",
        tags: ["Peñarol", "Fútbol", "Madera"],
    },
    {
        id: "matera-wanderers",
        name: "Matera Wanderers",
        category: "futbol",
        price: 3500,
        description:
            "Homenaje al Club Atlético Wanderers. Madera noble con los colores bohemios.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
        tags: ["Wanderers", "Fútbol", "Madera"],
    },
    {
        id: "matera-defensor",
        name: "Matera Defensor",
        category: "futbol",
        price: 3500,
        description:
            "Para los hinchas del Defensor Sporting. Acabado violeta con escudo del club.",
        image: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?auto=format&fit=crop&w=800&q=80",
        tags: ["Defensor", "Fútbol", "Madera"],
    },

    // PIROGRABADOS
    {
        id: "pirograbado-caballo",
        name: "Caballo Criollo",
        category: "pirograbado",
        price: 5200,
        description:
            "Retrato de caballo criollo uruguayo en madera noble. 40+ horas de trabajo artesanal.",
        image: "https://images.unsplash.com/photo-1534773728080-33d31da27ae5?auto=format&fit=crop&w=800&q=80",
        tags: ["Caballo", "Campo", "Uruguay"],
    },
    {
        id: "pirograbado-mascota",
        name: "Retrato de Mascota",
        category: "pirograbado",
        price: 4800,
        description:
            "Inmortaliza a tu compañero peludo en madera. Envía una foto y creamos una obra única.",
        image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80",
        tags: ["Mascota", "Personalizado", "Regalo"],
    },
    {
        id: "pirograbado-gaucho",
        name: "Retrato Gaucho",
        category: "pirograbado",
        price: 4500,
        description:
            "Homenaje a la tradición gaucha uruguaya. Pirograbado detallado sobre madera de cedro.",
        image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=800&q=80",
        tags: ["Gaucho", "Tradición", "Arte"],
    },

    // CUADROS
    {
        id: "cuadro-rambla",
        name: "Atardecer Rambla",
        category: "cuadros",
        price: 5200,
        description:
            "Pirograbado capturando la esencia de la Rambla de Montevideo al caer el sol. Pieza única.",
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
        tags: ["Montevideo", "Paisaje", "Uruguay"],
    },
    {
        id: "cuadro-campo",
        name: "Amanecer Campo",
        category: "cuadros",
        price: 4800,
        description:
            "La tranquilidad del campo uruguayo capturada en madera. Ideal para decorar espacios amplios.",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
        tags: ["Campo", "Naturaleza", "Decoración"],
    },
    {
        id: "cuadro-familia",
        name: "Retrato Familiar",
        category: "cuadros",
        price: 6500,
        description:
            "Transforma una foto familiar en una obra de arte atemporal. El regalo perfecto.",
        image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80",
        tags: ["Familia", "Personalizado", "Regalo"],
    },
];

export const CATEGORIES = [
    { id: "all", label: "Todos", icon: "✨" },
    { id: "futbol", label: "Fútbol", icon: "⚽" },
    { id: "pirograbado", label: "Pirograbados", icon: "🔥" },
    { id: "cuadros", label: "Cuadros", icon: "🖼️" },
];
