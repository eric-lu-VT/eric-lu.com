export interface InterestType {
    id: string;
    type: string;
    label_1: string;
    labelColor_1: string;
    label_2: string;
    labelColor_2: string;
    label_3: string;
    labelColor_3: string;
    label_4: string;
    labelColor_4: string;
    label_5?: string;
    labelColor_5?: string;
}

const Interests: InterestType[] = [
    {
        id: "Computer/Technical:",
        type: "Computer/Technical:",
        label_1: "G Suite",
        labelColor_1: "gray",
        label_2: "Excel",
        labelColor_2: "gray",
        label_3: "MS Word",
        labelColor_3: "gray",
        label_4: "MS PowerPoint",
        labelColor_4: "gray",
    },
    {
        id: "Programming:",
        type: "Programming:",
        label_1: "Java",
        labelColor_1: "orange",
        label_2: "JavaScript",
        labelColor_2: "yellow",
        label_3: "TypeScript",
        labelColor_3: "blue",
        label_4: "HTML",
        labelColor_4: "pink",
        label_5: "CSS",
        labelColor_5: "teal",
    },
    {
        id: "Interests:",
        type: "Interests:",
        label_1: "Programming",
        labelColor_1: "gray",
        label_2: "Creative Writing",
        labelColor_2: "gray",
        label_3: "Singing",
        labelColor_3: "gray",
        label_4: "Peer Mentoring",
        labelColor_4: "gray",
    },
]

export default Interests;