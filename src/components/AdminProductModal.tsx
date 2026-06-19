/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { X, Image, Info, Sparkles, Check, Trash2, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Product } from '../types';
import { convertGoogleDriveUrl, getImageUrl } from '../utils/image';
import { CATEGORIES } from '../data/mockData';

interface AdminProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (product: Omit<Product, 'id'> & { id?: string }) => void;
  onDelete?: (id: string) => void;
  product?: Product | null; // If provided, we are editing
}

export default function AdminProductModal({ isOpen, onClose, onSave, onDelete, product }: AdminProductModalProps) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState<number | ''>('');
  const [category, setCategory] = useState('Festa na mesa');
  const [customCategory, setCustomCategory] = useState('');
  const [isCustomCategory, setIsCustomCategory] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [previewUrl, setPreviewUrl] = useState('');
  const [showHelp, setShowHelp] = useState(true);

  // Initialize fields if editing
  useEffect(() => {
    if (product) {
      setName(product.name);
      setDescription(product.description || '');
      setPrice(product.price);
      
      const categoryExists = CATEGORIES.includes(product.category);
      if (categoryExists) {
        setCategory(product.category);
        setIsCustomCategory(false);
      } else {
        setCategory('Outro');
        setCustomCategory(product.category);
        setIsCustomCategory(true);
      }
      
      setImageUrl(product.image || '');
      setPreviewUrl(getImageUrl(product.image));
    } else {
      // Clear fields for new product
      setName('');
      setDescription('');
      setPrice('');
      setCategory('Festa na mesa');
      setCustomCategory('');
      setIsCustomCategory(false);
      setImageUrl('');
      setPreviewUrl('');
    }
  }, [product, isOpen]);

  // Handle live URL pre-conversion of Google Drive links
  useEffect(() => {
    if (imageUrl) {
      const converted = convertGoogleDriveUrl(imageUrl);
      setPreviewUrl(getImageUrl(converted));
    } else {
      setPreviewUrl('');
    }
  }, [imageUrl]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !price) return;

    const finalCategory = isCustomCategory ? customCategory.trim() : category;
    if (!finalCategory) return;

    // Auto convert Googly Drive urls when saving
    const finalImageUrl = convertGoogleDriveUrl(imageUrl);

    onSave({
      ...(product ? { id: product.id } : {}),
      name,
      description,
      price: Number(price),
      category: finalCategory,
      image: finalImageUrl,
    });

    onClose();
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setCategory(value);
    if (value === 'Outro') {
      setIsCustomCategory(true);
    } else {
      setIsCustomCategory(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 overflow-y-auto">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="relative bg-white rounded-3xl shadow-3xl w-full max-w-2xl p-6 sm:p-8 border border-gray-100 overflow-hidden z-10 my-8"
            id="admin-product-modal"
          >
            {/* Top Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-black hover:bg-gray-50 rounded-full transition-colors"
              aria-label="Fechar"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <div className="mb-6">
              <span className="bg-pink-50 text-pink-600 px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider inline-flex items-center gap-1.5 mb-2">
                <Sparkles size={10} />
                Editor de Temas
              </span>
              <h2 className="text-xl sm:text-2xl font-display font-bold uppercase tracking-tight text-gray-900">
                {product ? 'Editar Tema Existente' : 'Cadastrar Novo Tema'}
              </h2>
              <p className="text-xs text-gray-400 mt-1">
                Adicione ou altere informações que aparecem no catálogo Boa Festa.
              </p>
            </div>

            {/* Body */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Form Inputs (Left side) */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5 pl-1">
                      Nome do Tema *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex: Kit Arraiá & CBF Seleção"
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-100 focus:bg-white focus:border-pink-500 hover:border-gray-200 focus:outline-none transition-all rounded-xl text-xs text-gray-900 font-medium"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5 pl-1">
                        Preço (R$) *
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        required
                        value={price}
                        onChange={(e) => setPrice(e.target.value === '' ? '' : Number(e.target.value))}
                        placeholder="Ex: 40.00"
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-100 focus:bg-white focus:border-pink-500 hover:border-gray-200 focus:outline-none transition-all rounded-xl text-xs text-gray-900 font-semibold"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5 pl-1">
                        Categoria *
                      </label>
                      <select
                        value={category}
                        onChange={handleCategoryChange}
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-100 focus:bg-white focus:border-pink-500 hover:border-gray-200 focus:outline-none transition-all rounded-xl text-xs text-gray-900 font-semibold cursor-pointer"
                      >
                        {CATEGORIES.filter(c => c !== 'Todos').map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                        <option value="Outro">Outro (Criar Nova...)</option>
                      </select>
                    </div>
                  </div>

                  {isCustomCategory && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="pt-1"
                    >
                      <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5 pl-1">
                        Nome da Nova Categoria *
                      </label>
                      <input
                        type="text"
                        required
                        value={customCategory}
                        onChange={(e) => setCustomCategory(e.target.value)}
                        placeholder="Ex: Festas Juninas"
                        className="w-full px-4 py-2.5 bg-gray-50 border border-pink-100 focus:bg-white focus:border-pink-500 focus:outline-none transition-all rounded-xl text-xs text-gray-900"
                      />
                    </motion.div>
                  )}

                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5 pl-1">
                      Legenda / Descrição
                    </label>
                    <textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Ex: Kit delicado em tons vibrantes de festa. ( não trabalhamos com arco de balões! )"
                      rows={3}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-100 focus:bg-white focus:border-pink-500 hover:border-gray-200 focus:outline-none transition-all rounded-xl text-xs text-gray-900 leading-relaxed font-light resize-none"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider pl-1">
                        Link da Imagem
                      </label>
                      <button
                        type="button"
                        onClick={() => setShowHelp(!showHelp)}
                        className="text-[9px] font-bold text-pink-500 hover:text-black uppercase tracking-wider flex items-center gap-1 focus:outline-none"
                      >
                        <HelpCircle size={12} />
                        {showHelp ? 'Ocultar Tutorial' : 'Como usar Google Drive?'}
                      </button>
                    </div>
                    <input
                      type="text"
                      required
                      value={imageUrl}
                      onChange={(e) => setImageUrl(e.target.value)}
                      placeholder="Cole o link da foto do Google Drive ou da Web"
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-100 focus:bg-white focus:border-pink-500 hover:border-gray-200 focus:outline-none transition-all rounded-xl text-col font-mono text-[10px] text-gray-900"
                    />
                  </div>
                </div>

                {/* Preview and tutorials (Right side) */}
                <div className="flex flex-col justify-between">
                  <AnimatePresence mode="wait">
                    {showHelp ? (
                      <motion.div
                        key="help"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="bg-pink-50/50 rounded-2xl p-4 sm:p-5 border border-pink-100 text-left space-y-3"
                      >
                        <h4 className="font-bold text-[10px] sm:text-xs text-pink-600 uppercase tracking-wider flex items-center gap-2">
                          <Info size={14} />
                          Tutorial: Fotos do Google Drive
                        </h4>
                        <ol className="text-[10px] sm:text-[11px] text-gray-600 space-y-2 list-decimal list-inside font-medium leading-relaxed">
                          <li>No Google Drive, clique com o botão direito na imagem e selecione <span className="font-bold text-black">Compartilhar</span>.</li>
                          <li>Mude o acesso geral para <span className="font-bold text-pink-600">"Qualquer pessoa com o link"</span> (Vendedor ou Leitor).</li>
                          <li>Copie o link gerado e cole-o diretamente no campo ao lado.</li>
                          <li>
                            <span className="text-gray-900 font-bold">Conversão Automática:</span> Se o link for do Drive (ex: <code className="bg-white px-1.5 py-0.5 rounded border border-gray-100 font-mono text-[9px] text-pink-600 break-all">/file/d/ID/view?usp=drivesdk</code>), o sistema faz a conversão direta de imagem automaticamente para você!
                          </li>
                        </ol>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="preview"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="flex-1 flex flex-col items-center justify-center border border-dashed border-gray-200 rounded-3xl p-6 bg-gray-50 min-h-[160px]"
                      >
                        {previewUrl ? (
                          <div className="relative w-full h-full max-h-[220px] rounded-2xl overflow-hidden flex items-center justify-center bg-white p-2 border border-gray-100">
                            <img
                              src={previewUrl}
                              alt="Pré-visualização do tema"
                              className="max-h-full max-w-full object-contain"
                              onError={() => setPreviewUrl('')}
                              referrerPolicy="no-referrer"
                            />
                            <span className="absolute bottom-2 right-2 bg-black/70 text-white text-[8px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                              Prévia
                            </span>
                          </div>
                        ) : (
                          <div className="text-center text-gray-400 space-y-2 py-4">
                            <Image size={36} className="mx-auto text-gray-300 stroke-1" />
                            <p className="text-[10px] font-bold uppercase tracking-wider">Aguardando imagem válida</p>
                            <p className="text-[8px] max-w-[200px] mx-auto text-gray-400 leading-normal">
                              Cole o link para carregar a miniatura correspondente aqui.
                            </p>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="mt-5 border-t border-gray-100 pt-5 flex flex-col-reverse sm:flex-row sm:justify-end gap-3">
                    {product && onDelete && (
                      <button
                        type="button"
                        onClick={() => {
                          if (confirm(`Tem certeza que deseja excluir o tema "${product.name}"?`)) {
                            onDelete(product.id);
                            onClose();
                          }
                        }}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-red-50 hover:bg-red-100 text-red-600 border border-red-100 px-5 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-colors"
                      >
                        <Trash2 size={14} />
                        Excluir Tema
                      </button>
                    )}

                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-black hover:bg-pink-500 text-white px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 shadow-xl hover:shadow-pink-100"
                    >
                      <Check size={14} />
                      {product ? 'Salvar Alterações' : 'Cadastrar Tema'}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
