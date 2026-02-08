"use client";

export function useMicroInteraction() {
    const playClick = () => {
        // Haptic feedback for mobile
        if (typeof navigator !== "undefined" && "vibrate" in navigator) {
            navigator.vibrate(10);
        }

        // Optional: Play a subtle click sound
        try {
            const audio = new Audio("/sounds/click.mp3");
            audio.volume = 0.1;
            audio.play().catch(() => {
                // Ignore autoplay restrictions
            });
        } catch {
            // Audio not available
        }
    };

    const playSuccess = () => {
        if (typeof navigator !== "undefined" && "vibrate" in navigator) {
            navigator.vibrate([10, 50, 10]);
        }

        try {
            const audio = new Audio("/sounds/success.mp3");
            audio.volume = 0.15;
            audio.play().catch(() => { });
        } catch {
            // Audio not available
        }
    };

    return { playClick, playSuccess };
}
