
import Card from './Card'
function All({data}) {
  
  return (
    <div className="container text-center mt-5">
  <div className="row">
  {
    data.map((cardData,index)=>{
     return <Card key={index} cardData={cardData}/>
    })
  }
  </div>
</div>
    
  )
}

export default All