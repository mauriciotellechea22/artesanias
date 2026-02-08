export const SANDRA_PHONE = "59894524182"; // Sandra's real number

interface DesignBrief {
    name: string;
    idea: string;
    deadline: string;
    hasImage?: boolean;
}

export const generateProductMessage = (productName: string, price: number) => {
    return `Hola Sandra, me encantó este diseño de *${productName}* ($${price}). Me gustaría coordinar contigo el diseño personalizado.`;
};

export const generateBriefMessage = (brief: DesignBrief) => {
    const imageMsg = brief.hasImage ? "\n📷 Te adjunto una imagen de referencia." : "";
    return `Hola Sandra! Soy *${brief.name}*.
  
Tengo una idea para un pedido personalizado:
"${brief.idea}"

Me gustaría tenerlo para la fecha: ${brief.deadline}.${imageMsg}
¿Podemos coordinar?`;
};

export const getWhatsAppUrl = (message: string) => {
    return `https://wa.me/${SANDRA_PHONE}?text=${encodeURIComponent(message)}`;
};
