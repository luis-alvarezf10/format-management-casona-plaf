import axiology from '../assets/images/axiology.png';
import { FaDiscord } from "react-icons/fa";

export default function Footer() {
  return (
    <footer class="bg-[#111111] ">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div class="md:flex md:justify-between">
            <div class="mb-6 md:mb-0">
                <a href="https://flowbite.com/" class="flex items-center">
                    <img src={axiology} class="h-8 me-3" alt="FlowBite Logo" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Axiology Document Manager</span>
                </a>
                <p class="mt-4 text-gray-500 dark:text-gray-400 max-w-2xl">
                    Axiology Document Manager es una herramienta diseñada para simplificar y optimizar la gestión de documentos empresariales, facilitando el acceso, organización y colaboración en un entorno seguro y eficiente.
                </p>
            </div>
            <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div>
                    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contacto</h2>
                    <ul class="text-gray-500 dark:text-gray-400 font-medium">
                        <li class="mb-4">
                            <a href="https://luis-alvarezf10.github.io/portafolio-personal/" class="hover:underline">Portafolio</a>
                        </li>
                        <li class="mb-4">
                            <a href="https://wa.link/p8zz2b" class="hover:underline">WhatsApp</a>
                        </li>
                        <li class="mb-4">
                            <a href="https://www.instagram.com/luis_alvarezf10" class="hover:underline">Instagram</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div class="flex flex-col justify-center items-center sm:flex-row sm:justify-between">
                <span class="text-sm sm:text-center text-gray-400">2025 Axiology Document Manager™</span>
                <span class="text-sm sm:text-center text-gray-400">Desarrollado por Luis Álvarez</span>
        </div>
        </div>
    </footer>

  );
}