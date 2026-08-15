export default function AboutPage(){
    return(
        <div className="content w-full">
            <div className="about flex flex-col md:flex-row min-h-screen w-full">
                <div className="left flex-1 m-8 md:m-20">
                    <h1 style={{color: "var(--current-color)"}}>About me</h1>
                    <p className="py-2 md:py-10 text-black text-sm md:text-xl">I’m a 21-year-old Computer Science student passionate about creating solutions that make a real impact. I especially enjoy building projects that are both fun and useful.
                        I chose this path because I love seeing my creations in action and knowing they make a difference for others.
                    </p>
                    <br />
                    <p className="text-black text-sm md:text-xl">My main interests are in web development and user-centered design, where I can combine problem-solving with creativity. I’m constantly exploring new technologies and refining my skills through both academic projects and personal initiatives.</p>
                    <button className="md:w-28 p-3 mt-8 md:mt-16 rounded-3xl" style={{background: "var(--current-color)"}}>Instagram</button>
                    <button className="md:w-28 p-3 mt-8 md:mt-16 ml-5 rounded-3xl" style={{background: "var(--current-color)"}}>Facebook</button>

                </div>
                <div className="right flex md:flex-1 justify-center items-center">
                    <img src="/about/photobooth.png" alt="" className="w-8/12 md:w-6/12 h-auto md:h-11/12 rotate-4 md:rotate-6 py-10"/>
                </div>
            </div>
        </div>
    )
    
}