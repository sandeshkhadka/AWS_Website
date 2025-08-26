import React from "react";


import JeeniIMG from "./images/jeeni.webp";
import ExampleIMG from "./images/example.jpg";

type Contributor = {
  name: string;
  role?: string;
  image: any;
  github?: string;
  linkedin?: string;
};

const contributors: Contributor[] = [
  {
    name: "Jeeni Shrestha",
    role: "Developer",
    image: JeeniIMG,
    github: "https://github.com/jeeni",
    linkedin: "https://linkedin.com/in/jeeni",
  },
  {
    name: "Example Name",
    role: "Designer",
    image: ExampleIMG,
    github: "https://github.com/example",
    linkedin: "https://linkedin.com/in/example",
  },
  {
    name: "Example Name",
    role: "Designer",
    image: ExampleIMG,
    github: "https://github.com/example",
  },
  {
    name: "Example Name",
    role: "Designer",
    image: ExampleIMG,
    github: "https://github.com/example",
  },
  {
    name: "Example Name",
    role: "Designer",
    image: ExampleIMG,
    github: "https://github.com/example",
  },
  {
    name: "Example Name",
    role: "Designer",
    image: ExampleIMG,
    github: "https://github.com/example",
  },
];

export default contributors;
