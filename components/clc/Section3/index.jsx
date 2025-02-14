// "use client";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Navigation } from "swiper/modules";
// import Image from "next/image";
// import styles from "./styles.module.scss";

// export default function Section3() {
//   const categories = [
//     {
//       id: 1,
//       name: "CAMISETAS",
//       image: "/images/camiseta1.png",
//     },
//     {
//       id: 2,
//       name: "BERMUDAS",
//       image: "/images/bermuda.png",
//     },
//     {
//       id: 3,
//       name: "MOLETONS",
//       image: "/images/moletom.png",
//     },
//     {
//       id: 4,
//       name: "CALÇAS",
//       image: "/images/calça.png",
//     },
//   ];

//   if (!categories || categories.length === 0) {
//     return null;
//   }

//   return (
//     <div className={styles.container}>
//       <div className={styles.content}>
//         <h2 className={styles.title}>Veja nossas categorias</h2>
//         <div className={styles.swiperContainer}>
//           <Swiper
//             modules={[Navigation]}
//             navigation={true}
//             slidesPerView={4}
//             spaceBetween={20}
//             breakpoints={{
//               1024: { slidesPerView: 4 },
//               768: { slidesPerView: 3 },
//               576: { slidesPerView: 2 },
//               0: { slidesPerView: 1 },
//             }}
//             className={styles.swiper}
//           >
//             {categories.map((category) => (
//               <SwiperSlide key={category.id}>
//                 <div className={styles.categoryCard}>
//                   <div className={styles.imageWrapper}>
//                     <Image
//                       src={category.image}
//                       alt={category.name}
//                       width={300}
//                       height={300}
//                       className={styles.categoryImage}
//                       priority={true}
//                     />
//                   </div>
//                   <div className={styles.overlay}>
//                     <span className={styles.categoryName}>{category.name}</span>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";
import { useState } from "react";
import styles from "./styles.module.scss";

export default function Section3() {
  const [vehicle, setVehicle] = useState("");
  const [search, setSearch] = useState("");

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          ESTA PRONTO PARA ACHAR A PEÇA QUE VOCÊ PRECISA?
        </h1>
        <p className={styles.subtitle}>
          AQUI NA TRUCKSPRO TEMOS TUDO QUE VOCÊ PRECISA PARA SEU CAMINHÃO
        </p>

        <div className={styles.flagContainer}>
          <img src="/images/brazil-flag.png" alt="Bandeira do Brasil" />
        </div>

        <div className={styles.inputGroup}>
          <label>Qual modelo do seu veículo?</label>
          <input
            type="text"
            placeholder="Seu veículo"
            value={vehicle}
            onChange={(e) => setVehicle(e.target.value)}
          />
        </div>

        <div className={styles.inputGroup}>
          <label>O que você pretende encontrar aqui?</label>
          <input
            type="text"
            placeholder="Peça que está procurando"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <button className={styles.button}>LEVE ME AO QUE EU PRECISO</button>
      </div>
    </div>
  );
}
