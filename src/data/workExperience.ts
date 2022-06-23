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
    description1: "● Developed a website dashboard for Holistic Management International to help ranchers monitor the Body Condition Scores (BCS) of their cattle herds, by using React.js, AWS S3 and MongoDB to persist offline photo collection.",
    description2: "● Conducted extensive user research to understand farmers’ motivations for ranching, existing practices and techniques, incorporation of holistic management, and specifics on how BCS is observed, tracked, and analyzed.",
  },
]
export default WorkExperiences;