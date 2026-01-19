import React, { useState, useEffect } from 'react';
import { BASIC_SLIDES, ES6_SLIDES } from './constants';
import Slide from './components/Slide';
import CodePlayground from './components/CodePlayground';
import AITutor from './components/AITutor';
import Quiz from './components/Quiz';
import { ChevronLeft, ChevronRight, Menu, X, BookOpen, Terminal, MessagesSquare, GraduationCap, Zap } from 'lucide-react';

type CourseType = 'BASIC' | 'ES6';

const App = () => {
  const [courseType, setCourseType] = useState<CourseType>('BASIC');
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [showSidebar, setShowSidebar] = useState(false);
  const [activeTab, setActiveTab] = useState<'playground' | 'tutor' | 'quiz'>('playground');

  // Determine current slides based on course type
  const slides = courseType === 'BASIC' ? BASIC_SLIDES : ES6_SLIDES;
  const currentSlide = slides[currentSlideIndex];
  const isLastSlide = currentSlideIndex === slides.length - 1;
  const isFirstSlide = currentSlideIndex === 0;

  // Reset index when course changes
  useEffect(() => {
    setCurrentSlideIndex(0);
  }, [courseType]);

  const handleNext = () => {
    if (!isLastSlide) setCurrentSlideIndex(prev => prev + 1);
  };

  const handlePrev = () => {
    if (!isFirstSlide) setCurrentSlideIndex(prev => prev - 1);
  };

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      
      {/* Mobile Sidebar Overlay */}
      {showSidebar && (
        <div 
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setShowSidebar(false)}
        />
      )}

      {/* Sidebar Navigation */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200 transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0
        ${showSidebar ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-4 border-b border-slate-100">
             <div className="flex items-center gap-2 text-indigo-600 font-bold text-xl mb-4">
                <BookOpen size={24} />
                <span>JS Master</span>
            </div>
            
            {/* Sidebar toggle for course (Optional: redundancy for better UX) */}
            <div className="flex flex-col gap-2">
                 <button 
                    onClick={() => { setCourseType('BASIC'); setShowSidebar(false); }}
                    className={`text-left px-3 py-2 rounded-md text-sm font-semibold transition-colors ${courseType === 'BASIC' ? 'bg-blue-100 text-blue-700' : 'text-slate-600 hover:bg-slate-50'}`}
                 >
                    Basic JS
                 </button>
                 <button 
                    onClick={() => { setCourseType('ES6'); setShowSidebar(false); }}
                    className={`text-left px-3 py-2 rounded-md text-sm font-semibold transition-colors ${courseType === 'ES6' ? 'bg-purple-100 text-purple-700' : 'text-slate-600 hover:bg-slate-50'}`}
                 >
                    ES6+ Modern
                 </button>
            </div>
        </div>
        
        <nav className="p-4 space-y-1 overflow-y-auto h-[calc(100vh-180px)]">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-2">
                {courseType === 'BASIC' ? 'Basic Curriculum' : 'ES6+ Curriculum'}
            </h4>
            {slides.map((slide, idx) => (
                <button
                    key={slide.id}
                    onClick={() => {
                        setCurrentSlideIndex(idx);
                        setShowSidebar(false);
                        if (slide.defaultCode) setActiveTab('playground');
                    }}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        currentSlideIndex === idx 
                        ? (courseType === 'BASIC' ? 'bg-blue-50 text-blue-700' : 'bg-purple-50 text-purple-700')
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                >
                    <div className="flex items-center gap-3">
                        <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0 ${
                            currentSlideIndex === idx 
                            ? (courseType === 'BASIC' ? 'bg-blue-200 text-blue-800' : 'bg-purple-200 text-purple-800')
                            : 'bg-slate-100 text-slate-500'
                        }`}>
                            {idx + 1}
                        </span>
                        <span className="truncate">{slide.title.replace(/^\d+\.\s*/, '')}</span>
                    </div>
                </button>
            ))}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full relative">
        
        {/* Header */}
        <header className="h-14 border-b border-slate-200 bg-white flex items-center justify-between px-4">
            <div className="flex items-center gap-3">
                <button onClick={() => setShowSidebar(true)} className="lg:hidden text-slate-600">
                    <Menu size={24} />
                </button>
                <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 rounded text-xs font-bold ${courseType === 'BASIC' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'}`}>
                        {courseType === 'BASIC' ? 'BASIC JS' : 'ES6+'}
                    </span>
                    <span className="font-semibold text-slate-800 text-sm hidden sm:inline">
                         Module {currentSlideIndex + 1} of {slides.length}
                    </span>
                </div>
            </div>

            {/* Course Switcher in Header */}
            <div className="flex items-center gap-2">
                {courseType === 'BASIC' ? (
                     <button 
                        onClick={() => setCourseType('ES6')}
                        className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-xs font-bold hover:shadow-md transition-all hover:scale-105"
                     >
                        <Zap size={14} />
                        Go to ES6 Masterclass
                     </button>
                ) : (
                    <button 
                        onClick={() => setCourseType('BASIC')}
                        className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-full text-xs font-bold hover:bg-slate-50 transition-all"
                    >
                        <GraduationCap size={14} />
                        Back to Basics
                    </button>
                )}
            </div>
        </header>

        <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
            
            {/* Left Panel: Slide Content */}
            <div className="flex-1 lg:w-[40%] p-6 lg:p-10 overflow-y-auto relative bg-slate-50 border-r border-slate-200">
                <div className="max-w-2xl mx-auto h-full flex flex-col">
                    <Slide data={currentSlide} />
                    
                    {/* Navigation Controls */}
                    <div className="mt-auto pt-8 flex justify-between items-center border-t border-slate-200">
                        <button 
                            onClick={handlePrev} 
                            disabled={isFirstSlide}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg text-slate-600 hover:bg-white hover:shadow-sm disabled:opacity-30 disabled:hover:shadow-none transition-all font-medium"
                        >
                            <ChevronLeft size={20} />
                            Previous
                        </button>
                        
                        <button 
                            onClick={handleNext} 
                            disabled={isLastSlide}
                            className={`flex items-center gap-2 px-6 py-2 rounded-lg text-white font-medium shadow-md transition-all ${
                                courseType === 'BASIC' 
                                ? 'bg-blue-600 hover:bg-blue-700 shadow-blue-200 disabled:opacity-50' 
                                : 'bg-purple-600 hover:bg-purple-700 shadow-purple-200 disabled:opacity-50'
                            }`}
                        >
                            {isLastSlide ? 'Complete' : 'Next'}
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Right Panel: Interactive Tools - WIDENED to 60% */}
            <div className="lg:w-[60%] bg-slate-100 flex flex-col h-[50vh] lg:h-full">
                
                {/* Tabs */}
                <div className="flex border-b border-slate-200 bg-white px-2">
                    <button 
                        onClick={() => setActiveTab('playground')}
                        className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold border-b-2 transition-colors ${
                            activeTab === 'playground' 
                            ? 'border-indigo-600 text-indigo-600' 
                            : 'border-transparent text-slate-500 hover:text-slate-700'
                        }`}
                    >
                        <Terminal size={16} />
                        Code Playground
                    </button>
                    <button 
                        onClick={() => setActiveTab('tutor')}
                        className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold border-b-2 transition-colors ${
                            activeTab === 'tutor' 
                            ? 'border-indigo-600 text-indigo-600' 
                            : 'border-transparent text-slate-500 hover:text-slate-700'
                        }`}
                    >
                        <MessagesSquare size={16} />
                        AI Tutor
                    </button>
                    <button 
                        onClick={() => setActiveTab('quiz')}
                        className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold border-b-2 transition-colors ${
                            activeTab === 'quiz' 
                            ? 'border-indigo-600 text-indigo-600' 
                            : 'border-transparent text-slate-500 hover:text-slate-700'
                        }`}
                    >
                        <BookOpen size={16} />
                        Quiz
                    </button>
                </div>

                {/* Tab Content */}
                <div className="flex-1 p-2 lg:p-4 overflow-hidden relative">
                    {activeTab === 'playground' && (
                        <div className="h-full animate-fade-in">
                            <CodePlayground 
                                key={currentSlide.id} 
                                initialCode={currentSlide.defaultCode || '// Try it yourself!'} 
                            />
                        </div>
                    )}
                    
                    {activeTab === 'tutor' && (
                        <div className="h-full animate-fade-in">
                            <AITutor context={currentSlide.content + "\nBullets: " + (currentSlide.bullets?.join(', ') || '')} />
                        </div>
                    )}

                    {activeTab === 'quiz' && (
                        <div className="h-full animate-fade-in flex flex-col justify-center">
                            <Quiz topic={currentSlide.title} />
                        </div>
                    )}
                </div>
            </div>

        </div>
      </main>
    </div>
  );
};

export default App;