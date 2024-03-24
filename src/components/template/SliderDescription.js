import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { images } from "@/constants/sliderPics";
import style from "@/template/SliderDescription.module.css";
import left from "@/public/images/left.svg";
import right from "@/public/images/right.svg";
const SliderDescription = ({ activeImage, clickNext, clickPrev }) => {
  return (
    <div className={style.sliderdescriptioncontainer}>
      {images.map((elem, id) => (
        <div
          key={id}
          style={{ display: id === activeImage ? "block" : "none" }}
          className={style.slidercontent}
        >
          <motion.div
            initial={{
              opacity: id === activeImage ? 0 : 0.5,
              scale: id === activeImage ? 0.5 : 0.3,
            }}
            animate={{
              opacity: id === activeImage ? 1 : 0.5,
              scale: id === activeImage ? 1 : 0.3,
            }}
            transition={{
              ease: "linear",
              duration: 2,
              x: { duration: 1 },
            }}
          >
            <div className={style.title}>{elem.title}</div>
            <div className={style.description}>{elem.desc}</div>
          </motion.div>

          <button onClick={clickNext}>order now</button>
          <div className={style.slidercontrols}>
            <div className={style.leftarrow} onClick={clickPrev}>
              <Image src={left} alt="" />
            </div>
            <div className={style.rightarrow} onClick={clickNext}>
              <Image src={right} alt="" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SliderDescription;
