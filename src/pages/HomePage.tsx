import { useState } from "react";
import "./HomePage.css";
export default function HomePage(){
    const bgColors = ['#A9D862', '#E2D762', '#E19AC0'];
    const blobColors = ['8CCD23', '#FFAF0E', '#ED69AD'];

    const [currentColorIndex, setColorIndex] = useState(0);

    const nextColor = () => {
        setColorIndex((prev) => ((prev + 1) % bgColors.length));
    };

    const previousColor = () => {
        setColorIndex((prev) => ((prev - 1) % bgColors.length));
    };

    return(
        <div className="home-container w-full min-h-screen" style={{ backgroundColor: bgColors[currentColorIndex] }}>
            <div className="background">
                {/* <div className="blob-1 bg-[#8CCD23] absolute blur top-0 w-72 h-56"></div> */}
                {/* <div className="blob-2 bg-[#8CCD23]">heii</div> */}
            </div>
            <h1>EMMIZ</h1>
            <button onClick={previousColor} className="invert">
                <img src="skip-back.svg" alt="skip back icon" />
            </button>
            <button className="bg-white rounded-3xl p-2 mx-4">
                <img src="play.svg" alt="play icon" />
            </button>
            <button onClick={nextColor} className="invert">
                <img src="skip-forward.svg" alt="skip forward icon" />
            </button>
        </div>
    );
    

}