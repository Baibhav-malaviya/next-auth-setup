// components/FadeIn.tsx
import React from "react";
import { motion } from "framer-motion";

const fadeInVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
};

const FadeIn = ({ children }: { children: React.ReactNode }) => {
	return (
		<motion.div
			initial="hidden"
			animate="visible"
			variants={fadeInVariants}
			transition={{ duration: 0.4, ease: "easeInOut" }}
		>
			{children}
		</motion.div>
	);
};

export default FadeIn;
