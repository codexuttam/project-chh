import React, { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  end: number;
  duration?: number; // ms
  suffix?: string;
  className?: string;
}

/**
 * Counts from 0 up to `end` once the element scrolls into view.
 * Uses requestAnimationFrame with an ease-out curve and formats
 * the number with Indian/International grouping (e.g. 5,500,000).
 */
export default function AnimatedCounter({
  end,
  duration = 2200,
  suffix = "",
  className = ""
}: AnimatedCounterProps) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let frame = 0;
    const run = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
        setValue(Math.round(eased * end));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          run();
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(node);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [end, duration]);

  return (
    <span ref={ref} className={className}>
      {value.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}
