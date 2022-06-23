export type categories = "Java" | 'JavaScript' | 'TypeScript' | "Python" | "C++";

export interface LanguageType {
  link: string;
  id: string;
  name: string;
  category: categories[];
  labels?: string[];
  description: string;
  labelColor: string;
}

const Languages: LanguageType[] = [
  {
    id: "QuizBowl-Discord-Bot",
    category: ["Java"],
    link: "https://github.com/eric-lu-VT/QuizBowl-Discord-Bot",
    labels: ["Utility"],
    name: "QuizBowl-Discord-Bot",
    description: "Single player simulator for Quiz Bowl, using a Discord bot and Google text-to-speech and speech-to-text services.",
    labelColor: "orange",
  },
  {
    id: "Liars-Poker",
    category: ["Java"],
    link: "https://github.com/eric-lu-VT/Liars-Poker",
    labels: ["Gaming"],
    name: "Liars-Poker",
    description: "A functional implementation of the card game \"Liar's Poker\" using a Discord bot to play it in chat.",
    labelColor: "red",
  },
  {
    id: "Reddit-Discord-Notifier",
    category: ["Java"],
    link: "https://github.com/eric-lu-VT/Reddit-Discord-Notifier",
    labels: ["Utility"],
    name: "Reddit-Discord-Notifier",
    description: "Automatically detects new posts made on Reddit, and sends them to Discord.",
    labelColor: "orange",
  },
  {
    id: "bamboozled-app",
    category: ["JavaScript"],
    link: "https://github.com/eric-lu-VT/bamboozled-app",
    labels: ["Gaming"],
    name: "bamboozled-app",
    description: "A functional implementation of the dice bluffing game \"Bamboozled\", to be played live and with multiplayer support on mobile devices.",
    labelColor: "red",
  },
  {
    id: "Sadbird",
    category: ["JavaScript"],
    link: "https://github.com/eric-lu-VT/sadbird",
    labels: ["Chrome Extension"],
    name: "Sadbird",
    description: "A Chrome extension that flags negative and emotionally confusing Twitter posts. Winning project at HackDartmouth 2022.",
    labelColor: "green",
  },
  {
    id: "netcardgames.org",
    category: ["JavaScript"],
    link: "https://github.com/eric-lu-VT/netcardgames.org",
    labels: ["Website"],
    name: "netcardgames.org",
    description: "A website for functional implementations of various card games, to be played live and with multiplayer support.",
    labelColor: "blue",
  },
  {
    id: "eric-lu.com",
    category: ["TypeScript"],
    link: "https://github.com/eric-lu-VT/eric-lu.com",
    labels: ["Website"],
    name: "eric-lu.com",
    description: "My personal website, made with TypeScript and ChakraUI.",
    labelColor: "blue",
  },
  {
    id: "quizbowl-io",
    category: ["JavaScript"],
    link: "https://github.com/eric-lu-VT/quizbowl-io",
    labels: ["Website"], 
    name: "quizbowl-io",
    description: "Single player website simulator for Quiz Bowl, using W3C's text-to-speech and speech-to-text services.",
    labelColor: "blue",
  },
  {
    id: "DEPRECATED-Reddit-Discord-Alert",
    category: ["JavaScript"],
    link: "https://github.com/eric-lu-VT/DEPRECATED-Reddit-Discord-Alert",
    labels: ["Utility"],
    name: "DEPRECATED-Reddit-Discord-Alert",
    description: "Old version of \"Reddit-Discord-Notifier\"ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ",
    labelColor: "orange",
  }
];
export default Languages;
