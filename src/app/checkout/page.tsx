"use client";
import { useCartStore } from "@/store/CartStore";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { checkoutAction } from "./checkout-action";
import Link from "next/link";
import Image from "next/image";

// export const metadata: Metadata = {
//   title: "NiHo Checkout",
//   description: "Vazos de Cerâmica Resistentes Decorativos Artesanais com Estilo Oriental",
// }

export default function CheckoutPage() {
	const { items, addItem, removeItem } = useCartStore();
	const total = items.reduce(
		(acc, item) => acc + item.price * item.quantity,
		0
	);

	if (total === 0 || items.length === 0) {
		return (
			<div className="container w-screen h-screen mx-auto px-4 py-8 text-center">
				<h1 className="text-3xl font-bold">Seu carrinho está vazio.</h1>
				<Link
					href={"/products"}
					className="text-blue-600 hover:underline"
				>
					Ver Vasos
				</Link>
			</div>
		);
	}

	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold mb-8 text-center">Checkout </h1>
			<Card className="max-w-md mx-auto mb-8">
				<CardHeader>
					<CardTitle className="text-xl font-bold">
						Resumo do Pedido
					</CardTitle>
				</CardHeader>
				<CardContent>
					<ul className="space-y-4">
						{items.map((item) => (
							<li
								key={item.id}
								className="flex flex-col gap-2 border-b pb-2"
							>
								<div className="flex justify-between">
									<Image
										width={60}
										height={60}
										src={item.imageUrl!}
										alt={item.name}
										className="mr-2"
									/>
									<span className="font-medium">
										{item.name}
									</span>
									<span className="font-semibold">
										$
										{(
											(item.price * item.quantity) /
											100
										).toFixed(2)}
									</span>
								</div>
								<div className="flex items-center gap-2">
									<Button
										variant="outline"
										size="sm"
										onClick={() => removeItem(item.id)}
									>
										–
									</Button>
									<span className="text-lg font-semibold">
										{item.quantity}
									</span>
									<Button
										variant="outline"
										size="sm"
										onClick={() =>
											addItem({ ...item, quantity: 1 })
										}
									>
										+
									</Button>
								</div>
							</li>
						))}
					</ul>
					<div className="mt-4 border-t pt-2 text-lg font-semibold">
						Total: ${(total / 100).toFixed(2)}
					</div>
				</CardContent>
			</Card>
			<form action={checkoutAction} className="max-w-md mx-auto">
				<input
					type="hidden"
					name="items"
					value={JSON.stringify(items)}
				/>
				<Button
					variant={"default"}
					type="submit"
					className="w-full bg-[#2E8B57]"
				>
					Prosseguir
				</Button>
			</form>
		</div>
	);
}
