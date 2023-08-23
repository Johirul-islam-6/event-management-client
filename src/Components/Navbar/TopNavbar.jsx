import { Link } from "react-router-dom"


export const TopNavbar = () => {
  return (
    <div>
<nav className="navbar bg-body-tertiary ">

  <div className="container-fluid mx-md-5">
    <Link to={'/'} className="navbar-brand d-flex justify-content-center align-items-center">
       <img className="Navbar-logo mb-2 img-fluid" src="https://i.ibb.co/fYNfPd6/png-logo.png" alt="" />
        <h3 className="ms-2 realway logo-text">E-Management</h3>
    </Link>
    <div className="">
      
      <img src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp" className="rounded-circle img-fluid mb-0 profile-avata" 
      alt="Avatar" />

    </div>
  </div>
</nav>

    </div>
  )
}
