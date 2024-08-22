"use client";

import HlsPlayer from "@/components/HlsPlayer";
import Video from "next-video";
import PopupModal from "@/components/myComponents/PopupModal";
import { useState } from "react";
import Section from "@/components/myComponents/Section";
import Container from "@/components/myComponents/Container";
import Testing from "@/components/Testing";
import { Button } from "@/components/ui/button";

// Render a YouTube video player
const url =
	"https://res.cloudinary.com/baibhavmalaviya/video/upload/sp_hd/v1/tutorial_videos/vsvkrjdikfisjtcbxu88.m3u8?_a=BAMABkRg0";

export default function Home() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);
	return (
		<section className="flex items-center justify-center gap-3 flex-col">
			<h1 className="text-3xl font-semibold">Home page</h1>
			<Testing />
			<Section bgColor="bg-gray-100" paddingY="py-16">
				<Container>
					<h1 className="text-3xl font-bold text-gray-900">
						Welcome to My Website
					</h1>
					<p className="mt-4 text-lg text-gray-700">
						This is a sample section with some content.
					</p>
				</Container>
			</Section>
			<hr className="py-2 border-2 border-red-950 w-full" />
			<Section bgColor="bg-white" paddingY="py-24">
				<Container>
					<h2 className="text-2xl font-semibold text-gray-800">
						Another Section
					</h2>
					<p className="mt-4 text-base text-gray-600">
						More content can go here. Customize this section as needed.
					</p>
				</Container>
			</Section>
			<Testing />
			<div className="p-6">
				<button
					onClick={openModal}
					className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
				>
					Open Modal
				</button>

				<PopupModal isOpen={isModalOpen} onClose={closeModal}>
					<h1 className="text-gray-700 mx-auto bg-background">
						This is the content of the modal.
					</h1>
					<Section>
						<form className="flex flex-col">
							<input
								type="text"
								className="border-[1px] border-primary my-2 p-3 rounded"
							/>
							<input
								type="text"
								className="border-[1px] border-primary my-2 p-3 rounded"
							/>
							<input
								type="text"
								className="border-[1px] border-primary my-2 p-3 rounded"
							/>
							<input
								type="text"
								className="border-[1px] border-primary my-2 p-3 rounded"
							/>

							<Button>Submit</Button>
						</form>
					</Section>
				</PopupModal>
			</div>
		</section>
	);
}
