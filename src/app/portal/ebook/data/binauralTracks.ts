export type BinauralTrack = {
  id: string;
  title: string;
  frequency: string;
  wave: string;
  state: { from: string; to: string };
  intention: string;
  description: string;
  cover: string;
  file: string;
};

export const binauralTracks: BinauralTrack[] = [
  {
    id: 'peace-harmony',
    title: 'Peace & Harmony 432Hz',
    frequency: '432 Hz · Alfa 13 Hz',
    wave: 'Alfa',
    state: { from: 'Mente acelerada', to: 'Calma lúcida' },
    intention: 'Relaxar e acessar clareza suave no fim do dia.',
    description: 'Sons sustentados que desfazem ruído mental e preparam a mente para journaling ou ritual de encerramento.',
    cover: '/binaural/inner-dawn-cover.jpg',
    file: '/binaural/creating-peace-and-harmony-432-hz-alpha-13hz-preview.mp3',
  },
  {
    id: 'throat-cleanse',
    title: 'Throat Chakra Cleanse',
    frequency: 'Solfeggio 741 Hz · Delta 2 Hz',
    wave: 'Delta',
    state: { from: 'Bloqueio na comunicação', to: 'Expressão liberta' },
    intention: 'Abrir espaço para conversas difíceis e autenticidade.',
    description: 'Combina pulsos graves com cintilações que agem como uma "limpeza" vibracional da garganta.',
    cover: '/binaural/chakra-music.jpg',
    file: '/binaural/cleaning-the-throat-chakra-delta-2-hz-preview.mp3',
  },
  {
    id: 'metaphysical-resonance',
    title: 'Metaphysical Resonance',
    frequency: '528 Hz · Teta 5 Hz',
    wave: 'Teta',
    state: { from: 'Criatividade travada', to: 'Imaginação expandida' },
    intention: 'Entrar em estado de fluxo para processos intuitivos.',
    description: 'Camadas etéreas com pulsos de 5 Hz que induzem devaneios produtivos sem perder a consciência.',
    cover: '/binaural/deep-visions-cover.jpg',
    file: '/binaural/metaphysical-resonance-theta-5hz-preview.mp3',
  },
  {
    id: 'dreamland',
    title: 'Secret Ancient Dreamland',
    frequency: '396 Hz · Teta 4 Hz',
    wave: 'Teta',
    state: { from: 'Ansiedade noturna', to: 'Sonhos vívidos guiados' },
    intention: 'Criar um corredor sonoro para meditação guiada ou visualizações profundas.',
    description: 'Cordas analógicas e pads respiratórios criam sensação de portal dimensional.',
    cover: '/binaural/secret-ancient-dreamland-with-theta.jpg',
    file: '/binaural/secret-ancient-dreamland-with-theta.mp3',
  },
  {
    id: 'silent-stars',
    title: 'Silent Stars 432Hz',
    frequency: '432 Hz · Delta 4 Hz',
    wave: 'Delta',
    state: { from: 'Corpo tenso', to: 'Sono profundo restaurador' },
    intention: 'Acompanhar a transição da noite para um sono consistente.',
    description: 'Grave pulsante com brilhos metálicos discretos que ancoram o corpo e desaceleram o batimento.',
    cover: '/binaural/brain-flossing-cover.jpg',
    file: '/binaural/silent-stars-432hz-tuned-delta-4hz-preview.mp3',
  },
  {
    id: 'third-eye',
    title: 'Third Eye Portal',
    frequency: 'Solfeggio 963 Hz · Delta 4 Hz',
    wave: 'Delta',
    state: { from: 'Foco difuso', to: 'Intuição alinhada' },
    intention: 'Ativar estados meditativos mais visionários.',
    description: 'Vozes sintéticas e drones longos criam sensação de expansão vertical, perfeita para breathwork + visualização.',
    cover: '/binaural/duduk-music.jpg',
    file: '/binaural/third-eye-chakra-music-solfeggio-963-hz-delta-4-hz-preview.mp3',
  },
];
