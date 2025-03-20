import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const handleWhatsAppClick = () => {
    const message = `Hi, I'm interested in your product: ${product.name}`;
    const whatsappUrl = `https://wa.me/${product.seller.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={product.image} 
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600 mt-1">{product.description}</p>
        <p className="text-blue-600 font-medium mt-2">{product.price}</p>
        
        <div className="mt-3 pt-3 border-t">
          <p className="text-sm text-gray-600">Seller: {product.seller.name}</p>
          <p className="text-sm text-gray-600">{product.seller.location}</p>
          
          <button
            onClick={handleWhatsAppClick}
            className="mt-3 w-full bg-green-500 text-white py-2 px-4 rounded flex items-center justify-center hover:bg-green-600"
          >
            <MessageCircle className="mr-2" size={20} />
            Contact on WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}