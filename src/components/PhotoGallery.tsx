import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import PhotoCard from './PhotoCard';

interface Photo {
  id: number;
  src: string;
  alt: string;
  caption?: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
  className?: string;
}

const PhotoGallery = ({ photos, className }: PhotoGalleryProps) => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  return (
    <>
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}>
        {photos.map((photo) => (
          <div 
            key={photo.id} 
            onClick={() => setSelectedPhoto(photo)}
            className="cursor-pointer"
          >
            <PhotoCard
              src={photo.src}
              alt={photo.alt}
              caption={photo.caption}
            />
          </div>
        ))}
      </div>

      <Dialog open={!!selectedPhoto} onOpenChange={(open) => !open && setSelectedPhoto(null)}>
        <DialogContent className="sm:max-w-2xl p-0 overflow-hidden bg-transparent border-none">
          {selectedPhoto && (
            <div className="relative">
              <img 
                src={selectedPhoto.src} 
                alt={selectedPhoto.alt} 
                className="w-full rounded-lg object-contain max-h-[80vh]"
              />
              {selectedPhoto.caption && (
                <div className="absolute bottom-0 w-full bg-black/70 p-3 text-white rounded-b-lg">
                  <p>{selectedPhoto.caption}</p>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PhotoGallery;