export interface AdditionalExperienceType {
    id: string;
    name: string;
    years: string;
    pos: string;
    badge_1: string;
    badge_2?: string;
    description1: string;
    description2: string;
    description3: string;
}

const AdditionalExperiences: AdditionalExperienceType[] = [
    {
        id:"VTeen 4-H Science Pathways Café",
        name:"VTeen 4-H Science Pathways Café",
        years: "September 2018 – June 2021",
        pos:"Teen Leader",
        badge_1:"Extracurricular",
        description1:"● Led Q&A sessions during cafés to help middle and high school students understand different careers in science.",
        description2:"● Selected guest speakers for cafés, ensuring that a wide range of scientific fields were represented.",
        description3:"● Collaborated with student leaders to manage expenses, order food and reserve venues to host 100+ students at each event."
    },
    {
        id:"Essex Westford Voices for Education",
        name:"Essex Westford Voices for Education",
        years: "September 2017 – June 2019",
        pos:"Student Representative",
        badge_1:"Extracurricular",
        description1:"● Represented student body on a team of board members, school officials, and community members to create a more welcoming, inclusive educational experience for 4,500 K-12 students.",
        description2:"● Organized and led community discussions to receive feedback on a variety of school policies/issues.",
        description3:"● Wrote public service announcements to inform residents and stakeholders about progress made in the community."
    },
]
export default AdditionalExperiences;