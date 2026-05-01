/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FloatingCartProps {
  count: number;
  onClick: () => void;
}

export default function FloatingCart({ count, onClick }: FloatingCartProps) {
  return (
    <AnimatePresence>
      {count > 0 && (
        <motion.button
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onClick}
          className="fixed bottom-6 left-6 md:bottom-8 md:left-8 z-[100] bg-pink-500 text-white p-3.5 md:p-4 rounded-2xl shadow-2xl flex items-center justify-center hover:bg-pink-600 transition-all group"
          id="floating-cart"
        >
          <div className="relative">
            <ShoppingCart size={24} className="md:w-6 md:h-6" />
            <motion.span 
              key={count}
              initial={{ scale: 1.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="absolute -top-1 -right-1 w-5 h-5 bg-black text-white text-[10px] font-black flex items-center justify-center rounded-full border-2 border-white"
            >
              {count}
            </motion.span>
          </div>
          
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 text-[10px] md:text-xs font-black uppercase tracking-[0.1em]">
            Ver Orçamento
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
