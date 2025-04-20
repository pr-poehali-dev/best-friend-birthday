import PhotoGallery from "@/components/PhotoGallery";
import NavBar from "@/components/NavBar";

const Gallery = () => {
  // Данные фотографий
  const photos = [
    {
      id: 1,
      src: "https://cdn.poehali.dev/files/8a8f701d-cf53-41be-9cd0-c61fdd73d940.jpg", 
      alt: "Духи Strawberry",
      caption: "Твои любимые духи - Strawberry 🍓"
    },
    {
      id: 2,
      src: "/placeholder.svg",
      alt: "Поход в кино",
      caption: "Поход на премьеру фильма"
    },
    {
      id: 3,
      src: "/placeholder.svg",
      alt: "День рождения",
      caption: "Твой прошлый день рождения"
    },
    {
      id: 4,
      src: "/placeholder.svg",
      alt: "Школьный выпускной",
      caption: "Незабываемый школьный праздник"
    },
    {
      id: 5,
      src: "/placeholder.svg",
      alt: "Каникулы",
      caption: "Летние каникулы на море"
    },
    {
      id: 6,
      src: "/placeholder.svg",
      alt: "Школьная экскурсия",
      caption: "Наша поездка с классом"
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-dancing font-bold text-primary mb-4">
            Наши фотографии
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Здесь собраны самые яркие моменты нашей дружбы. Каждая фотография – это 
            особенное воспоминание, которое мы создали вместе. Нажми на фото, чтобы увидеть его крупнее.
          </p>
        </div>

        <PhotoGallery photos={photos} className="mb-24" />
      </div>

      <NavBar />
    </div>
  );
};

export default Gallery;