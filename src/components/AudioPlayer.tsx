import { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AudioPlayerProps {
  src: string;
  name: string;
  message?: string;
  className?: string;
}

const AudioPlayer = ({ src, name, message, className }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const currentProgress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(currentProgress);
    }
  };

  const handleAudioEnded = () => {
    setIsPlaying(false);
    setProgress(0);
  };

  return (
    <div className={cn(
      "bg-card border border-border rounded-lg p-4 shadow-md transition-all hover:shadow-lg", 
      className
    )}>
      <audio 
        ref={audioRef}
        src={src} 
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleAudioEnded}
        className="hidden"
      />
      
      <div className="flex items-center mb-2">
        <div className="mr-3">
          <button 
            onClick={togglePlay} 
            className="bg-primary text-primary-foreground rounded-full p-2 hover:bg-primary/90 transition-colors"
          >
            {isPlaying ? <Pause size={18} /> : <Play size={18} />}
          </button>
        </div>
        
        <div className="flex-1">
          <div className="text-sm font-medium">{name}</div>
          {message && <div className="text-xs text-muted-foreground">{message}</div>}
        </div>
        
        <button onClick={toggleMute} className="text-muted-foreground hover:text-foreground transition-colors">
          {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>
      </div>
      
      <div className="w-full bg-muted h-1 rounded-full overflow-hidden">
        <div 
          className="bg-primary h-full rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default AudioPlayer;