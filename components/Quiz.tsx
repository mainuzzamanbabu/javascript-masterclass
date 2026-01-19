import React, { useState, useEffect } from 'react';
import { generateQuiz } from '../services/geminiService';
import { QuizState, QuizQuestion } from '../types';
import { CheckCircle, XCircle, BrainCircuit, Loader2 } from 'lucide-react';

interface QuizProps {
  topic: string;
}

const Quiz: React.FC<QuizProps> = ({ topic }) => {
  const [loading, setLoading] = useState(false);
  const [quizState, setQuizState] = useState<QuizState | null>(null);
  const [error, setError] = useState<string | null>(null);

  const startQuiz = async () => {
    setLoading(true);
    setError(null);
    try {
      const questions = await generateQuiz(topic);
      if (questions && questions.length > 0) {
        setQuizState({
          questions,
          userAnswers: new Array(questions.length).fill(-1),
          submitted: false,
          score: 0
        });
      } else {
        setError("Could not generate questions. Please check API Key.");
      }
    } catch (e) {
      setError("Failed to generate quiz.");
    } finally {
      setLoading(false);
    }
  };

  const handleSelectAnswer = (qIndex: number, optionIndex: number) => {
    if (!quizState || quizState.submitted) return;
    
    const newAnswers = [...quizState.userAnswers];
    newAnswers[qIndex] = optionIndex;
    setQuizState({ ...quizState, userAnswers: newAnswers });
  };

  const handleSubmit = () => {
    if (!quizState) return;
    
    let score = 0;
    quizState.questions.forEach((q, idx) => {
      if (quizState.userAnswers[idx] === q.correctAnswer) {
        score++;
      }
    });
    
    setQuizState({ ...quizState, submitted: true, score });
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-64 p-6 bg-white rounded-xl shadow-lg border border-slate-200">
        <Loader2 className="animate-spin text-blue-600 mb-4" size={32} />
        <p className="text-slate-600">Generating challenging questions about {topic}...</p>
      </div>
    );
  }

  if (!quizState) {
    return (
      <div className="flex flex-col items-center justify-center h-64 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-sm border border-blue-100 text-center">
        <BrainCircuit className="text-indigo-500 mb-4" size={40} />
        <h3 className="text-lg font-bold text-slate-800 mb-2">Test Your Knowledge</h3>
        <p className="text-slate-600 mb-6 text-sm">Generate a quick AI quiz about <span className="font-semibold text-indigo-600">{topic}</span>.</p>
        <button 
          onClick={startQuiz}
          className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
        >
          Generate Quiz
        </button>
        {error && <p className="text-red-500 text-xs mt-4">{error}</p>}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
      <div className="bg-indigo-600 px-6 py-4 flex justify-between items-center">
        <h3 className="text-white font-bold text-lg">Quiz: {topic}</h3>
        {quizState.submitted && (
            <span className="bg-white text-indigo-700 px-3 py-1 rounded-full text-sm font-bold">
                Score: {quizState.score}/{quizState.questions.length}
            </span>
        )}
      </div>

      <div className="p-6 space-y-8 max-h-[60vh] overflow-y-auto">
        {quizState.questions.map((q, qIdx) => {
          const isCorrect = quizState.submitted && quizState.userAnswers[qIdx] === q.correctAnswer;
          const isWrong = quizState.submitted && quizState.userAnswers[qIdx] !== q.correctAnswer;
          
          return (
            <div key={qIdx} className="space-y-3">
              <p className="font-medium text-slate-800 text-base">
                <span className="text-slate-400 mr-2">{qIdx + 1}.</span>
                {q.question}
              </p>
              
              <div className="space-y-2">
                {q.options.map((opt, oIdx) => {
                  const isSelected = quizState.userAnswers[qIdx] === oIdx;
                  let btnClass = "w-full text-left px-4 py-3 rounded-lg border text-sm transition-all duration-200 ";
                  
                  if (quizState.submitted) {
                    if (oIdx === q.correctAnswer) {
                        btnClass += "bg-green-100 border-green-500 text-green-800 font-medium ";
                    } else if (isSelected && oIdx !== q.correctAnswer) {
                        btnClass += "bg-red-100 border-red-500 text-red-800 ";
                    } else {
                        btnClass += "bg-slate-50 border-slate-200 text-slate-400 ";
                    }
                  } else {
                    if (isSelected) {
                        btnClass += "bg-indigo-50 border-indigo-500 text-indigo-700 ring-1 ring-indigo-500 ";
                    } else {
                        btnClass += "bg-white border-slate-200 hover:bg-slate-50 text-slate-600 hover:border-slate-300 ";
                    }
                  }

                  return (
                    <button
                      key={oIdx}
                      onClick={() => handleSelectAnswer(qIdx, oIdx)}
                      disabled={quizState.submitted}
                      className={btnClass}
                    >
                      <div className="flex items-center justify-between">
                        <span>{opt}</span>
                        {quizState.submitted && oIdx === q.correctAnswer && <CheckCircle size={16} className="text-green-600" />}
                        {quizState.submitted && isSelected && oIdx !== q.correctAnswer && <XCircle size={16} className="text-red-600" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex justify-end gap-3">
        <button
            onClick={() => setQuizState(null)}
            className="px-4 py-2 text-slate-600 hover:text-slate-800 font-medium text-sm"
        >
            Reset
        </button>
        {!quizState.submitted && (
            <button
                onClick={handleSubmit}
                disabled={quizState.userAnswers.includes(-1)}
                className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-md transition-all"
            >
                Submit Answers
            </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;