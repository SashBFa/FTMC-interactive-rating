import { useState } from 'react';
import { SubRating } from './components/SubRating';
import { ThanksRating } from './components/ThanksRating';

export const App = () => {
  const [rate, setRate] = useState<number>(0);
  const range = Array.from({ length: 5 }, (v, i) => i + 1);

  const handleSub = (nbr: number) => {
    setRate(nbr);
  };

  return (
    <main className="max-w-screen w-full h-screen bg-gray-900 flex justify-center items-center text-white">
      <div className="max-w-xs w-full rounded-3xl bg-gray-800  relative drop-shadow overflow-hidden">
        <span className="gradient-01" />
        <div className="w-full h-full p-6">
          {rate === 0 ? (
            <SubRating handleSub={handleSub} range={range} />
          ) : (
            <ThanksRating rate={rate} maxRate={range.length} />
          )}
        </div>
      </div>
    </main>
  );
};
