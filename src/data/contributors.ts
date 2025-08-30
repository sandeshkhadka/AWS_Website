type Contributor = {
  name: string;
  role?: string;
  image: string;
  github?: string;
  linkedin?: string;
};

const contributors: Contributor[] = [
  {
    name: "Jeeni Shrestha",
    role: "Developer",
    image: '/contributors/jeeni.webp',
    github: "https://github.com/jeeni",
    linkedin: "https://linkedin.com/in/jeeni",
  },
  {
    name: "Sandip Gyawali",
    github: "https://github.com/SandipGyawali",
    linkedin: "https://www.linkedin.com",
    image: '/contributors/jeeni.webp',
  },
  {
    name: "Example Name",
    role: "Designer",
    image: "/contributors/example.jpg",
    github: "https://github.com/example",
  },
  {
    name: "Example Name",
    role: "Designer",
    image: "/contributors/example.jpg",
    github: "https://github.com/example",
  },
  {
    name: "Example Name",
    role: "Designer",
    image: "/contributors/example.jpg",
    github: "https://github.com/example",
  },
  {
    name: "Example Name",
    role: "Designer",
    image: "/contributors/example.jpg",
    github: "https://github.com/example",
  },
];

export default contributors;
