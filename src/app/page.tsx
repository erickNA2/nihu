import { stripe } from "@/lib/stripe";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ProductList } from "@/components/ProductList";

export default async function Home() {
	const products = await stripe.products.list({
		expand: ["data.default_price"],
		limit: 5,
	});

	return (
		<>
			<section className="relative h-screen flex items-center justify-center overflow-y-hidden">
				<div className="max-w-md space-y-4 z-3 text-white flex flex-col items-center justify-center">
					<h2 className="text-3xl font-bold tracking-tight md:text-4xl ">
						NiHo Cerâmica
					</h2>
					<p className="opacity-80">
						Encontre o vaso perfeito para decorar seu lar.
					</p>
					<Button
						asChild
						variant="default"
						className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-[#2E8B57] "
					>
						<Link
							href="/products"
							className="inline-flex items-center justify-center rounded-full px-6 py-3"
						>
							Ver Mais
						</Link>
					</Button>
				</div>

				<Image
					alt="banner"
					width={1920}
					height={1279}
					src={"/bg-1.jpg"}
					className="absolute top-0 left-0 z-1 w-full h-full"
				/>
				<div className="absolute top-0 left-0 z-2 w-full h-full bg-gray-900 opacity-20"></div>
			</section>
			<section className="mt-8">
				<ProductList products={products.data}></ProductList>
			</section>
		</>
	);
}
