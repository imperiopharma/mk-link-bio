
import React, { useEffect, useRef } from 'react';

interface MatrixCodeRainProps {
  opacity?: number;
  className?: string;
}

const MatrixCodeRain: React.FC<MatrixCodeRainProps> = ({ 
  opacity = 0.05, 
  className = '' 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas to full size of container
    const resizeCanvas = () => {
      if (canvas && canvas.parentElement) {
        canvas.width = canvas.parentElement.offsetWidth;
        canvas.height = canvas.parentElement.offsetHeight;
      }
    };

    // Initial resize
    resizeCanvas();

    // Add resize listener
    window.addEventListener('resize', resizeCanvas);

    // Matrix code characters - using a mix of katakana, numbers, and symbols
    const characters = '01234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ<>[]{}|=+*/-_$#@!?アイウエオカキクケコサシスセソタチツテトナニヌネノマミムメモヤユヨラリルレロワヰ';
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    
    // Array to track the y position of each drop
    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100; // Start drops at random positions above the canvas
    }

    // Main animation function
    const draw = () => {
      if (!ctx || !canvas) return;
      
      // Semi-transparent black to create fade effect
      ctx.fillStyle = `rgba(10, 15, 21, 0.1)`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Random characters with different brightnesses
      for (let i = 0; i < drops.length; i++) {
        // Generate a random character
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        
        // Make first character brighter for "head" effect
        if (Math.floor(drops[i]) * fontSize < canvas.height && Math.floor(drops[i]) >= 0) {
          // Head of the drop is brighter
          ctx.fillStyle = '#00FFFF';
          ctx.font = `bold ${fontSize}px monospace`;
          ctx.shadowColor = '#00FFFF';
          ctx.shadowBlur = 10;
          ctx.fillText(text, i * fontSize, Math.floor(drops[i]) * fontSize);
          
          // Trail characters are dimmer
          const trailLength = 20;
          for (let j = 1; j < trailLength; j++) {
            if (Math.floor(drops[i]) - j >= 0) {
              // Calculate decreasing opacity for trail
              const opacity = 1 - (j / trailLength);
              ctx.fillStyle = `rgba(0, 191, 255, ${opacity})`;
              ctx.font = `${fontSize - 1}px monospace`;
              ctx.shadowBlur = 2;
              
              // Get a new random character for each position in the trail
              const trailChar = characters.charAt(Math.floor(Math.random() * characters.length));
              ctx.fillText(trailChar, i * fontSize, (Math.floor(drops[i]) - j) * fontSize);
            }
          }
        }
        
        // Move drop down and reset when it reaches the bottom
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.98) {
          drops[i] = 0;
        }
        
        // Increment y coordinate
        drops[i] += 0.5;
      }
    };

    // Animation loop
    const interval = setInterval(draw, 35);

    // Cleanup function
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [opacity]);

  return (
    <canvas 
      ref={canvasRef} 
      className={`absolute top-0 left-0 w-full h-full ${className}`}
      style={{ opacity }}
    />
  );
};

export default MatrixCodeRain;
