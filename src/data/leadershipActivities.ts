export interface LeadershipActivityType {
    id: string;
    name: string;
    years: string;
    badge_1?: string;
    badge_2?: string;
    description1: string;
    description2: string;
    description3?: string;
    description4?: string;
}

const LeadershipActivities: LeadershipActivityType[] = [
    {
        id:"Bamboozled",
        name:"Bamboozled",
        years:"June 2022 – Present",
        description1:"● Created an Expo Go/React Native mobile app to host a functional implementation of the card game \"Bamboozled\"",
        description2:"● Implemented socket.io websockets that interface with an in-memory Redis database to allow for live, multiplayer gameplay",
    },
    {
        id:"Sadbird",
        name:"Sadbird",
        years:"April 2022",
        description1:"● Led a team of 4 to develop a Chrome extension that flags negative and emotionally confusing Twitter posts",
        description2:"● First place project in the “Health & Recovery” category at the 2022 HackDartmouth competition",
    },
    {
        id:"Reddit-Discord-Notifier",
        name:"Reddit-Discord-Notifier",
        years:"October 2021 – November 2021",
        description1:"● Developed bot that uses the Reddit API, Discord API, AWS, and MongoDB to detect new posts made on Reddit matching specified queries, before sending them to Discord",
        description2:"● Implemented multithreading to allow individual servers to run primary script concurrently with one another"
    },
]
export default LeadershipActivities;