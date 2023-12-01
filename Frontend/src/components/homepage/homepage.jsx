import React from "react";
import add1 from "../../img/Alquila.png";

function Homepage() {

    
  return (
    <div className="flex flex-col justify-center px-10">
      <img src={add1} alt="Alquila Pupilajes" />

      <div className="mt-8">
        <h2 className="text-4xl font-bold mb-4">Quiénes Somos</h2>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        {/* Add more content as needed of course*/}
      </div>
    </div>
  );
}

export default Homepage;
