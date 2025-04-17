'use client';

import React, { useState, useEffect } from 'react';
import { Button, Input } from '@heroui/react';
import { Meme, MemeValidationErrors } from '../types/meme';
import { validateMeme } from '../utils/utils';

interface MemeEditModalProps {

  meme: Meme | null;

  onClose: () => void;
  
  /**
   * 
   * @param updatedMeme 
   */
  onSave: (updatedMeme: Meme) => void;
}

const MemeEditModal: React.FC<MemeEditModalProps> = ({ meme, onClose, onSave }) => {
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [likes, setLikes] = useState(0);
  const [link, setLink] = useState('');

  const [errors, setErrors] = useState<MemeValidationErrors>({});

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (meme) {
      setTitle(meme.title);
      setImageUrl(meme.imageUrl);
      setLikes(meme.likes);
      setLink(meme.link || '');
      setErrors({});
      setIsModalOpen(true);
    } else {
      setIsModalOpen(false);
    }
  }, [meme]);

  const handleSave = () => {
    if (!meme) return;

    const updatedMeme: Meme = {
      ...meme,
      title,
      imageUrl,
      likes: Number(likes),
      link: link || undefined
    };

    const validationErrors = validateMeme(updatedMeme);
    if (validationErrors) {
      setErrors(validationErrors);
      return;
    }

    onSave(updatedMeme);
  };

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Meme Editor</h2>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">ID</label>
            <Input
              value={meme?.id.toString() || ''}
              disabled
              className="bg-gray-100"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Type in the name of the meme"
              className={errors.title ? "border-red-500" : ""}
            />
            {errors.title && (
              <p className="mt-1 text-sm text-red-500">{errors.title}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-1">
              Image URL (JPG) <span className="text-red-500">*</span>
            </label>
            <Input
              id="imageUrl"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="https://example.com/image.jpg"
              className={errors.imageUrl ? "border-red-500" : ""}
            />
            {errors.imageUrl && (
              <p className="mt-1 text-sm text-red-500">{errors.imageUrl}</p>
            )}
          </div>
          
          <div className="mb-4">
            <label htmlFor="likes" className="block text-sm font-medium text-gray-700 mb-1">
              Quantity of likes  <span className="text-red-500">*</span>
            </label>
            <Input
              id="likes"
              type="number"
              min="0"
              max="99"
              value={likes.toString()}
              onChange={(e) => setLikes(parseInt(e.target.value) || 0)}
              className={errors.likes ? "border-red-500" : ""}
            />
            {errors.likes && (
              <p className="mt-1 text-sm text-red-500">{errors.likes}</p>
            )}
          </div>
          
          <div className="mb-4">
            <label htmlFor="link" className="block text-sm font-medium text-gray-700 mb-1">
              Link
            </label>
            <Input
              id="link"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder="https://example.com/meme-source"
              className={errors.link ? "border-red-500" : ""}
            />
            {errors.link && (
              <p className="mt-1 text-sm text-red-500">{errors.link}</p>
            )}
          </div>
   
          <div className="flex justify-end gap-2 mt-6">
            <Button variant="flat" onPress={onClose}>
              Cancel
            </Button>
            <Button variant="solid" onPress={handleSave}>
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemeEditModal;