export interface Task {
  id: string;
  text: string;
  completed: boolean;
  category: 'focus' | 'admin' | 'creative' | 'personal';
  createdAt: number;
}

export interface SoundState {
  id: string;
  name: string;
  icon: string;
  isPlaying: boolean;
  volume: number; // 0 to 1
  description: string;
}

export type TimerMode = 'focus' | 'shortBreak' | 'longBreak';

export interface TimerPreset {
  mode: TimerMode;
  label: string;
  duration: number; // in seconds
  colorClass: string;
  themeColor: string;
}

export interface DailyReflection {
  id: string;
  date: string; // YYYY-MM-DD
  mood: 'peaceful' | 'focused' | 'neutral' | 'restless' | 'tired';
  gratitude: string[];
}
