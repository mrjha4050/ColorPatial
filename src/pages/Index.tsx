import React, { useState } from 'react';
import ColorPicker from '../components/ColorPicker';
import ProductCard from '../components/ProductCard';
import { Button } from '../components/ui/button';
import { useToast } from '../components/ui/use-toast';

const products = [
  {
    id: 1,
    title: 'Modern Living Room Design',
    price: 299,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
    description: 'Complete interior design package for your living room',
  },
  {
    id: 2,
    title: 'Minimalist Bedroom Setup',
    price: 249,
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&h=600&fit=crop',
    description: 'Transform your bedroom with our minimalist design approach',
  },
  {
    id: 3,
    title: 'Kitchen Renovation Package',
    price: 399,
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop',
    description: 'Modern kitchen design with premium materials',
  },
];

const Index = () => {
  const [backgroundColor, setBackgroundColor] = useState('#F5F5F0');
  const { toast } = useToast();

  const handleColorChange = (color: string) => {
    setBackgroundColor(color);
  };

  const handlePurchase = (productId: number) => {
    toast({
      title: "Coming Soon!",
      description: "Payment integration will be available shortly.",
      duration: 3000,
    });
  };

  return (
    <div style={{ backgroundColor }} className="min-h-screen transition-colors duration-300">
 
 <nav className="bg-white border-b border-gray-200 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl	 font-semibold text-gray-800">
            Interior Design Co.
          </div>
          <div className="flex items-center space-x-6 font-bold text-lg">
            <a href="#" className="text-gray-600 hover:text-gray-800 text-lg">Home</a>
            <a href="/productspage" className="text-gray-600 hover:text-gray-800 text-lg">Products</a>
            <button className="text-gray-600 hover:text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.34 5.34a1 1 0 001 1.16H18.4a1 1 0 001-1.16L17 13M7 13L5.4 5M17 13l1.34 5.34M17 13H7" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <section className="container px-4 pt-20 pb-16 text-center animate-fadeIn">
        <h1 className="text-5xl font-bold mb-6">Transform Your Space</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Discover the perfect blend of style and functionality with our interior design solutions
        </p>
        <Button className="bg-black text-white px-8 py-6 text-lg hover:bg-gray-800">
          Get Started
        </Button>
      </section>

      <section className="container px-4 py-16">
        <div className="max-w-md mx-auto">
          <ColorPicker onColorChange={handleColorChange} />
        </div>
      </section>

      <section className="container px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Design Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onPurchase={() => handlePurchase(product.id)}
            />
          ))}
        </div>
      </section>

      <section className="container px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Space?</h2>
        <p className="text-xl text-gray-600 mb-8">
          Contact us for a personalized consultation
        </p>
        <Button className="bg-black text-white px-8 py-6 text-lg hover:bg-gray-800">
          Contact Us
        </Button>
      </section>
    </div>
  );
};

export default Index;