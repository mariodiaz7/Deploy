function CreateAddMarket() {
    return (
        <div className="px-5 lg:px-10 xl:px-20">
            <h3 className="text-3xl lg:text-4xl font-medium text-[#1F3A44] mb-6 lg:mb-10">Crea tu anuncio</h3>

            <form className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="flex flex-col">
                    <input
                        type="file"
                        accept="image/*"
                        multiple
                        className="mb-4 lg:mb-5 shadow appearance-none border border-gray-300 rounded py-3 px-2 lg:py-4 lg:px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Agregar imágenes"
                    />

                    <input
                        type="text"
                        className="mb-4 lg:mb-5 shadow appearance-none border border-gray-300 rounded py-3 px-2 lg:py-4 lg:px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Descripción"
                    />
                </div>

                <div className="flex flex-col">
                    <input
                        type="text"
                        className="mb-4 lg:mb-5 shadow appearance-none border border-gray-300 rounded py-3 px-2 lg:py-4 lg:px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Título"
                    />

                    <input
                        type="number"
                        className="mb-4 lg:mb-5 shadow appearance-none border border-gray-300 rounded py-3 px-2 lg:py-4 lg:px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Precio"
                    />

                    <input
                        type="url"
                        className="mb-4 lg:mb-5 shadow appearance-none border border-gray-300 rounded py-3 px-2 lg:py-4 lg:px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Número de teléfono (URL Whatsapp)"
                    />

                    <input
                        type="text"
                        className="mb-4 lg:mb-5 shadow appearance-none border border-gray-300 rounded py-3 px-2 lg:py-4 lg:px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Estado del producto"
                    />

                    <button
                        type="submit"
                        className="shadow appearance-none border border-gray-300 rounded inline-block py-3 px-2 lg:py-4 lg:px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline bg-[#2F4D55]"
                    >
                        Publicar anuncio
                    </button>
                </div>
            </form>
        </div>
    );
}

export default CreateAddMarket;
