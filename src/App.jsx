import { motion, AnimatePresence } from "framer-motion";
import Footer from './ui/Footer';
import './App.css'
import LogoLoop from './ui/LogoLoop';
import casona from './assets/images/1.svg';
import axiology from './assets/images/2.svg';
import la from './assets/images/3.svg';
import plaf from './assets/images/4.svg';

import { FaArrowRight, FaDownload } from "react-icons/fa";


import InfoDropdown from './ui/DropDown';


// Alternative with image sources
const imageLogos = [
  { src: casona, alt: "Company 1", href: "" },
  { src: axiology, alt: "Company 2", href: "" },
  { src: la, alt: "Company 3", href: "" },
  { src: plaf, alt: "Company 3", href: "" },
];

function App() {
  return (
    <>
      <div className='animated-gradient w-full h-[90dvh] md:h-[80dvh] absolute -z-10'></div>
      <div className='m-auto flex flex-col justify-center items-center w-full h-[100dvh] gap-10 z-10 text-white'> 
        <div className='text-lg md:text-2xl text-white px-7 py-1 rounded-lg font-semibold'><span>Bienvenido!</span> <span className='font-bold'>La Casona del llano</span></div>
        <motion.div 
        initial={{ opacity: 0, y: -50 }}   // Estado inicial (entrada)
        animate={{ opacity: 1, y: 0 }}     // Estado animado (visible)
        exit={{ opacity: 0, y: 50 }}       // Estado de salida (cuando desaparece)
        transition={{ duration: 0.5 }}     // Duración de la animación
        className='w-4/5 md:w-1/2 flex flex-col justify-center items-center gap-5 text-center'>
          <h1 className='font-bold text-4xl md:text-6xl text-white drop-shadow-xl drop-shadow-white/10'>
            Axiology Document Manager
          </h1>
          <p className='text-lg md:text-2xl'>Bienvenido, aquí encontrarás los formato de tu interes</p>
        </motion.div>
        <motion.button 
        initial={{ opacity: 0, x: -50 }}   // Estado inicial (entrada)
        animate={{ opacity: 1, x: 0 }}     // Estado animado (visible)
        exit={{ opacity: 0, x: 50 }}       // Estado de salida (cuando desaparece)
        transition={{ duration: 0.5 }}     // Duración de la animación
        type="button" className="bg-[#111111] text-center rounded-2xl h-16 relative text-white text-xl group cursor-pointer shadow-lg hover:shadow-[#00b4fc] hover:scale-100 duration-500 px-16 border-4 border-[#111111]"   
        onClick={() => {
          const element = document.getElementById("info-section");
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }}>
          <div className="bg-gradient-to-r from-[#005bc5] to-[#00b4fc] rounded-xl h-14 w-1/5 grid place-items-center absolute left-0 top-0 group-hover:w-full z-10 duration-500 text-white">
              <FaArrowRight className="transform transition-transform duration-500 group-hover:rotate-90" />
          </div>
          <p className="translate-x-4">Adquirir Formatos</p>
        </motion.button>
      </div>
        {/* <div className='top-[80dvh]' style={{ height: '200px', position: 'absolute', overflow: 'hidden'}}>
          <LogoLoop
            logos={imageLogos}
            speed={50}
            direction="left"
            logoHeight={100}
            gap={40}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#ffffff"
            ariaLabel="companys partners"
          />
        </div> */}
      <motion.div 
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      id="info-section" className='flex flex-col justify-center items-center gap-10 py-10'>
        <div className=' w-4/5 md:w-1/2  mx-auto flex flex-col gap-5 text-center'>
          <h2 className='text-4xl font-bold text-[#111111] '>Información de Documentos</h2>
          <p className='text-gray-500 text-lg '>En este segmento encontrarás información referida a los formatos de los documentos requeridos, solicitados por el abg: <span className='font-semibold'> Pedro Luis Álvarez</span></p>
        </div>
        <div>
          <InfoDropdown />
        </div>
        <button type="button" className="bg-[#111111] text-center rounded-2xl h-16 relative text-white text-xl group cursor-pointer shadow-lg hover:shadow-[#00b4fc] hover:scale-100 duration-500 px-16 border-4 border-[#111111]"   
        onClick={() => {
          const element = document.getElementById("info-section");
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }}>
          <div className="bg-gradient-to-r from-[#005bc5] to-[#00b4fc] rounded-xl h-14 w-1/5 grid place-items-center absolute right-0 top-0 group-hover:w-full z-10 duration-500 text-white">
              <FaDownload className="transform transition-transform duration-500 group-hover:scale-140" />
          </div>
          <p className="-translate-x-4">Instalar Formatos</p>
        </button>
      </motion.div>

      <Footer/>

      
    </>
  )
}

export default App
