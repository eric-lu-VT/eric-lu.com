export interface InterestType {
    id: string;
    type: string;
    label_1: string;
    labelColor_1: string;
    label_2: string;
    labelColor_2: string;
    label_3: string;
    labelColor_3: string;
    label_4?: string;
    labelColor_4?: string;
    label_5?: string;
    labelColor_5?: string;
    label_6?: string;
    labelColor_6?: string;
}

const Interests: InterestType[] = [
    {
        id: "Languages:",
        type: "Languages:",
        label_1: "Java",
        labelColor_1: "orange",
        label_2: "TypeScript / JavaScript",
        labelColor_2: "yellow",
        label_3: "Python",
        labelColor_3: "green",
        label_4: "HTML/CSS",
        labelColor_4: "pink",
        label_5: "C",
        labelColor_5: "blue",
        label_6: "C++",
        labelColor_6: "red",
    },
    {
        id: "Frameworks:",
        type: "Frameworks:",
        label_1: "React",
        labelColor_1: "gray",
        label_2: "React Native",
        labelColor_2: "gray",
        label_3: "Node.js",
        labelColor_3: "gray",
        label_4: "Express.js",
        labelColor_4: "gray",
        label_5: "PostgreSQL",
        labelColor_5: "gray",
        label_6: "MongoDB",
        labelColor_6: "gray",
    },
    {
        id: "Developer Tools:",
        type: "Developer Tools:",
        label_1: "Git",
        labelColor_1: "gray",
        label_2: "Bash",
        labelColor_2: "gray",
        label_3: "AWS",
        labelColor_3: "gray",
    },
]

export default Interests;