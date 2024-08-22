"use client";
import FadeIn from "@/components/myComponents/Animations/FadeIn";
import SlideIn from "@/components/myComponents/Animations/SlideIn";
import Container from "@/components/myComponents/Container";
import Section from "@/components/myComponents/Section";
import React from "react";

function Dashboard() {
	return (
		<div>
			<Section>
				<Container>
					<SlideIn>
						<FadeIn>This is dashboard page</FadeIn>
					</SlideIn>
				</Container>
			</Section>
		</div>
	);
}

export default Dashboard;
