export type Product = {
    id: string;
    name: string;
    category: "futbol" | "pirograbado" | "madera" | "ceramica";
    price: number;
    description: string;
    image: string;
    tags: string[];
};

export const products: Product[] = [
    // FÚTBOL
    {
        id: "matera-nacional",
        name: "Matera Nacional",
        category: "futbol",
        price: 3500,
        description:
            "Escudo del Club Nacional de Football pirograbado en madera noble. Detalle artesanal único, protección incluida.",
        image: "/sandra/nacional-escudo.jpg",
        tags: ["Nacional", "Pirograbado", "Matera"],
    },
    {
        id: "matera-penarol",
        name: "Matera Peñarol - Carbonero",
        category: "futbol",
        price: 4500,
        description:
            "Matera pintada a mano con la locomotora y escudo de Peñarol. Colores aurinegros vibrantes. ¡Una obra de arte!",
        image: "/sandra/penarol-tren.jpg",
        tags: ["Peñarol", "Pintada", "Matera"],
    },
    {
        id: "matera-auf",
        name: "Matera Selección Uruguay",
        category: "futbol",
        price: 3800,
        description:
            "Escudo de la AUF con las 4 estrellas pirograbado sobre madera de pino. Orgullo celeste.",
        image: "/sandra/auf-matera.jpg",
        tags: ["Uruguay", "AUF", "Pirograbado"],
    },
    {
        id: "matera-danubio",
        name: "Matera Danubio FC",
        category: "futbol",
        price: 3500,
        description:
            "Matera con el escudo de Danubio Fútbol Club. Pintada a mano con acabado profesional.",
        image: "/sandra/sandra-danubio.jpg",
        tags: ["Danubio", "Pintada", "Matera"],
    },

    // PIROGRABADO / MADERA
    {
        id: "tabla-asado",
        name: "Tabla para Asado",
        category: "madera",
        price: 3200,
        description:
            "Tablas de madera personalizadas: cuadradas, redondas, rectangulares o con asa. Pirograbado o pintadas a elección.",
        image: "/sandra/nacional-matera.jpg",
        tags: ["Tabla", "Asado", "Personalizada"],
    },
    {
        id: "pirograbado-personalizado",
        name: "Pirograbado Personalizado",
        category: "pirograbado",
        price: 4800,
        description:
            "¿Tenés una idea única? La plasmamos en madera. Retratos, mascotas, paisajes o lo que imagines. 100% artesanal.",
        image: "/sandra/sandra-pintando.jpg",
        tags: ["Personalizado", "A pedido", "Único"],
    },
];

export const CATEGORIES = [
    { id: "all", label: "Todos", icon: "✨" },
    { id: "futbol", label: "Fútbol", icon: "⚽" },
    { id: "madera", label: "Madera", icon: "🪵" },
    { id: "pirograbado", label: "Pirograbados", icon: "🔥" },
    { id: "ceramica", label: "Cerámica", icon: "🏺" },
];
