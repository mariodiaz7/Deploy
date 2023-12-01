import add1 from "../../img/Alquila.png"
import LandingPageAdds from "./landingPagesAdds/LandingPagesAdds";

function LandingPage() {

    return (
        <div className="flex flex-col justify-center  px-10">
            <img src={add1} alt="Alquila Pupilajes" />

        <h2 className="text-8xl justify-center w-15 font-dancing font-bold mb-4 rounded py-8 px-8 text-black-100 hover:focus:outline-none focus:shadow-outline">Bienvenido! Comienza a Navegar con nosotros</h2>
        <h3 className="text-2xl justify-center w-15 font-monospace mb-4 rounded px-8 text-black-100 hover:focus:outline-none focus:shadow-outline">Gracias por ser parte de ADDSS. ¡Esperamos que encuentres todo lo que necesitas para que tu experiencia universitaria sea aún más increíble!</h3>
            
        </div>
    );
}

export default LandingPage;