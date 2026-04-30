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
  // ou prefixados com a BASE_URL se não for a raiz.
  const baseUrl = import.meta.env.BASE_URL || '/';
  
  // Normaliza o caminho da imagem (remove leading slash se houver)
  const normalizedPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  
  // Se a baseUrl já termina com '/', não adicionamos outra
  const cleanBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  
  return `${cleanBase}${normalizedPath}`;
};
