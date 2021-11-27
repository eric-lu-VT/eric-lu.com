export interface AdditionalExperienceType {
    id: string;
    name: string;
    years: string;
    pos: string;
    badge_1: string;
    badge_2?: string;
    description1?: string;
    description2?: string;
    description3?: string;
    pos2?: string;
    description4?: string;
}

const AdditionalExperiences: AdditionalExperienceType[] = [
    {
        id: "Foundations in Social Impact",
        name: "Foundations in Social Impact",
        years: "Expected, January 2022",
        pos: "Member",
        badge_1: "Program",
    },
    {
        id: "Essex Junction Recreations & Parks",
        name: "Essex Junction Recreations & Parks",
        years: "June 2021 – August 2021",
        pos: "Camp Counselor",
        badge_1: "Part Time",
        description1: "● Helped create and facilitate daily arts, physical, and specialty activities for 60+ campers aged 6–11 years old",
        description2: "● Ensured appropriate enforcement of camp behaviors to ensure enjoyment of daily on-campus and field trip activities",
        description3: "● Interfaced weekly with directors to implement parent feedback and improve educational quality of camp program"
    },
    {
        id:"Essex High School Theatre",
        name:"Essex High School Theatre",
        years:"September 2017 – March 2021",
        pos:"Assistant Student Director",
        badge_1:"Extracurricular",
        description1:"● Taught ten pieces of repertoire to cast of 26 members and worked 1-on-1 sessions on teaching intonation and rhythm",
        description2:"● Organized casting for Spring 2019 musical and advised Student Director on casting selection",
        description3:"● Assisted in organization of directing team to run vendor services (baked goods, refreshments) at local 4th of July event, fundraising over $1000 to cover production costs",
        pos2:"Student Writing Director",
        description4:"● Lead writer on a 30+ page script for use on a student-led production"
    }
]
export default AdditionalExperiences;