"use client";

import { motion, useInView, UseInViewOptions } from "framer-motion";
import { useRef } from "react";

interface FadeInProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
    viewport?: UseInViewOptions;
}

export default function FadeIn({
    children,
    className = "",
    delay = 0,
    direction = "up",
    viewport = { once: true, margin: "-100px" },
}: FadeInProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, viewport);

    const directionOffset = {
        up: { y: 40, x: 0 },
        down: { y: -40, x: 0 },
        left: { x: 40, y: 0 },
        right: { x: -40, y: 0 },
    };

    return (
        <motion.div
            ref={ref}
            initial={{
                opacity: 0,
                ...directionOffset[direction],
            }}
            animate={
                isInView
                    ? { opacity: 1, x: 0, y: 0 }
                    : { opacity: 0, ...directionOffset[direction] }
            }
            transition={{
                duration: 0.8,
                delay: delay,
                ease: [0.16, 1, 0.3, 1], // easeOutExpo
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
