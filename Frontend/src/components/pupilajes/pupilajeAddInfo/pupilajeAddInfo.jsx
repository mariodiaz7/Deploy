import pupilajeFoto from "../../../img/pupilaje.png";

function pupilajeAddInfo() {
    return (
        <div className=" flex flex-col mx-10">
            <div className="grid grid-cols-2 gap-0 px-20">
                {/* Lado Izquierdo */}
                <div>
                    <h3 className="text-3xl font-bold mb-2">Cachada pupilaje para la uca</h3>
                    <p className="text-gray-500 mb-2">Antiguo Cuscatlan</p>
                    <p className="text-gray-500 mb-2">Diego Calvo</p>
                    <p className="text-gray-500 mb-4">4.5/5</p>
                    <img
                        src={pupilajeFoto}
                        alt="Foto de pupilaje"
                        className="w-90 h-auto rounded-md mb-4"
                    />
                </div>

                {/* Lado Derecho */}
                <div className='flex flex-col justify-between px-20 pt-20'>
                    <p className="text-lg font-bold">Precio: $180 / mes</p>
                    <p className="text-gray-700 ">Meses a hospedarse: </p>
                    <p className="text-gray-700 ">Publicado el: 08/10/2023</p>
                    <p className="text-gray-700">Total a pagar: $180</p>
                    <div className=" bg-gray-200 p-4 rounded-md border border-gray-300 ">
                        <p className="text-gray-700 ">
                            Pupilaje a dos cuadras de la Basílica de Guadalupe. Zona UCA.Incluye: servicios de Luz, agua, WiFi,  sala, comedor y cocina (área común).Información. Tef. 2413-0807.
                        </p>
                    </div>
                    <button className=" bg-[#2F4D55] text-white py-4 px-4 rounded-md hover:bg-[#1F3A44] focus:outline-none focus:shadow-outline">
                        Contactar al vendedor
                    </button>
                    <button className=" bg-[#2F4D55] text-white py-4 px-4 rounded-md hover:bg-[#1F3A44] focus:outline-none focus:shadow-outline">
                        Reservar
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-40 px-20 my-20">


                <div className="bg-gray-300 p-4 rounded-md border border-gray-300">
                    <p className="text-gray-700 p-5">Luz electrica</p>
                    <p className="text-gray-700 p-5" > Agua potable</p>
                    <p className="text-gray-700 p-5" > WI-FI</p>
                    <p className="text-gray-700 p-5" > Garage</p>
                </div>

                <div className="bg-gray-300 p-4 rounded-md border border-gray-300">
                    mapa
                </div>
            </div>
            
            <div className="p-4">
                
                <div className="bg-gray-100 p-4 rounded-md border border-gray-300 mb-4 px-10">
                    <div className="flex items-center mb-2">
                        <img src={pupilajeFoto} alt="Foto de usuario" className="w-12 h-12 rounded-full mr-4" />
                        <div>
                            <p className="font-bold">Usuario1</p>
                            <p className="text-gray-500">Fecha de publicación</p>
                        </div>
                    </div>
                    <p className="text-gray-700"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio neque sequi magni quam? Expedita excepturi illum, modi distinctio, recusandae natus voluptas quam, aperiam dolorum aliquam molestias repellat laborum minima ut. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur esse voluptatibus, fuga aspernatur eligendi illo sequi a obcaecati similique voluptates nihil est, nemo tempora ducimus et eveniet adipisci veniam necessitatibus.</p>
                </div>

                {/* Comentario 2 */}
                <div className="bg-gray-100 p-4 rounded-md border border-gray-300 mb-4 px-10">
                    <div className="flex items-center mb-2">
                        <img src={pupilajeFoto} alt="Foto de usuario" className="w-12 h-12 rounded-full mr-4" />
                        <div>
                            <p className="font-bold">Usuario2</p>
                            <p className="text-gray-500">Fecha de publicación</p>
                        </div>
                    </div>
                    <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dignissimos ad quos animi quaerat necessitatibus vero rerum eum tempora ullam, explicabo at sit odio impedit soluta rem accusantium consectetur alias?
                        Aut, nesciunt velit provident nobis minima blanditiis iure distinctio libero labore ratione molestias impedit est! Sint modi eligendi quaerat obcaecati! Sequi, esse error eius dolor animi deleniti exercitationem repudiandae? Dolores?
                        Sunt doloremque, amet blanditiis obcaecati harum quos aliquam ab totam adipisci animi earum alias libero molestias commodi nisi vitae facere. Ab, harum! Vero perspiciatis velit provident, quaerat dolorem suscipit aspernatur.</p>
                </div>

                {/* Comentario 3 */}
                <div className="bg-gray-100 p-4 rounded-md border border-gray-300 mb-4 px-10">
                    <div className="flex items-center mb-2">
                        <img src={pupilajeFoto} alt="Foto de usuario" className="w-12 h-12 rounded-full mr-4" />
                        <div>
                            <p className="font-bold">Usuario3</p>
                            <p className="text-gray-500">Fecha de publicación</p>
                        </div>
                    </div>
                    <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio reprehenderit magnam, cum molestiae earum laudantium, iste, commodi quam neque modi labore quisquam fugiat? Officia dignissimos consectetur nobis repellendus saepe ex?</p>
                </div>
            </div>

            <form className="flex items-center justify-between w-full px-10 m-5 mb-10">
                <input
                    type="text"
                    placeholder="Ingresa tu comentario..."
                    className=" shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <button
                    type="submit"
                    className="shadow appearance-none border rounded w-auto py-4 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline bg-[#2F4D55]"
                >
                    Publicar
                </button>
            </form>


        </div>
    );
}

export default pupilajeAddInfo;
