export interface WorkExperienceType {
  id: string;
  name: string;
  years: string;
  pos: string;
  badge_1: string;
  badge_2?: string;
  description1?: string;
  description2?: string;
  description3?: string;
}

const WorkExperiences: WorkExperienceType[] = [
  {
    id: "Digital Applied Learning & Innovation Lab",
    name: "Digital Applied Learning & Innovation Lab",
    years: "Expected, January 2022",
    pos: "Software Engineer – Full Stack Developer",
    badge_1: "Part Time",
  },
]
export default WorkExperiences;