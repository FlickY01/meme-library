'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  
  useEffect(() => {
    router.replace('/table');
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Meme Library</h1>
      <p className="text-lg text-gray-600 mb-8">Loading a directory of popular memes...</p>
      
      <div className="flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    </div>
  );
}