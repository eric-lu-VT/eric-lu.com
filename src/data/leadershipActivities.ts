export interface LeadershipActivityType {
    id: string;
    name: string;
    years: string;
    pos: string;
    badge_1?: string;
    badge_2?: string;
    description1: string;
    description2: string;
    description3?: string;
    pos2?: string;
    description4?: string;
}

const LeadershipActivities: LeadershipActivityType[] = [
    {
        id:"Reddit-Discord-Notifier",
        name:"Reddit-Discord-Notifier",
        years:"October 2021 – November 2021",
        pos:"Tech Stack: JavaScript, MongoDB, JDA, JRAW, AWS",
        description1:"● Developed bot that detects new posts made on Reddit matching specified queries, and sends them to Discord",
        description2:"● Implemented multithreading to allow individual servers to run primary script concurrently with one another",
        description3:"● Public version of bot is used by 50+ Discord servers currently",
    },
    {
        id:"netcardgames.org",
        name:"netcardgames.org",
        years:"June 2021 – Present",
        pos:"Tech Stack: JavaScript, Express, Node.js, Bootstrap, socket.io, DigitalOcean",
        description1:"● Website that hosts functional implementations of various card games",
        description2:"● Implemented websockets to allow for live, multiplayer gameplay"
    },
]
export default LeadershipActivities;