import { Link, useNavigate } from "react-router-dom"
import { TopNavbar } from "../../Components/Navbar/TopNavbar"
import { toast } from "react-toastify"
import axios from "axios"
import Cookies from "js-cookie"


export const Registration = () => {

  const navigate = useNavigate()

// A user Login in email, password SingupFromData

const SingupFromData = async (event) => {
  event.preventDefault();
  const email = event?.target?.email?.value;
  const password = event?.target?.password?.value;

  const informationUserData = {
    email,
    password,
  };

  // send axios.post date

  try {
    const response = await axios.post(`https://event-managment-jade.vercel.app/api/v1/users/create-user`, informationUserData);
      
    
    if (response?.status === 200) {
       // Store email in a cookie
      Cookies.set('userEmail', email);
      toast.success(response?.data?.message);
      navigate('/')
   
    }
  } catch (error) {
    toast.error(error?.response?.data?.errorMessages[0]?.message);
   
  }
};
  return (
    <>

    {/* top navbar import */}
    <TopNavbar/>
    
    <section className="vh-100 mt-5 singUp">

    {/*<----==== routeing text contant =====---> */}
      <div className="my-2 d-flex justify-content-center mt-4 pb-3">
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
      <div className="col-md-5 col-lg-5 col-12 d-none d-md-flex ">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          className="img-fluid" alt="Sample image"/>
      </div>
      <div className="col-md-6 col-lg-6 col-12  offset-xl-1 px-4 ">


        <form onSubmit={SingupFromData} className="card p-5 ">
          <div className="d-block flex-row align-items-center justify-content-center justify-content-lg-start">
            <h3 className="ms-2 realway logo-text text-uppercase fs-3 text-center fw-bold event-discription">Sing Up</h3>
            <p className="lead fw-normal mb-0 me-3 text-center mb-4 event-title">with Email, Password</p>
          </div>

          

          {/* <!-- Email input --> */}
          <div className="form-outline mb-4">
                                <label className="form-label ms-2 mb-1 event-title fs-6" > Email Address</label>
            <input name="email" type="email" id="form3Example3" className="form-control form-control-lg event-discription"
              placeholder="valid email"  required/>

          </div>

          {/* <!-- Password input --> */}
          <div  className="form-outline mb-3">
              <label className="form-label ms-2 mb-1 event-title fs-6" > Create Password</label>
            <input name="password" type="password" id="form3Example4" className="form-control event-discription form-control-lg "
              placeholder="Create password"  required/>

          </div>

          <div className="d-flex justify-content-between align-items-center">
            {/* <!-- Checkbox --> */}
            <div className="form-check mb-0">
              <input className="form-check-input me-2" type="checkbox" defaultdefaultValue="" id="form2Example3" />
              <label className="form-check-label event-discription" >
                Remember me
              </label>
            </div>
              <p className="small  fw-bold mt-2 pt-1 mb-0 event-discription">Already account? <br />
              <Link to={'/login'} className="link-danger text-center">Login</Link>
              </p>
          </div>

          <div className="text-center text-lg-start mt-4 pt-2">
            <button type="submit" className="btn btn-primary event-discription  flex w-100  btn-block fa-lg gradient-custom-2 mb-3 py-2 login-btn "
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
