'use client';

import React, { useState } from 'react';
import { useMemes } from '../../contexts/MemeContext';
import MemeCard from '../../components/MemeCard';
import MemeEditModal from '../../components/MemeEditModal';
import { Meme } from '../../types/meme';

export default function ListPage() {
  const { memes, isLoading, updateMeme } = useMemes();
  const [editingMeme, setEditingMeme] = useState<Meme | null>(null);

  /**
   *
   * @param meme 
   */
  const handleEdit = (meme: Meme) => {
    setEditingMeme(meme);
  };

  const handleCloseModal = () => {
    setEditingMeme(null);
  };

  /**
   * 
   * @param updatedMeme 
   */
  const handleSaveMeme = (updatedMeme: Meme) => {
    updateMeme(updatedMeme);
    setEditingMeme(null);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Memes Gallery</h1>
        <p className="text-gray-600">Browse a library of memes in the form of picture cards.</p>
      </div>

      {memes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {memes.map((meme) => (
            <div key={meme.id} className="h-full">
              <MemeCard meme={meme} onEdit={handleEdit} />
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
          <p className="text-gray-600">No memes yet. They will be here soon!</p>
        </div>
      )}
      
      <MemeEditModal 
        meme={editingMeme} 
        onClose={handleCloseModal} 
        onSave={handleSaveMeme} 
      />
    </div>
  );
}