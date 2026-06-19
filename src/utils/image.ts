/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const convertGoogleDriveUrl = (url: string | undefined): string => {
  if (!url) return '';
  const trimmed = url.trim();

  // Pattern for: https://drive.google.com/file/d/1eBElzbsUjvOs3xVVSYqOMUsP2p0sdh9C/view?usp=drivesdk
  const fileDMatch = trimmed.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (fileDMatch && fileDMatch[1]) {
    return `https://lh3.googleusercontent.com/d/${fileDMatch[1]}`;
  }

  // Pattern for: https://drive.google.com/open?id=1eBElzbsUjvOs3xVVSYqOMUsP2p0sdh9C
  const idMatch = trimmed.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (idMatch && idMatch[1]) {
    return `https://lh3.googleusercontent.com/d/${idMatch[1]}`;
  }

  return trimmed;
};

export const getImageUrl = (imagePath: string | undefined): string => {
  if (!imagePath) return '';
  
  // First convert if it happens to be a raw Google Drive sharable link
  const converted = convertGoogleDriveUrl(imagePath);
  
  if (/^(http|https|data|blob):/.test(converted)) {
    return converted;
  }
  
  const baseUrl = import.meta.env.BASE_URL || '/';
  const cleanPath = converted.replace(/^\/+/, '');
  
  const path = `${baseUrl}${cleanPath}`.replace(/\/+/g, '/');
  return path.startsWith('/') ? path : `/${path}`;
};

