/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { Review } from '../types';

interface TestimonialsProps {
  reviews: Review[];
  onAddFeedback: () => void;
}

export default function Testimonials({ reviews, onAddFeedback }: TestimonialsProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reviews.length === 0) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 5000); // 5 seconds interval

    return () => clearInterval(timer);
  }, [reviews.length]);

  const review = reviews[index] || reviews[0];

  return (
    <section className="bg-white py-20 md:py-32 px-6 md:px-12 overflow-hidden border-y border-gray-50 relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none select-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-pink-500 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-pink-400 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto text-center flex flex-col items-center relative z-10">
        <div className="inline-flex items-center justify-center px-4 py-1 bg-pink-50 text-pink-600 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6">
          Depoimentos
        </div>
        
        <h2 className="text-3xl md:text-5xl font-display font-black mb-16 tracking-tighter uppercase text-gray-900">
          O que dizem <span className="text-pink-500">nossos clientes</span>
        </h2>

        <div className="relative min-h-[400px] sm:min-h-[350px] md:min-h-[300px] flex items-center justify-center w-full">
          <AnimatePresence mode="wait">
            {review && (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="w-full max-w-3xl bg-gray-50/50 backdrop-blur-sm border border-gray-100 p-8 md:p-12 rounded-[2.5rem] md:rounded-[4rem] relative shadow-2xl shadow-gray-200/50"
              >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                  <div className="w-12 h-12 bg-pink-500 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-pink-200 rotate-3">
                    <Quote size={20} fill="currentColor" />
                  </div>
                </div>

                <div className="flex justify-center gap-1.5 mb-8 mt-10">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={i < review.rating ? "text-pink-500 fill-pink-500" : "text-gray-200"}
                    />
                  ))}
                </div>
                
                <blockquote className="text-lg md:text-2xl font-display font-medium text-gray-800 mb-10 italic leading-relaxed md:px-6">
                  "{review.text}"
                </blockquote>
                
                <div className="flex flex-col items-center">
                  <span className="text-sm md:text-base font-black text-gray-900 uppercase tracking-widest">{review.author}</span>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{review.location || 'Cliente'}</span>
                    <span className="text-gray-200">•</span>
                    <span className="text-[10px] font-bold text-pink-400 uppercase tracking-widest">{new Date(review.date).toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })}</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-3 mt-12 mb-16">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === index ? "w-10 bg-pink-500" : "w-1.5 bg-gray-200 hover:bg-gray-300"
              }`}
              aria-label={`Ver depoimento ${i + 1}`}
            />
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onAddFeedback}
          className="bg-gray-900 text-white px-10 py-4 rounded-2xl font-black uppercase text-xs tracking-[0.2em] hover:bg-pink-500 transition-all shadow-xl shadow-gray-200 hover:shadow-pink-100"
        >
          Queremos ouvir você
        </motion.button>
      </div>
    </section>
  );
}
