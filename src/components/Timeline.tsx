import { useEffect, useRef } from "react";
import type { TimelineItem } from "../timelineData";

interface TimelineProps {
    items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
    const containerRef = useRef<HTMLDivElement | null>(null);

    const loopItems = [...items, ...items];

    useEffect(() => {
        const container = containerRef.current;

        if (!container) return;

        const handleScroll = () => {
            
            if (window.innerWidth < 768) {
                const halfway = container.scrollWidth / 2;

                if (container.scrollLeft >= halfway) {
                    container.scrollLeft -= halfway;
                }
            } 
            
            else {
                const halfway = container.scrollHeight / 2;

                if (container.scrollTop >= halfway) {
                    container.scrollTop -= halfway;
                }
            }
        };

        container.addEventListener("scroll", handleScroll);

        return () => {
            container.removeEventListener("scroll", handleScroll);
        };
    }, []);
    

    return (
        <div
            ref={containerRef}
            className="h-96 w-full min-w-0 overflow-y-hidden md:overflow-y-scroll overflow-x-scroll md:overflow-x-hidden scrollbar-hide"
        >
            <div className="flex flex-row md:flex-col gap-20 md:gap-9">
                {loopItems.map((item, index) => (
                    <div>
                        <div key={`${item.year}-${index}`} className="shrink-0 flex flex-col md:flex-row gap-6 md:gap-8 pr-10 md:py-20 items-start text-black border-r-2 md:border-r-0  md:border-t-2 border-[#D5D5D5]">
                            <div
                                className="text-6xl sm:text-[18rem] leading-none flex flex-row md:-translate-y-8"
                                style={{ color: "var(--current-color)" }}
                            >
                                <p className="text-black visible md:hidden">20</p>
                                {item.year}
                            </div>
                            <div>
                                <div className="flex flex-row w-80 md:w-96 justify-between">
                                    <div>
                                        <h3 className="text-lg md:text-xl font-semibold">{item.title}</h3>
                                        <h5 className="py-2">{item.duration}</h5>
                                    </div>
                                    <div className="w-10 h-10">
                                        <img src={item.logo} alt="company logo" className={item.invertInDark ? "dark:invert" : ""}/>
                                    </div>
                                </div>
                                
                                <p className="text-gray-500">{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}