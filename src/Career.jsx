import Card from "./Card"

function Career() {
  const careerList=[{
    img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Automation-Test-Engineer-Resume-Important-Things-To-Consider.webp",
    title:"Automation Test Engineer Resume: 10 Important Things To Consider",
    detail:"The world is moving towards modernization leading to an increase in the popularity of civil",
    date:"18 December 2024",
    command:"No Comments"
  },
  {
    img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Product-Based-Companies-for-Product-Managers-in-India.webp",
    title:"Best 11 Product-Based Companies for Product Managers in India ",
    detail:"Who is a product manager? What are the best product-based companies for product managers in",
    date:"23 September 2024",
    command:"No Comments"
  },{
    img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Commerce-Students.webp",
    title:"Top IT Jobs for Commerce Students: A Lucrative Career Path",
    detail:"What if I say that blockchain is going to be the next big thing? And",
    date:"15 July 2024",
    command:"No Comments"
  },{
    img:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Excellent-Product-based-Companies-for-UI_UX-Designing.webp",
    title:"8 Excellent Product-based Companies for UI/UX Designing",
    detail:"In today’s tech-driven world, the demand for exceptional user experiences has never been higher. From",
    date:"15 December 2024",
    command:"No Comments"
  },]
  return (
    <div className="container text-center mt-5">
  <div className="row">
  {
    careerList.map((cardData,index)=>{
     return <Card key={index} cardData={cardData}/>
    })
  }
  </div>
</div>
  )
}

export default Career