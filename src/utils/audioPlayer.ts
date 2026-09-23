/**
 * Authentic Wedding Music Player
 * Plays background audio file if present, with a traditional
 * Shehnai & Tanpura drone synthesizer fallback using Web Audio API.
 */

class WeddingAudioController {
  private audioEl: HTMLAudioElement | null = null;
  private audioCtx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private isSynthesizing: boolean = false;
  private timerId: number | null = null;
  private masterGain: GainNode | null = null;

  constructor() {
    // Lazy initialized on first user interaction
  }

  public init(audioSrc: string) {
    if (typeof window === 'undefined') return;

    if (!this.audioEl) {
      this.audioEl = new Audio();
      this.audioEl.src = audioSrc;
      this.audioEl.loop = true;
      this.audioEl.preload = 'none';

      this.audioEl.addEventListener('error', () => {
        // If external audio fails to load, gracefully switch to synthesizer
        if (this.isPlaying) {
          this.startTraditionalSynth();
        }
      });
    }
  }

  public async play(): Promise<boolean> {
    this.isPlaying = true;

    // First attempt to play HTML5 audio
    if (this.audioEl) {
      try {
        await this.audioEl.play();
        return true;
      } catch (err) {
        // Autoplay prevented or file unavailable, start synthesized shehnai
        this.startTraditionalSynth();
        return true;
      }
    } else {
      this.startTraditionalSynth();
      return true;
    }
  }

  public pause() {
    this.isPlaying = false;
    if (this.audioEl) {
      this.audioEl.pause();
    }
    this.stopTraditionalSynth();
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.pause();
      return false;
    } else {
      this.play();
      return true;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  /**
   * Traditional Shehnai & Tanpura Drone Synthesizer
   * Emulates royal Rajasthani folk Raag Maand celebratory notes
   */
  private startTraditionalSynth() {
    if (this.isSynthesizing) return;
    try {
      const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtxClass) return;

      if (!this.audioCtx || this.audioCtx.state === 'closed') {
        this.audioCtx = new AudioCtxClass();
      }

      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }

      this.isSynthesizing = true;
      this.masterGain = this.audioCtx.createGain();
      this.masterGain.gain.setValueAtTime(0.08, this.audioCtx.currentTime);
      this.masterGain.connect(this.audioCtx.destination);

      // Start Tanpura Root & Fifth drone (Sa - Pa: D4 ~ 293.66 Hz, A4 ~ 440 Hz)
      this.createTanpuraDrone(293.66, 0.4);
      this.createTanpuraDrone(440.0, 0.25);
      this.createTanpuraDrone(146.83, 0.3);

      // Play joyful celebratory Shehnai melody sequence (Maand melody notes)
      // Sa, Re, Ga, Ma, Pa, Dha, Ni frequencies
      const ragaNotes = [
        293.66, // D4 (Sa)
        329.63, // E4 (Re)
        369.99, // F#4 (Ga)
        392.00, // G4 (Ma)
        440.00, // A4 (Pa)
        493.88, // B4 (Dha)
        554.37, // C#5 (Ni)
        587.33, // D5 (Taar Sa)
        659.25, // E5
        739.99, // F#5
      ];

      // Folk melody indices sequence
      const melodySequence = [
        0, 2, 4, 4, 7, 6, 4, 2, 0, 2, 4, 2, 0,
        4, 7, 7, 8, 7, 6, 4, 6, 7, 6, 4, 2, 0,
        2, 4, 6, 7, 9, 8, 7, 4, 2, 4, 0
      ];

      let noteIdx = 0;
      const playNextShehnaiNote = () => {
        if (!this.isSynthesizing || !this.audioCtx || this.audioCtx.state !== 'running') return;

        const freq = ragaNotes[melodySequence[noteIdx % melodySequence.length]];
        noteIdx++;

        this.triggerShehnaiTone(freq, 0.45);

        // Schedule next note with humanized folk timing
        const duration = [350, 400, 550, 300, 700][noteIdx % 5];
        this.timerId = window.setTimeout(playNextShehnaiNote, duration);
      };

      playNextShehnaiNote();
    } catch {
      // Audio synth silent fail if not supported
    }
  }

  private createTanpuraDrone(freq: number, volume: number) {
    if (!this.audioCtx || !this.masterGain) return;
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);

    // Warm low-pass filter
    const filter = this.audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(600, this.audioCtx.currentTime);

    gain.gain.setValueAtTime(volume * 0.15, this.audioCtx.currentTime);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc.start();
  }

  private triggerShehnaiTone(freq: number, durationSec: number) {
    if (!this.audioCtx || !this.masterGain) return;
    const now = this.audioCtx.currentTime;

    // Dual oscillator for rich reedy nasal Shehnai timbre
    const osc1 = this.audioCtx.createOscillator();
    const osc2 = this.audioCtx.createOscillator();
    const vibrato = this.audioCtx.createOscillator();
    const vibratoGain = this.audioCtx.createGain();
    const noteGain = this.audioCtx.createGain();

    // Shehnai distinctive vibrato (gamak)
    vibrato.frequency.setValueAtTime(5.5, now);
    vibratoGain.gain.setValueAtTime(6, now);
    vibrato.connect(vibratoGain);
    vibratoGain.connect(osc1.frequency);
    vibratoGain.connect(osc2.frequency);
    vibrato.start(now);

    osc1.type = 'sawtooth';
    osc2.type = 'triangle';

    osc1.frequency.setValueAtTime(freq, now);
    osc2.frequency.setValueAtTime(freq * 1.002, now); // subtle detune chorus

    // Formant filter (nasal acoustic bell of the Shehnai)
    const bandpass = this.audioCtx.createBiquadFilter();
    bandpass.type = 'bandpass';
    bandpass.frequency.setValueAtTime(1400, now);
    bandpass.Q.setValueAtTime(3, now);

    // Smooth envelope attack and decay
    noteGain.gain.setValueAtTime(0.001, now);
    noteGain.gain.linearRampToValueAtTime(0.2, now + 0.08);
    noteGain.gain.exponentialRampToValueAtTime(0.001, now + durationSec);

    osc1.connect(bandpass);
    osc2.connect(bandpass);
    bandpass.connect(noteGain);
    noteGain.connect(this.masterGain);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + durationSec);
    osc2.stop(now + durationSec);
    vibrato.stop(now + durationSec);
  }

  private stopTraditionalSynth() {
    this.isSynthesizing = false;
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
    if (this.audioCtx && this.audioCtx.state === 'running') {
      try {
        this.audioCtx.suspend();
      } catch {
        // Ignore
      }
    }
  }
}

export const weddingAudio = new WeddingAudioController();
