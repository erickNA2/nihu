import { stripe } from "@/lib/stripe";
import { ProductDetail } from "@/components/ProductDetail";
import { Metadata } from "next";

type Props = {
	params: Promise<{ id: string }>;
};

export const generateMetadata = async ({
	params,
}: Props): Promise<Metadata> => {
	const { id } = await params;
	const product = await stripe.products.retrieve(id, {
		expand: ["default_price"],
	});

	return {
		title: product.name,
		description: product.description,
	};
};

export default async function ProductPage({ params }: Props) {
	const { id } = await params;
	const product = await stripe.products.retrieve(id, {
		expand: ["default_price"],
	});

	const plainProduct = JSON.parse(JSON.stringify(product));
	return <ProductDetail product={plainProduct}></ProductDetail>;
}
