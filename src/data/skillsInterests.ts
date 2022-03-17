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
        id: "Languages:",
        type: "Languages:",
        label_1: "Java",
        labelColor_1: "orange",
        label_2: "JavaScript",
        labelColor_2: "yellow",
        label_3: "Python",
        labelColor_3: "green",
        label_4: "HTML/CSS",
        labelColor_4: "pink",
        label_5: "C",
        labelColor_5: "blue",
    },
    {
        id: "Frameworks:",
        type: "Frameworks:",
        label_1: "React",
        labelColor_1: "gray",
        label_2: "Node.js",
        labelColor_2: "gray",
        label_3: "Flask",
        labelColor_3: "gray",
        label_4: "MongoDB",
        labelColor_4: "gray",
        label_5: "Angular",
        labelColor_5: "gray",
    },
    {
        id: "Developer Tools:",
        type: "Developer Tools:",
        label_1: "Git",
        labelColor_1: "gray",
        label_2: "Docker",
        labelColor_2: "gray",
        label_3: "VS Code",
        labelColor_3: "gray",
        label_4: "Visual Studio",
        labelColor_4: "gray",
        label_5: "InteliJ",
        labelColor_5: "gray",
    },
]

export default Interests;