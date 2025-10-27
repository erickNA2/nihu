import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
	title: {
		default: "NiHo Cerâmica",
		template: "NiHo | %s",
	},
	description:
		"Procurando por Vazos de Cerâmica decorativos para transformar seus ambientes? Aqui você encontrará uma enorme variedade de Vazos de Cerâmica Artesanais com Estilo Oriental. Resistentes e com acabamentos para embelezar e transformar o ambiente",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-br">
			<head>
				<link
					rel="icon"
					href="/icon?<generated>"
					type="image/<generated>"
					sizes="<generated>"
				/>
			</head>
			<body className="flex min-h-full flex-col bg-white overflow-x-hidden mt-10">
				<Navbar></Navbar>
				<main className="flex-grow container mx-auto py-8">
					{children}
				</main>
				<Footer></Footer>
			</body>
		</html>
	);
}
