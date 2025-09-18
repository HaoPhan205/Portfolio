"use client";

import ImageSwiper from "@/components/HomePage/ImageSwiper";
import React from "react";

export default function HomePage() {
  return (
    <div className="w-screen h-screen mx-auto dark:text-white overflow-x-hidden">
      {" "}
      <ImageSwiper />
    </div>
  );
}
