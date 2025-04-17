import React from 'react';
import { Card, Button } from '@heroui/react';
import Image from 'next/image';
import { Meme } from '../types/meme';

interface MemeCardProps {
  meme: Meme;
  
  /**
   * 
   * @param meme
   */
  onEdit: (meme: Meme) => void;
}

const MemeCard: React.FC<MemeCardProps> = ({ meme, onEdit }) => {
  return (
    <Card className="h-full flex flex-col overflow-hidden shadow-md">
      <div className="relative pt-[56.25%]">
        <Image
          src={meme.imageUrl}
          alt={meme.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold mb-2 line-clamp-2">
          {meme.title}
        </h3>
        
        <div className="text-sm text-gray-600 mb-2">
          <span className="font-medium">Likes:</span> {meme.likes}
        </div>
        
        {meme.link && (
          <div className="mb-4">
            <a 
              href={meme.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-800 text-sm underline"
            >
              Source
            </a>
          </div>
        )}
        
        <div className="mt-auto pt-4">
          <Button 
            variant="bordered" 
            size="sm" 
            className="w-full"
            onPress={() => onEdit(meme)}
          >
            Edit
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default MemeCard;