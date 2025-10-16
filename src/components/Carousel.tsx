"use client";

import Stripe from "stripe";
import { Card, CardContent, CardTitle } from "./ui/card";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
	products: Stripe.Product[];
}

export default function Carousel({ products }: Props) {
	const [current, setCurrent] = useState<number>(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrent((prev) => (prev + 1) % products.length);
		}, 3000);

		return () => clearInterval(interval);
	}, [products.length]);

	const currentProduct = products[current];

	const price = currentProduct.default_price as Stripe.Price;

	return (
		<Card className="relative flex items-center justify-center mt-6 overflow-hidden rounded-lg shadow-md border-gray-300">
			{currentProduct.images && currentProduct.images[0] && (
				<Link
					href={`/products/${currentProduct.id}`}
					className="relative h-80 w-1/2"
				>
					<Image
						alt={currentProduct.name}
						src={currentProduct.images[0]}
						fill={true}
						objectFit="cover"
						quality={100}
						className="transition-opacity rounded-sm duration-500 ease-in-out"
					/>
				</Link>
			)}
			<CardContent className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br  from-[#3333333a] to-[#4444443f] pointer-events-none">
				<CardTitle className="text-3xl font-bold text-white mb-2">
					{currentProduct.name}
					{price && price.unit_amount && (
						<p className="text-xl">
							${(price.unit_amount / 100).toFixed(2)}
						</p>
					)}
				</CardTitle>
			</CardContent>
		</Card>
	);
}
