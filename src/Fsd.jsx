
import Card from "./Card"

function Fsd({data}) {
  const fsd=data.filter((cardData)=>cardData.head==="fsd");
 
  return (<>
    <div className="container text-center mt-5">
  <div className="row">
  {
    fsd.map((cardData,index)=>{
     return <Card key={index} cardData={cardData}/>
    })
  }
  </div>
</div>
</>
  )
}

export default Fsd