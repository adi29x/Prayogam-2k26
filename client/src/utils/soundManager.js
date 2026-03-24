class SoundManager {
  constructor() {
    this.audioContext = null;
    this.enabled = true;
  }

  init() {
    if (!this.audioContext) {
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
  }

  playClick() {
    if (!this.enabled) return;
    this.init();
    if (this.audioContext.state === 'suspended') {
      this.audioContext.resume();
    }
    
    // Very subtle, premium "tick" sound using Web Audio API for zero latency
    const osc = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, this.audioContext.currentTime);
    osc.frequency.exponentialRampToValueAtTime(300, this.audioContext.currentTime + 0.04);
    
    gainNode.gain.setValueAtTime(0.04, this.audioContext.currentTime); // extremely low UI tap volume
    gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 0.04);
    
    osc.connect(gainNode);
    gainNode.connect(this.audioContext.destination);
    
    osc.start();
    osc.stop(this.audioContext.currentTime + 0.04);
  }

  playBoot() {
    if (!this.enabled) return;
    this.init();
    if (this.audioContext.state === 'suspended') {
      this.audioContext.resume();
    }
    
    // Soft, synthetic bass sweep for system boot (low volume)
    const osc = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(150, this.audioContext.currentTime);
    osc.frequency.exponentialRampToValueAtTime(40, this.audioContext.currentTime + 1.5);
    
    // Fade in and out smoothly
    gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.08, this.audioContext.currentTime + 0.2); // Low volume burst
    gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 2.0);
    
    osc.connect(gainNode);
    gainNode.connect(this.audioContext.destination);
    
    osc.start();
    osc.stop(this.audioContext.currentTime + 2.0);
  }
}

export const systemAudio = new SoundManager();
