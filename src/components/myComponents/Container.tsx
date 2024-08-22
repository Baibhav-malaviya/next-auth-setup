// components/Container.tsx
import React from "react";

interface ContainerProps {
	children: React.ReactNode;
	className?: string;
}

const Container = ({ children, className = "" }: ContainerProps) => {
	return (
		<div className={`mx-auto px-2 sm:px-6 lg:px-8 ${className}`}>
			{children}
		</div>
	);
};

export default Container;
