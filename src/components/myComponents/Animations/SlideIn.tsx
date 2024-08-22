// components/SlideIn.tsx
import React from "react";
import { motion } from "framer-motion";

const slideInVariants = {
	hidden: { opacity: 0, x: -30 },
	visible: { opacity: 1, x: 0 },
};

const SlideIn = ({ children }: { children: React.ReactNode }) => {
	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.2 }} // Trigger when 20% is in view
			variants={slideInVariants}
			transition={{ duration: 0.5, ease: "easeOut" }}
		>
			{children}
		</motion.div>
	);
};

export default SlideIn;
