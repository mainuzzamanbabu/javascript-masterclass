import React from 'react';
import { Slide as SlideType } from '../types';

interface SlideProps {
  data: SlideType;
}

const Slide: React.FC<SlideProps> = ({ data }) => {
  // Simple markdown-ish parser for bold (**text**) and inline code (`text`)
  const renderText = (text: string) => {
    // Split by newlines first
    return text.split('\n').map((line, i) => {
      // Use regex to parse **bold** and `code` within the line
      // We split the line by the regex matches to interleave components
      const parts = line.split(/(\*\*.*?\*\*|`.*?`)/g);
      
      return (
        <p key={i} className="mb-3">
          {parts.map((part, index) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return <strong key={index} className="font-bold text-slate-900">{part.slice(2, -2)}</strong>;
            }
            if (part.startsWith('`') && part.endsWith('`')) {
              return <code key={index} className="bg-slate-200 text-pink-600 px-1.5 py-0.5 rounded text-sm font-mono">{part.slice(1, -1)}</code>;
            }
            return part;
          })}
        </p>
      );
    });
  };

  return (
    <div className="h-full flex flex-col justify-center animate-fade-in p-2">
      <div className="mb-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight mb-2">
            {data.title}
        </h1>
        <div className="h-1 w-20 bg-indigo-600 rounded-full"></div>
      </div>
      
      <div className="prose prose-lg prose-slate max-w-none text-slate-600 leading-relaxed mb-8">
        {renderText(data.content)}
      </div>

      {data.bullets && (
        <ul className="space-y-4 mb-8">
          {data.bullets.map((bullet, idx) => {
             // Parse both **bold** and `code` in bullets
             const parts = bullet.split(/(\*\*.*?\*\*|`.*?`)/g);
             return (
                <li key={idx} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-sm mt-0.5">
                    {idx + 1}
                </span>
                <span className="text-lg text-slate-700 font-medium">
                    {parts.map((part, pIdx) => {
                        if (part.startsWith('**') && part.endsWith('**')) {
                            return <strong key={pIdx} className="font-bold text-slate-900">{part.slice(2, -2)}</strong>;
                        }
                        if (part.startsWith('`') && part.endsWith('`')) {
                            return <code key={pIdx} className="bg-slate-200 text-pink-600 px-1 py-0.5 rounded text-sm font-mono">{part.slice(1, -1)}</code>;
                        }
                        return part;
                    })}
                </span>
                </li>
             );
          })}
        </ul>
      )}
    </div>
  );
};

export default Slide;