export type categories = 'TypeScript' | 'JavaScript' | 'Java' | "Python" | "C++";

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
    id: "cs81-final-project",
    category: ["Python"],
    link: "https://github.com/eric-lu-VT/cs81-final-project",
    labels: ["Robotics"],
    name: "cs81-final-project",
    description: "This project provides an implementation of a robotic dog that is capable of searching a foreign environment for a target object (“ball”) and returning the object to a specified location using laser sensor and camera data.",
    labelColor: "pink",
  },
  {
    id: "mapability-backend",
    category: ["TypeScript"],
    link: "https://github.com/eric-lu-VT/mapability-backend",
    labels: ["Utility"],
    name: "mapability-backend",
    description: "Backend for the MapAbility project.",
    labelColor: "orange",
  },
  {
    id: "mapability-frontend",
    category: ["TypeScript"],
    link: "https://github.com/eric-lu-VT/mapability-frontend",
    labels: ["Utility"],
    name: "mapability-frontend",
    description: "A mobile app that allows individuals with disabilities find accessible resources and facilities. Winning project at HackDartmouth 2023.",
    labelColor: "orange",
  },
  {
    id: "bamboozled-app",
    category: ["TypeScript"],
    link: "https://github.com/eric-lu-VT/bamboozled-app",
    labels: ["Gaming"],
    name: "bamboozled-app",
    description: "A functional implementation of the dice bluffing game \"Bamboozled\", to be played live and with multiplayer support on mobile devices.",
    labelColor: "red",
  },
  {
    id: "bamboozled-backend",
    category: ["TypeScript"],
    link: "https://github.com/eric-lu-VT/bamboozled-backend",
    labels: ["Gaming"],
    name: "bamboozled-backend",
    description: "Backend for the Bamboozled project, a functional implementation of the dice bluffing game \"Bamboozled\" on mobile devices",
    labelColor: "red",
  },
  {
    id: "sadbird",
    category: ["JavaScript"],
    link: "https://github.com/eric-lu-VT/sadbird",
    labels: ["Chrome Extension"],
    name: "sadbird",
    description: "A Chrome extension that flags negative and emotionally confusing Twitter posts. Winning project at HackDartmouth 2022.",
    labelColor: "green",
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
];
export default Languages;
