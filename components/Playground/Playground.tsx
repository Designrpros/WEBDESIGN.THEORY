'use client';

import { useState, useEffect, useRef } from 'react';
import { RefreshCw, Maximize2, Code } from 'lucide-react';
import type { PlaygroundPreset } from '@/lib/types';
import styles from './Playground.module.css';

export interface PlaygroundProps {
  preset: PlaygroundPreset;
  accentColor?: string;
}

export function Playground({ preset, accentColor = '#6366F1' }: PlaygroundProps) {
  const [html, setHtml] = useState(preset.html);
  const [css, setCss] = useState(preset.css);
  const [activeTab, setActiveTab] = useState<'html' | 'css'>('css');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    updatePreview();
  }, [html, css]);

  const updatePreview = () => {
    if (!iframeRef.current) return;

    const preview = iframeRef.current;
    const doc = preview.contentDocument || preview.contentWindow?.document;
    
    if (doc) {
      doc.open();
      doc.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              * { box-sizing: border-box; }
              body { 
                margin: 0; 
                padding: 24px; 
                font-family: system-ui, sans-serif;
                min-height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
              }
              ${css}
            </style>
          </head>
          <body>
            ${html}
          </body>
        </html>
      `);
      doc.close();
    }
  };

  const handleReset = () => {
    setHtml(preset.html);
    setCss(preset.css);
  };

  const handleCopy = async () => {
    const fullCode = `
<!-- HTML -->
${html}

<!-- CSS -->
${css}
    `.trim();
    
    try {
      await navigator.clipboard.writeText(fullCode);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className={`${styles.container} ${isFullscreen ? styles.fullscreen : ''}`}>
      <div className={styles.header}>
        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${activeTab === 'html' ? styles.active : ''}`}
            onClick={() => setActiveTab('html')}
          >
            HTML
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'css' ? styles.active : ''}`}
            onClick={() => setActiveTab('css')}
          >
            CSS
          </button>
        </div>
        
        <div className={styles.actions}>
          <button
            className={styles.actionButton}
            onClick={handleReset}
            title="Reset to original"
          >
            <RefreshCw size={16} />
          </button>
          <button
            className={styles.actionButton}
            onClick={handleCopy}
            title="Copy code"
          >
            <Code size={16} />
          </button>
          <button
            className={styles.actionButton}
            onClick={() => setIsFullscreen(!isFullscreen)}
            title={isFullscreen ? 'Exit fullscreen' : 'Fullscreen'}
          >
            <Maximize2 size={16} />
          </button>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.editor}>
          <textarea
            className={styles.codeArea}
            value={activeTab === 'html' ? html : css}
            onChange={(e) => activeTab === 'html' ? setHtml(e.target.value) : setCss(e.target.value)}
            spellCheck={false}
            aria-label={activeTab === 'html' ? 'HTML code editor' : 'CSS code editor'}
          />
        </div>

        <div className={styles.preview}>
          <iframe
            ref={iframeRef}
            className={styles.iframe}
            title="Preview"
            sandbox="allow-scripts"
          />
        </div>
      </div>
    </div>
  );
}

export default Playground;
