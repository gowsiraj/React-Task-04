
import Card from "./Card"

function Fsd() {
  const fsdList=[{
    img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers.webp",
    title:"Top Ways to Assess Soft Skills",
    detail:"When you’re hiring a full-stack developer, what are the most important things you look for?",
    date:"18 November 2024",
    command:"No Comments"
  },{
    img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer-.webp",
    title:"Top Differences: Full Stack Developer vs Software Engineer",
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
    img:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Featured-Image-top-product-based-companies-for-full-stack-developers.webp",
    title:"Top 10 Product-Based Companies for FSD",
    detail:"In the dynamic landscape of technology, full-stack developers are the",
    date:"15 November 2024",
    command:"No Comments"
  },]
  return (<>
    <div className="container text-center mt-5">
  <div className="row">
  {
    fsdList.map((cardData,index)=>{
     return <Card key={index} cardData={cardData}/>
    })
  }
  </div>
</div>
</>
  )
}

export default Fsd