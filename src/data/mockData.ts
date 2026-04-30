/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product, Review } from '../types';

export const CATEGORIES = [
  'Todos',
  'Promoção',
  'Festa',
  'Cilindros & Boleiras',
];

export const PRODUCTS: Product[] = [
  // DICA: Para mudar uma imagem manualmente:
  // 1. No menu à esquerda, clique em 'public' e suba sua foto (arraste e solte).
  // 2. Mude o nome no campo 'image' abaixo para o nome EXATO do arquivo com a extensão (ex: 'festa.jpg').
  // 3. Se preferir, pode colar um link direto da internet (ex: 'https://images.unsplash.com/photo-...')
  {
    id: '15',
    name: 'Combo Promo - Bolofofos',
    description: 'Kit completo temático Bolofofos. Preço Promocional! (Não trabalhamos com arco de balões)',
    price: 80.00,
    category: 'Promoção',
    // Usando link direto do Google Drive para que a imagem carregue corretamente
    image: 'https://lh3.googleusercontent.com/d/1_naYXFIkqVwWkQ7sLAzEFWHVpKKdL2E-', 
  },
  {
    id: '16',
    name: 'Combo Promo - Stitch',
    description: 'Decoração completa do Stitch em tons de azul e rosa. Aproveite a promoção! (Não trabalhamos com arco de balões)',
    price: 80.00,
    category: 'Promoção',
    image: 'https://lh3.googleusercontent.com/d/1h7byiatxQEVuCXom79JS0gowJuUuZ_qa',
  },
  {
    id: '17',
    name: 'Combo Promo - Reino Mágico',
    description: 'Kit encantado com painel e cilindros personalizados. Valor promocional para reserva rápida! (Não trabalhamos com arco de balões)',
    price: 80.00,
    category: 'Promoção',
    image: 'https://lh3.googleusercontent.com/d/1_TaOZJIMGdPI9qMxKsodrNbWv0eNfF8E',
  },
  {
    id: '13',
    name: 'Trio de Cilindros - Floral Rosa',
    description: 'Kit sem o Painel! Somente 3 Cilindros com capas personalizadas em tons de rosa e boleiras combinando.',
    price: 60.00,
    category: 'Cilindros & Boleiras',
    image: 'https://lh3.googleusercontent.com/d/1UpA8onOReGqRZAMqKYvhnYBOhiWXgWk_',
  },
  {
    id: '14',
    name: 'Trio de Cilindros - Luxo Dourado',
    description: 'Kit sem o Painel! Inclui Capas para os Cilindros com texturas elegantes e Boleiras douradas de destaque.',
    price: 60.00,
    category: 'Cilindros & Boleiras',
    image: 'https://lh3.googleusercontent.com/d/1oE8bNv2aHBcN4M43sCsjxyY9KgrHAf9A',
  },
  {
    id: '1',
    name: 'Kit Chá Revelação Luxo',
    description: 'Kit delicado com painel decorativo "Boy or Girl", pelúcia de urso e suportes dourados.',
    price: 40.00,
    category: 'Festa',
    image: 'https://lh3.googleusercontent.com/d/1yt3Va2d5t4P7St8LYILTs1vtygRGgmXX',
  },
  {
    id: '2',
    name: 'Kit Torcida Flamengo',
    description: 'Celebre com as cores do Mengão! Painel sublimado e acessórios pretos de alta qualidade.',
    price: 40.00,
    category: 'Festa',
    image: 'https://lh3.googleusercontent.com/d/1gtF9Md6_D4Y3XHokDNp7TjKAjQWnu0rs',
  },
  {
    id: '3',
    name: 'Kit Torcida Corinthians',
    description: 'Para o torcedor fiel! Painel do Timão with suportes brancos e pretos elegantes.',
    price: 40.00,
    category: 'Festa',
    image: 'https://lh3.googleusercontent.com/d/1llSIwZoktIWKHIGk7M46pnNG_nCnGkN-',
  },
  {
    id: '4',
    name: 'Kit Estádio de Futebol',
    description: 'Painel vibrante de estádio com suportes temáticos para os amantes do esporte.',
    price: 40.00,
    category: 'Festa',
    image: 'https://lh3.googleusercontent.com/d/1fTZ6VlOT_XCQbbbgpPAs3DU70Jk0bfc9',
  },
  {
    id: '5',
    name: 'Kit Ursinha Rosa',
    description: 'Tema "É uma menina" with decoração floral, pelúcia e painel delicado.',
    price: 40.00,
    category: 'Festa',
    image: 'kit-ursinha-rosa.jpg',
  },
  {
    id: '6',
    name: 'Kit Gratidão Estelar',
    description: 'Painel moderno com mensagem de Gratidão em fundo galáxia e arranjos azuis.',
    price: 40.00,
    category: 'Festa',
    image: 'kit-gratidao.jpg',
  },
  {
    id: '7',
    name: 'Kit Bday Gold',
    description: 'Celebração sofisticada com painel Happy Birthday, suportes dourados e bolo fake.',
    price: 40.00,
    category: 'Festa',
    image: 'kit-bday-gold.jpg',
  },
  {
    id: '8',
    name: 'Kit Tardezinha',
    description: 'Clima de festa tropical with painel pôr do sol e acessórios em cores vibrantes.',
    price: 40.00,
    category: 'Festa',
    image: 'kit-tardezinha.jpg',
  },
  {
    id: '9',
    name: 'Kit Chá de Bebê Ursinhos',
    description: 'Painel misto rosa e azul com vasos e suportes coordenados.',
    price: 40.00,
    category: 'Festa',
    image: 'kit-ursinhos.jpg',
  },
  {
    id: '10',
    name: 'Kit De Repente Mais Linda',
    description: 'Decoração feminina moderna com painel glitter rosa e suportes combinando.',
    price: 40.00,
    category: 'Festa',
    image: 'kit-mais-linda.jpg',
  },
  {
    id: '11',
    name: 'Kit Galinha Pintadinha',
    description: 'O clássico favorito das crianças com painel alegre e suportes coloridos.',
    price: 40.00,
    category: 'Festa',
    image: 'kit-galinha-pintadinha.jpg',
  },
  {
    id: '12',
    name: 'Kit Natal Mágico',
    description: 'Kit Feliz Natal completo para deixar sua ceia ainda mais especial e decorada.',
    price: 40.00,
    category: 'Festa',
    image: 'kit-natal.jpg',
  },
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Maria Silva',
    text: 'O kit chegou impecável! Muito fácil de montar, em 20 minutos a festa estava pronta.',
    rating: 5,
    date: '2024-03-25',
  },
  {
    id: '2',
    author: 'João Pedro',
    text: 'Aluguei o kit do Flamengo e meu filho amou. Material de excelente qualidade!',
    rating: 5,
    date: '2024-04-05',
  },
  {
    id: '3',
    author: 'Carla Souza',
    text: 'Prático e econômico. Vale muito a pena para quem quer estilo sem gastar muito.',
    rating: 4,
    date: '2024-04-10',
  },
];
