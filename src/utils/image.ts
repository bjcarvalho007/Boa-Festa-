/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const getImageUrl = (imagePath: string | undefined): string => {
  if (!imagePath) return '';
  
  if (imagePath.startsWith('http') || imagePath.startsWith('data:')) {
    return imagePath;
  }
  
  // No Vite, arquivos na pasta public devem ser referenciados a partir da raiz '/'
  const cleanPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
  
  return cleanPath;
};
