import { stripe } from "@/lib/stripe";
import { ProductList } from "@/components/ProductList";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Vazos",
	description:
		"Vazos de Cerâmica Resistentes Decorativos Artesanais com Estilo Oriental",
};

export default async function ProductsPage() {
	const products = await stripe.products.list({
		expand: ["data.default_price"],
		limit: 5,
	});

	return (
		<div className="pb-8">
			<h1 className="text-3xl font-bold leading-none tracking-tight text-foreground text-center mb-8">
				Vasos
			</h1>
			<ProductList products={products.data}></ProductList>
		</div>
	);
}
