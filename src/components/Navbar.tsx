import { Star } from 'lucide-react';

export default function Navbar (){
    return (
        <div className="text-white flex flex-row items-center justify-center gap-10 mt-10 w-full fixed z-20">
            <a href="">Skills</a>
            <a href="">About me</a>
            <Star size={24} fill='white'/>
            <a href="">Projects</a>
            <a href="">Experience</a>
        </div>
    )
}