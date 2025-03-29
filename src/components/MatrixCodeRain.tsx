
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

    // Matrix code characters - cyberpunk style
    const characters = '01234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ<>[]{}|=+*/-_$#@!?アイウエオカキクケコサシスセソタチツテトナニヌネノマミムメモヤユヨラリルレロワヰ';
    
    // Create bigger, more visible characters
    const fontSize = 24;
    
    // Fewer columns with wider spacing
    const columnSpacing = fontSize * 1.5; // Add space between columns
    const columns = Math.floor(canvas.width / columnSpacing);
    
    // Array to track the y position of each drop
    const drops: number[] = [];
    
    // Initialize only a few drops - around 5-10 major cascades
    const numberOfCascades = 8; 
    const cascadePositions = [];
    
    // Distribute cascades evenly across screen width
    for (let i = 0; i < numberOfCascades; i++) {
      const position = Math.floor(i * (columns / numberOfCascades)) + 
                      Math.floor(Math.random() * (columns / numberOfCascades * 0.5));
      cascadePositions.push(position);
      drops[position] = Math.random() * -100; // Start at random positions above canvas
    }

    // Main animation function
    const draw = () => {
      if (!ctx || !canvas) return;
      
      // Semi-transparent black to create fade effect
      ctx.fillStyle = `rgba(10, 15, 21, 0.12)`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw cascades
      for (let i = 0; i < cascadePositions.length; i++) {
        const position = cascadePositions[i];
        
        // Only process active cascade positions
        if (drops[position] === undefined) continue;
        
        // Generate a random character
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        
        if (Math.floor(drops[position]) * fontSize < canvas.height && Math.floor(drops[position]) >= 0) {
          // Head of the cascade is brighter and larger
          ctx.fillStyle = '#00FFFF';
          ctx.font = `bold ${fontSize * 1.2}px monospace`;
          ctx.shadowColor = '#00FFFF';
          ctx.shadowBlur = 15;
          ctx.fillText(text, position * columnSpacing, Math.floor(drops[position]) * fontSize);
          
          // Trail characters are dimmer with longer trails
          const trailLength = 30; // Longer trail
          for (let j = 1; j < trailLength; j++) {
            if (Math.floor(drops[position]) - j >= 0) {
              // Calculate decreasing opacity for trail
              const opacity = 1 - (j / trailLength);
              ctx.fillStyle = `rgba(0, 191, 255, ${opacity})`;
              ctx.font = `${fontSize}px monospace`;
              ctx.shadowBlur = 5;
              
              // Get a new random character for each position in the trail
              const trailChar = characters.charAt(Math.floor(Math.random() * characters.length));
              ctx.fillText(trailChar, position * columnSpacing, (Math.floor(drops[position]) - j) * fontSize);
            }
          }
          
          // Occasionally spawn a secondary drop to the side
          if (Math.random() > 0.99) {
            const newPos = position + (Math.random() > 0.5 ? 1 : -1);
            if (newPos >= 0 && newPos < columns && !cascadePositions.includes(newPos)) {
              cascadePositions.push(newPos);
              drops[newPos] = drops[position] - Math.random() * 10;
              
              // Limit total cascades
              if (cascadePositions.length > numberOfCascades + 3) {
                const removeIndex = Math.floor(Math.random() * cascadePositions.length);
                cascadePositions.splice(removeIndex, 1);
              }
            }
          }
        }
        
        // Move drop down and reset when it reaches the bottom
        if (drops[position] * fontSize > canvas.height && Math.random() > 0.98) {
          drops[position] = 0;
        }
        
        // Increment y coordinate - slower speed for more visible effect
        drops[position] += 0.3;
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
