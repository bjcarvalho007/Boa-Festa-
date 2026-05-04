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
    image: 'https://lh3.googleusercontent.com/d/1d4SWl67pNVgiKh4FauIbvV3GCdOFlBgu',
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
    image: 'https://lh3.googleusercontent.com/d/1HuEQCSPQssIJHaKiOEenEjnlF4l-_SZ3',
  },
  {
    id: '6',
    name: 'Kit Gratidão Estelar',
    description: 'Painel moderno com mensagem de Gratidão em fundo galáxia e arranjos azuis.',
    price: 40.00,
    category: 'Festa',
    image: 'https://lh3.googleusercontent.com/d/1dx84I1MzFr-H9zxzI2tjZgybLCM8aBdE',
  },
  {
    id: '7',
    name: 'Kit Bday Gold',
    description: 'Celebração sofisticada com painel Happy Birthday, suportes dourados e bolo fake.',
    price: 40.00,
    category: 'Festa',
    image: 'https://lh3.googleusercontent.com/d/1BrppfIPITi-hXsVHafdmrwVWhua3oUgg',
  },
  {
    id: '8',
    name: 'Kit Tardezinha',
    description: 'Clima de festa tropical with painel pôr do sol e acessórios em cores vibrantes.',
    price: 40.00,
    category: 'Festa',
    image: 'https://lh3.googleusercontent.com/d/1kPyqJzSiTFzMPfNr9TpuX60pmUkB24xe',
  },
  {
    id: '9',
    name: 'Kit Chá de Bebê Ursinhos',
    description: 'Painel misto rosa e azul com vasos e suportes coordenados.',
    price: 40.00,
    category: 'Festa',
    image: 'https://lh3.googleusercontent.com/d/1yt3Va2d5t4P7St8LYILTs1vtygRGgmXX',
  },
  {
    id: '10',
    name: 'Kit De Repente Mais Linda',
    description: 'Decoração feminina moderna com painel glitter rosa e suportes combinando.',
    price: 40.00,
    category: 'Festa',
    image: 'https://lh3.googleusercontent.com/d/1H8U5uyZfVCIyjjVqWfX5X1WdNljnbkJ8',
  },
  {
    id: '11',
    name: 'Kit Galinha Pintadinha',
    description: 'O clássico favorito das crianças com painel alegre e suportes coloridos.',
    price: 40.00,
    category: 'Festa',
    image: 'https://lh3.googleusercontent.com/d/1mEF2c0dXH7-gR5TN00un-hoff064fEOP',
  },
  {
    id: '12',
    name: 'Kit Natal Mágico',
    description: 'Kit Feliz Natal completo. De R$ 120,00 por apenas R$ 80,00! Aproveite a promoção.',
    price: 80.00,
    category: 'Promoção',
    image: 'https://lh3.googleusercontent.com/d/1NGbvPG9gf_r8uY_5JEB9Duz3ChDKJ0r4',
  },
  {
    id: '18',
    name: 'Kit Homem Aranha',
    description: 'Ação e aventura para sua festa! Kit completo do herói com painel e acessórios temáticos.',
    price: 40.00,
    category: 'Festa',
    image: 'https://lh3.googleusercontent.com/d/1Ohh3mI-YcCzhIdpEHVLBBSQDNi5N5-an',
  },
  {
    id: '19',
    name: 'Kit Pequena Sereia',
    description: 'Magia sob o mar! Decoração encantadora com tons de sereia e painel maravilhoso.',
    price: 40.00,
    category: 'Festa',
    image: 'https://lh3.googleusercontent.com/d/1aPa6qprKAHjnt7gwcT7wgC8TT8nla90j',
  },
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Ana Oliveira',
    text: 'Atendimento maravilhoso e os kits são lindos! Recomendo muito.',
    rating: 5,
    date: '2024-05-15',
    location: 'Araguaína - TO',
  },
  {
    id: '2',
    author: 'Carlos Santos',
    text: 'Praticidade nota 10. Montei a festa em casa sem estresse.',
    rating: 5,
    date: '2024-08-20',
    location: 'Araguaína - TO',
  },
  {
    id: '3',
    author: 'Julia Costa',
    text: 'As cores são vibrantes e o painel é de excelente material.',
    rating: 5,
    date: '2024-11-02',
    location: 'Araguaína - TO',
  },
  {
    id: '4',
    author: 'Ricardo Pereira',
    text: 'Segunda vez que alugo e pretendo alugar sempre que precisar.',
    rating: 5,
    date: '2025-02-14',
    location: 'Araguaína - TO',
  },
  {
    id: '5',
    author: 'Fernanda Lima',
    text: 'Kit Bolofofos foi o sucesso do aniversário do meu pequeno.',
    rating: 5,
    date: '2025-05-22',
    location: 'Araguaína - TO',
  },
  {
    id: '6',
    author: 'Beatriz Rocha',
    text: 'Excelente custo-benefício. Site muito fácil de navegar e comprar.',
    rating: 4,
    date: '2025-09-10',
    location: 'Araguaína - TO',
  },
  {
    id: '7',
    author: 'Marcos Vinicius',
    text: 'O kit Stitch é perfeito, rico em detalhes. Minha filha adorou!',
    rating: 5,
    date: '2025-12-05',
    location: 'Araguaína - TO',
  },
  {
    id: '8',
    author: 'Amanda Souza',
    text: 'Tudo muito higienizado e bem embalado. Profissionalismo puro.',
    rating: 5,
    date: '2026-01-18',
    location: 'Araguaína - TO',
  },
  {
    id: '9',
    author: 'Paulo Henrique',
    text: 'Os cilindros são super resistentes e as capas vestem muito bem.',
    rating: 5,
    date: '2026-03-25',
    location: 'Araguaína - TO',
  },
  {
    id: '10',
    author: 'Luciana Duarte',
    text: 'Fiz a festa da minha mãe com o kit Bday Gold e ficou chiquérrimo!',
    rating: 5,
    date: '2026-04-12',
    location: 'Araguaína - TO',
  },
];

export const TESTIMONIAL_IMAGES = [
  'https://images.unsplash.com/photo-1530103043960-ef38714abb15?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80',
];
