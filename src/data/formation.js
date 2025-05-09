import { logoSchool } from "./logoSchool";

export const formations = [
  {
    date: "2022",
    school: "École 42",
    formation: "Développement Web",
    link: "/formation-1",
    image : {
        src:logoSchool[0].src,
        alt: "Logo Ecole",
    }
  },
  {
    date: "2021",
    school: "OpenClassrooms",
    formation: "Data Analyst",
    link: "/formation-2",
    image : {
        src:logoSchool[1].src,
        alt: "Logo Ecole",
    }
  },
  {
    date: "2020",
    school: "IUT Paris",
    formation: "Informatique",
    link: "/formation-3",
    image : {
    src:logoSchool[1].src,
    alt: "Logo Ecole",
    }
  },
  {
    date: "2019",
    school: "Lycée Turing",
    formation: "BTS SIO",
    link: "/formation-4",
    image : {
    src:logoSchool[1].src,
    alt: "Logo Ecole",
    }
  },
];
