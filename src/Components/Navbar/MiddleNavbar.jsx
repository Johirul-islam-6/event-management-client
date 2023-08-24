/* eslint-disable no-undef */
import Cookies from "js-cookie"
import { Link, useNavigate } from "react-router-dom"

export const MiddleNavbar = () => {

  const navigate = useNavigate()

  //get user get in cookies
 const userEmail = Cookies.get('userEmail')


  // user logOut
  const userLogOut = () => {

         Cookies.remove('userEmail');
         Cookies.remove('accessToken');
         window.location.reload()
       

  }

  //parmition only user route
  const checkingUser = () =>{
    if(!userEmail){
      navigate('/login')
    }
  }

  return (
    
<div className="nav justify-content-center bg-body-tertiary middle-navbar py-2">
  <li className="nav-item">
    <Link to={'/'} className="nav-link " aria-current="page" >Home</Link>
  </li>
  <li onClick={checkingUser} className="nav-item">
    <Link to={'/create-event'} className="nav-link" >Create Event</Link>
  </li>
  {
    userEmail ? <>
    <li className="nav-item">
    <Link onClick={userLogOut} to={''} className="nav-link" >logOut</Link>
  </li>
    </> : <>
    <li className="nav-item">
    <Link to={'/login'} className="nav-link" >login</Link>
  </li>
  <li className="nav-item">
    <Link to={'/singup'} className="nav-link" >sing up</Link>
  </li>
    
    </>
  }
  
  <li className="nav-item">
    <Link to={'/profile'} className="nav-link disabled" aria-disabled="true"> 
    profile
    </Link>
  </li>
</div>
  )
}
