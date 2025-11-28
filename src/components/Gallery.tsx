// src/components/Gallery.tsx
import React from 'react';
import DomeGallery from "@/components/DomeGallery.jsx";

const Gallery = () => {
  // Dynamically import all images from the Gallery folder
  const imagesGlob = import.meta.glob('../../styles/Gallery/*.{jpg,jpeg,png,webp}', { eager: true, import: 'default' });
  const images = Object.values(imagesGlob).map((src) => ({
    src: src as string,
    alt: 'Gallery Image'
  }));

  return (
    <section id="gallery" className="relative h-screen w-full py-16 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-transparent z-10 pointer-events-none" />

      <h2 className="relative z-20 text-5xl font-bold font-heading text-center text-foreground mb-8">
        My <span className="text-primary">Gallery</span>
      </h2>

      <div className="absolute inset-0 z-0">
        <DomeGallery
          images={images}
          segments={35}
          dragSensitivity={25}
          overlayBlurColor="#000000"
          grayscale={false}
          fit={0.6}
        />
      </div>
    </section>
  );
};

export default Gallery;