import { SiteHeader } from "../components/site-header"
import { ProductCard } from '../components/product-card'
import Features from '../components/features'
import Footer from '../components/footer'
import Link from "next/link";
// import { Button } from '@/components/ui/button'
import styles from "../styles/Home.module.css";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} 
from '@radix-ui/react-select';
const products = [
    
  {
    name: 'Sytherine',
    category: 'Stylish cafe chair',
    price: 2500000,
    originalPrice: 3500000,
    image: '/images/IMG-20241209-WA0028.jpg',
    badge: 'sale' as const,
  },
  {
    name: 'Leviosa',
    category: 'Stylish cafe chair',
    price: 2500000,
    image: '/images/WhatsApp Image 2024-12-08 at 10.16.12_0964fa4e.jpg',
  },
  {
    name: 'Lolito',
    category: 'Luxury big sofa',
    price: 7000000,
    originalPrice: 14000000,
    image: '/images/IMG-20241208-WA0009.jpg',
    badge: 'sale' as const,
  },
  {
    name: 'Respira',
    category: 'Outdoor bar table and stool',
    price: 500000,
    image: '/images/IMG-20241209-WA0015.jpg',
    badge: 'new' as const,
  },
  // Repeat products to fill the grid...
]

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-gray-50">
    < SiteHeader />
      <main>
        <div className="back relative h-[300px] bg-center">
          <div className="absolute inset-0 bg-black/50" />
          <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-white relative z-10">
            <h1 className="text-4xl font-bold mb-2">SHOP</h1>
            <div className="flex items-center space-x-2">
              <span>Home</span>
              <span>/</span>
              <span>Shop</span>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <div className="flex items-center gap-4">
              <button >
                <span className="mr-2">Filter</span>
                <span className="text-xs">(0)</span>
              </button>
              <button >Grid</button>
              <button>List</button>
            </div>
            
            <div className="flex items-center gap-4">
              <p className="text-sm">Showing 1-16 of 32 results</p>
              <Select defaultValue="default">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="product-grid">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>

          <div className="num flex justify-center mt-8 gap-2">
            <button>1</button>
           <button >2</button>
            <button >3</button>
            <button >Next</button>
          </div>
        </div>
      <Features />
      <Footer />
    </main>
    </div>
  )
}
