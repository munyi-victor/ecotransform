import { Metadata } from 'next';
import ProductDetails from './ProductDetails';

// Server component for metadata
export async function generateMetadata({ id: string }): Promise<Metadata> {
  // In a real app, you would fetch the product data here
  // For now, we'll return a generic metadata
  return {
    title: 'Product Details | EcoTransform',
    description: 'View detailed information about our sustainable products made from recycled materials.',
    openGraph: {
      title: 'Product Details | EcoTransform',
      description: 'View detailed information about our sustainable products made from recycled materials.',
      images: [
        {
          url: '/images/wood_table.jpg',
          width: 800,
          height: 600,
          alt: 'EcoTransform Product',
        },
      ],
    },
  };
}

export default function Page({ params }: { params: { id: string } }) {
  return <ProductDetails id={params.id} />;
} 
