import { Meme, MemeValidationErrors } from '../types/meme';

/**
 * 
 * @param url 
 * @returns
 */
export function isValidImageUrl(url: string): boolean {
  try {
    const parsedUrl = new URL(url);
    return parsedUrl.pathname.toLowerCase().endsWith('.jpg');
  } catch (_) {
    return false;
  }
}

/**
 * 
 * @param meme 
 * @returns 
 */
export function validateMeme(meme: Partial<Meme>): MemeValidationErrors | null {
  const errors: MemeValidationErrors = {};

  if (!meme.title) {
    errors.title = "The name is obligatory to be filled in";
  } else if (meme.title.length < 3) {
    errors.title = "The name must contain a minimum of 3 characters";
  } else if (meme.title.length > 100) {
    errors.title = "The title must contain a maximum of 100 characters";
  }

  if (!meme.imageUrl) {
    errors.imageUrl = "The URL of the image is required";
  } else {
    try {
      const url = new URL(meme.imageUrl);
      if (!url.pathname.toLowerCase().endsWith('.jpg')) {
        errors.imageUrl = "The URL should lead to an image in JPG format";
      }
    } catch (_) {
      errors.imageUrl = "Invalid URL";
    }
  }

  if (meme.likes === undefined || meme.likes === null) {
    errors.likes = "The number of likes is required";
  } else if (isNaN(Number(meme.likes)) || !Number.isInteger(Number(meme.likes))) {
    errors.likes = "The number of likes must be a whole number";
  } else if (Number(meme.likes) < 0) {
    errors.likes = "The number of likes cannot be negative";
  } else if (Number(meme.likes) > 99) {
    errors.likes = "The number of likes cannot exceed 99";
  }

  if (meme.link) {
    try {
      new URL(meme.link);
    } catch (_) {
      errors.link = "Invalid link";
    }
  }
  
  return Object.keys(errors).length > 0 ? errors : null;
}

/**
 * 
 * @param memes
 */
export function saveMemes(memes: Meme[]): void {
  try {
    localStorage.setItem('memes', JSON.stringify(memes));
  } catch (e) {
    console.error('Error when saving memes:', e);
  }
}

/**
 * 
 * @returns 
 */
export function loadMemes(): Meme[] | null {
  try {
    const data = localStorage.getItem('memes');
    return data ? JSON.parse(data) : null;
  } catch (e) {
    console.error('Error when uploading memes:', e);
    return null;
  }
}