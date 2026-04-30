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
  
  // Em Vite/Vercel, arquivos na pasta public são servidos da raiz
  // Garantimos que o caminho comece com / e não tenha barras duplas
  const cleanPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
  return cleanPath;
};
