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
    image: '/placeholder.svg',
    description: 'Complete interior design package for your living room',
  },
  {
    id: 2,
    title: 'Minimalist Bedroom Setup',
    price: 249,
    image: '/placeholder.svg',
    description: 'Transform your bedroom with our minimalist design approach',
  },
  {
    id: 3,
    title: 'Kitchen Renovation Package',
    price: 399,
    image: '/placeholder.svg',
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
      {/* Hero Section */}
      <section className="container px-4 pt-20 pb-16 text-center animate-fadeIn">
        <h1 className="text-5xl font-bold mb-6">Transform Your Space</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Discover the perfect blend of style and functionality with our interior design solutions
        </p>
        <Button className="bg-black text-white px-8 py-6 text-lg hover:bg-gray-800">
          Get Started
        </Button>
      </section>

      {/* Color Picker Section */}
      <section className="container px-4 py-16">
        <div className="max-w-md mx-auto">
          <ColorPicker onColorChange={handleColorChange} />
        </div>
      </section>

      {/* Products Section */}
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

      {/* Contact Section */}
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