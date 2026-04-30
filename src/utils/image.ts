/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const getImageUrl = (imagePath: string | undefined): string => {
  if (!imagePath) return '';
  
  if (/^(http|https|data|blob):/.test(imagePath)) {
    return imagePath;
  }
  
  // Para arquivos na pasta public em Vite com base: './'
  // Retornamos o caminho sem a barra inicial para que seja relativo à URL atual
  // Isso funciona bem se o app for uma SPA de rota única ou se as rotas forem controladas por hash
  return imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
};
