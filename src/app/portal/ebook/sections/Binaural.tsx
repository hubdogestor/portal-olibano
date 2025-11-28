'use client';

import { AlertTriangle, Headphones, Pause, Play, Sparkles } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { binauralTracks } from '../data/binauralTracks';
import SectionHeading from '../components/common/SectionHeading';
import SectionWrapper from '../components/common/SectionWrapper';

const frequencyMenu = [
  { label: 'Alfa', description: 'Relaxamento calmo, foco leve (8-12 Hz)' },
  { label: 'Teta', description: 'Criatividade, introspecção (4-7 Hz)' },
  { label: 'Delta', description: 'Sono profundo (0.5-4 Hz)' },
] as const;

type BinauralTrackCardProps = {
  track: (typeof binauralTracks)[number];
  isActive: boolean;
  onToggle: (trackId: string, audioElement: HTMLAudioElement | null) => void;
  onEnded: (trackId: string) => void;
};

const BinauralTrackCard = ({ track, isActive, onToggle, onEnded }: BinauralTrackCardProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) {
      return undefined;
    }

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => {
      setIsPlaying(false);
      onEnded(track.id);
      audio.currentTime = 0;
    };

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [onEnded, track.id]);

  useEffect(() => {
    if (!isActive && isPlaying && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [isActive, isPlaying]);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-olibano-sage/40 bg-white/80 shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white/70 to-olibano-cream/80 opacity-60"></div>
      <div className="relative z-10 flex flex-col gap-6 p-6">
        <div className="flex gap-5">
          <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-md border border-olibano-sage/30 shrink-0">
            <img src={track.cover} alt={`Arte da faixa ${track.title}`} className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="flex-1 space-y-2">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[11px] tracking-[0.4em] uppercase text-olibano-sage">{track.wave}</span>
              <span className="px-3 py-1 rounded-full bg-olibano-gold/15 text-olibano-forest text-xs font-semibold">{track.frequency}</span>
            </div>
            <h4 className="font-serif text-2xl text-olibano-forest">{track.title}</h4>
            <p className="text-sm text-olibano-forest/70 leading-relaxed">{track.description}</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-4 justify-between">
          <div>
            <p className="text-xs text-olibano-sage uppercase tracking-[0.3em] mb-1">Estado</p>
            <p className="text-sm font-medium text-olibano-forest">
              {track.state.from} → <span className="text-olibano-terracotta">{track.state.to}</span>
            </p>
            <p className="text-sm text-olibano-forest/70">{track.intention}</p>
          </div>
          <button
            type="button"
            onClick={() => onToggle(track.id, audioRef.current)}
            className={`flex items-center gap-2 rounded-full px-5 py-3 shadow-md text-sm font-semibold transition-all ${
              isPlaying ? 'bg-olibano-terracotta text-white' : 'bg-white text-olibano-forest border border-olibano-sage/40'
            }`}
          >
            {isPlaying ? <Pause size={18} /> : <Play size={18} />}
            {isPlaying ? 'Pausar' : 'Ouvir com fones'}
          </button>
        </div>
        <audio ref={audioRef} src={track.file} preload="none" />
      </div>
    </div>
  );
};

const Binaural = () => {
  const [activeTrackId, setActiveTrackId] = useState<string | null>(null);
  const activeAudioRef = useRef<HTMLAudioElement | null>(null);

  const handleToggleTrack = (trackId: string, audioElement: HTMLAudioElement | null) => {
    if (!audioElement) {
      return;
    }

    if (activeAudioRef.current && activeAudioRef.current !== audioElement) {
      activeAudioRef.current.pause();
      activeAudioRef.current.currentTime = 0;
    }

    if (audioElement.paused) {
      void audioElement.play();
      activeAudioRef.current = audioElement;
      setActiveTrackId(trackId);
    } else {
      audioElement.pause();
      activeAudioRef.current = null;
      setActiveTrackId(null);
    }
  };

  const handleTrackEnded = (trackId: string) => {
    if (activeTrackId === trackId) {
      activeAudioRef.current = null;
      setActiveTrackId(null);
    }
  };

  return (
    <SectionWrapper>
      <SectionHeading Icon={Headphones} title="Ondas Binaurais" eyebrow="Prática 06" accentClasses="bg-gradient-to-br from-indigo-100 to-indigo-200 text-indigo-700" />

      <p className="text-olibano-forest/80 mb-8 leading-relaxed text-lg font-light">
        Quando cada ouvido recebe um tom ligeiramente diferente, o cérebro cria uma terceira frequência (o batimento). É como <span className="text-olibano-terracotta font-medium">afinar o cérebro para uma estação de rádio específica</span>.
      </p>

      <div className="bg-gradient-to-br from-olibano-forest via-olibano-forest/95 to-olibano-forest text-white p-8 rounded-3xl shadow-2xl mb-10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            {[20, 35, 50, 65, 80].map((top, index) => (
              <div
                key={top}
                className="absolute w-full h-px bg-olibano-gold"
                style={{ top: `${top}%`, transform: `rotate(${index * 2 - 3}deg)` }}
              ></div>
            ))}
          </div>
        </div>
        <h3 className="relative z-10 font-serif text-2xl mb-6 flex items-center gap-3">
          <Sparkles className="text-olibano-gold" size={24} />
          O Menu de Frequências
        </h3>
        <ul className="relative z-10 space-y-4">
          {frequencyMenu.map(({ label, description }) => (
            <li key={label} className="flex items-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
              <span className="w-20 font-bold text-olibano-gold text-lg">{label}</span>
              <span className="text-white/80">{description}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8 p-4 bg-olibano-terracotta/30 rounded-xl text-center relative z-10 border border-olibano-terracotta/50">
          <span className="flex items-center justify-center gap-2">
            <AlertTriangle size={18} />
            Obrigatório o uso de fones de ouvido estéreo.
          </span>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {binauralTracks.map((track) => (
          <BinauralTrackCard
            key={track.id}
            track={track}
            isActive={activeTrackId === track.id}
            onToggle={handleToggleTrack}
            onEnded={handleTrackEnded}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Binaural;
