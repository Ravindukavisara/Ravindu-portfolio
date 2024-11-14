import React, { useEffect, useRef } from 'react';

const javaSnippets = [
  'public class', 'private void', 'String[]', 'System.out', 'extends',
  'implements', 'interface', 'ArrayList<>', 'HashMap<>', 'return',
  '@Override', 'static', 'final', 'try/catch', 'throws Exception'
];

export default function CodeRain() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const columns: HTMLDivElement[] = [];
    const columnCount = Math.floor(window.innerWidth / 40);

    for (let i = 0; i < columnCount; i++) {
      const column = document.createElement('div');
      column.className = 'code-column';
      column.style.left = `${i * 40}px`;
      column.style.animationDuration = `${Math.random() * 5 + 3}s`;
      column.textContent = javaSnippets[Math.floor(Math.random() * javaSnippets.length)];
      container.appendChild(column);
      columns.push(column);
    }

    const updateColumns = () => {
      columns.forEach(column => {
        if (parseFloat(getComputedStyle(column).top) > window.innerHeight) {
          column.style.top = '-20px';
          column.textContent = javaSnippets[Math.floor(Math.random() * javaSnippets.length)];
        }
      });
      requestAnimationFrame(updateColumns);
    };

    const animation = requestAnimationFrame(updateColumns);

    return () => {
      cancelAnimationFrame(animation);
      columns.forEach(column => column.remove());
    };
  }, []);

  return <div ref={containerRef} className="code-rain" />;
}