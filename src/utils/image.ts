/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const getImageUrl = (imagePath: string | undefined): string => {
  if (!imagePath) return '';
  
  if (/^(http|https|data|blob):/.test(imagePath)) {
    return imagePath;
  }
  
  // Para arquivos na pasta public em Vite, usando base relativa ('')
  // Garantimos que o caminho NÃO comece com / para que seja relativo à URL atual.
  // Isso resolve problemas de roteamento em ambientes de preview.
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  return cleanPath;
};
