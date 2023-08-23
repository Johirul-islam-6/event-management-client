
export const Navbar = () => {
  return (
    <>
    {/* =================== top navbar start ================ */}
<nav className="navbar bg-body-tertiary">
  <div className="container-fluid mx-md-5">
    <a className="navbar-brand d-flex justify-content-center align-items-center">
       <img className="Navbar-logo mb-2 img-fluid" src="https://i.ibb.co/fYNfPd6/png-logo.png" alt="" />
        <h3 className="ms-2 realway logo-text">E-Management</h3>
    </a>
    <div className="">
      
      <img src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp" className="rounded-circle img-fluid mb-0 profile-avata" 
      alt="Avatar" />

    </div>
  </div>
</nav>
{/* =================== top navbar end ================ */}

{/* ### */}

{/* ================== middle navbar start ==================  */}

<div className="nav justify-content-center bg-body-tertiary middle-navbar py-2">
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
</div>

{/* ================== middle navbar end ==================  */}
{/* ### */}

{/* ================== last navbar start ==================  */}

<div className=" justify-content-center bg-body-tertiary last-navbar py-md-3 py-2">
  
      <form action="">
        
        <div className=" d-flex justify-content-center">
          
          
          
          <div className="col-md-12  ">

             <div className="d-flex w-50 mx-auto justify-content-center form-outline form-white search-bar">
               <input type="text" id="searching-data" className="form-control  mx-auto" />
              <button type="submit" className="btn btn-outline-light  ms-2 mt-md-0 searching-btn event-discription ">
              Search
            </button>
             </div>

         
             <label className="w-100 mx-auto pt-2 text-center event-discription text-uppercase searching-content d-none d-md-block" >searching event name, location, start-date/time, etc.. </label>
          </div>

          
          
        </div>
        
      </form>


</div>

{/* ================== last navbar end ==================  */}




    </>
  )
}
