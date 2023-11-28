import ProfilePhoto from "../../img/cricri.png"

function Profile() {
    return (

        <div className="flex flex-col justify-center items-center h-screen">

            <div className="grid grid-cols-2 gap-20 px-20">
                <div className="flex justify-end">
                    <img src={ProfilePhoto} alt="Profile photo" className="rounded-full w-80 h-80" />
                </div>

                <div className="flex flex-col justify-center">
                    <p className="pb-5 text-3xl font-bold text-[#2F4D55] ">Nombre: Carlitos </p>
                    <p className="pb-5 text-3xl font-bold text-[#2F4D55] ">Apellido: Canjura </p>
                    <p className="pb-5 text-3xl font-bold text-[#2F4D55] ">Calificacion: 4.5/5 </p>
                    <p className="pb-5 text-3xl font-bold text-[#2F4D55] ">Email: papu777@uca.edu.sv </p>
                    <p className="pb-5 text-3xl font-bold text-[#2F4D55] ">Contrasena: momosalvmamu  </p>
                </div>
            </div>


            <div className="flex justify-center p-10 gap-10">
                <button className="shadow appearance-none border rounded w-auto py-4 px-7 text-gray-100 leading-tight focus:outline-none focus:shadow-outline bg-[#2F4D55]" >
                    Editar foto
                </button>
                <button className="shadow appearance-none border rounded w-auto py-4 px-7 text-gray-100 leading-tight focus:outline-none focus:shadow-outline bg-[#2F4D55]">
                    Editar perfil
                </button>

            </div>

        </div>


    );
}

export default Profile;