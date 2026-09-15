import { Star } from 'lucide-react';

export default function Navbar (){
    return (
        <div className="text-white md:flex flex-row hidden md:visible items-center justify-center gap-10 mt-10 absolute left-0 right-0 z-20">
            <a href="">Skills</a>
            <a href="#about">About me</a>
            <Star size={24} fill="white"/>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
        </div>
    )
}