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
  
  // Caminho absoluto para arquivos na pasta public
  return imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
};
