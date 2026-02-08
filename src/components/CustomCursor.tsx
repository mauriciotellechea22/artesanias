"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Only show on desktop
        if (typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches) {
            setIsVisible(true);
        }

        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });

            const target = e.target as HTMLElement;
            const isClickable =
                target.tagName === "A" ||
                target.tagName === "BUTTON" ||
                target.closest("a") ||
                target.closest("button") ||
                window.getComputedStyle(target).cursor === "pointer";

            setIsPointer(!!isClickable);
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        window.addEventListener("mousemove", handleMouseMove);
        document.body.addEventListener("mouseleave", handleMouseLeave);
        document.body.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.body.removeEventListener("mouseleave", handleMouseLeave);
            document.body.removeEventListener("mouseenter", handleMouseEnter);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <>
            {/* Main cursor - flame/ember */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
                animate={{
                    x: position.x - 12,
                    y: position.y - 12,
                    scale: isPointer ? 1.5 : 1,
                }}
                transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
            >
                <div className={`w-6 h-6 flex items-center justify-center transition-transform ${isPointer ? 'scale-125' : ''}`}>
                    <span className="text-lg select-none">🔥</span>
                </div>
            </motion.div>

            {/* Trailing glow */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9998]"
                animate={{
                    x: position.x - 20,
                    y: position.y - 20,
                }}
                transition={{ type: "spring", stiffness: 200, damping: 20, mass: 1 }}
            >
                <div className="w-10 h-10 rounded-full bg-wood-accent/30 blur-xl" />
            </motion.div>

            <style jsx global>{`
        * {
          cursor: none !important;
        }
        @media (pointer: coarse) {
          * {
            cursor: auto !important;
          }
        }
      `}</style>
        </>
    );
}
