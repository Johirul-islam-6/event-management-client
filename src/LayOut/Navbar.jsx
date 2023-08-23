
export const Navbar = () => {
  return (
    <>
    {/* =================== top navbar start ================ */}
<nav className="navbar bg-body-tertiary">
  <div className="container-fluid mx-md-5">
    <a className="navbar-brand d-flex justify-content-center align-items-center">
       <img className="Navbar-logo mb-2" src="https://i.ibb.co/fYNfPd6/png-logo.png" alt="" />
        <h3 className="ms-2 realway logo-text">E-Management</h3>
    </a>
    <div className="">
      
      <img src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp" className="rounded-circle mb-0 profile-avata" 
      alt="Avatar" />

    </div>
  </div>
</nav>
{/* =================== top navbar end ================ */}

{/* ### */}

{/* ================== middle navbar start ==================  */}

<ul className="nav justify-content-center bg-body-tertiary middle-navbar py-2">
  <li className="nav-item">
    <a className="nav-link " aria-current="page" href="#">Home</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Create Event</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">about</a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled" aria-disabled="true">profile</a>
  </li>
</ul>

{/* ================== middle navbar end ==================  */}
{/* ### */}

{/* ================== last navbar start ==================  */}

<ul className=" justify-content-center bg-body-tertiary last-navbar py-md-3 py-2">
  
  
      <form action="">
        
        <div className="row d-flex justify-content-center">
          
          <div className="col-auto">
            <p className="">
              <strong></strong>
            </p>
          </div>
          
          <div className="col-md-5 col-12">
            <div className="form-outline form-white ">
              <input type="text" id="searching-data" className="form-control w-100 mx-auto" />
              <label className="w-100 mx-auto pt-2 text-center event-discription text-uppercase searching-content d-none d-md-block" >searching event name, location, start-date/time, etc.. </label>
            </div>
          </div>

          <div className="col-auto ">
            <button type="submit" className="btn btn-outline-light mt-2 mt-md-0 searching-btn event-discription ">
              Search
            </button>
          </div>
          
        </div>
        
      </form>


</ul>

{/* ================== last navbar end ==================  */}




    </>
  )
}
