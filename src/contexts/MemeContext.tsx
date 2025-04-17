"use client"

import { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { Meme, MemeValidationErrors } from '../types/meme';
import { initialMemes } from '../data/memes';
import { loadMemes, saveMemes, validateMeme } from '../utils/utils';

interface MemeContextType {
  memes: Meme[];            
  isLoading: boolean;       
  updateMeme: (updatedMeme: Meme) => MemeValidationErrors | null; 
  getMemeById: (id: number) => Meme | undefined;
}

const MemeContext = createContext<MemeContextType | undefined>(undefined);

/**
 * 
 * @param {ReactNode} children 
 */
export function MemeProvider({ children }: { children: ReactNode }) {
  const [memes, setMemes] = useState<Meme[]>([]);
  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadInitialMemes = () => {
      try {
        const savedMemes = loadMemes();
        if (savedMemes) {
          setMemes(savedMemes);
        } else {
          setMemes(initialMemes);
          saveMemes(initialMemes);
        }
      } catch (error) {
        console.error('Error when uploading memes:', error);
        setMemes(initialMemes);
      } finally {
        setIsLoading(false);
      }
    };

    loadInitialMemes();
  }, []);

  /**
   * 
   * @param {Meme} updatedMeme 
   * @returns {MemeValidationErrors | null} 
   */
  const updateMeme = (updatedMeme: Meme): MemeValidationErrors | null => {
    const errors = validateMeme(updatedMeme);
    if (errors) {
      return errors;
    }

    const updatedMemes = memes.map(meme => 
      meme.id === updatedMeme.id ? updatedMeme : meme
    );
    
    setMemes(updatedMemes);
    saveMemes(updatedMemes);
    return null;
  };

  /**
   * 
   * @param {number} id 
   * @returns {Meme | undefined}
   */
  const getMemeById = (id: number): Meme | undefined => {
    return memes.find(meme => meme.id === id);
  };

  return (
    <MemeContext.Provider value={{ memes, isLoading, updateMeme, getMemeById }}>
      {children}
    </MemeContext.Provider>
  );
}

/**
 * 
 * @returns {MemeContextType} 
 * @throws {Error}
 */
export function useMemes() {
  const context = useContext(MemeContext);
  if (!context) {
    throw new Error('useMemes must be used inside MemeProvider');
  }
  return context;
}