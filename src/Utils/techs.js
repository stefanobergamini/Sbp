import reacts from "../Assets/imgs/logo-react-icon.png"
import IFSC from "../Assets/imgs/Logo_IFSC.png"
import UFSC from "../Assets/imgs/UFSC.png"
// import js from "../Assets/imgs/JavaScript-logo.png"
import python from "../Assets/imgs/python.webp"
// import html from "../Assets/imgs/HTML5_logo_and_wordmark.svg.png"

const techs = [
    {
        "name": "React",
        // "img": react,
        "skill": 90,
    }, 
    {
        "name": "JavaScript",
        // "img": js,
        "skill": 90,
    }, 
    {
        "name": "HTML",
        // "img": html,
        "skill": 90,
    },

    {
        "name": "CSS",
        // "img": css,
        "skill": 90,
    },
    {
        "name": "SASS",
        // "img": sass,
        "skill": 80,
    },
    {
        "name": "Python",
        // "img": python,
        "skill": 60,
    },

    {
        "name": "Vue.js",
        // "img": vue,
        "skill": 50,
    },
    {
        "name": "C",
        // "img": html,
        "skill": 30,
    },
    {
        "name": "C#",
        // "img": html,
        "skill": 20,
    },
]

const experiences = [
    {
      title: 'Técnico em Eletrônica',
      company_name: 'Instituto Federal de Santa Catarina',
      icon: IFSC,
      iconBg: '#222222',
      about: '',
      date: 'Jan 2012 - Dez 2015',
    },
    {
      title: 'Bacharelado em Ciências da Computação',
      company_name: 'Universidade Federal de Santa Catarina',
      icon: UFSC,
      iconBg: '#222222',
      about: '',
      date: 'Jan 2016 - Dez 2022',
    },
    {
      title: 'Estágiario',
      company_name: 'Fontes Promotora',
      icon: python,
      iconBg: '#222222',
      about: 'Tecnologias utilizadas: Python e Selenium',
      date: 'Jul 2021 - Set 2021',
    },
    {
      title: 'Desenvolvedor Front End',
      company_name: 'Connvert',
      icon: reacts,
      iconBg: '#222222',
      about: 'Desenvolvimento de LPs utilizando de React',
      date: 'Sep 2021 - Mar 2023',
    },
  ];

export {techs, experiences}; 