import { Meme } from './meme';

export interface EditModalState {
  isOpen: boolean;
  meme: Meme | null;
}

export interface MemeCardProps {
  meme: Meme;
  onEdit?: (meme: Meme) => void;
}

export interface MemeTableProps {
  memes: Meme[];
  onEditMeme: (meme: Meme) => void;
}