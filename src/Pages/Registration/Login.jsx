import { Link, useNavigate } from "react-router-dom"
import { TopNavbar } from "../../Components/Navbar/TopNavbar"

import { toast } from "react-toastify";
import axios from "axios";
import Cookies from "js-cookie";



export const Login = () => {
  const navigate = useNavigate()

  const singInFromData = async (event) => {
  event.preventDefault();
  const email = event?.target?.email?.value;
  const password = event?.target?.password?.value;

  const informationUserData = {
    email,
    password,
  };

  

  try {
   
      const response = await axios.post(`https://event-managment-jade.vercel.app/api/v1/users/login`, informationUserData);

    // console.log(response?.data?.data?.accessToken, "respon data")
    const accessToken = response?.data?.data?.accessToken
    if (response?.status === 200) {

       // Store email, accessToken, store in cookie.
      Cookies.set('userEmail', email);
      Cookies.set('accessToken', accessToken);


      toast.success('A user created successfully');
      navigate('/')
    }

  } catch (error) {
    toast.error(error?.response?.data?.errorMessages[0]?.message);
    // console.log(error?.response?.data?.errorMessages[0]?.message);
  }
};



  return (
    <>
    <TopNavbar/>
           {/*<----==== routeing text contant =====---> */}
    <div className="my-2 d-flex justify-content-center mt-4">
  <nav  aria-label="breadcrumb ">
  <ol className="breadcrumb">
    
    <li className="breadcrumb-item active event-heading-text text-uppercase fw-bold text-danger">
    <Link to={'/'}> Home</Link> 
    </li>

    <li className="breadcrumb-item active event-heading-text text-uppercase text-info" aria-current="page">login</li>
  </ol>
</nav>
     </div>
{/*<----==== routeing text contant end =====---> */}



 {/* <---========= sing up page design start =========---------> */}
<section className="h-100 gradient-form login-form" >
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-xl-10">
        <div className="card rounded-3 text-black">
          <div className="row g-0">
            <div className="col-lg-6">
              <div className="card-body p-md-5 mx-md-4">

                <div className="text-center">
                  <Link to={'/'} className="navbar-brand d-flex justify-content-center align-items-center">
                  <h3 className="ms-2 realway logo-text fw-bold event-discription text-uppercase">Login</h3>
        
              </Link>
               <p className="event-title">Please login to your account</p>
                </div>
           {/* --------input form----- */}
                <form onSubmit={singInFromData} className="mt-4">
                 

                  <div className="form-outline mb-4">
                    <label className="form-label ms-2 mb-1 event-title fs-6" > Email Address</label>
                    <input name="email" type="email" id="form2Example11" className="form-control py-3 fs-6 event-discription"
                      placeholder="email address"  required/>
                    
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label ms-2 mb-1 event-title fs-6 " > Current Password</label>
                    <input name="password" type="password"  placeholder="Enter password" id="form2Example22" className="event-discription form-control py-3 fs-6" required/>
                
                  </div>

                  <div className="text-center pt-1 mb-5 pb-1">
                    <button type='submit' className="btn btn-primary flex w-100  btn-block fa-lg gradient-custom-2 mb-3 login-btn event-discription" >Log
                      in</button>
                  </div>

                  <Link to={'/singup'} className="d-flex align-items-center text-decoration-none justify-content-center pb-4">
                    <p className="mb-0 me-2 event-discription">Dont have an account?</p>
                    <button type="button" className="btn btn-outline-danger event-discription">Create new</button>
                  </Link>

                </form>

              </div>
            </div>
            <div className="col-lg-6  align-items-center gradient-custom-2 d-none d-md-flex">
              <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                <h4 className="mb-4 event-discription">This is a Simple Event Management.</h4>
                <p className="small mb-0 fs-6 justify-content-center">Event management involves planning, organizing, and executing various gatherings, conferences, or celebrations to ensure they run smoothly. It includes coordinating logistics, selecting venues, arranging catering, managing schedules, and overseeing audio-visual setups. Skilled event managers anticipate potential issues, handle last-minute changes, and maintain clear communication with clients, vendors, and participants</p>
               <h5 className="text-end mt-3">Thank you</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}
