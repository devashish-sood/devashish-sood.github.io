import { ProjectProps, SingleProject } from "../components/Project";
import { Link } from "../components/Utils";

const PROJ_ARR: ProjectProps[] = [
  {
    heading: (
      <Link href="https://github.com/devashish-sood/tuner" text="tuner" />
    ),
    tech: "Rust",
    description:
      "While learning how to play the guitar, I decided to leverage my need for a good guitar tuner to accomplish two things - learn some Rust, and re-learn some Physics :)",
  },
  {
    heading: (
      <Link
        href="https://github.com/devashish-sood/aoc24"
        text="Advent of Code 2024"
      />
    ),
    tech: "OCaml",
    description:
      "Learning my new language of the year, OCaml, by using it to solve this year's Advent of Code challenges.",
  },
  {
    heading: (
      <Link
        href="https://github.com/devashish-sood/4410-warmup"
        text="Intepreter"
      />
    ),
    tech: "Pyret",
    description:
      "Implementing a programming language interpreter in preparation for learning about compilers this upcoming spring. I am following along Sriram Krishnamurthi's books PLAI and PAPL.",
  },
  {
    heading: <Link href="https://github.com/devashish-sood/raft" text="Raft" />,
    tech: "Typescript",
    description:
      "The RAFT consensus protocol is a simple distributed system protocol intended to for students. Since it is used for many software programs and by many companies, I wanted to give a shot at re-implementing it by reading the original RAFT paper.",
  },
];
const Projects = () => {
  return PROJ_ARR.map((p) => SingleProject({ props: p }));
};

export default Projects;
