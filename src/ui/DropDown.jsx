import { useState } from "react";

const accordionItems = [
  {
    title: "Contrato individual de trabajo por tiempo indeterminado",
    content: (
      <>
        <p className="mb-2 text-gray-500 ">
          Sirve para formalizar la relación laboral entre un empleado y un empleador sin una fecha de finalización establecida. Es decir, el trabajador queda contratado de manera continua hasta que alguna de las partes decida terminar la relación, cumpliendo con las leyes laborales.
        </p>
      </>
    ),
  },
  {
    title: "Recibo de pago de beneficiario de alimentación",
    content: (
      <>
        <p className="mb-2 text-gray-500 ">
          Un recibo de pago de beneficiario de alimentación es un documento que confirma que una persona ha recibido un pago o subsidio destinado a cubrir sus necesidades alimentarias. Este tipo de recibo es común en programas sociales o ayudas gubernamentales diseñadas para apoyar a individuos o familias en situación de vulnerabilidad económica.
        </p>
      </>
    ),
  },
  {
    title: "Recibo de pago sueldo",
    content: (
      <>
        <p className="mb-2 text-gray-500">
          Un recibo de pago de sueldo es un documento que emite un empleador a un empleado para confirmar que se ha realizado el pago de su salario correspondiente a un período específico. Este recibo detalla la cantidad pagada, las deducciones aplicadas (como impuestos, seguridad social, etc.) y el salario neto recibido por el empleado.
        </p>
      </>
    ),
  },
  {
    title: "Liquidación y/o finiquito de prestaciones sociales",
    content: (
      <>
        <p className="mb-2 text-gray-500 ">
          La liquidación y/o finiquito de prestaciones sociales es un documento que detalla los pagos y beneficios que un empleado tiene derecho a recibir al finalizar su relación laboral con un empleador. Este documento incluye conceptos como el salario pendiente, vacaciones no disfrutadas, bonos, indemnizaciones y cualquier otro beneficio acumulado durante el tiempo de servicio.
        </p>
      </>
    ),
  },
  {
    title: "Disfrute de vacaciones",
    content: (
      <>
        <p className="mb-2 text-gray-500 ">
          El disfrute de vacaciones se refiere al período de tiempo durante el cual un empleado se ausenta de sus labores para descansar y recuperarse, manteniendo su derecho a recibir su salario habitual. Este derecho está regulado por las leyes laborales y suele estar determinado por la antigüedad del trabajador en la empresa.  
        </p>
      </>
    ),
  },
];

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(0); // Primera sección abierta

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4/5 md:max-w-1/2 mx-auto mt-10 mb-20 border border-gray-300 rounded-xl overflow-hidden ">
      {accordionItems.map((item, index) => (
        <div key={index} className="border-b border-gray-300 last:border-b-0">
          <button
            onClick={() => toggle(index)}
            className={`flex items-center justify-between w-full p-5 font-medium text-left text-[#222222]  transition-colors gap-3  cursor-pointer ${
              openIndex === index ? "bg-[#111111] text-bluze-600 dark:text-white" : ""
            }`}
          >
            <span>{item.title}</span>
            <svg
              className={`w-3 h-3 shrink-0 transform transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
            </svg>
          </button>
          <div
            className={`px-5  overflow-hidden transition-all duration-300 text-justify ${
              openIndex === index ? " py-5" : "max-h-0"
            }`}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
}
