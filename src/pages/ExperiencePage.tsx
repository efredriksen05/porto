import Timeline from "../components/Timeline";
import { timelineData } from "../timelineData";

import { ArrowRight } from "lucide-react";

import "./ExperiencePage.css"

export default function ExperiencePage() {
    return (
        <div className="w-full h-full">
            <div className="experience p-8 md:p-20">
                <h1 style={{ color: "var(--current-color)" }} className="text-4xl">Experience</h1>
                <div className="timeline flex md:flex-row mt-4">
                    <div className="collapse w-0 md:visible md:left md:flex-1 md:h-96 md:flex md:flex-col">
                        <h2 className="md:text-9xl md:text-[18rem] text-black leading-none end">20</h2>
                    </div>
                    <div className="right flex-2 min-w-0">
                        <Timeline items={timelineData} />
                    </div>
                </div>
            <div className="text-black flex gap-3 visible md:hidden">
                <p>Swipe</p>
                <ArrowRight />
            </div>
            </div>
            <div
            style={{ backgroundColor: "var(--current-color)" }}
            className="w-screen h-24 overflow-hidden flex items-center"
            >
            <div className="marquee-track">
                <div className="marquee-content">
                <span>Emma Fredriksen</span>
                <span>★</span>
                <span>Drammen & Trondheim</span>
                <span>★</span>
                <span>Emma Fredriksen</span>
                <span>★</span>
                <span>Drammen & Trondheim</span>
                <span>★</span>
                </div>

                <div className="marquee-content" aria-hidden="true">
                <span>Emma Fredriksen</span>
                <span>★</span>
                <span>Drammen & Trondheim</span>
                <span>★</span>
                <span>Emma Fredriksen</span>
                <span>★</span>
                <span>Drammen & Trondheim</span>
                </div>
            </div>
            </div>
        </div>
    )
}