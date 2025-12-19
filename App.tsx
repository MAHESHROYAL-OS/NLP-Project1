
import React, { useState } from 'react';
import { generateStoryTitle } from './services/geminiService';
import BigScreenTitle from './components/BigScreenTitle';
import StoryInput from './components/StoryInput';

const App: React.FC = () => {
  const [storyText, setStoryText] = useState('');
  const [generatedTitle, setGeneratedTitle] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!storyText.trim()) return;

    setLoading(true);
    setError(null);
    setGeneratedTitle(null);

    try {
      const title = await generateStoryTitle(storyText);
      setGeneratedTitle(title);
      // Smooth scroll to the result if on mobile
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col selection:bg-indigo-500/30">
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-24 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 py-8 px-6 text-center border-b border-slate-900 bg-slate-950/50 backdrop-blur-sm sticky top-0">
        <div className="flex items-center justify-center space-x-2">
          <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-600/20">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            StoryTitler <span className="text-indigo-500">Pro</span>
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-grow container mx-auto px-6 py-12 max-w-7xl">
        
        {/* Result Area */}
        <div className="mb-12">
          <BigScreenTitle title={generatedTitle} loading={loading} />
          
          {error && (
            <div className="max-w-xl mx-auto p-4 bg-red-900/20 border border-red-500/50 rounded-lg text-red-200 text-center animate-fade-in">
              {error}
            </div>
          )}
        </div>

        {/* Action Area */}
        <section className="mt-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-2">Identify Your Essence</h3>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Whether it's a short story, an essay, or a technical paper, we'll distil its soul into a single, captivating title.
            </p>
          </div>
          
          <StoryInput 
            text={storyText} 
            setText={setStoryText} 
            onSubmit={handleGenerate} 
            loading={loading}
          />
        </section>

        {/* Features/Guides */}
        {!generatedTitle && !loading && (
          <section className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="glass p-6 rounded-2xl">
              <div className="text-indigo-400 mb-4 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="font-bold mb-2">Contextual Analysis</h4>
              <p className="text-sm text-slate-400">Our AI understands metaphors, themes, and tone, not just keywords.</p>
            </div>
            <div className="glass p-6 rounded-2xl">
              <div className="text-indigo-400 mb-4 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h4 className="font-bold mb-2">Cinematic Preview</h4>
              <p className="text-sm text-slate-400">See your title displayed on a "big screen" for immediate visual impact.</p>
            </div>
            <div className="glass p-6 rounded-2xl">
              <div className="text-indigo-400 mb-4 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-bold mb-2">Instant Inspiration</h4>
              <p className="text-sm text-slate-400">Break writer's block instantly with evocative naming suggestions.</p>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-6 text-center border-t border-slate-900 mt-auto text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} StoryTitler Pro • Powered by Gemini 3</p>
      </footer>
    </div>
  );
};

export default App;
