export interface ProjectItem {
    pic: string;
    title: string;
    description: string;
    tech: string[];
    link: string;
}

export const projectData: ProjectItem[] = [
    {
        pic: "/public/projects/portfolio.png",
        title: "Portfolio",
        description: "My personal website",
        tech: ["React", "Vite", "Tailwind", "TypeScript"],
        link: "https://github.com/efredriksen05/porto"
    },
    {
        pic: "/public/projects/opplist.png",
        title: "Opplist",
        description: "Opplist is a casual hobby project made for my friend group. ",
        tech: ["React", "Firebase", "Tailwind"],
        link: "https://github.com/efredriksen05/opplist"
    },
    {
        pic:"/public/projects/digdog.png",
        title:"DigDog",
        description: "Platform for digital dogshows",
        tech: ["React", "TypeScript", "Tailwind", "PocketBase"],
        link: "https://github.com/efredriksen05/Digdog"
    },
    {
        pic:"/public/projects/realfagskjelleren.png",
        title:"Realfagskjelleren",
        description: "Website for the studentbar Realfagskjelleren",
        tech:["React"],
        link: "https://github.com/appKom/Realfagkjelleren-frontend"
    },
    {
        pic:"/public/projects/musicrating.png",
        title: "MusicRating",
        description: "Application that allows users to rate songs and share their opinions with other users",
        tech: ["Java", "JavaFX"],
        link: "https://github.com/efredriksen05/Music-Rating"
    },
    {
        pic:"/public/projects/doodle.png",
        title: "Doodle",
        description: "Doodle is an application where users can draw pixel paintings and save them as json files",
        tech: ["Java", "JavaFX"],
        link: "https://github.com/efredriksen05/Doodle"
    }
];