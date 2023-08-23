import { Link } from "react-router-dom"
import { TopNavbar } from "../../Components/Navbar/TopNavbar"


export const Registration = () => {
  return (
    <>

    {/* top navbar import */}
    <TopNavbar/>
    
    <section className="vh-100 mt-5 singUp">

                {/*<----==== routeing text contant =====---> */}
    <div className="my-2 d-flex justify-content-center mt-4">
  <nav  aria-label="breadcrumb ">
  <ol className="breadcrumb">
    
    <li className="breadcrumb-item active event-heading-text text-uppercase fw-bold text-danger">
    <Link to={'/'}> Home</Link> 
    </li>

    <li className="breadcrumb-item active event-heading-text text-uppercase text-info" aria-current="page">Sing Up</li>
  </ol>
</nav>
     </div>
{/*<----==== routeing text contant end =====---> */}


  <div className="container h-custom ">
    <div className="row d-flex justify-content-center align-items-center h-100 ">
      <div className="col-md-9 col-lg-6 col-xl-5 ">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          className="img-fluid" alt="Sample image"/>
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 ">
        <form className="card p-5">
          <div className="d-block flex-row align-items-center justify-content-center justify-content-lg-start">
            <h3 className="ms-2 realway logo-text text-uppercase fs-3 text-center fw-bold">Sing Up</h3>
            <p className="lead fw-normal mb-0 me-3 text-center mb-4">with Email, Password</p>
          </div>

          

          {/* <!-- Email input --> */}
          <div className="form-outline mb-4">
            <input type="email" id="form3Example3" className="form-control form-control-lg"
              placeholder="Enter a valid email address" />
            <label className="form-label" >Email address</label>
          </div>

          {/* <!-- Password input --> */}
          <div className="form-outline mb-3">
            <input type="password" id="form3Example4" className="form-control form-control-lg"
              placeholder="Enter password" />
            <label className="form-label" >Password</label>
          </div>

          <div className="d-flex justify-content-between align-items-center">
            {/* <!-- Checkbox --> */}
            <div className="form-check mb-0">
              <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label className="form-check-label" >
                Remember me
              </label>
            </div>
              <p className="small  fw-bold mt-2 pt-1 mb-0">already account? <br />
              <Link to={'/login'} className="link-danger text-center">Login</Link>
              </p>
          </div>

          <div className="text-center text-lg-start mt-4 pt-2">
            <button type="button" className="btn btn-primary flex w-100  btn-block fa-lg gradient-custom-2 mb-3 login-btn "
              >Submit</button>
          </div>

        </form>
      </div>
    </div>
  </div>
  
</section>
    
    </>
  )
}
