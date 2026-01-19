import React, { useState, useEffect, useRef } from 'react';
import { Play, RotateCcw, MessageSquarePlus } from 'lucide-react';
import { explainCode } from '../services/geminiService';

interface CodePlaygroundProps {
  initialCode: string;
}

const CodePlayground: React.FC<CodePlaygroundProps> = ({ initialCode }) => {
  const [code, setCode] = useState(initialCode);
  const [logs, setLogs] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isExplaining, setIsExplaining] = useState(false);
  const [explanation, setExplanation] = useState<string | null>(null);
  const sandboxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCode(initialCode);
    setLogs([]);
    setError(null);
    setExplanation(null);
    // Reset sandbox visual
    if (sandboxRef.current) {
        sandboxRef.current.innerHTML = '<p class="text-slate-400 text-sm italic">Sandbox Element (id="sandbox")</p>';
        sandboxRef.current.style.cssText = ''; // Clear inline styles
    }
  }, [initialCode]);

  const runCode = () => {
    setLogs([]);
    setError(null);
    setExplanation(null);

    // Reset sandbox before run
    if (sandboxRef.current) {
        sandboxRef.current.innerHTML = '';
        sandboxRef.current.style.cssText = '';
    }

    const formatArgs = (args: any[]) => {
        return args.map(arg => {
            if (typeof arg === 'object' && arg !== null) {
                try {
                    return JSON.stringify(arg, null, 2);
                } catch (e) {
                    return '[Object]';
                }
            }
            return String(arg);
        }).join(' ');
    };

    const pushLog = (args: any[], type: 'log' | 'warn' | 'error' = 'log') => {
        const msg = formatArgs(args);
        const logEntry = type === 'log' ? msg : `[${type.toUpperCase()}] ${msg}`;
        setLogs(prev => [...prev, logEntry]);
    };

    const mockConsole = {
      log: (...args: any[]) => pushLog(args, 'log'),
      warn: (...args: any[]) => pushLog(args, 'warn'),
      error: (...args: any[]) => pushLog(args, 'error'),
    };

    try {
      const fn = new Function('console', code);
      fn(mockConsole);
    } catch (err: any) {
      setError(err.toString());
    }
  };

  const handleExplain = async () => {
    setIsExplaining(true);
    setExplanation(null);
    try {
        const text = await explainCode(code);
        setExplanation(text);
    } catch (e) {
        setExplanation("Failed to get explanation.");
    } finally {
        setIsExplaining(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-slate-900 rounded-xl overflow-hidden shadow-2xl border border-slate-700">
      <div className="flex items-center justify-between px-4 py-2 bg-slate-800 border-b border-slate-700">
        <span className="text-slate-400 text-sm font-mono">Playground</span>
        <div className="flex gap-2">
            <button 
                onClick={handleExplain}
                disabled={isExplaining}
                className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-purple-300 bg-purple-900/30 hover:bg-purple-900/50 rounded-md transition-colors disabled:opacity-50"
            >
                <MessageSquarePlus size={14} />
                {isExplaining ? 'Analyzing...' : 'Explain Code'}
            </button>
            <button 
                onClick={() => setCode(initialCode)}
                className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-700 rounded-md transition-colors"
                title="Reset Code"
            >
                <RotateCcw size={16} />
            </button>
            <button 
                onClick={runCode}
                className="flex items-center gap-2 px-4 py-1.5 text-xs font-bold text-white bg-green-600 hover:bg-green-500 rounded-md transition-colors shadow-lg shadow-green-900/20"
            >
                <Play size={14} />
                Run Code
            </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row h-full overflow-hidden">
        {/* Editor Area */}
        <div className="flex-1 lg:flex-[1.2] relative flex flex-col border-r border-slate-700">
             <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full h-full p-4 bg-slate-900 text-slate-100 font-mono text-sm resize-none focus:outline-none focus:ring-1 focus:ring-slate-700 leading-relaxed"
                spellCheck={false}
            />
        </div>

        {/* Output Area (Console + DOM Sandbox) */}
        <div className="h-1/2 lg:h-full lg:flex-1 bg-black flex flex-col min-w-[250px]">
            {/* DOM Sandbox Preview */}
            <div className="h-1/3 min-h-[120px] bg-white p-4 border-b border-slate-700 overflow-auto relative">
                <span className="absolute top-1 right-2 text-[10px] text-slate-400 font-mono select-none">Browser Preview</span>
                <div id="sandbox" ref={sandboxRef} className="h-full w-full">
                    <p className="text-slate-400 text-sm italic">Sandbox Element (id="sandbox")</p>
                </div>
            </div>

            {/* Console */}
            <div className="flex-1 flex flex-col min-h-0">
                <div className="px-3 py-1 bg-slate-950 text-xs text-slate-500 font-mono border-b border-slate-800">
                    Console
                </div>
                <div className="flex-1 p-3 font-mono text-sm overflow-y-auto">
                    {logs.length === 0 && !error && (
                    <span className="text-slate-600 italic">Console output...</span>
                    )}
                    
                    {logs.map((log, i) => (
                    <div key={i} className="mb-1 text-green-400 whitespace-pre-wrap font-medium border-b border-slate-900 pb-1">
                        <span className="text-slate-600 mr-2 opacity-50">&gt;</span>{log}
                    </div>
                    ))}
                    
                    {error && (
                    <div className="text-red-400 whitespace-pre-wrap bg-red-900/10 p-2 rounded mt-2 border border-red-900/30">
                        <span className="font-bold">Error:</span> {error}
                    </div>
                    )}
                    
                    {explanation && (
                        <div className="mt-4 pt-4 border-t border-slate-800 animate-fade-in">
                            <div className="text-purple-400 text-xs font-bold mb-1 uppercase tracking-wider">AI Explanation</div>
                            <div className="text-slate-300 text-xs leading-5 whitespace-pre-wrap">{explanation}</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CodePlayground;