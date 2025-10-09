import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-gray-400 text-center flex items-center gap-2">
            Built with <Heart size={16} className="text-red-500" /> by Alp Atamer
          </p>
          <p className="text-gray-500 text-sm">
            {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
