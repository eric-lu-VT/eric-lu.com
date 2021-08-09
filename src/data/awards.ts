export interface AwardType {
    id: string;
    title: string;
    subject: string;
    years: string;
}

const Awards: AwardType[] = [
    {
        id:"NCTE Certificate for Superior Writing",
        title:"NCTE Certificate for Superior Writing",
        subject:"Writing",
        years:"2020"
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
    {
        id:"Vermont All-State Music Festival", 
        title:"Vermont All-State Music Festival", 
        subject:"Choir", 
        years:"2018, 2019, 2020"
    },
]
export default Awards;