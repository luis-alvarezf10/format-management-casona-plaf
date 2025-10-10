import { motion, AnimatePresence } from "framer-motion";
import Footer from './ui/Footer';
import './App.css'
import casona from './assets/images/1.svg';
import plaf from './assets/images/4.svg';

import { FaArrowRight, FaDownload, FaGoogleDrive } from "react-icons/fa";


import InfoDropdown from './ui/DropDown';
import Carousel from "./ui/Carousel";
import LogoLoop from './ui/LogoLoop';


// Alternative with image sources
const imageLogos = [
  { src: casona, alt: "Company 1", href: "" },
  { src: plaf, alt: "Company 3", href: "" },
];

function App() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = `${import.meta.env.BASE_URL}assets/documents/Formato.rar`;
    link.download = "Formato.rar";
    link.click();
  };

  const openDrive = () => {
    window.open('https://drive.google.com/drive/folders/12nqjped7VeFcxvjaecJbhe8TDfwFghqx?usp=drive_link', '_blank');
  };

  return (
    <>
      <div className='animated-gradient w-full h-[80dvh] flex flex-col items-center -z-10'>
        
        <div className='m-auto flex flex-col justify-center items-center w-full h-[100dvh] gap-10 z-10 text-white'> 
          <div className='text-lg md:text-2xl text-white px-7 py-1 rounded-lg font-semibold'><span>Bienvenido!</span> <span className='font-bold'>La Casona del llano</span></div>
          <motion.div 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }}    
          exit={{ opacity: 0, y: 50 }}      
          transition={{ duration: 0.5 }}     
          className='w-4/5 md:w-1/2 flex flex-col justify-center items-center gap-5 text-center'>
            <h1 className='font-bold text-4xl md:text-6xl text-white drop-shadow-xl drop-shadow-white/10'>
              Axiology Document Manager
            </h1>
            <p className='text-lg md:text-2xl'>Bienvenido, aquí encontrarás los formato de tu interes</p>
          </motion.div>
          <motion.button 
          initial={{ opacity: 0, x: -50 }}   
          animate={{ opacity: 1, x: 0 }}     
          exit={{ opacity: 0, x: 50 }}      
          transition={{ duration: 0.5 }}    
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
      </div>
      <div 
      id="info-section" className='flex flex-col justify-center items-center gap-10 py-15'>
        <div
        className="w-full flex justify-center items-center "
        style={{
          height: "100px",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <LogoLoop
          logos={imageLogos}
          speed={50}
          direction="left"
          logoHeight={80}
          gap={40}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#ffffff"
          ariaLabel="Technology partners"
        />
      </div>

        <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className=' w-4/5 md:w-1/2  mx-auto flex flex-col gap-5 text-center'>
          <h2 className='text-4xl font-bold text-[#111111] '>Información de Documentos</h2>
          <p className='text-gray-500 text-lg '>En este segmento encontrarás información referida a los formatos de los documentos requeridos, verificados por el abg: <span className='font-semibold'> Pedro Luis Álvarez</span></p>
        </motion.div>
        <div>
          <InfoDropdown />
        </div>
        <div className="flex items-center justify-center gap-5">
          <button type="button" className="bg-[#111111] text-center rounded-2xl h-16 relative text-white text-xl group cursor-pointer shadow-lg hover:shadow-[#00b4fc] hover:scale-100 duration-500 px-16 border-4 border-[#111111]"   
          onClick={handleDownload}>
            <div className="bg-gradient-to-r from-[#005bc5] to-[#00b4fc] rounded-xl h-14 w-1/5 grid place-items-center absolute right-0 top-0 group-hover:w-full z-10 duration-500 text-white">
                <FaDownload className="transform transition-transform duration-500 group-hover:scale-140" />
          </div>
          <p className="-translate-x-4">Instalar Formatos</p>
        </button>
        <button type="button" className="bg-gradient-to-r from-[#005bc5] to-[#00b4fc] text-center rounded-2xl h-16 relative text-white text-xl group cursor-pointer shadow-lg hover:shadow-[#00b4fc] hover:scale-100 duration-500 px-16 border-4 border-[#005bc5] shadow-[#111111]/50"   
        onClick={openDrive}>
          <div className="bg-white rounded-xl h-14 w-1/5 grid place-items-center absolute right-0 top-0 group-hover:w-full z-10 duration-500 text-[#00b4fc]">
              <FaGoogleDrive className="transform transition-transform duration-500 group-hover:scale-140" />
          </div>
          <p className="-translate-x-4">Abrir Drive</p>
        </button>
        </div>
        <span>¿No tienes una aplicación para comprimir y descomprimir archivos <strong>.rar</strong>? <a href="https://drive.google.com/drive/folders/12nqjped7VeFcxvjaecJbhe8TDfwFghqx?usp=drive_link" target="_blanck" className="text-blue-500 underline font-bold">Click para descargar</a> </span>
      </div>
      <div className="w-[90%] h-0.5 bg-gray-300 mx-auto"></div>
      <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-col justify-center items-center text-center my-10 w-3/4 md:w-1/2 mx-auto py-15"
      >
        <h2 className="text-4xl font-bold text-[#111111]">Axiology Document Manager</h2>
        <p className="text-gray-500 text-lg my-5">
          Axiology Document Manager es un servicio solicitado de parte del cliente diseñado para facilitar la gestión de documentos del ambito legal. Con una interfaz intuitiva y funcionalidades avanzadas, permite a los usuarios crear, almacenar, organizar y acceder a sus documentos de manera eficiente.
        </p>
        <p className="text-gray-500 text-lg my-5">
          Este sistema fue desarrollado por <span className="font-semibold bg-gray-500 text-white p-1 rounded-lg"> <a href="https://luis-alvarezf10.github.io/portafolio-personal/" target="_blanck">Luis Álvarez</a></span>, desarrolador software. Su objetivo es mejorar la productividad y la organización en el manejo de documentos legales, proporcionando una herramienta confiable y fácil de usar.
        </p>
        <Carousel />
      </motion.div>
      <Footer/>

      
    </>
  )
}

export default App
