export interface TimelineItem {
    year: string;
    title: string;
    logo: string;
    duration: string;
    description: string;
    invertInDark?: boolean;
}

export const timelineData: TimelineItem[] = [
    {
        year: "25",
        title: "Student Ambassador",
        logo: "/experience/NTNU-hovedlogo.png",
        duration: "NTNU • OKT 2025 - FEB 2026",
        description: "Represented NTNU on the University Tour 2026 in the Inland and Vestfold regions. Responsible for conducting presentations and lectures for over 750 students. Guided graduating students in their educational choices and provided information about study options and student life at NTNU.",
        invertInDark: false
    },
    {
        year: "24",
        duration: "ONLINE LINJEFORENING • AUG 2024 - D.D",
        title: "Member of the Application Commitee",
        logo: "../experience/Appkom-logo.svg",
        description:"Member of the Applications Committee at the Online student association. Develops digital services for internal committees, with a focus on frontend development.",
        invertInDark: true
    },
    {
        year: "23",
        title: "Grocery store worker",
        logo: "../experience/Rema-logo.png",
        duration: "Rema 1000 • JUN 2023 - AUG 2025",
        description: "Responsible for customer service, cash register and replenishment. Experience from a hectic environment with a focus on collaboration, efficiency and service.",
        invertInDark: false
    },
    {
        year: "22",
        title: "Kindergarden substitute",
        duration: "PROMISO • JUN 2022 - JUN 2023",
        logo:"NTNU-hovedlogo.png",
        description: "Temporary worker in a kindergarten with responsibility for supervision, play and activities. Experience with collaboration, communication and creating security with children.",
        invertInDark: false
    }
    
];