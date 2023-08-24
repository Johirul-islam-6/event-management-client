
import Cookies from "js-cookie";
import { Link } from "react-router-dom"


export const TopNavbar = () => {

  // get user email in cookies
  const userEmail = Cookies.get('userEmail');


  return (
    <div>
<nav className="navbar bg-body-tertiary ">

  <div className="container-fluid mx-md-5">
    <Link to={'/'} className="navbar-brand d-flex justify-content-center align-items-center">
       <img className="Navbar-logo mb-2 img-fluid" src="https://i.ibb.co/fYNfPd6/png-logo.png" alt="" />
        <h3 className="ms-2 realway logo-text">E-Management</h3>
    </Link>
    <div className="">
     {
      userEmail ? <> 
       <img src="https://png.pngtree.com/png-vector/20191103/ourmid/pngtree-handsome-young-guy-avatar-cartoon-style-png-image_1947775.jpg" className="rounded-circle img-fluid mb-0 profile-avata" 
      alt="Avatar" />
      
      </> : <p className="event-title">welcome our site</p>
     }
     

    </div>
  </div>
</nav>

    </div>
  )
}
