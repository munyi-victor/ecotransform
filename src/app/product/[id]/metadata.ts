import { Metadata } from "next";

export async function generateMetadata({
    params,
}: {
    params: { id: string };
}): Promise<Metadata> {
    return {
        title: "Product Details | EcoTransform",
        description:
            "View detailed information about our sustainable products made from recycled materials.",
        openGraph: {
            title: "Product Details | EcoTransform",
            description:
                "View detailed information about our sustainable products made from recycled materials.",
            images: [
                {
                    url: "/images/wood_table.jpg",
                    width: 800,
                    height: 600,
                    alt: "EcoTransform Product",
                },
            ],
        },
    };
} 