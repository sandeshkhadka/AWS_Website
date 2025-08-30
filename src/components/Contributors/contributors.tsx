
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
    name: "Example Name",
    role: "Designer",
    image: "/contributors/example.jpg",
    github: "https://github.com/example",
    linkedin: "https://linkedin.com/in/example",
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
