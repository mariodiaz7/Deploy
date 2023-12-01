import ProfilePhoto from "../../img/cricri.png";

function Profile() {
  return (
    <div className="flex flex-col justify-center items-center h-500">
      <div className="grid md:grid-cols-2 gap-20 px-5 md:px-20">
        <div className="flex justify-center md:justify-end">
          <img src={ProfilePhoto} alt="Profile photo" className="rounded-full w-80 h-80" />
        </div>

        <div className="flex flex-col justify-center text-center md:text-left">
          <p className="pb-3 md:pb-5 text-xl md:text-3xl font-bold text-[#2F4D55]">Nombre: Carlitos</p>
          <p className="pb-3 md:pb-5 text-xl md:text-3xl font-bold text-[#2F4D55]">Apellido: Canjura</p>
          <p className="pb-3 md:pb-5 text-xl md:text-3xl font-bold text-[#2F4D55]">Calificación: 4.5/5</p>
          <p className="pb-3 md:pb-5 text-xl md:text-3xl font-bold text-[#2F4D55]">Email: papu777@uca.edu.sv</p>
          <p className="pb-3 md:pb-5 text-xl md:text-3xl font-bold text-[#2F4D55]">Contraseña: momosalvmamu</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
