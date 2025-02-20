import { Diamond } from 'lucide-react';
import { level } from './types';

export default function DiamondIcon({ level }: { level: level }) {
  return (
    <>
      {[1, 2, 3].map((_, index) => (
        <Diamond
          fill={
            index <
            (level === 'beginner' ? 1 : level === 'intermediate' ? 2 : 3)
              ? '#1bb43a'
              : ''
          }
          key={index}
        />
      ))}
    </>
  );
}
