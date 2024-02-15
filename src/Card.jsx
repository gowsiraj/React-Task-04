//vite rules:
import PropTypes from 'prop-types';
Card.propTypes={
cardData:PropTypes.shape({
  img:PropTypes.string.isRequired,
title:PropTypes.string.isRequired,
  detail:PropTypes.string.isRequired,
  date:PropTypes.string.isRequired,
  command:PropTypes.string.isRequired,
}).isRequired
}
function Card({cardData,index}) {
  return (
    <>
    <div key={index} className="col-sm-12 col-md-4 col-lg-3 col-lg-3 mb-4">
    <div className="card h-100 cardstyle">
    <img src={cardData.img} className="card-img-top" alt="..."/>
    <div className="card-body ">
      <h5 className="card-title">{cardData.title}</h5>
      <p className="card-text fw-lighter mt-3">{cardData.detail}</p>
      <p><a href="#" className="link-primary link-opacity-75">Read More</a></p>
    </div>
    <div className="card-footer p-3 fw-lighter">
    {cardData.date}
  </div>
    </div>
  </div>
  </>
   
 
  
  )
}

export default Card