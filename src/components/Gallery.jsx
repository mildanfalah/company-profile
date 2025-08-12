import { useState } from "react";
import React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const images = [
  { src: "src/assets/gallery/image1.jpg", alt: "Proses fermentasi" },
  { src: "src/assets/gallery/image2.jpg", alt: "Proses fermentasi" },
  { src: "src/assets/gallery/image3.jpg", alt: "Proses fermentasi" },
  { src: "src/assets/gallery/image4.jpg", alt: "Proses fermentasi" },
  { src: "src/assets/gallery/image5.jpg", alt: "Proses fermentasi" },
  { src: "src/assets/gallery/image6.jpg", alt: "Proses fermentasi" },
];

function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <section className="py-16" id="gallery">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-montserrat font-bold text-4xl mb-8 text-center">
          Gallery
        </h2>
        {/* Grid Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform"
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-48 object-cover"
              />
            </div>
          ))}
        </div>

        {/* Lightbox */}
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={images}
          index={index}
        />
      </div>
    </section>
  );
}

export default Gallery;
