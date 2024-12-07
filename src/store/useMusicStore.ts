import { create } from 'zustand';
import { Howl } from 'howler';
import { songs } from '../data/songs';

interface MusicStore {
  currentSong: number | null;
  isPlaying: boolean;
  sound: Howl | null;
  setCurrentSong: (id: number) => void;
  playSong: (id: number) => void;
  pauseSong: () => void;
  playNextSong: () => void;
  playPreviousSong: () => void;
  toggleShuffle: () => void;
  toggleRepeat: () => void;
  isShuffled: boolean;
  isRepeated: boolean;
}

export const useMusicStore = create<MusicStore>((set, get) => ({
  currentSong: null,
  isPlaying: false,
  sound: null,
  isShuffled: false,
  isRepeated: false,

  setCurrentSong: (id) => {
    set({ currentSong: id });
  },

  playSong: (id) => {
    const { sound: currentSound } = get();
    if (currentSound) {
      currentSound.stop();
    }

    const song = songs.find(s => s.id === id);
    if (!song) return;

    const newSound = new Howl({
      src: [song.audioUrl],
      html5: true,
      onend: () => {
        const { isRepeated, playNextSong } = get();
        if (isRepeated) {
          newSound.play();
        } else {
          playNextSong();
        }
      }
    });

    newSound.play();
    set({ sound: newSound, isPlaying: true, currentSong: id });
  },

  pauseSong: () => {
    const { sound } = get();
    if (sound) {
      sound.pause();
    }
    set({ isPlaying: false });
  },

  playNextSong: () => {
    const { currentSong, isShuffled } = get();
    if (currentSong === null) return;

    let nextIndex;
    const currentIndex = songs.findIndex(s => s.id === currentSong);

    if (isShuffled) {
      nextIndex = Math.floor(Math.random() * songs.length);
    } else {
      nextIndex = (currentIndex + 1) % songs.length;
    }

    const nextSong = songs[nextIndex];
    get().playSong(nextSong.id);
  },

  playPreviousSong: () => {
    const { currentSong, isShuffled } = get();
    if (currentSong === null) return;

    let prevIndex;
    const currentIndex = songs.findIndex(s => s.id === currentSong);

    if (isShuffled) {
      prevIndex = Math.floor(Math.random() * songs.length);
    } else {
      prevIndex = currentIndex === 0 ? songs.length - 1 : currentIndex - 1;
    }

    const prevSong = songs[prevIndex];
    get().playSong(prevSong.id);
  },

  toggleShuffle: () => {
    set(state => ({ isShuffled: !state.isShuffled }));
  },

  toggleRepeat: () => {
    set(state => ({ isRepeated: !state.isRepeated }));
  }
}));