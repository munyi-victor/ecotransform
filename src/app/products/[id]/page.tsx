'use client'

import { useParams } from 'next/navigation';
import ProductDetails from '@/app/components/ProductDetails';

// This would typically come from an API or database
const products = [
  {
    id: 1,
    name: "Recycled Wood Table",
    description: "Handcrafted from reclaimed wood, this table combines rustic charm with modern design.",
    category: "Furniture",
    image: "/images/wood_table.jpg",
    impact: {
      co2: 25,
      water: 1000,
      trees: 2
    },
    details: {
      materials: ["Reclaimed oak wood", "Natural wood finish", "Recycled metal hardware"],
      dimensions: "120cm x 80cm x 75cm",
      care: "Wipe with damp cloth, avoid direct sunlight",
      story: "Each table is uniquely crafted from wood salvaged from old furniture and construction sites, giving new life to materials that would otherwise end up in landfills."
    }
  },
  {
    id: 2,
    name: "Upcycled Chair",
    description: "A unique chair made from recycled materials, perfect for adding character to any space.",
    category: "Furniture",
    image: "/images/upcycled_chair.jpg",
    impact: {
      co2: 15,
      water: 600,
      trees: 1
    },
    details: {
      materials: ["Recycled metal frame", "Upcycled fabric", "Sustainable padding"],
      dimensions: "45cm x 45cm x 90cm",
      care: "Spot clean fabric, regular dusting of metal frame",
      story: "This chair combines industrial heritage with modern comfort, using materials that tell a story of sustainability and innovation."
    }
  },
  {
    id: 3,
    name: "Bottle Cap Mosaic",
    description: "Vibrant wall art created from recycled bottle caps, showcasing creativity in sustainability.",
    category: "Art",
    image: "/images/cap_mosaic.jpg",
    impact: {
      co2: 5,
      water: 200,
      trees: 0
    },
    details: {
      materials: ["Recycled bottle caps", "Eco-friendly adhesive", "Recycled frame"],
      dimensions: "60cm x 60cm",
      care: "Dust regularly, avoid direct sunlight",
      story: "Each piece is a unique collection of bottle caps collected from local communities, transformed into stunning artwork that raises awareness about recycling."
    }
  },
  {
    id: 4,
    name: "Recycled Glass Vase",
    description: "Elegant vase crafted from recycled glass, perfect for displaying fresh or dried flowers.",
    category: "Homeware",
    image: "/images/glass_vase.jpg",
    impact: {
      co2: 8,
      water: 300,
      trees: 0
    },
    details: {
      materials: ["Recycled glass", "Natural dyes", "Eco-friendly finish"],
      dimensions: "30cm height, 15cm diameter",
      care: "Hand wash with mild soap, dry thoroughly",
      story: "Our glass vases are handcrafted from locally collected glass bottles, each piece unique in its color and pattern."
    }
  },
  {
    id: 5,
    name: "Eco-Friendly Tote",
    description: "Stylish tote bag made from recycled plastic materials, durable and sustainable.",
    category: "Accessories",
    image: "/images/plastic_tote.jpg",
    impact: {
      co2: 3,
      water: 150,
      trees: 0
    },
    details: {
      materials: ["Recycled PET bottles", "Organic cotton lining", "Recycled metal hardware"],
      dimensions: "40cm x 35cm x 10cm",
      care: "Machine wash cold, air dry",
      story: "Each tote is made from approximately 10 recycled plastic bottles, transformed into a durable and stylish accessory."
    }
  },
  {
    id: 6,
    name: "Tire Planters",
    description: "Innovative planters made from upcycled tires, perfect for indoor or outdoor plants.",
    category: "Homeware",
    image: "/images/tire_planters.jpg",
    impact: {
      co2: 10,
      water: 400,
      trees: 0
    },
    details: {
      materials: ["Upcycled tires", "Eco-friendly paint", "Drainage system"],
      dimensions: "Various sizes available",
      care: "Clean with mild soap, ensure proper drainage",
      story: "These planters give new life to discarded tires while creating beautiful spaces for plants to thrive."
    }
  }
];

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold font-serif text-gray-800 mb-4">Product Not Found</h1>
          <p className="text-gray-600">The product you&apos;re looking for doesn&apos;t exist.</p>
        </div>
      </div>
    );
  }

  return <ProductDetails product={product} />;
} 
