
import React from 'react';

interface BigScreenTitleProps {
  title: string | null;
  loading: boolean;
}

const BigScreenTitle: React.FC<BigScreenTitleProps> = ({ title, loading }) => {
  if (!title && !loading) return null;

  return (
    <div className="w-full flex flex-col items-center justify-center py-12 px-4 animate-fade-in">
      <div className="relative max-w-5xl w-full text-center group">
        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
        
        <div className="relative glass p-10 md:p-20 rounded-2xl shadow-2xl overflow-hidden">
          {loading ? (
            <div className="flex flex-col items-center space-y-4">
              <div className="w-12 h-12 border-4 border-indigo-400 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-indigo-300 font-medium tracking-widest uppercase text-sm">Analyzing Narrative...</p>
            </div>
          ) : (
            <>
              <span className="text-4xl md:text-6xl text-indigo-400 opacity-50 absolute top-8 left-8 font-serif-title">“</span>
              <h2 className="text-4xl md:text-7xl lg:text-8xl font-serif-title font-bold tracking-tight text-white leading-tight break-words">
                {title}
              </h2>
              <span className="text-4xl md:text-6xl text-indigo-400 opacity-50 absolute bottom-8 right-8 font-serif-title">”</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BigScreenTitle;
