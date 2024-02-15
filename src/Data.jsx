
import Card from "./Card"

function Data({data}) {
  const science=data.filter((cardData)=>cardData.head==="data");
  return (
    <div className="container text-center mt-5">
  <div className="row">
  {
    science.map((cardData,index)=>{
     return <Card key={index} cardData={cardData}/>
    })
  }
  </div>
</div>
  )
}

export default Data