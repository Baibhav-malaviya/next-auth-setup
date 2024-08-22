"use client";
import FadeIn from "@/components/myComponents/Animations/FadeIn";
import SlideIn from "@/components/myComponents/Animations/SlideIn";
import Container from "@/components/myComponents/Container";
import Section from "@/components/myComponents/Section";
import axios from "axios";
import React, { useEffect, useState } from "react";

function User() {
	const [username, setUsername] = useState(null);
	const [unsafeMetadata, setUnsafeMetadata] = useState(null);
	useEffect(() => {
		(async () => {
			const { data } = await axios.get("api/get-user");
			console.log("user: ", data.user.unsafeMetadata);
			if (data) setUsername(data.user.firstName);
			setUnsafeMetadata(data.user.unsafeMetadata.role);
		})();
	}, [username]);
	return (
		<div>
			<Section>
				<Container>
					<SlideIn>
						<h1 className="text-3xl font-semibold text-center">
							👋Hello, {username}
						</h1>
						<p>role: {unsafeMetadata}</p>
						<FadeIn>This is Client page but user data coming from api</FadeIn>
					</SlideIn>
				</Container>
			</Section>
		</div>
	);
}

export default User;
