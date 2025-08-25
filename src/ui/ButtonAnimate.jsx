import { FaArrowRight } from "react-icons/fa";

const Button = () => {
  return (
    <button
    type="button"
    className="bg-[#111111] text-center rounded-2xl h-16 relative text-white text-xl group cursor-pointer shadow-lg hover:shadow-[#00b4fc] hover:scale-100 duration-500 px-16 border-4 border-[#111111]"
    >
    <div className="bg-gradient-to-r from-[#005bc5] to-[#00b4fc] rounded-xl h-14 w-1/5 grid place-items-center absolute left-0 top-0 group-hover:w-full z-10 duration-500 text-white">
        <FaArrowRight className="transform transition-transform duration-500 group-hover:rotate-90" />
    </div>
    <p className="translate-x-4">Adquirir Formatos</p>
    </button>
  );
}

export default Button;
