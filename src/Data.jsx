
import Card from "./Card"

function Data() {
  const dataList=[{
    img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-product-based-companies-for-data-science-freshers.webp",
    title:"Top Product-Based Companies for Data Science Freshers",
    detail:"In today’s data-driven world, data science has emerged as a crucial field, with companies harnessing",
    date:"18 July 2024",
    command:"No Comments"
  },{
    img:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-books-to-learn-data-science.webp",
    title:"Best Data Science Books to Learn in 2024",
    detail:"A Full Stack Developer is a tech all-rounder. They work on both the front and",
    date:"15 December 2024",
    command:"No Comments"
  },{
    img:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-Books-to-Learn-Full-Stack-Development.webp",
    title:"Best Books to Learn Full-Stack Development",
    detail:"Are you interested in becoming a full-stack developer but not sure where to start?",
    date:"23 November 2024",
    command:"No Comments"
  },{
    img:"https://www.guvi.in/blog/wp-content/uploads/2023/08/Data-Science-project-showcase.webp",
    title:"10 Best Data Science Frameworks in 2024",
    detail:"Does data scientists fascinate you? If yes, you must definitely know about data science frameworks.",
    date:"15 November 2024",
    command:"No Comments"
  },]
  return (
    <div className="container text-center mt-5">
  <div className="row">
  {
    dataList.map((cardData,index)=>{
     return <Card key={index} cardData={cardData}/>
    })
  }
  </div>
</div>
  )
}

export default Data