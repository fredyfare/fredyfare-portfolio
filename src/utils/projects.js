import todolistImg from "../assets/images/todolist-img.png";
import calculatorImg from "../assets/images/calculator-img.png";
import findajobImg from "../assets/images/findajob-img.png";

const projects = [
  {
    title: "ToDo List",
    description: "by freeCodeCamp",
    technologies: "React",
    imgUrl: todolistImg,
    repUrl: "https://github.com/fredyfare/aplicacion-react-tareas",
  },
  {
    title: "Calculator",
    description: "by freeCodeCamp",
    technologies: "React, mathJS",
    imgUrl: calculatorImg,
    repUrl: "https://github.com/fredyfare/calculadora",
  },
  {
    title: "FindAJob",
    description: "by JavaScript Mastery",
    technologies: "React-Native, JSearch API",
    imgUrl: findajobImg,
    // repUrl: "https://github.com/fredyfare/findajob",
  },
];

export default projects;
