// components/Section.tsx
import React from "react";

interface SectionProps {
	children: React.ReactNode;
	className?: string;
	bgColor?: string;
	paddingY?: string;
}

const Section = ({
	children,
	className = "",
	bgColor = "bg-white",
	paddingY = "py-8",
}: SectionProps) => {
	return (
		<section className={`${bgColor} ${paddingY} ${className}`}>
			{children}
		</section>
	);
};

export default Section;
