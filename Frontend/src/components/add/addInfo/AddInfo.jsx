import texasNspire from '../../../img/TexasNspire.png';

function AddInfo() {
  return (
    <div className="grid grid-cols-2 gap-0 px-20">
      {/* Lado Izquierdo */}
      <div>
        <h3 className="text-3xl font-bold mb-2">Texas nspire cx ll CACHADA!</h3>
        <p className="text-gray-500 mb-2">Diego Calvo</p>
        <p className="text-gray-500 mb-4">4.5/5</p>
        <img
          src={texasNspire}
          alt="Texas Nspire"
          className="w-90 h-auto rounded-md mb-4"
        />
      </div>

      {/* Lado Derecho */}
      <div className='flex flex-col justify-between px-20 pt-20'>
        <p className="text-lg font-bold">Precio: $345</p>
        <p className="text-gray-700 ">Estado: Usado - Como nuevo</p>
        <p className="text-gray-700 ">Publicado el: 08/10/2023</p>
        <div className="border border-gray-700 rounded-md ">
          <p className="text-gray-700 ">
            Vendo Texas Instrument TI-nspire. Está nueva, viene con su cargador y el software de estudiantes incluido para un año. No acepto menos. Contenido de la caja:
            *Licencia de software compatible con MAC/Windows o cualquier otro sistema operativo.*Cable cargador de transferencia a computadora.
          </p>
        </div>
        <button className=" bg-[#2F4D55] text-white py-4 px-6 rounded-md hover:bg-[#1F3A44] focus:outline-none focus:shadow-outline">
          Contactar al vendedor
        </button>
      </div>
    </div>
  );
}

export default AddInfo;

