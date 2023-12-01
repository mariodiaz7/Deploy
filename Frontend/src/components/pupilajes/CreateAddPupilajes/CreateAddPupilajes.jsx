function CreateAddPupilajes() {
  return (
    <div className="px-4 lg:px-10">
      <h3 className="text-2xl lg:text-4xl font-medium text-[#1F3A44] mb-6 lg:mb-10">
        Crea tu anuncio
      </h3>

      <form className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <input
            type="file"
            accept="image/*"
            multiple
            className="m-3 lg:m-5 shadow appearance-none border border-gray-300 rounded h-full py-3 lg:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Agregar imágenes"
          />

          <input
            type="text"
            className="m-3 lg:m-5 shadow appearance-none border border-gray-300 rounded h-full py-3 lg:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Descripción"
          />
        </div>

        <div className="flex flex-col">
          <input
            type="text"
            className="m-3 lg:m-5 shadow appearance-none border border-gray-300 rounded h-full py-3 lg:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Título"
          />

          <input
            type="number"
            className="m-3 lg:m-5 shadow appearance-none border border-gray-300 rounded h-full py-3 lg:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Precio"
          />

          <input
            type="text"
            className="m-3 lg:m-5 shadow appearance-none border border-gray-300 rounded h-full py-3 lg:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Wifi (SI/NO)"
          />

          <input
            type="text"
            className="m-3 lg:m-5 shadow appearance-none border border-gray-300 rounded h-full py-3 lg:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Luz (SI/NO)"
          />

          <input
            type="text"
            className="m-3 lg:m-5 shadow appearance-none border border-gray-300 rounded h-full py-3 lg:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Agua (SI/NO)"
          />

          <input
            type="url"
            className="m-3 lg:m-5 shadow appearance-none border border-gray-300 rounded h-full py-3 lg:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Número de teléfono (URL Whatsapp)"
          />

          <input
            type="text"
            className="m-3 lg:m-5 shadow appearance-none border border-gray-300 rounded h-full py-3 lg:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Estado del producto"
          />

          <button
            type="submit"
            className="m-3 lg:m-5 shadow appearance-none border border-gray-300 rounded inline-block py-3 lg:py-4 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline bg-[#2F4D55]"
          >
            Publicar anuncio
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateAddPupilajes;
