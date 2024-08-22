"use client";
import FadeIn from "@/components/myComponents/Animations/FadeIn";
import SlideIn from "@/components/myComponents/Animations/SlideIn";
import Container from "@/components/myComponents/Container";
import Section from "@/components/myComponents/Section";
import React from "react";

function Home() {
	return (
		<div>
			<Section>
				<Container>
					<SlideIn>
						<FadeIn>This is Home page</FadeIn>
					</SlideIn>
				</Container>
			</Section>
		</div>
	);
}

export default Home;
