export interface LeadershipActivityType {
    id: string;
    name: string;
    years: string;
    pos: string;
    badge_1: string;
    badge_2?: string;
    description1: string;
    description2: string;
    description3?: string;
    pos2?: string;
    description4?: string;
}

const LeadershipActivities: LeadershipActivityType[] = [
    {
        id:"Essex High School Theatre",
        name:"Essex High School Theatre",
        years:"September 2017 – March 2021",
        pos:"Assistant Student Director",
        badge_1:"Extracurricular",
        description1:"● Taught ten pieces of repertoire to cast of 26 members and worked 1-on-1 sessions on teaching intonation and rhythm.",
        description2:"● Organized casting for Spring 2019 musical and advised Student Director on casting selection.",
        description3:"● Assisted in organization of directing team to run vendor services (baked goods, refreshments) at local 4th of July event, fundraising over $1000 to cover production costs.",
        pos2:"Student Writing Director",
        description4:"● Lead writer on a 30+ page script for use on a student-led production."
    },
    {
        id:"Essex High School Quiz Bowl",
        name:"Essex High School Quiz Bowl",
        years:"September 2017 – June 2021",
        pos:"Team Co-Captain",
        badge_1:"Extracurricular",
        description1:"● Created Java program using open-source Discord and Google APIs, simulating live competitions for practice.",
        description2:"● Organized summer practices, training schedules, and question repositories, to help train 15 members for competition."
    },
]
export default LeadershipActivities;