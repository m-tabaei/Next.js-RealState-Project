"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import SliderDescription from "./SliderDescription";
import { images } from "@/constants/sliderPics";
import style from "@/template/Slider.module.css"

const Slider = () => {
  const [activeImage, setActiveImage] = useState(0);

  const clickNext = () => {
    setActiveImage((prevActive) =>
      prevActive === images.length - 1 ? 0 : prevActive + 1
    );
  };

  const clickPrev = () => {
    setActiveImage((prevActive) =>
      prevActive === 0 ? images.length - 1 : prevActive - 1
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      clickNext();
    }, 5000);
    return () => clearTimeout(timer);
  }, [activeImage]);

  return (
    <main className={style.main}>
      <div className={style.imagecontainer}>
        {images.map((elem, id) => (
        <div
        key={id}
        style={{ display: id === activeImage ? 'block' : 'none' }}
      >
        <Image
          src={elem.src}
          alt=""
          width={400}
          height={400}
          className={style.image}
        />
      </div>
        ))}
      </div>
      <SliderDescription
        activeImage={activeImage}
        clickNext={clickNext}
        clickPrev={clickPrev}
      />
    </main>
  );
};

export default Slider;
