"use client";
import FadeIn from "@/components/myComponents/Animations/FadeIn";
import SlideIn from "@/components/myComponents/Animations/SlideIn";
import Container from "@/components/myComponents/Container";
import Section from "@/components/myComponents/Section";
import { useUser } from "@clerk/nextjs";
import React from "react";

function Client() {
	const { isLoaded, user } = useUser();

	if (!isLoaded) return <>Loading...</>;
	return (
		<div>
			<Section>
				<Container>
					<SlideIn>
						<h1 className="text-3xl font-semibold text-center">
							👋Hello, {user?.firstName}
						</h1>
						<FadeIn>This is Client page</FadeIn>
					</SlideIn>
				</Container>
			</Section>
		</div>
	);
}

export default Client;
