"use client";
import { Input } from "@/components/ui/input";
import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";

function Page() {
	const [file, setFile] = useState<File | null>(null);
	const [title, setTitle] = useState<string>("");
	const [fileSize, setFileSize] = useState<string>("");
	const [isUploading, setIsUploading] = useState(false);
	const [uploadError, setUploadError] = useState<string | null>(null);

	const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
		const selectedFile = event.target.files?.[0] || null;
		setFile(selectedFile);
		if (selectedFile) {
			setFileSize((selectedFile.size / (1024 * 1024)).toFixed(2)); // Convert size to MB
		}
	};

	const handleFormSubmit = async (event: FormEvent) => {
		event.preventDefault();

		if (!file) {
			setUploadError("No file selected");
			return;
		}

		setIsUploading(true);
		setUploadError(null);

		const formData = new FormData();
		formData.append("file", file);
		formData.append("title", title);
		formData.append("fileSize", fileSize);

		try {
			const response = await axios.post("/api/upload-video", formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});
			console.log("video-upload response:", response.data);
			// Handle successful upload (e.g., show success message, clear form)
			setTitle("");
			setFile(null);
			setFileSize("");
		} catch (error) {
			console.error("Error uploading video:", error);
			setUploadError("Failed to upload video. Please try again.");
		} finally {
			setIsUploading(false);
		}
	};

	return (
		<section>
			<div>
				<form
					onSubmit={handleFormSubmit}
					className="flex flex-col gap-3 p-4 border-primary border-[.5px] rounded"
				>
					<div>
						<Input
							type="text"
							placeholder="Enter video title"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
					</div>
					<Input type="file" onChange={handleFileSelect} accept="video/*" />
					{file && <p>File size: {fileSize} MB</p>}
					{isUploading && <p>Uploading video...</p>}
					{uploadError && <p className="text-red-500">{uploadError}</p>}
					<Button type="submit" disabled={isUploading || !file}>
						{isUploading ? "Uploading..." : "Upload Video"}
					</Button>
				</form>
			</div>
		</section>
	);
}

export default Page;
