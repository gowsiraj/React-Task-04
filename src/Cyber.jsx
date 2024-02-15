import Card from "./Card"

function Cyber({data}) {
  const cyber=data.filter((cardData)=>cardData.head==="cyber");
  return (
    <div className="container text-center mt-5">
  <div className="row">
  {
    cyber.map((cardData,index)=>{
     return <Card key={index} cardData={cardData}/>
    })
  }
  </div>
</div>
  )
}

export default Cyber