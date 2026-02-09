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
    // FÚTBOL - Materas con fotos reales
    {
        id: "matera-nacional",
        name: "Matera Nacional",
        category: "futbol",
        price: 3500,
        description:
            "Matera con escudo del Club Nacional de Football pirograbado en madera noble. Detalle artesanal único.",
        image: "/sandra/nacional-escudo.jpg",
        tags: ["Nacional", "Fútbol", "Pirograbado"],
    },
    {
        id: "matera-penarol",
        name: "Matera Peñarol - Carbonero",
        category: "futbol",
        price: 4500,
        description:
            "Matera pintada a mano con la locomotora y escudo de Peñarol. Colores aurinegros vibrantes. ¡Una obra de arte!",
        image: "/sandra/penarol-tren.jpg",
        tags: ["Peñarol", "Fútbol", "Pintada"],
    },
    {
        id: "matera-auf",
        name: "Matera Selección Uruguay",
        category: "futbol",
        price: 3800,
        description:
            "Escudo de la AUF (Asociación Uruguaya de Fútbol) con las 4 estrellas. Pirograbado sobre madera de pino.",
        image: "/sandra/auf-matera.jpg",
        tags: ["Uruguay", "AUF", "Selección"],
    },
    {
        id: "matera-danubio",
        name: "Matera Danubio FC",
        category: "futbol",
        price: 3500,
        description:
            "Matera violeta con el escudo de Danubio Fútbol Club. Pintada a mano con acabado profesional.",
        image: "/sandra/sandra-danubio.jpg",
        tags: ["Danubio", "Fútbol", "Pintada"],
    },

    // PIROGRABADOS
    {
        id: "pirograbado-personalizado",
        name: "Pirograbado Personalizado",
        category: "pirograbado",
        price: 4800,
        description:
            "¿Tenés una idea única? La plasmamos en madera. Retratos, mascotas, paisajes o lo que imagines.",
        image: "/sandra/nacional-matera.jpg",
        tags: ["Personalizado", "A pedido", "Único"],
    },
    {
        id: "cuadro-retrato",
        name: "Retrato Familiar",
        category: "cuadros",
        price: 6500,
        description:
            "Transforma una foto familiar en una obra de arte atemporal. El regalo perfecto para ocasiones especiales.",
        image: "/sandra/sandra-pintando.jpg",
        tags: ["Familia", "Personalizado", "Regalo"],
    },
];

export const CATEGORIES = [
    { id: "all", label: "Todos", icon: "✨" },
    { id: "futbol", label: "Fútbol", icon: "⚽" },
    { id: "pirograbado", label: "Pirograbados", icon: "🔥" },
    { id: "cuadros", label: "Cuadros", icon: "🖼️" },
];
