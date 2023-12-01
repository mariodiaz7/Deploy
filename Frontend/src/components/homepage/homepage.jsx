import React from "react";
import add1 from "../../img/Alquila.png";

function Homepage() {
  return (
    <>
      <div className="flex flex-col justify-center px-10">
        <img src={add1} alt="Alquila Pupilajes" />
      </div>

      <div className="mt-8">
        <h2 className="text-5xl w-15 font-dancing font-bold mb-4 rounded py-5 px-10 text-black-100 bg-[#F4CFCA] hover:focus:outline-none focus:shadow-outline">Quiénes Somos</h2>
        <p className="text-lg px-5 items-center text-10 mb-5">
          Bienvenidos a ADDSS, donde nos enorgullece ofrecer
          a la comunidad estudiantil de la Universidad Centroamericana José
          Simeón Cañas (UCA) una plataforma dedicada a facilitar la búsqueda de
          alojamiento estudiantil y la adquisición de materiales educativos.
          Nos esforzamos por crear un espacio donde los estudiantes puedan
          conectarse, compartir recursos y hacer que su experiencia universitaria
          sea más cómoda y enriquecedora.
        </p>
        <p className="text-lg px-5 items-center text-10 mb-5">
          Nuestra misión es crear una comunidad en línea que promueva la
          colaboración y el apoyo mutuo entre los estudiantes de la UCA. Nos
          esforzamos por simplificar el proceso de búsqueda de pupilajes, así
          como la compra y venta de útiles, libros y calculadoras. Creemos en la
          importancia de la accesibilidad y la conveniencia para mejorar la
          calidad de vida estudiantil.
        </p>
      </div>
    </>
  );
}

export default Homepage;
