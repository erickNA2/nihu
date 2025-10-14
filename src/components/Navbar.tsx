"use client";
import Link from "next/link";
import {
	ShoppingCartIcon,
	Bars3Icon,
	XMarkIcon,
} from "@heroicons/react/24/outline";
import { useCartStore } from "@/store/CartStore";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";

export default function Navbar() {
	const [mobileOpen, setMobileOpen] = useState<boolean>(false);
	const { items } = useCartStore();
	const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = window.scrollY;

			setVisible(
				prevScrollPos > currentScrollPos || currentScrollPos < 10
			);
			setPrevScrollPos(currentScrollPos);
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, [prevScrollPos]);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768) {
				setMobileOpen(false);
			}

			window.addEventListener("resize", handleResize);
			return () => window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<nav
			className={`fixed w-screen top-0 left-0 z-50 bg-white shadow transition-all duration-500 ease-in-out overflow-hidden ${
				visible ? "h-18" : "h-0"
			}`}
		>
			<div className="container mx-auto flex items-center justify-between p-4">
				<Link href="/">
					<Image
						src={"/logo.svg"}
						alt="logo"
						width={48}
						height={48}
					></Image>
				</Link>

				<div className="hidden md:flex space-x-6">
					<Link href="/" className="hover:text-[#1A5534]">
						Inicio
					</Link>
					<Link href="/products" className="hover:text-[#1A5534]">
						Vasos
					</Link>
					<Link href="/checkout" className="hover:text-[#1A5534]">
						Checkout
					</Link>
				</div>
				<div className="flex items-center space-x-4">
					<Link href="/checkout" className="relative">
						<ShoppingCartIcon className="h-6 w-6" />
						{cartCount > 0 && (
							<span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
								{cartCount}
							</span>
						)}
					</Link>
					<Button
						variant="ghost"
						className="md:hidden"
						onClick={() => setMobileOpen((prev) => !prev)}
					>
						{mobileOpen ? (
							<XMarkIcon className="h-6 w-6" />
						) : (
							<Bars3Icon className="h-6 w-6" />
						)}
					</Button>
				</div>
			</div>
			{mobileOpen && (
				<nav className="md:hidden bg-white shadow-md">
					<ul className="flex flex-col p-4 space-y-2">
						<li>
							<Link
								href="/"
								className="block hover:text-[#1A5534]"
							>
								Inicio
							</Link>
						</li>
						<li>
							<Link
								href="/products"
								className="block hover:text-[#1A5534]"
							>
								Vasos
							</Link>
						</li>
						<li>
							<Link
								href="/checkout"
								className="block hover:text-[#1A5534]"
							>
								Checkout
							</Link>
						</li>
					</ul>
				</nav>
			)}
		</nav>
	);
}
