import Container from "@/components/myComponents/Container";
import Section from "@/components/myComponents/Section";
import { auth, currentUser } from "@clerk/nextjs/server";
import React from "react";

async function Server() {
	const { userId } = auth();
	const user = await currentUser();
	if (!userId) return <>Loading</>;
	return (
		<div>
			<Section>
				<Container>
					<h1 className="text-3xl font-semibold text-center">
						👋Hello, {user?.firstName}
					</h1>
					<p>This is server page</p>
				</Container>
			</Section>
		</div>
	);
}

export default Server;
