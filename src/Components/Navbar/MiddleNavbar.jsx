import { Link } from "react-router-dom"

export const MiddleNavbar = () => {
  return (
    
<div className="nav justify-content-center bg-body-tertiary middle-navbar py-2">
  <li className="nav-item">
    <Link to={'/'} className="nav-link " aria-current="page" >Home</Link>
  </li>
  <li className="nav-item">
    <Link to={'/create-event'} className="nav-link" >Create Event</Link>
  </li>
  <li className="nav-item">
    <Link to={'/about'} className="nav-link" >about</Link>
  </li>
  <li className="nav-item">
    <Link to={'/profile'} className="nav-link disabled" aria-disabled="true">profile</Link>
  </li>
</div>
  )
}
