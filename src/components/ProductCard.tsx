import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
  description: string;
  onPurchase: () => void;
}

const ProductCard = ({ title, price, image, description, onPurchase }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg animate-fadeIn">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold">${price}</span>
          <Button onClick={onPurchase} className="bg-black text-white hover:bg-gray-800">
            Purchase
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;