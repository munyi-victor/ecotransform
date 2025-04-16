'use client';

import { useParams } from 'next/navigation';
import ProductDetails from "./ProductDetails";

export default function Page() {
  const params = useParams();
  return <ProductDetails id={params.id as string} />;
}
