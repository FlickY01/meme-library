'use client';

import React, { useState } from 'react';
import { useMemes } from '../../contexts/MemeContext';
import MemeTable from '../../components/MemeTable';
import MemeEditModal from '../../components/MemeEditModal';
import { Meme } from '../../types/meme';

export default function TablePage() {
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
        <h1 className="text-2xl font-bold text-gray-800">Memes in the form of a table</h1>
        <p className="text-gray-600">A tabular representation of the meme library for easy browsing.</p>
      </div>

      {memes.length > 0 ? (
        <MemeTable memes={memes} onEdit={handleEdit} />
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
          <p className="text-gray-600">No memes yet. They'll be here soon!</p>
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