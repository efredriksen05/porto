import { useEffect, useState } from "react";

import "./HeroPage.css";


const bgColors = ['#E73D7E', '#63D53D', '#F5C904', '#FF921E', '#16AAD7'];
export default function HomePage(){

    const [currentColorIndex, setColorIndex] = useState(0);

    useEffect(() => {
        document.documentElement.style.setProperty(
            "--current-color",
            bgColors[currentColorIndex]
        );
    }, [currentColorIndex]);

    // const nextColor = () => {
    //     setColorIndex((prev) => ((prev + 1) % bgColors.length));
    // };

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement> ) => {
        setMousePosition({
            x: e.clientX,
            y: e.clientY,
        });
    };

    useEffect(() => {
        function handleKeyDown(event: KeyboardEvent) {
        console.log(event.code);
        if (event.code === "Space") {
            event.preventDefault();
            setColorIndex((prev) => (prev + 1) % bgColors.length);
        }
        }

        window.addEventListener("keydown", handleKeyDown, {passive: false});

        return () => {
        window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return(
        <div className="home-container flex flex-col w-full min-h-screen overflow-hidden relative z-0" onMouseMove={handleMouseMove}>
            <div className="hero flex flex-col min-h-screen">
                <div className="flex flex-col items-center justify-center h-screen z-20">
                    <img src="/hero/signature.png" alt="signatur" className="w-xl z-30 block"/>
                    <div className="buttons flex flex-row gap-10">
                        <a href="https://www.linkedin.com/in/emma-fredriksen" target="_blank" rel="noopener noreferrer" className="links"> LinkedIn</a>
                        <a href="https://github.com/efredriksen05" target="_blank" rel="noopener noreferrer" className="links"> GitHub</a>
                        <a href="/hero/CV.pdf" target="_blank" rel="noopener noreferrer" className="links"> CV</a>
                    </div>
                </div>
                <div
                    className="absolute inset-0 z-10"
                    style={{
                        background: bgColors[currentColorIndex],
                        maskImage: `radial-gradient(circle 450px at ${mousePosition.x}px ${mousePosition.y}px, transparent 0%, rgba(0,0,0,0.8) 40%, black 100%)`,
                        WebkitMaskImage: `radial-gradient(circle 550px at ${mousePosition.x}px ${mousePosition.y}px, transparent 0%, rgba(0,0,0,0.8) 40%, black 100%)`,
                    }}
                >
                </div>
                <div className="background absolute bg-[url(/hero/hero.JPG)] bg-no-repeat bg-position-[center_60%] bg-cover z-0"></div>
            </div>
        </div>
    );
    

}