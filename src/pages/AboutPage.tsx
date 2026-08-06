export default function AboutPage(){
    return(
        <div className="content w-full">
            <div className="about flex flex-row h-screen">
                <div className="left flex-1 m-20">
                    <h1 style={{color: "var(--current-color)"}}>About me</h1>
                    <p className="py-10 pr-10 text-black text-xl">I’m a 21-year-old Computer Science student passionate about creating solutions that make a real impact. I especially enjoy building projects that are both fun and useful.
                        I chose this path because I love seeing my creations in action and knowing they make a difference for others.
                    </p>
                    <br />
                    <p className="text-black text-xl">My main interests are in web development and user-centered design, where I can combine problem-solving with creativity. I’m constantly exploring new technologies and refining my skills through both academic projects and personal initiatives.</p>
                    <button className="w-28 p-3 mt-16 rounded-3xl" style={{background: "var(--current-color)"}}>Instagram</button>
                    <button className="w-28 p-3 mt-16 ml-5 rounded-3xl" style={{background: "var(--current-color)"}}>Facebook</button>

                </div>
                <div className="right relative flex flex-1 justify-center items-center overflow-x-hidden">
                    <img src="/about/photobooth.png" alt="" className="w-6/12 h-10/12 rotate-6"/>
                </div>
            </div>
        </div>
    )
    
}