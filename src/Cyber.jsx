import Card from "./Card"

function Cyber() {
  const cyberList=[{
    img:"https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
    title:"What Is Hacking? Types of Hacking & More    ",
    detail:"Have you ever wondered what hacking is all about? It’s a big deal in today’s",
    date:"18 July 2024",
    command:"No Comments"
  },
  {
    img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
    title:"Non-Coding Jobs in Cybersecurity: A Comprehensive Guide    ",
    detail:"In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills    ",
    date:"18 July 2024",
    command:"No Comments"
  },]
  return (
    <div className="container text-center mt-5">
  <div className="row">
  {
    cyberList.map((cardData,index)=>{
     return <Card key={index} cardData={cardData}/>
    })
  }
  </div>
</div>
  )
}

export default Cyber