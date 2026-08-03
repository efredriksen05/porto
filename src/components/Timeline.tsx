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
            const halfway = container.scrollHeight / 2;

            if (container.scrollTop >= halfway) {
                container.scrollTop -= halfway;
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
            className="h-96 overflow-y-scroll scrollbar-hide"
        >
            <div className="flex flex-col gap-9">
                {loopItems.map((item, index) => (
                    <div>
                        <div key={`${item.year}-${index}`} className="flex gap-8 py-20 items-start text-black border-t-2 border-[#D5D5D5]">
                            <div className="text-[18rem] pt-20" style={{ color: "var(--current-color)" }}> {item.year} </div>

                            <div>
                                <div className="flex flex-row justify-between">
                                    <div>
                                        <h3 className="text-xl font-semibold">{item.title}</h3>
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