import { Metadata } from 'next';
import ShopPage from './ShopPage';

// Server component for metadata
export const metadata: Metadata = {
  title: 'Shop | EcoTransform - Sustainable Products',
  description: 'Browse our collection of sustainable products made from recycled materials. Furniture, accessories, art, and homeware that make a positive environmental impact.',
  keywords: 'sustainable shop, eco-friendly products, recycled furniture, green accessories, sustainable art, eco homeware',
  openGraph: {
    title: 'Shop | EcoTransform - Sustainable Products',
    description: 'Browse our collection of sustainable products made from recycled materials. Furniture, accessories, art, and homeware that make a positive environmental impact.',
    images: [
      {
        url: '/images/wood_table.jpg',
        width: 800,
        height: 600,
        alt: 'EcoTransform Shop',
      },
    ],
  },
};

export default function Page() {
  return <ShopPage />;
} 