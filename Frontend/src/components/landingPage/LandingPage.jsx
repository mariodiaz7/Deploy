import add1 from "../../img/Alquila.png"
import LandingPageAdds from "./landingPagesAdds/LandingPagesAdds";

function LandingPage() {
    return (
        <div className="flex flex-col justify-center  px-10">
            <img src={add1} alt="Alquila Pupilajes" />

            <div className="pt-7">
            <LandingPageAdds/>
            </div>
        </div>
    );
}

export default LandingPage;