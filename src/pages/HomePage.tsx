import { useState } from "react";
import "./HomePage.css";
export default function HomePage(){
    const bgColors = ['#A9D862', '#E2D762', '#E19AC0'];
    const blobColors = ['#70AA13', '#FFAF0E', '#ED69AD'];

    const [currentColorIndex, setColorIndex] = useState(0);

    const nextColor = () => {
        setColorIndex((prev) => ((prev + 1) % bgColors.length));
    };

    const previousColor = () => {
        setColorIndex((prev) => (prev - 1 + bgColors.length) % bgColors.length);
    };

    type BlobStyle = React.CSSProperties & {
    "--blob-color": string;
    };

    const blobStyle: BlobStyle = {
    "--blob-color": blobColors[currentColorIndex],
    };

    return(
        <div className="home-container flex flex-col w-full min-h-screen overflow-hidden relative" style={{ backgroundColor: bgColors[currentColorIndex] }}>
            <div className="background">
                <div className="blob absolute -top-44 -left-36 w-xl h-96" style={blobStyle}></div>
                <div className="blob absolute -bottom-36 -right-20 w-xl h-10/12" style={blobStyle}></div>
                <div className="blob absolute -bottom-5/6 -right-96 w-2xl h-96" style={blobStyle}></div>
                <div className="blob absolute -bottom-44 -right-8/12 w-4xl h-10/12"></div>
                <div className="blob absolute -bottom-20 -right-20 w-5xl h-2/5" style={blobStyle}></div>
                <div className="blob absolute -bottom-10 right-44 w-xl h-96" style={blobStyle}></div>
            </div>
            <div className="content flex flex-col min-h-screen justify-center items-center">
                <h1>EMMIZ</h1>
                <div className="buttons flex flex-row">
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
            </div>
        </div>
    );
    

}