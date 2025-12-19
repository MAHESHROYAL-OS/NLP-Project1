
import React from 'react';

interface StoryInputProps {
  text: string;
  setText: (text: string) => void;
  onSubmit: () => void;
  loading: boolean;
}

const StoryInput: React.FC<StoryInputProps> = ({ text, setText, onSubmit, loading }) => {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
      <div className="relative">
        <label className="block text-slate-400 text-sm font-semibold mb-2 uppercase tracking-wider">
          Paste your story or text below
        </label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Once upon a time, in a world where AI could read between the lines..."
          className="w-full h-48 md:h-64 bg-slate-800/50 border border-slate-700 text-slate-200 rounded-xl p-6 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all resize-none shadow-inner text-lg leading-relaxed"
          disabled={loading}
        />
        <div className="absolute bottom-4 right-4 text-slate-500 text-xs">
          {text.length} characters
        </div>
      </div>

      <button
        onClick={onSubmit}
        disabled={loading || !text.trim()}
        className={`w-full py-4 px-8 rounded-xl font-bold text-lg transition-all transform active:scale-95 shadow-lg flex items-center justify-center space-x-2 ${
          loading || !text.trim()
            ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
            : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white hover:shadow-indigo-500/25'
        }`}
      >
        {loading ? (
          <span>Engaging AI Genius...</span>
        ) : (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>Generate Cinematic Title</span>
          </>
        )}
      </button>
    </div>
  );
};

export default StoryInput;
