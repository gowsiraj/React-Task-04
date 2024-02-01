import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTv } from '@fortawesome/free-solid-svg-icons';




function Home() {
  return (
  
    <nav className="navbar navbar-expand-lg pt-3 pb-3" style={{backgroundColor:"#4169E1"}}>
    <div className="container-fluid">
      <a className="navbar-brand p-2" href="#" style={{color:"white",fontSize:"30px"}}><FontAwesomeIcon icon={faTv} />
</a>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportContent" aria-controls="navbarSupportContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
      <div className="collapse navbar-collapse " id="navbarSupportContent">
        <ul className="navbar-nav me-auto mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link linkstyle" to={"/"} style={{color:"white"}}>ALL</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link linkstyle" to={"/fsd"} style={{color:"white"}}>FULL STACK DEVELOPMENT</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link linkstyle" to={"/data"} style={{color:"white"}}>DATA SCIENCE</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link linkstyle" to={"/cyber"} style={{color:"white"}}>CYPER SECURITY</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link linkstyle" to={"/career"} style={{color:"white"}}>CAREER</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
  )
}

export default Home