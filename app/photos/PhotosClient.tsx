'use client';

import React, { useState } from "react";
import { ImageGrid } from "app/components/image-grid";
import { ImageModal } from "app/components/image-modal";

export default function PhotosClient() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const handleImageClick = (image: { src: string; alt: string }) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <ImageGrid
        columns={2}
        images={[
          { src: "/photos/docs (2).png", alt: "docs landing" },
          { src: "/photos/docs (1).png", alt: "docs content" }
        ]}
        onImageClick={handleImageClick}
      />

      <ImageGrid
        columns={4}
        images={[
          { src: "/photos/yali (1).png", alt: "yali landing" },
          { src: "/photos/yali (2).png", alt: "yali content" },
          { src: "/photos/yali (3).png", alt: "yali speech" },
          { src: "/photos/yali (4).png", alt: "yali focus" }
        ]}
        onImageClick={handleImageClick}
      />

      {selectedImage && (
        <ImageModal
          src={selectedImage.src}
          alt={selectedImage.alt}
          onClose={closeModal}
        />
      )}
    </>
  );
}