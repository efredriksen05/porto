export interface ProjectItem {
    pic: string;
    title: string;
    slug: string;
    product: string;
    description: string;
    tech: string[];
    link: string;
}

export const projectData: ProjectItem[] = [
    {
        pic: "/projects/portfolio.png",
        title: "Portfolio",
        slug: "porto",
        product: "Personal portfolio",
        description: "My personal website developed to highlight my skills, projects, and experience",
        tech: ["React", "Vite", "Tailwind", "TypeScript"],
        link: "https://github.com/efredriksen05/porto"
    },
    {
        pic: "/projects/opplist.png",
        title: "Opplist",
        slug: "opp",
        product: "Shared point list",
        description: 'Opplist is a casual hobby project made for my friend group where we give each other points every time someone is being an "opp"',
        tech: ["React", "Firebase", "Tailwind"],
        link: "https://github.com/efredriksen05/opplist"
    },
    {
        pic:"/projects/bla.png",
        title:"DigDog",
        slug: "dog",
        product: "Platform for digital dogshows",
        description: "Platform for digital dogshows, where users can participate in dogshows without being present. Competitors can share pictures, enter competitions, create their own profile and like and comment on other users posts. Built as a project for the course TDT4140 Program development at NTNU",
        tech: ["React", "TypeScript", "Tailwind", "PocketBase"],
        link: "https://github.com/efredriksen05/Digdog"
    },
    {
        pic:"/projects/realfagskjelleren.png",
        title:"Realfagskjelleren",
        slug: "real",
        product: "Website for studentbar",
        description: "Website for the studentbar Realfagskjelleren. Developed through Appkom",
        tech:["React"],
        link: "https://github.com/appKom/Realfagkjelleren-frontend"
    },
    {
        pic:"/projects/musicrating.png",
        title: "MusicRating",
        slug: "music",
        product: "Application for rating music",
        description: "Application that allows users to rate songs and share their opinions with other users. Built as a project for the course IT1901 at NTNU",
        tech: ["Java", "JavaFX"],
        link: "https://github.com/efredriksen05/Music-Rating"
    },
    {
        pic:"/projects/doodle.png",
        title: "Doodle",
        slug: "draw",
        product: "Digital drawing tool",
        description: "Doodle is an application where users can draw pixel paintings and save them as JSON files. Developed as a project in TDT4100 Object Oriented Programming at NTNU",
        tech: ["Java", "JavaFX"],
        link: "https://github.com/efredriksen05/Doodle"
    }
];