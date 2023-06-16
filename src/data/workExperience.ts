export interface WorkExperienceType {
  id: string;
  name: string;
  years: string;
  pos: string;
  badge_1?: string;
  badge_2?: string;
  description1?: string;
  description2?: string;
  description3?: string;
  description4?: string;
}

const WorkExperiences: WorkExperienceType[] = [
  {
    id: "CivicBell",
    name: "CivicBell",
    years: "May 2023 – Present",
    pos: "Full-Stack Software Engineer Intern",
    description1: "● Developed auto-translation of key platform features such as posts, comments, notifications, and user profiles into 6 different languages with Google Translate API and i18next; translated 20,000+ pre-existing posts and comments",
    description2: "● Implemented asynchronous moderation of user-generated content through OpenAI, reducing manual user reports by 44% two weeks after launch",
    description3: "● Contributed to a more robust team and company by introducing alerting for critical endpoint failures and eventing for data analytics to drive further growth, strategy, and prioritization; increased the number of tracked metrics by 200%",
  },
  {
    id: "Digital Applied Learning & Innovation Lab",
    name: "Digital Applied Learning & Innovation Lab",
    years: "January 2022 – Present",
    pos: "Full-Stack Software Engineer & Mentor",
    description1: "● Develop frontend and backend logic for partners' full-stack web and mobile apps using MERN and PERN stacks",
    description2: "● Work 1-on-1 to onboard 4 underclassmen mentees over 3 months into DALI workflow, including exposure to Redux.js, PostgreSQL, and Express.js frameworks and best practice for AGILE Scrum",
    description3: "● Each term, interview 25 new prospective members and assist DALI leadership team with hiring ~5 new members",
    description4: "● Created template starter packs for a PostgreSQL / Express.js backend, React.js/Redux.js website, and React Native/Redux.js mobile app, to exemplify RESTful API practices"
  }
]
export default WorkExperiences;