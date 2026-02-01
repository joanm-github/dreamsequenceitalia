import { useEffect, useState } from "react";

interface AudioVisualizerProps {
  isPlaying?: boolean;
  barCount?: number;
}

export const AudioVisualizer = ({ isPlaying = true, barCount = 12 }: AudioVisualizerProps) => {
  const [bars, setBars] = useState<number[]>([]);

  useEffect(() => {
    if (!isPlaying) {
      setBars(Array(barCount).fill(0.1));
      return;
    }

    const interval = setInterval(() => {
      setBars(
        Array(barCount)
          .fill(0)
          .map(() => Math.random() * 0.8 + 0.2)
      );
    }, 150);

    return () => clearInterval(interval);
  }, [isPlaying, barCount]);

  return (
    <div className="flex items-end gap-1 h-8">
      {bars.map((height, i) => (
        <div
          key={i}
          className="w-1 bg-primary rounded-t transition-all duration-150 ease-out"
          style={{
            height: `${height * 100}%`,
            opacity: isPlaying ? 0.7 + height * 0.3 : 0.3,
            boxShadow: isPlaying ? `0 0 ${height * 10}px hsl(var(--phosphor) / 0.5)` : "none",
          }}
        />
      ))}
    </div>
  );
};
