import { Cake, Gift, Heart, Sparkles } from 'lucide-react';

interface BirthdayHeaderProps {
  name: string;
  className?: string;
}

const BirthdayHeader = ({ name, className }: BirthdayHeaderProps) => {
  return (
    <div className={`text-center relative ${className}`}>
      <div className="absolute -top-6 left-1/4 text-secondary animate-float">
        <Sparkles className="h-8 w-8 animate-sparkle" />
      </div>
      <div className="absolute -top-4 right-1/4 text-primary animate-float delay-100">
        <Heart className="h-6 w-6 animate-sparkle" />
      </div>
      
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-dancing font-bold mb-2 text-primary animate-float">
        С 16-летием, {name}!
      </h1>
      
      <div className="flex items-center justify-center gap-3 mb-4">
        <Cake className="h-6 w-6 text-secondary animate-sparkle" />
        <div className="h-px w-12 bg-primary/50"></div>
        <Gift className="h-6 w-6 text-secondary animate-sparkle" />
        <div className="h-px w-12 bg-primary/50"></div>
        <Heart className="h-6 w-6 text-secondary animate-sparkle" />
      </div>
      
      <p className="text-lg text-muted-foreground max-w-md mx-auto">
        Этот сайт создан с любовью для тебя. Здесь собраны поздравления и воспоминания от тех, кто тебя ценит!
      </p>
    </div>
  );
};

export default BirthdayHeader;