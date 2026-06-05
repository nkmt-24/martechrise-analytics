import { Variants } from 'framer-motion';

export const marqueeVariants: Variants = {
    animate: {
        x: [0, "-100%"],
        transition: {
            x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
            },
        },
    },
};
