/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Plus, Minus, ShoppingCart } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { Product } from '../types';
import { getImageUrl } from '../utils/image';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, quantity: number) => void;
  onImageClick?: (image: string, name: string) => void;
  key?: string | number;
}

export default function ProductCard({ product, onAddToCart, onImageClick }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);

  const adjustQuantity = (amount: number) => {
    setQuantity(prev => Math.max(1, prev + amount));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="group bg-white rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-gray-100 hover:border-pink-200 transition-all duration-500 hover:shadow-[0_20px_50px_-20px_rgba(255,20,147,0.15)] flex flex-col h-full"
      id={`product-${product.id}`}
    >
      <div 
        className="relative aspect-[1/1.1] overflow-hidden bg-gray-50 flex items-center justify-center cursor-pointer group/img"
        onClick={() => onImageClick?.(getImageUrl(product.image), product.name)}
      >
        <img
          src={getImageUrl(product.image)}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-[1200ms] cubic-bezier(0.4, 0, 0.2, 1) group-hover/img:scale-110"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            if (!target.src.includes('unsplash')) {
              console.log(`Fallback for ${product.image}`);
              target.src = 'https://images.unsplash.com/photo-1530103043960-ef38714abb15?q=80&w=600&auto=format&fit=crop';
            }
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-700 flex items-end justify-center pb-8">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white/95 backdrop-blur-md px-6 py-2.5 rounded-full text-pink-500 shadow-2xl border border-pink-100"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Ver Detalhes</span>
            </motion.div>
        </div>
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-white/90 backdrop-blur-md text-pink-600 border border-pink-100 px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] shadow-sm">
            {product.category}
          </span>
        </div>
      </div>

      <div className="p-6 md:p-10 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-3 gap-4">
          <h3 className="text-lg md:text-2xl font-display font-black text-gray-900 leading-tight tracking-tighter uppercase">
            {product.name}
          </h3>
          <div className="flex flex-col items-end">
            <span className="text-base md:text-xl font-black text-pink-500 whitespace-nowrap">
              R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </span>
            <span className="text-[9px] font-bold text-gray-300 uppercase tracking-tighter">Reserva</span>
          </div>
        </div>
        <p className="text-xs md:text-base text-gray-700 mb-8 line-clamp-2 leading-relaxed font-medium">
          {product.description}
        </p>

        <div className="mt-auto space-y-4">
          <div className="flex items-center justify-between bg-gray-50/80 rounded-2xl p-2 border border-gray-100/50">
            <span className="text-[9px] font-black text-gray-400 uppercase ml-3 tracking-widest">Qtd</span>
            <div className="flex items-center gap-2 md:gap-3">
              <button
                onClick={() => adjustQuantity(-1)}
                className="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
                aria-label="Diminuir quantidade"
              >
                <Minus size={10} />
              </button>
              <span className="text-[10px] md:text-sm font-bold w-4 text-center">{quantity}</span>
              <button
                onClick={() => adjustQuantity(1)}
                className="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
                aria-label="Aumentar quantidade"
              >
                <Plus size={10} />
              </button>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onAddToCart(product, quantity)}
            className="w-full bg-black text-white py-3 md:py-3 rounded-xl md:rounded-2xl font-black uppercase tracking-widest text-[8px] md:text-[10px] flex items-center justify-center gap-2 md:gap-3 hover:bg-gray-800 transition-colors shadow-lg shadow-gray-200"
          >
            <ShoppingCart size={14} />
            ADICIONAR AO CARRINHO
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
