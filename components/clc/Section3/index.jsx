"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import styles from "./styles.module.scss";

export default function Section3() {
  const categories = [
    {
      id: 1,
      name: "CAMISETAS",
      image: "/images/camiseta1.png",
    },
    {
      id: 2,
      name: "BERMUDAS",
      image: "/images/bermuda.png",
    },
    {
      id: 3,
      name: "MOLETONS",
      image: "/images/moletom.png",
    },
    {
      id: 4,
      name: "CALÇAS",
      image: "/images/calça.png",
    },
  ];

  if (!categories || categories.length === 0) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>Veja nossas categorias</h2>
        <div className={styles.swiperContainer}>
          <Swiper
            modules={[Navigation]}
            navigation={true}
            slidesPerView={4}
            spaceBetween={20}
            breakpoints={{
              1024: { slidesPerView: 4 },
              768: { slidesPerView: 3 },
              576: { slidesPerView: 2 },
              0: { slidesPerView: 1 },
            }}
            className={styles.swiper}
          >
            {categories.map((category) => (
              <SwiperSlide key={category.id}>
                <div className={styles.categoryCard}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={category.image}
                      alt={category.name}
                      width={300}
                      height={300}
                      className={styles.categoryImage}
                      priority={true}
                    />
                  </div>
                  <div className={styles.overlay}>
                    <span className={styles.categoryName}>{category.name}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
