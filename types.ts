export enum SlideType {
  INTRO = "INTRO",
  CONCEPT = "CONCEPT",
  CODE = "CODE",
  SUMMARY = "SUMMARY",
}

export enum Language {
  JAVASCRIPT = "javascript",
  PYTHON = "python",
}

export interface Slide {
  id: string;
  title: string;
  type: SlideType;
  content: string; // Markdown supported
  defaultCode?: string; // Initial code for the playground
  expectedOutput?: string; // Expected output for Python (run locally)
  bullets?: string[];
  realWorldExample?: string; // Real-world scenario explanation
  language?: Language; // Language of the slide (default: JavaScript)
}

export interface ChatMessage {
  role: "user" | "model";
  text: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number; // Index of the correct option
}

export interface QuizState {
  questions: QuizQuestion[];
  userAnswers: number[]; // Index of selected answers
  submitted: boolean;
  score: number;
}
