export default function AboutPage(){
    return(
        <div className="content w-full">
            <div className="about flex flex-col md:flex-row min-h-screen w-full">
                <div className="left flex-1 m-8 md:m-20">
                    <h1 style={{color: "var(--current-color)"}}>About me</h1>
                    <p className="py-2 md:py-10 text-black text-sm md:text-xl">
                        My name is Emma Fredriksen, and I am a computer science student at NTNU. 
                        I am currently in my third year and will complete my bachelor’s degree this spring!
                        Alongside my studies, I am actively involved in student volunteering. 
                        I currently serve as the leader of "Applikasjonskomiteen", a technical committee within Online, the student association for computer science students at NTNU.
                    </p>
                    <br />
                    <p className="text-black text-sm md:text-xl">
                        I have participated in several group projects as part of various courses at NTNU and have a few hobby projects of my own.
                    </p>
                    <div className="mt-8 md:mt-16">
                        <a href="https://appkom.no/" className="md:w-28 px-4 py-3 rounded-3xl" style={{background: "var(--current-color)"}}>Appkom</a>
                        <a href="#newproject" className="md:w-28 ml-5 px-4 py-3 mt-8 md:mt-16 rounded-3xl" style={{background: "var(--current-color)"}}>Projects</a>
                    </div>

                </div>
                <div className="right flex md:flex-1 justify-center items-center">
                    <img src="/about/photobooth.png" alt="" className="w-8/12 md:w-6/12 h-auto md:h-11/12 rotate-4 md:rotate-6 py-10"/>
                </div>
            </div>
        </div>
    )
    
}