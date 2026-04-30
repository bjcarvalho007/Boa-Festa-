/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const getImageUrl = (imagePath: string | undefined): string => {
  if (!imagePath) return '';
  
  if (/^(http|https|data|blob):/.test(imagePath)) {
    return imagePath;
  }
  
  const baseUrl = import.meta.env.BASE_URL || '/';
  const cleanPath = imagePath.replace(/^\/+/, '');
  
  const path = `${baseUrl}${cleanPath}`.replace(/\/+/g, '/');
  return path.startsWith('/') ? path : `/${path}`;
};
