"use client";
import React, { useState } from "react";
import { Menu, X, User, Lock, Globe, Cpu, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { UserButton, useAuth } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const { isSignedIn } = useAuth();
	const pathname = usePathname();

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg fixed w-full top-0 left-0 z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					{/* Logo */}
					<div className="flex-shrink-0 flex items-center">
						<Link href="/">
							<span className="text-2xl font-bold text-white hover:text-yellow-300 transition duration-300">
								MyApp
							</span>
						</Link>
					</div>

					{/* Menu (Desktop) */}
					<div className="hidden md:flex md:items-center space-x-6">
						<NavLink
							href="/"
							icon={<Globe className="w-4 h-4 mr-1" />}
							isActive={pathname === "/"}
						>
							Public Page
						</NavLink>
						<NavLink
							href="/client-side"
							icon={<Cpu className="w-4 h-4 mr-1" />}
							isActive={pathname === "/client-side"}
						>
							Client-Side Page
						</NavLink>
						<NavLink
							href="/server-side"
							icon={<Server className="w-4 h-4 mr-1" />}
							isActive={pathname === "/server-side"}
						>
							Server-Side Page
						</NavLink>
						<NavLink
							href="/user-data"
							icon={<User className="w-4 h-4 mr-1" />}
							isActive={pathname === "/user-data"}
						>
							User Data
						</NavLink>
						{isSignedIn ? (
							<UserButton afterSignOutUrl="/" />
						) : (
							<Link href="/sign-in">
								<Button
									variant="outline"
									className="ml-4 bg-white text-indigo-600 border-transparent hover:bg-yellow-300 hover:text-indigo-700 transition duration-300 text-sm"
								>
									<Lock className="w-4 h-4 mr-1" />
									Sign In
								</Button>
							</Link>
						)}
					</div>

					{/* Mobile Menu Button */}
					<div className="flex items-center md:hidden">
						<button
							onClick={toggleMenu}
							className="text-white focus:outline-none focus:ring-2 focus:ring-white rounded-md p-2"
						>
							{isOpen ? (
								<X className="h-6 w-6" />
							) : (
								<Menu className="h-6 w-6" />
							)}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			{isOpen && (
				<div className="md:hidden bg-indigo-700">
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
						<MobileNavLink
							href="/"
							icon={<Globe className="w-4 h-4 mr-1" />}
							isActive={pathname === "/"}
						>
							Public Page
						</MobileNavLink>
						<MobileNavLink
							href="/client-side"
							icon={<Cpu className="w-4 h-4 mr-1" />}
							isActive={pathname === "/client-side"}
						>
							Client-Side Page
						</MobileNavLink>
						<MobileNavLink
							href="/server-side"
							icon={<Server className="w-4 h-4 mr-1" />}
							isActive={pathname === "/server-side"}
						>
							Server-Side Page
						</MobileNavLink>
						<MobileNavLink
							href="/user-data"
							icon={<User className="w-4 h-4 mr-1" />}
							isActive={pathname === "/user-data"}
						>
							User Data
						</MobileNavLink>
						{isSignedIn ? (
							<div className="px-3 py-2">
								<UserButton />
							</div>
						) : (
							<Link href="/sign-in">
								<Button
									variant="outline"
									className="w-full mt-2 bg-white text-indigo-600 border-transparent hover:bg-yellow-300 hover:text-indigo-700 transition duration-300 text-sm"
								>
									<Lock className="w-4 h-4 mr-1" />
									Sign In
								</Button>
							</Link>
						)}
					</div>
				</div>
			)}
		</nav>
	);
}

interface NavLinkProps {
	href: string;
	icon: React.ReactNode;
	children: React.ReactNode;
	isActive: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({
	href,
	icon,
	children,
	isActive,
}) => (
	<Link href={href}>
		<span
			className={`flex items-center text-sm ${
				isActive
					? "text-yellow-300 font-semibold"
					: "text-white hover:text-yellow-300"
			} transition duration-300`}
		>
			{icon}
			{children}
		</span>
	</Link>
);

const MobileNavLink: React.FC<NavLinkProps> = ({
	href,
	icon,
	children,
	isActive,
}) => (
	<Link href={href}>
		<span
			className={`flex items-center ${
				isActive
					? "bg-indigo-800 text-yellow-300 font-semibold"
					: "text-white hover:bg-indigo-600 hover:text-yellow-300"
			} block rounded-md px-3 py-2 text-sm font-medium transition duration-300`}
		>
			{icon}
			{children}
		</span>
	</Link>
);
