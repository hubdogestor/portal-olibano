'use client';

import { useEffect, useState } from 'react';

const BreathingExercise = () => {
  const [phase, setPhase] = useState('Inspire (4s)');
  const [scale, setScale] = useState(1);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const startCycle = () => {
      setPhase('Inspire (4s)');
      setScale(1.5);

      timeoutId = setTimeout(() => {
        setPhase('Expire (6s)');
        setScale(1);
      }, 4000);
    };

    startCycle();
    const intervalId = setInterval(startCycle, 10000);

    return () => {
      clearInterval(intervalId);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-10 bg-gradient-to-br from-olibano-cream to-olibano-sage/20 rounded-3xl shadow-inner my-8 border border-olibano-sage/30 space-y-12">
      <h3 className="text-olibano-forest font-serif text-xl text-center">Prática Visual: Ritmo 4-6</h3>
      <div
        className="w-36 h-36 rounded-full bg-gradient-to-br from-olibano-gold via-olibano-terracotta to-olibano-forest flex items-center justify-center text-white font-semibold transition-all duration-[4000ms] ease-in-out shadow-2xl"
        style={{ transform: `scale(${scale})` }}
      >
        <span className="text-center text-sm drop-shadow-lg">{phase}</span>
      </div>
      <p className="text-sm text-olibano-forest/70 text-center max-w-sm font-light">
        Siga o círculo: inspire quando ele expandir, expire quando ele contrair.
      </p>
    </div>
  );
};

export default BreathingExercise;
