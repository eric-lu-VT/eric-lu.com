export interface AwardType {
    id: string;
    title: string;
    subject: string;
    years: string;
}

const Awards: AwardType[] = [
    {
        id:"Academic Citation in Evolutionary Game Theory",
        title:"Academic Citation in Evolutionary Game Theory",
        subject:"Course, MATH 030.04",
        years:"2023"
    },
    {
        id:"Academic Citation in Foundations of Computer Science",
        title:"Academic Citation in Foundations of Computer Science",
        subject:"Course, COSC 070",
        years:"2022"
    },
    {
        id:"Academic Citation in Algorithms",
        title:"Academic Citation in Algorithms",
        subject:"Course, COSC 031",
        years:"2022"
    },
    {
        id:"Rufus Choate Scholar",
        title:"Rufus Choate Scholar (Top 5%)",
        subject:"Dartmouth College",
        years:"2022, 2023"
    },
    {
        id:"National Youth Science Camp", 
        title:"National Youth Science Camp", 
        subject:"Science", 
        years:"2021"
    },
    {
        id:"Vermont State Mathematics Coalition Talent Search — 2nd Place", 
        title:"Vermont Mathematics Coalition Talent Search — 2nd Place", 
        subject:"Mathematics", 
        years:"2021"
    },
    {
        id:"NCTE Certificate for Superior Writing",
        title:"NCTE Certificate for Superior Writing",
        subject:"Writing",
        years:"2020"
    },
    {
        id:"Green Mountain Boys' State", 
        title:"Green Mountain Boys' State", 
        subject:"Government", 
        years:"2020"
    },
    {
        id:"Governor's Institute of Vermont Scholarship", 
        title:"Governor's Institute of Vermont Scholarship", 
        subject:"Mathematics",
        years:"2019, 2020, 2021"
    },
]
export default Awards;