import React from 'react';
import { Button } from '@heroui/react';
import { Meme } from '../types/meme';

import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell
} from "@heroui/table";

interface MemeTableProps {
  memes: Meme[];
  onEdit: (meme: Meme) => void;
}

const MemeTable: React.FC<MemeTableProps> = ({ memes, onEdit }) => {
  return (
    <Table aria-label="Meme Table" className="w-full">
      <TableHeader>
        <TableColumn className="text-left">ID</TableColumn>
        <TableColumn className="text-left">Name</TableColumn>
        <TableColumn className="text-left">Likes</TableColumn>
        <TableColumn className="text-left">Link</TableColumn>
        <TableColumn className="text-left">Action</TableColumn>
      </TableHeader>
      <TableBody>
        {memes.map(meme => (
          <TableRow key={meme.id}>
            <TableCell>{meme.id}</TableCell>
            <TableCell>{meme.title}</TableCell>
            <TableCell>{meme.likes}</TableCell>
            <TableCell>
              {meme.link ? (
                <a 
                  href={meme.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-800 underline"
                >
                  Source
                </a>
              ) : '-'}
            </TableCell>
            <TableCell>
              <Button 
                variant="bordered"
                size="sm"
                onPress={() => onEdit(meme)}
              >
                Edit
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default MemeTable;