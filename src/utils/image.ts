/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const getImageUrl = (imagePath: string | undefined): string => {
  if (!imagePath) return '';
  
  if (/^(http|https|data|blob):/.test(imagePath)) {
    return imagePath;
  }
  
  // No Vite, arquivos na pasta public são servidos da raiz /
  // Garantimos que o caminho seja absoluto para evitar problemas de rota
  return imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
};
