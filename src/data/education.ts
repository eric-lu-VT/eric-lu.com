export interface EducationType {
    id: string;
    picURL: string;
    schoolURL: string;
    school: string;
    years: string;
    major?: string;
    gpa?: string;
    location: string;
  }
  
  const Schools: EducationType[] = [
    {
        id: "Dartmouth College",
        picURL: "https://i.imgur.com/2o7Crw9.png",
        schoolURL:"https://home.dartmouth.edu/",
        school: "Dartmouth College",
        years: "2021-Present",
        gpa:"GPA 3.96/4.00", 
        major: "Bachelor of Arts: Computer Science",
        location: "Hanover, NH"
    },
    {
        id:"Essex High School", 
        picURL: "https://cmsv2-assets.apptegy.net/uploads/15510/logo/16411/b1955e2a-d1ce-4026-b5dd-865afb838502__1_.png",    
        schoolURL:"https://www.ewsd.org/cms/lib/VT02217845/Centricity/Domain/395/20-21%20EHS%20Profile.pdf", 
        school:"Essex High School", 
        years:"2017-2021", 
        gpa:"GPA 4.25/4.33", 
        location:"Essex Junction, VT"
      },
  ];
  export default Schools;