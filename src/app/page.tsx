import { stripe } from "@/lib/stripe";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Carousel from "@/components/Carousel";
import Link from "next/link";

export default async function Home() {
	const products = await stripe.products.list({
		expand: ["data.default_price"],
		limit: 5,
	});

	return (
		<div>
			<section className="rounded bg-gradient-to-br from-neutral-100 to-neutral-300 py-8 sm:py-12">
				<div className="mx-auto grid grid-cols-1 items-center justify-items-center gap-8 px-8 sm:px-16 md:grid-cols-2">
					<div className="max-w-md space-y-4">
						<h2 className="text-3xl font-bold tracking-tight md:text-4xl ">
							NiHo Cerâmica
						</h2>
						<p className=" text-neutral-600">
							Encontre o vaso perfeito para decorar seu lar.
						</p>
						<Button
							asChild
							variant="default"
							className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-[#2E8B57] text-white"
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
						width={450}
						height={450}
						src={products.data[0].images[0]}
						className="rounded"
					/>
				</div>
			</section>
			<section>
				<Carousel products={products.data}></Carousel>
			</section>
		</div>
	);
}
