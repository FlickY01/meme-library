import { Meme } from './meme';

export interface MemeContextType {

  memes: Meme[];
  
  updateMeme: (updatedMeme: Meme) => void;
  
  getMemeById: (id: number) => Meme | undefined;
  
  isLoading: boolean;
}