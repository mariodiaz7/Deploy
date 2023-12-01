import add1 from "../../img/Alquila.png"
import LandingPageAdds from "./landingPagesAdds/LandingPagesAdds";

function LandingPage() {
    return (
      <div className="flex flex-col justify-center px-4 md:px-10">
        {}
        <img src={add1} alt="Alquila Pupilajes" className="hidden md:block mb-4" />
  
        <div className="">
          <LandingPageAdds />
        </div>
      </div>
    );
  }
  
  export default LandingPage;
  