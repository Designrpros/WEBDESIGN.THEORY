'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import styles from './CodeBlock.module.css';

export interface CodeBlockProps {
  code: string;
  language?: 'html' | 'css' | 'js';
  title?: string;
  annotation?: string;
  showLineNumbers?: boolean;
}

export function CodeBlock({
  code,
  language = 'css',
  title,
  annotation,
  showLineNumbers = true,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const lines = code.split('\n');

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          {title && <span className={styles.title}>{title}</span>}
          <span className={styles.language}>{language.toUpperCase()}</span>
        </div>
        <button
          className={styles.copyButton}
          onClick={handleCopy}
          aria-label={copied ? 'Copied!' : 'Copy code'}
        >
          {copied ? (
            <>
              <Check size={14} />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy size={14} />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      
      <div className={styles.codeWrapper}>
        {showLineNumbers && (
          <div className={styles.lineNumbers} aria-hidden="true">
            {lines.map((_, i) => (
              <span key={i}>{i + 1}</span>
            ))}
          </div>
        )}
        <pre className={styles.pre}>
          <code className={`${styles.code} ${styles[language]}`}>
            {code}
          </code>
        </pre>
      </div>
      
      {annotation && (
        <div className={styles.annotation}>
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 16 16" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
            <path d="M8 5V8.5M8 11H8.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span>{annotation}</span>
        </div>
      )}
    </div>
  );
}

export default CodeBlock;
