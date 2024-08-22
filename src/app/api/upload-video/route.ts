import cloudinary from "@/app/utils/cloudinary.config";
import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import { join } from "path";
import os from "os";

export async function POST(req: NextRequest) {
	try {
		// Parse formData
		const formData = await req.formData();
		const file = formData.get("file") as File;
		const title = formData.get("title") as string;
		const fileSize = formData.get("fileSize") as string;

		if (!file || !title) {
			return NextResponse.json(
				{
					success: false,
					message: `Missing required data`,
				},
				{ status: 400 }
			);
		}

		// Save file temporarily
		const bytes = await file.arrayBuffer();
		const buffer = Buffer.from(bytes);
		const tempDir = os.tmpdir();
		const path = join(tempDir, file.name);
		await writeFile(path, buffer);

		// Upload to Cloudinary
		const uploadResponse = await new Promise((resolve, reject) => {
			cloudinary.uploader.upload(
				path,
				{
					resource_type: "video",
					folder: "tutorial_videos",
				},
				(error, result) => {
					if (error) reject(error);
					else resolve(result);
				}
			);
		});

		// Cast uploadResponse to any to avoid TypeScript errors
		const cloudinaryResponse = uploadResponse as any;

		console.log("cloudinaryResponse: ", cloudinaryResponse);

		// Generate URLs
		const hlsUrl = cloudinary.url(cloudinaryResponse.public_id, {
			resource_type: "video",
			streaming_profile: "hd",
			format: "m3u8",
		});

		const adaptiveUrl = cloudinary.url(cloudinaryResponse.public_id, {
			resource_type: "video",
			streaming_profile: "hd",
			format: "auto",
			quality: "auto",
		});

		// Save video information to your database here if needed

		return NextResponse.json(
			{
				success: true,
				message: `Video uploaded successfully`,
				data: {
					title,
					fileSize,
					hlsUrl,
					adaptiveUrl,
				},
			},
			{ status: 200 }
		);
	} catch (error: any) {
		console.log("Error in upload-video route api", error);
		return NextResponse.json(
			{
				success: false,
				message: `Error in upload-video route api: ${error.message}`,
			},
			{ status: 500 }
		);
	}
}
