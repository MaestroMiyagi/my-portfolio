import React from "react";
import type { Metadata } from "next";
import PhotosClient from "./PhotosClient";

export const metadata: Metadata = {
  title: "Photos",
  description: "My Photos",
};

export default function Photos() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Photos of my journey and projects</h1>
      <PhotosClient />
    </section>
  );
}