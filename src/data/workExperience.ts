export interface WorkExperienceType {
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

const WorkExperiences: WorkExperienceType[] = [
  {
    id: "Essex Junction Recreations & Parks",
    name: "Essex Junction Recreations & Parks",
    years: "June 2021 – August 2021",
    pos: "Camp Counselor",
    badge_1: "Part Time",
    description1: "● Helped create and facilitate daily arts, physical, and specialty activities for 60+ campers aged 6–11 years old.",
    description2: "● Ensured appropriate enforcement of camp behaviors to ensure enjoyment of daily on-campus and field trip activities.",
    description3: "● Interfaced weekly with directors to implement parent feedback and improve educational quality of camp program."
  },
]
export default WorkExperiences;