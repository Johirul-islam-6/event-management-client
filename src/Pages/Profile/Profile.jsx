import Cookies from "js-cookie"
import { toast } from "react-toastify"


export const Profile = () => {

    const userEmail = Cookies.get('userEmail')

  return (
    // user profile
    <div className="row d-flex justify-content-center align-items-center py-5">
      <div className="col-lg-4">
        <div className="card mb-4">
          <div className="card-body text-center">
            <img src="https://png.pngtree.com/png-vector/20191103/ourmid/pngtree-handsome-young-guy-avatar-cartoon-style-png-image_1947775.jpg" alt="avatar"
              className="rounded-circle img-fluid profile-image" />
              {/* style="width: 150px;"  */}
              
            <h5 className="my-3">Hi Friend</h5>
            <p className="text-muted mb-1">I`m Event Creator !</p>
            <p className="text-muted mb-4">Email : {userEmail}</p>
            <div className="d-flex justify-content-center mb-2">
              <button type="button" onClick={() => toast.success('Thank you Follow me')} className="btn btn-primary">Follow</button>
              <button type="button " onClick={() => toast.success('Panding')}  className="btn btn-outline-primary ms-1">Message</button>
            </div>
          </div>
        </div>
        </div>


    </div>
  )
}
