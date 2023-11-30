function CreateAddMarket() {
    return (
    <div className="px-10 mx-10">
        <h3 className=" text-4xl font-medium text-[#1F3A44] mb-10 ">Crea tu anuncio</h3>
        
        <form className="grid grid-cols-2 gap-6">
            <div className="flex flex-col">
            <input type="file" accept="image/*" multiple className="m-5 shadow appearance-none border border-gray-300 rounded h-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Agregar imagenes"/>

            <input type="text" className="m-5 shadow appearance-none border border-gray-300 rounded h-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Descripcion" />
            </div>
         
            <div className="flex flex-col">
            <input type="text" className="m-5 shadow appearance-none border border-gray-300 rounded  py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Titulo" />
            
            <input type="number" className="m-5 shadow appearance-none border border-gray-300 rounded  py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Precio" />

            <input type="tel" className="m-5 shadow appearance-none border border-gray-300 rounded  py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Numero de telefono" />

            <input type="text" className="m-5 shadow appearance-none border border-gray-300 rounded py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Estado del producto" />

            <button type="submit" className="m-5 shadow appearance-none border border-gray-300 rounded inline-block  py-4 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline bg-[#2F4D55]"> Publicar anuncio </button>
            </div>
        </form>
        
  
    </div>

    );
}
export default CreateAddMarket;