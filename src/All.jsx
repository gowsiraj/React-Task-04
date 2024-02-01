
import Card from './Card'
function All() {
  const cardList=[{
    img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer-.webp",
    title:"Best Books to Learn Full-Stack Development",
    detail:"Are you interested in becoming a full-stack developer but not sure where to start?",
    date:"15 November 2024",
    command:"No Comments"
  },
  {
    img:"https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Top-Selenium-Alternatives-for-Test-Automation.webp",
    title:"Top 8 Selenium Alternatives for Test Automation",
    detail:"Test automation plays a crucial role in the development and deployment",
    date:"31 January 2024 ",
    command:"No Comments"
  },
  {
    img:"https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Human-Computer-Interaction-in-UIUX-A-Comprehensive-Guide-on-Effective-Designing-.webp",
    title:"Human-Computer Interaction in UI/UX",
    detail:"Believe it or not, approximately 52% of Indians have increased used of ",
    date:"29 January 2024",
    command:"No Comments"
  },
  {
    img:"https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Top-Machine-Learning-Project-Ideas-For-All-Levels-with-Source-Code.webp",
    title:"Top 9 Machine Learning Project Ideas For All Levels",
    detail:"Machine learning is a dynamic field that continues to shape the future of  ",
    date:"January 30, 2024",
    command:"No Comments"
  },
  {
    img:"https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Top-Free-Courses-by-GUVI-Best-Upskilling-Courses-in-Tech.webp",
    title:"Top 5 Free Courses by GUVI: Best Upskilling Courses in Tech [2024]",
    detail:"Does waking up to the news of mass layoffs every morning make you ",
    date:"28 November 2023",
    command:"No Comments"
  },
  {
    img:"https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Designing-for-Dark-Mode-Aesthetics-Accessibility-and-User-Preferences.webp",
    title:"Designing for Dark Mode: Aesthetics, Accessibility, and User Preferences",
    detail:"Dark mode is a way of designing websites and apps so that they have a",
    date:"August 5, 2023",
    command:"No Comments"
  },
  {
    img:"https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Integrating-Augmented-Reality-AR-into-User-Interfaces-Challenges-and-Solutions.webp",
    title:"Integrating Augmented Reality (AR) into User Interfaces: Challenges and Solutions",
    detail:"Augmented Reality (AR) is a tool that adds digital images and ",
    date:"5 August 2023",
    command:"No Comments"
  },
  {
    img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer-.webp",
    title:"Best Books to Learn Full-Stack Development-tech [2024]",
    detail:"Are you interested in becoming a full-stack developer but not sure where to start?",
    date:"15 November 2023",
    command:"No Comments"
  }
  ];
  return (
    <div className="container text-center mt-5">
  <div className="row">
  {
    cardList.map((cardData,index)=>{
     return <Card key={index} cardData={cardData}/>
    })
  }
  </div>
</div>
    
  )
}

export default All