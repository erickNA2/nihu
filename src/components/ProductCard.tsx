import Link from "next/link";
import Stripe from "stripe";
import { Card, CardHeader, CardContent, CardTitle } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";

interface Props {
	product: Stripe.Product;
}

export const ProductCard = ({ product }: Props) => {
	const price = product.default_price as Stripe.Price;

	return (
		<Link href={`/products/${product.id}`} className="block h-full">
			<Card className="group hover:shadow-md border-0 transition duration-300 h-full flex flex-col gap-0 hover:underline">
				{product.images && product.images[0] && (
					<div className="relative h-60 w-full rounded-lg overflow-hidden">
						<Image
							alt={product.name}
							src={product.images[0]}
							fill={true}
							objectFit="cover"
							className="group-hover:opacity-90 transition-all duration-600 rounded-lg hover:scale-110 overflow-hidden"
						/>
					</div>
				)}
				<CardHeader className="p-4">
					<CardTitle className="text-lg font-bold text-gray-800 w-full text-center">
						{product.name}
					</CardTitle>
				</CardHeader>
				<CardContent className="flex-grow flex flex-col justify-center">
					{/* {product.description && (
						<p className="text-gray-600 text-sm mb-2 w-full text-center">
							{product.description}
						</p>
					)} */}
					{price && price.unit_amount && (
						<p className="text-sm font-bold text-gray-900 opacity-80 w-full text-left no-underline">
							R${(price.unit_amount / 100).toFixed(2)}
						</p>
					)}
					{price && price.unit_amount && (
						<p className="text-sm mb-1 text-gray-900 opacity-60 w-full text-left no-underline">
							R$
							{(
								price.unit_amount / 100 -
								((price.unit_amount / 100) * 4) / 100
							).toFixed(2)}{" "}
							no pix a vista
						</p>
					)}
					{price && price.unit_amount && (
						<p className="text-sm text-gray-900 opacity-50 w-full text-left no-underline">
							3x de R$
							{(price.unit_amount / 100 / 3).toFixed(2)} sem juros
						</p>
					)}
				</CardContent>
			</Card>
		</Link>
	);
};
