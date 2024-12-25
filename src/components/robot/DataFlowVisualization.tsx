import { memo } from 'react';

export const DataFlowVisualization = memo(function DataFlowVisualization() {
  return (
    <div className="absolute inset-0 opacity-30">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute h-px bg-purple-500"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 50 + 50}px`,
            animation: `flow ${Math.random() * 3 + 2}s linear infinite`,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        />
      ))}
    </div>
  );
});