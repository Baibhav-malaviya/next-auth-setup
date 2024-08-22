import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
import Container from "@/components/myComponents/Container";
import Link from "next/link";

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
						<Container className="p-2 bg-violet-500/30 flex items-center justify-between">
							<Link href={"/"}>
								<h1 className="text-3xl font-bold">Logo</h1>
							</Link>
							<UserButton />
						</Container>
					</header>
					<main className="flex min-h-screen flex-col items-center justify-between ">
						{children}
					</main>
				</body>
			</html>
		</ClerkProvider>
	);
}
