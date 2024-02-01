import Card from "./Card"

function Cyber() {
  const cyberList=[{
    img:"https://www.guvi.in/blog/wp-content/uploads/2022/11/Teal-Illustration-Digital-Business-Blog-Banner-1.png",
    title:"8 Different Types of Cybersecurity and Threats Involved",
    detail:"In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills",
    date:"18 July 2024",
    command:"No Comments"
  },
  {
    img:"https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner.png",
    title:"Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?",
    detail:"Cybersecurity refers to the protection of devices, processes",
    date:"18 July 2024",
    command:"No Comments"
  },
  {
    img:"https://www.guvi.in/blog/wp-content/uploads/2021/03/The-Ultimate-%E2%80%A8Cybersecurity-Roadmap-for-Beginners.webp",
    title:"The Ultimate Cybersecurity Roadmap for Beginners",
    detail:"There is something fascinating about a lone hacker in black hoodies using a single system",
    date:"18 August 2024",
    command:"No Comments"
  }]
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