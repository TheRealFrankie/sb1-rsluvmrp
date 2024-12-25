import { useState, useEffect, useRef } from 'react';
import { TrailPoint } from '../types';

export function useTrailPoints(x: number, y: number) {
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const idCounter = useRef(0);

  useEffect(() => {
    const uniqueId = `${Date.now()}-${idCounter.current++}`;
    const newPoint = { x, y, id: uniqueId };
    
    setTrail(prevTrail => {
      const updatedTrail = [...prevTrail, newPoint];
      return updatedTrail.length > 5 ? updatedTrail.slice(-5) : updatedTrail;
    });

    if (idCounter.current > 1000) {
      idCounter.current = 0;
    }
  }, [x, y]);

  return trail;
}