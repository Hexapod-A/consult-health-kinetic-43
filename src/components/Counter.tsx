import { useState, useEffect, useRef } from 'react';

interface CounterProps {
  start: number;
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  triggerOnView?: boolean;
}

const Counter = ({ 
  start = 0, 
  end, 
  duration = 2000, 
  prefix = "", 
  suffix = "", 
  className = "",
  triggerOnView = true 
}: CounterProps) => {
  const [count, setCount] = useState(start);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef<HTMLSpanElement>(null);

  const easeOutCubic = (t: number): number => {
    return 1 - Math.pow(1 - t, 3);
  };

  const animateCounter = () => {
    if (hasAnimated) return;
    
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);
      const currentCount = start + (end - start) * easedProgress;
      
      setCount(Math.floor(currentCount));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
        setHasAnimated(true);
      }
    };
    
    requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (!triggerOnView) {
      animateCounter();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          animateCounter();
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, triggerOnView]);

  return (
    <span 
      ref={counterRef}
      className={`counter font-mono font-bold ${className}`}
    >
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

export default Counter;