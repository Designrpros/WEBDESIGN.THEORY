// Core movement data types for WebDesignTheory.dev

export interface Principle {
  title: string;
  description: string;
}

export interface VisualExample {
  title: string;
  description: string;
  url?: string;
}

export interface CodeSnippet {
  language: 'html' | 'css' | 'js';
  title: string;
  code: string;
  annotation?: string;
}

export interface Control {
  name: string;
  property: string;
  type: 'range' | 'color' | 'select';
  min?: number;
  max?: number;
  step?: number;
  default: string | number;
  options?: string[];
  unit?: string;
}

export interface PlaygroundPreset {
  html: string;
  css: string;
  controls: Control[];
}

export interface Movement {
  slug: string;
  name: string;
  era: string;
  origin: string;
  accentColor: string;
  description: string;
  keyTraits: string[];
  principles: Principle[];
  theory: string;
  visualExamples: VisualExample[];
  codeSnippets: CodeSnippet[];
  relatedMovements: string[];
  playgroundPreset: PlaygroundPreset;
  featured?: boolean;
}

export interface GlossaryTerm {
  term: string;
  pronunciation?: string;
  definition: string;
  relatedTerms?: string[];
  relatedMovements?: string[];
  seeAlso?: string[];
}

export interface NavigationItem {
  label: string;
  href: string;
  description?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
