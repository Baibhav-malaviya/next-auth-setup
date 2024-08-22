import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Setup | Next.js",
	description:
		"Next.js project with Clerk authentication, Shadcn UI, and Tailwind CSS. Features include a video uploader returning m3u8/HLS URLs and reusable components like FadeIn, SlideIn, Container, and PopupModal. Designed for easy project setup—clone and start quickly. Open to contributions!",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body className={inter.className}>
					<header className="">
						<Navbar />
					</header>
					<main className="flex min-h-screen flex-col items-center justify-between mt-16">
						{children}
					</main>
				</body>
			</html>
		</ClerkProvider>
	);
}
