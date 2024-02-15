import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Home from './Home'
import All from './All'
import Fsd from './Fsd'
import Data from './Data'
import Cyber from './Cyber'
import Career from './Career'


import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  let data=[{
    img:"https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
    title:"What Is Hacking? Types of Hacking & More    ",
    detail:"Have you ever wondered what hacking is all about? It’s a big deal in today’s",
    date:"18 July 2024",
    command:"No Comments",
    head:"cyber"
  },
  {
    img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
    title:"Non-Coding Jobs in Cybersecurity: A Comprehensive Guide    ",
    detail:"In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills    ",
    date:"18 July 2024",
    command:"No Comments",
    head:"cyber"
  },{
    img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers.webp",
    title:"Top Ways to Assess Soft Skills",
    detail:"When you’re hiring a full-stack developer, what are the most important things you look for?",
    date:"18 November 2024",
    command:"No Comments",
    head:"fsd"
  },{
    img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer-.webp",
    title:"Top Differences: Full Stack Developer vs Software Engineer",
    detail:"A Full Stack Developer is a tech all-rounder. They work on both the front and",
    date:"15 December 2024",
    command:"No Comments",
    head:"fsd"
  },{
    img:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-Books-to-Learn-Full-Stack-Development.webp",
    title:"Best Books to Learn Full-Stack Development",
    detail:"Are you interested in becoming a full-stack developer but not sure where to start?",
    date:"23 November 2024",
    command:"No Comments",
    head:"fsd"
  },{
    img:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Featured-Image-top-product-based-companies-for-full-stack-developers.webp",
    title:"Top 10 Product-Based Companies for FSD",
    detail:"In the dynamic landscape of technology, full-stack developers are the",
    date:"15 November 2024",
    command:"No Comments",
    head:"fsd"
  },{
    img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-product-based-companies-for-data-science-freshers.webp",
    title:"Top Product-Based Companies for Data Science Freshers",
    detail:"In today’s data-driven world, data science has emerged as a crucial field, with companies harnessing",
    date:"18 July 2024",
    command:"No Comments",
    head:"data"
  },{
    img:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-books-to-learn-data-science.webp",
    title:"Best Data Science Books to Learn in 2024",
    detail:"A Full Stack Developer is a tech all-rounder. They work on both the front and",
    date:"15 December 2024",
    command:"No Comments",
    head:"data"
  },{
    img:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-Books-to-Learn-Full-Stack-Development.webp",
    title:"Best Books to Learn Full-Stack Development",
    detail:"Are you interested in becoming a full-stack developer but not sure where to start?",
    date:"23 November 2024",
    command:"No Comments",
    head:"data"
  },{
    img:"https://www.guvi.in/blog/wp-content/uploads/2023/08/Data-Science-project-showcase.webp",
    title:"10 Best Data Science Frameworks in 2024",
    detail:"Does data scientists fascinate you? If yes, you must definitely know about data science frameworks.",
    date:"15 November 2024",
    command:"No Comments",
    head:"data"
  },
  {
    img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Automation-Test-Engineer-Resume-Important-Things-To-Consider.webp",
    title:"Automation Test Engineer Resume: 10 Important Things To Consider",
    detail:"The world is moving towards modernization leading to an increase in the popularity of civil",
    date:"18 December 2024",
    command:"No Comments",
    head:"career"
    
  },
  {
    img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Product-Based-Companies-for-Product-Managers-in-India.webp",
    title:"Best 11 Product-Based Companies for Product Managers in India ",
    detail:"Who is a product manager? What are the best product-based companies for product managers in",
    date:"23 September 2024",
    command:"No Comments",
    head:"career"
    
  },{
    img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Commerce-Students.webp",
    title:"Top IT Jobs for Commerce Students: A Lucrative Career Path",
    detail:"What if I say that blockchain is going to be the next big thing? And",
    date:"15 July 2024",
    command:"No Comments",
    head:"career"

  },{
    img:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Excellent-Product-based-Companies-for-UI_UX-Designing.webp",
    title:"8 Excellent Product-based Companies for UI/UX Designing",
    detail:"In today’s tech-driven world, the demand for exceptional user experiences has never been higher. From",
    date:"15 December 2024",
    command:"No Comments",
    head:"career"
  },

  ]


  return (
    <>
    
      <BrowserRouter>
      <Home/>
      <Routes>
        <Route path="/" element={<All data={data}/>}/>
        <Route path="/fsd" element={<Fsd data={data}/>}/> 
         <Route path="/data" element={<Data data={data}/>}/>
        <Route path="/cyber" element={<Cyber data={data}/>}/>
        <Route path="/career" element={<Career data={data}/>}/>
      </Routes>
      </BrowserRouter>
     
      
      
    </>
  )
}

export default App
