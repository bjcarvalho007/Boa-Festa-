/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const getImageUrl = (imagePath: string | undefined): string => {
  if (!imagePath) return '';
  
  if (
    imagePath.startsWith('http') || 
    imagePath.startsWith('https') || 
    imagePath.startsWith('data:') || 
    imagePath.startsWith('blob:')
  ) {
    return imagePath;
  }

  // No Vite, a BASE_URL deve ser respeitada
  const base = import.meta.env.BASE_URL || '/';
  
  // Se o caminho já começar com a base (e não for apenas /), retornamos ele (idempotência)
  if (base !== '/' && imagePath.startsWith(base)) {
    return imagePath;
  }
  
  // Garante que a base termine com /
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  // Garante que o path NÃO comece com / para evitar barras duplas
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  
  return `${cleanBase}${cleanPath}`;
};
