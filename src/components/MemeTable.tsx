import React from 'react';
import { Table, Button } from '@heroui/react';
import { Meme } from '../types/meme';

interface MemeTableProps {
  memes: Meme[];
  
  /**
   * 
   * @param meme
   */
  onEdit: (meme: Meme) => void;
}

const MemeTable: React.FC<MemeTableProps> = ({ memes, onEdit }) => {
  return (
    <div className="overflow-x-auto shadow-md rounded-lg">

      <table className="w-full bg-white">

        <thead className="bg-gray-50">
          <tr>
            <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">ID</th>
            <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Name</th>
            <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Likes</th>
            <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Link</th>
            <th className="py-3 px-4 text-right text-sm font-medium text-gray-700">Action</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {memes.map((meme) => (
            <tr key={meme.id} className="hover:bg-gray-50">
              <td className="py-4 px-4 text-sm font-medium text-gray-900">{meme.id}</td>

              <td className="py-4 px-4 text-sm text-gray-900 max-w-[300px] truncate">
                {meme.title}
              </td>

              <td className="py-4 px-4 text-sm text-gray-900">{meme.likes}</td>

              <td className="py-4 px-4 text-sm text-gray-900">
                {meme.link ? (
                  <a 
                    href={meme.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-800 underline"
                  >
                    Source
                  </a>
                ) : (
                  <span className="text-gray-500">—</span>
                )}
              </td>

              <td className="py-4 px-4 text-right">
                <Button
                  variant="light"
                  size="sm"
                  onPress={() => onEdit(meme)}
                >
                  Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MemeTable;