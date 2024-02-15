import Card from "./Card"

function Career({data}) {
  const career=data.filter((cardData)=>cardData.head==="career");
  return (
    <div className="container text-center mt-5">
  <div className="row">
  {
    career.map((cardData,index)=>{
     return <Card key={index} cardData={cardData}/>
    })
  }
  </div>
</div>
  )
}

export default Career