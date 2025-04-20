import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, Heart, Camera, Music } from 'lucide-react';
import BirthdayHeader from '@/components/BirthdayHeader';
import NavBar from '@/components/NavBar';

const Index = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  // Подсчет времени, которое вы дружите (меняйте дату на свою)
  useEffect(() => {
    const friendshipDate = new Date('2014-08-01'); // Замените на дату начала вашей дружбы
    
    const interval = setInterval(() => {
      const now = new Date();
      const difference = Math.floor((now.getTime() - friendshipDate.getTime()) / 1000);
      
      setDays(Math.floor(difference / 86400));
      setHours(Math.floor((difference % 86400) / 3600));
      setMinutes(Math.floor((difference % 3600) / 60));
      setSeconds(Math.floor(difference % 60));
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen py-12 px-4 relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-10 left-10 text-primary/30 animate-spin-slow">
        <Sparkles className="h-12 w-12" />
      </div>
      <div className="absolute bottom-20 right-10 text-secondary/30 animate-float">
        <Heart className="h-14 w-14" />
      </div>
      
      <div className="max-w-4xl mx-auto">
        {/* Заголовок */}
        <BirthdayHeader name="Анастасия" className="mb-12" />
        
        {/* Основной контент */}
        <Card className="mb-8 bg-card/80 backdrop-blur-sm shadow-lg border-accent/50">
          <CardContent className="p-6">
            <h2 className="text-2xl font-dancing font-bold mb-4 text-primary">Дорогая подруга!</h2>
            <p className="mb-4">
              Сегодня тебе исполняется 16 лет! Это особенный день для особенной девушки. 
              Я так рада, что могу разделить с тобой этот момент и создала этот сайт, чтобы 
              собрать все теплые слова и воспоминания о нашей дружбе.
            </p>
            <p className="text-lg font-medium mt-6">Мы дружим уже:</p>
            <div className="grid grid-cols-4 gap-2 mt-2 mb-6">
              <div className="bg-primary/10 rounded-lg p-3 text-center">
                <div className="text-xl font-bold text-primary">{days}</div>
                <div className="text-xs text-muted-foreground">дней</div>
              </div>
              <div className="bg-primary/10 rounded-lg p-3 text-center">
                <div className="text-xl font-bold text-primary">{hours}</div>
                <div className="text-xs text-muted-foreground">часов</div>
              </div>
              <div className="bg-primary/10 rounded-lg p-3 text-center">
                <div className="text-xl font-bold text-primary">{minutes}</div>
                <div className="text-xs text-muted-foreground">минут</div>
              </div>
              <div className="bg-primary/10 rounded-lg p-3 text-center">
                <div className="text-xl font-bold text-primary">{seconds}</div>
                <div className="text-xs text-muted-foreground">секунд</div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Карточки разделов */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          <Link to="/gallery">
            <Card className="h-full hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer bg-card/90 backdrop-blur-sm">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Camera className="h-12 w-12 text-secondary mb-4" />
                <h3 className="text-xl font-bold mb-2">Наши фото</h3>
                <p className="text-muted-foreground">
                  Галерея наших лучших совместных моментов и воспоминаний
                </p>
                <Button className="mt-4" variant="outline">Смотреть фото</Button>
              </CardContent>
            </Card>
          </Link>
          
          <Link to="/messages">
            <Card className="h-full hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer bg-card/90 backdrop-blur-sm">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Music className="h-12 w-12 text-secondary mb-4" />
                <h3 className="text-xl font-bold mb-2">Голосовые поздравления</h3>
                <p className="text-muted-foreground">
                  Слушай поздравления от друзей и близких
                </p>
                <Button className="mt-4" variant="outline">Слушать поздравления</Button>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
      
      <NavBar />
    </div>
  );
};

export default Index;