"use client";
import Stripe from "stripe";
import Image from "next/image";
import { Button } from "./ui/button";
import { useCartStore } from "@/store/CartStore";
import Link from "next/link";

interface Props {
	product: Stripe.Product;
}

export const ProductDetail = ({ product }: Props) => {
	const { items, addItem, removeItem } = useCartStore();
	const price = product.default_price as Stripe.Price;
	const cartItem = items.find((item) => item.id === product.id);
	const quantity = cartItem ? cartItem.quantity : 0;

	const onAddItem = () => {
		addItem({
			id: product.id,
			name: product.name,
			price: price.unit_amount as number,
			imageUrl: product.images ? product.images[0] : null,
			quantity: 1,
		});
	};

	return (
		<div className="container md:mx-auto md:px-4 flex flex-col md:flex-row gap-8 items-center">
			{product.images && product.images[0] && (
				<div className="relative h-screen w-full ">
					<Image
						alt={product.name}
						src={product.images[0]}
						fill={true}
						objectFit="cover"
						className="transition duration-300 hover:opacity-90 rounded-md"
					/>
				</div>
			)}
			<div className="w-screen px-8 md:w-1/2 overflow-hidden">
				<h1 className="text-3xl font-bold mb-4 w-full md:w-auto text-center">
					{product.name}
				</h1>
				{product.description && (
					<p className="text-gray-700 mb-4 w-screen md:w-full text-left text-clip">
						{product.description}
					</p>
				)}
				{price && price.unit_amount && (
					<p className="text-lg font-semibold text-gray-900">
						${(price.unit_amount / 100).toFixed(2)}
					</p>
				)}
				<div className="flex items-center space-x-4 mb-4">
					<Button
						variant={"outline"}
						onClick={() => removeItem(product.id)}
					>
						-
					</Button>
					<span className="text-lg font-semibold">{quantity}</span>
					<Button variant={"outline"} onClick={onAddItem}>
						+
					</Button>
				</div>
				<div className="flex items-center space-x-4">
					<Button
						variant="default"
						className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-[#2E8B57] text-white"
					>
						<Link href={"/checkout"}>Checkout</Link>
					</Button>
					<Button
						variant="default"
						className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-[#2E8B57] text-white"
					>
						<Link href={"/products"}>Ver Mais</Link>
					</Button>
				</div>
			</div>
		</div>
	);
};
