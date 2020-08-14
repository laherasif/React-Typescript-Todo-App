import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <div>
            
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link to="/" className="navbar-brand">Navbar</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link to="/" className="nav-link" >Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link to="/" className="nav-link" >Link</Link>
      </li>
      <li className="nav-item dropdown">
        <Link to="/" className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link to="/" className="dropdown-item" >Action</Link>
          <Link to="/" className="dropdown-item" >Another action</Link>
          <div className="dropdown-divider"></div>
          <Link to="/" className="dropdown-item" >Something else here</Link>
        </div>
      </li>
      <li className="nav-item">
        <Link to="/" className="nav-link disabled" >Disabled</Link>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
        </div>
    )
}

export default Header
