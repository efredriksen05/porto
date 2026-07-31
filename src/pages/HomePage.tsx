import { useState } from "react";

import "./HomePage.css";


export default function HomePage(){
    const bgColors = ['E#73D7E, #A9D862', '#E2D762', '#E19AC0'];

    const [currentColorIndex, setColorIndex] = useState(0);

    // const nextColor = () => {
    //     setColorIndex((prev) => ((prev + 1) % bgColors.length));
    // };

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        setMousePosition({
            x: e.clientX,
            y: e.clientY,
        });
    };

    return(
        <div className="home-container flex flex-col w-full min-h-screen overflow-hidden relative z-0" onMouseMove={handleMouseMove} >
            <div className="hero flex flex-col min-h-screen">
                <div className="flex flex-col items-center justify-center h-screen z-20">
                    <img src="/signature.png" alt="signatur" className="w-xl z-30 block"/>
                    <div className="buttons flex flex-row gap-10">
                        <button className="btn">LinkedIn</button>
                        <button className="btn">GitHub</button>
                        <button className="btn">CV</button>
                    </div>

                </div>
                {/* <div className="buttons flex flex-row">
                    <button onClick={previousColor} className="text-white">
                    <Rewind size={24} />
                    </button>
                    <button className="bg-white rounded-3xl p-2 mx-4" style={{color : bgColors[currentColorIndex]}}
                    onClick={() => setShowNavbar(true)}>
                    <Play size={24}/>
                    </button>
                    <button onClick={nextColor} className="text-white">
                    <FastForward size={24}/>
                    </button>
                    </div> */}
                <div
                    className="absolute inset-0 bg-[#E73D7E] z-10"
                    style={{
                        backgroundColor: bgColors[currentColorIndex],
                        maskImage: `radial-gradient(circle 550px at ${mousePosition.x}px ${mousePosition.y}px, transparent 0%, rgba(0,0,0,0.8) 40%, black 100%)`,
                        WebkitMaskImage: `radial-gradient(circle 750px at ${mousePosition.x}px ${mousePosition.y}px, transparent 0%, rgba(0,0,0,0.8) 40%, black 100%)`,
                    }}
                >
                </div>
                <div className="background absolute bg-[url(/hero.JPG)] bg-no-repeat bg-position-[center_60%] bg-cover z-0"></div>
            </div>
            <div className="content w-screen h-screen text-[#E73D7E] ml-20 mr-20 mt-14">
                <h1>About me</h1>
                <div className="about flex text-black">
                    <p className="flex-4 py-10 pr-10">I’m a 20-year-old Computer Science student passionate about creating solutions that make a real impact. I especially enjoy building projects that are both fun and useful.
                        I chose this path because I love seeing my creations in action and knowing they make a difference for others.
                        My main interests are in web development and user-centered design, where I can combine problem-solving with creativity. I’m constantly exploring new technologies and refining my skills through both academic projects and personal initiatives.
                    </p>
                    <div className="flex-5 flex gap-10">
                        <img src="/emma_and_dog.JPG" alt="" className="w-54 h-72"/>
                        <img src="/emma_greece.JPG" alt="" className="w-72 h-auto"/>
                    </div>
                </div>
            </div>
        </div>
    );
    

}