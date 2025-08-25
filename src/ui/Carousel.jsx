import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import cap1 from '../assets/images/cap1.png';
import cap2 from '../assets/images/cap2.png';
import cap3 from '../assets/images/cap3.png';
import cap4 from '../assets/images/cap4.png';
import cap5 from '../assets/images/cap5.png';
import cap6 from '../assets/images/cap6.png';
import cap7 from '../assets/images/cap7.png';
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";
import { FaPause, FaPlay } from "react-icons/fa6";


/**
 * ImageCarousel — Un carrusel bonito, responsive y accesible.
 * - Usa Tailwind para estilos.
 * - Mapea un arreglo de imágenes (src, alt, caption, credit) para renderizar slides, flechas e indicadores.
 * - Autoplay con pausa al hover/focus.
 * - Drag para desktop y touch (framer-motion).
 *
 * Uso rápido:
 * <ImageCarousel images={[{src:"/img1.jpg", alt:"...", caption:"..."}, ...]} />
 */

const DEFAULT_IMAGES = [
    {
        src: cap1,
        alt: "Inicio de aplicación",
    },
    {
        src: cap2,
        alt: "Creación de documentos",
    },
    {
        src: cap3,
        alt: "Unir documentos",
    },
    {
        src: cap4,
        alt: "Comprimir documentos",
    },
    {
        src: cap5,
        alt: "Vistas de Documentos",
    },
    {
        src: cap6,
        alt: "Vista de cambio de tasa monetaria",
    },
    {
        src: cap7,
        alt: "Sección de Reportes",
    }
];

function clampIndex(i, len) {
  return (i + len) % len;
}

export default function ImageCarousel({
  images = DEFAULT_IMAGES,
  autoPlay = true,
  interval = 4000,
  className = ""
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const len = images?.length ?? 0;
  const timerRef = useRef(null);
  const directionRef = useRef(1); // 1: next, -1: prev, para animación

  const goTo = (i) => setIndex((prev) => clampIndex(i, len));
  const next = () => {
    directionRef.current = 1;
    setIndex((prev) => clampIndex(prev + 1, len));
  };
  const prev = () => {
    directionRef.current = -1;
    setIndex((prev) => clampIndex(prev - 1, len));
  };

  // Autoplay sencillo y robusto
  useEffect(() => {
    if (!autoPlay || paused || len <= 1) return;
    timerRef.current = setInterval(next, interval);
    return () => clearInterval(timerRef.current);
  }, [autoPlay, paused, index, interval, len]);

  // Evita seleccionar imágenes con tab fuera del slide actual
  const idBase = useMemo(() => `carousel-${Math.random().toString(36).slice(2)}`, []);

  if (!len) return (
    <div className={`w-full p-6 text-center text-sm text-neutral-400 ${className}`}>Sin imágenes… (como mi vida social en exámenes)</div>
  );

  return (
    <div
      className={`relative w-full max-w-4xl mx-auto select-none ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Marco */}
      <div className="aspect-[16/9] overflow-hidden rounded-2xl bg-neutral-900/50 backdrop-blur shadow-xl border border-white/10">
        <AnimatePresence initial={false} custom={directionRef.current}>
          <motion.div
            key={index}
            className="w-full h-full"
            custom={directionRef.current}
            initial={{ x: directionRef.current * 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -directionRef.current * 80, opacity: 0 }}
            transition={{ type: "spring", stiffness: 280, damping: 30 }}
          >
            <motion.img
              src={images[index].src}
              alt={images[index].alt}
              draggable={false}
              className="w-full h-full object-cover"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.9}
              onDragEnd={(e, info) => {
                if (info.offset.x < -80) next();
                else if (info.offset.x > 80) prev();
              }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Etiqueta inferior */}
        <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 to-transparent text-white">
          <div className="flex items-end justify-between gap-3">
            <div className="min-w-0">
              <p className="text-sm font-medium leading-tight truncate">
                {images[index].caption || images[index].alt || "Imagen"}
              </p>
              {images[index].credit && (
                <p className="text-[10px] opacity-75">Crédito: {images[index].credit}</p>
              )}
            </div>
            <button
              onClick={() => setPaused((p) => !p)}
              aria-label={paused ? "Reanudar reproducción" : "Pausar reproducción"}
              className="shrink-0 inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 border border-white/20 p-2 text-white transition"
            >
              {paused ? (
                <span className="text-xs font-bold"><FaPlay /></span>
              ) : (
                <span className="text-xs font-bold"><FaPause /></span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Flechas */}
        <div className="absolute top-1/4 md:top-1/3 left-0 hidden md:flex items-center pl-2">
            <button
                onClick={prev}
                aria-label="Anterior"
                className="rounded-full p-2 bg-black/40 hover:bg-black/60 active:bg-black/70 text-white shadow border border-white/10 backdrop-blur cursor-pointer"
            >
                <IoIosArrowBack />
            </button>
            </div>

            <div className="absolute top-1/4 md:top-1/3 right-0 hidden md:flex items-center pr-2">
            <button
                onClick={next}
                aria-label="Siguiente"
                className="rounded-full p-2 bg-black/40 hover:bg-black/60 active:bg-black/70 text-white shadow border border-white/10 backdrop-blur cursor-pointer"
            >
                <IoIosArrowForward />
            </button>
        </div>


      {/* Indicadores (mapeo) */}
      <div className="mt-3 flex items-center justify-center gap-2">
        {images.map((img, i) => (
          <button
            key={`${idBase}-dot-${i}`}
            onClick={() => goTo(i)}
            aria-label={`Ir al slide ${i + 1}`}
            className={`h-2.5 rounded-full transition-all ${
              i === index ? "w-8 bg-white" : "w-2.5 bg-white/40 hover:bg-white/60"
            }`}
            style={{ outline: "none" }}
          />
        ))}
      </div>

      {/* Miniaturas opcionales (también mapeadas) */}
      <div className="mt-4 grid grid-cols-4 gap-2">
        {images.map((img, i) => (
          <button
            key={`${idBase}-thumb-${i}`}
            onClick={() => goTo(i)}
            className={`group relative overflow-hidden rounded-xl border ${
              i === index
                ? "border-white/60 ring-2 ring-white/40"
                : "border-white/10 hover:border-white/30"
            }`}
          >
            <img src={img.src} alt={img.alt} className="h-16 w-full object-cover" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
          </button>
        ))}
      </div>

      {/* Accesibilidad: live region para cambios de slide */}
      <p className="sr-only" role="status" aria-live="polite">
        Slide {index + 1} de {len}: {images[index].alt}
      </p>
    </div>
  );
}
