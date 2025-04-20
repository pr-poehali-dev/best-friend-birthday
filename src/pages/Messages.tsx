import AudioPlayer from "@/components/AudioPlayer";
import NavBar from "@/components/NavBar";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";

const Messages = () => {
  // Замените на свои аудиофайлы
  const audioMessages = [
    {
      id: 1,
      name: "Мама",
      message: "Поздравление от мамы",
      src: "https://example.com/audio/mama.mp3" // Замените на реальную ссылку
    },
    {
      id: 2,
      name: "Папа",
      message: "Пожелания от папы",
      src: "https://example.com/audio/papa.mp3"
    },
    {
      id: 3,
      name: "Брат Артём",
      message: "Братское поздравление",
      src: "https://example.com/audio/brother.mp3"
    },
    {
      id: 4,
      name: "Подруга Катя",
      message: "От лучшей подруги",
      src: "https://example.com/audio/friend1.mp3"
    },
    {
      id: 5,
      name: "Одноклассники",
      message: "Поздравление от всего класса",
      src: "https://example.com/audio/classmates.mp3"
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-dancing font-bold text-primary mb-4">
            Голосовые поздравления
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Слушай особые поздравления от людей, которые тебя очень любят. 
            Они записали для тебя свои пожелания на твой 16-й день рождения.
          </p>
        </div>

        <Card className="mb-8 border-accent/50">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <MessageCircle className="h-6 w-6 text-primary" />
              <h2 className="text-xl font-bold">От меня</h2>
            </div>
            <p className="mb-4">
              Дорогая подруга! Я так благодарна судьбе за встречу с тобой. 
              Ты невероятная, умная, красивая и самая добрая. Пусть этот год 
              принесет тебе только радость, успехи и новые открытия! 
              Люблю тебя и ценю нашу дружбу! ❤️
            </p>
          </CardContent>
        </Card>

        <div className="space-y-4 mb-24">
          {audioMessages.map((audio) => (
            <AudioPlayer
              key={audio.id}
              src={audio.src}
              name={audio.name}
              message={audio.message}
            />
          ))}
        </div>
      </div>

      <NavBar />
    </div>
  );
};

export default Messages;