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
        id:"MapAbility",
        name:"MapAbility",
        years:"April 2023",
        description1:"● Led team of 4 undergraduate Dartmouth students to develop a React Native / Redux.js mobile app and accompanying MongoDB / Express.js backend that allows individuals with disabilities to view accessible locations",
        description2:"● Mobile app won “Best Accessibility Hack” award at 2023 HackDartmouth out of 29 teams",
    },
    {
        id: 'Orbit (DALI Lab)',
        name: 'Orbit (DALI Lab)',
        years: 'June 2023',
        description1: '● Developed a React Native / Redux.js social media app and accompanying MongoDB / Express.js backend that analyzes a user’s contacts to curate a feed of users that share mutual contacts in close geographic proximity',
        description2: '● Design backend graph algorithms to crawl user data and provide accurate friend recommendations and matches',
    },
    {
        id: 'inForest (DALI Lab)',
        name: 'inForest (DALI Lab)',
        years: 'June 2022 – August 2022',
        description1: '● Developed a React Native/Redux.js iPad app and accompanying PostgreSQL / Express.js that allows forestry researchers to input, edit and visualize tree data overlayed on Google Maps API',
        description2: '● Built an accompanying CRM for forestry researchers to prune census records, import/export data, and set data types; app was used by over 100 Dartmouth Students across Professor Theresa Ong’s agroecology research lab and courses',
    },
    {
        id:"Sadbird",
        name:"Sadbird",
        years:"April 2022",
        description1:"● Led team of 4 undergraduate Dartmouth students to develop a Chrome Extension that flags negative and emotionally confusing Twitter posts",
        description2:"● Chrome extension won first place in the “Health & Recovery” category at 2022 HackDartmouth",
    },
    {
        id:"Envision Earth (DALI Lab)",
        name:"Envision Earth (DALI Lab)",
        years:"January 2022 – December 2022",
        description1:"● Developed a React Native / Redux.js mobile dashboard and accompanying PostgreSQL / Express.js backend for Holistic Management International (HMI) to help ranchers transition to paperless record keeping of their cattle herd and environmental characteristics",
        description2:"● Implemented automatic syncing of data between offline iPad local storage and online database"
    },
]
export default LeadershipActivities;