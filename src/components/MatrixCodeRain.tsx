
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

    // Matrix code characters (using tech-related characters)
    const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノマミムメモヤユヨラリルレロワヰヱヲ';
    const fontSize = 14;
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
      
      // Set color and font
      ctx.fillStyle = '#00BFFF'; // Using the site's accent color
      ctx.font = `${fontSize}px monospace`;
      
      // Loop through drops
      for (let i = 0; i < drops.length; i++) {
        // Get random character
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        
        // Draw the character
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        // Move drop down and reset when it reaches the bottom
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.98) {
          drops[i] = 0;
        }
        
        // Increment y coordinate
        drops[i]++;
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
