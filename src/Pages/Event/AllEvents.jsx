import { FaFileDownload,  FaFileUpload, FaLocationArrow, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import {LastNavbar } from '../../Components/Navbar/LastNavbar'

export const AllEvents = () => {
  return (
    <>
    {/* last navbar searching event components*/}
 <LastNavbar/>

 <div className="AllEvents pt-4">

            <div className="Event-Management-body d-block justify-content-start ">

        {/* ======================= Leatest Event List Body Nav Text section  ====================   */}
            <section className="d-flex align-items-center overflow-hidden">
              {/* <img className="event-heding-image img-fluid" src="https://illustoon.com/photo/dl/7722.png" alt="" /> */}
             <span><FaLocationArrow className="text-danger fs-2 me-3 "/></span>
            
            <span className="event-heading-border ">
              <h2 className="event-heading-text text-uppercase latest-event pt-2 ms-1">Latest events</h2>
            </span>
            <span className="event-heading-border">
            <h2 className="event-heading-text-all text-uppercase latest-event pt-2 ms-1">All </h2>
           </span>
            </section>
         {/* ======================= Leatest Event List section end ====================   */}


   {/* ##################### NEW Section */}


  {/* =======================> All Event Cards Body section start ===============>  */}
 <section className="all-event-cards pt-5 ">

  {/* // row event cards */}
 <div className="row justify-content-center">

  {/* col-number-1 */}
   <div className="col-lg-6 md-lg-6">

   {/* card body information details */}
  <div className="card mb-3">

  <div className="row g-0">

    <div className="col-md-4">

      <img
        src="https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.webp"
        alt="Trendy Pants and Shoes"
        className="img-fluid rounded-start card-image"
      />

    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title event-title ">The World’s Greatest Tribute Bands on AXS TV</h5>
        
        <div className="loctaion-time py-2">
          <span className="d-flex align-items-center  date-titele"> <FaFileUpload/> <span className="text-color ms-2 ">08/23/2016 at 20:00 - 22:00 </span> </span>
        <span className="d-flex align-items-center  date-titele "> <FaFileDownload/> <span className="text-color ms-2">08/23/2016 at 20:00 - 22:00 </span> </span>
        <span className="d-flex align-items-center  date-titele text-danger mt-1"> <FaMapMarkerAlt/> <span className="text-color ms-2">Manhattan / New York</span> </span>
        </div>
    
        <p className="free-ticket event-title py-t"> Tickets from $ free</p>
        <p className="card-text event-discription ">
          TFusce pellentesque velvitae tincidunt egestas. Pellentesque habitant morbi..
        </p>
        <p className="card-text">
          <small className="text-muted">Last updated 3 mins ago</small>
        </p>
        <div className="d-flex justify-content-between">
          <button type="button" className="px-5 py-2 rounded-2 event-title hover-zoom text-uppercase btn-RSVP ">RSVP</button>
         <Link to={`/event/01`}>
          <button type="button" className=" px-5 py-2 rounded-2 event-title text-uppercase btn-view">View</button>
         </Link>
          
        </div>
      </div>
    </div>
  </div>
</div>
   </div>
  {/* col-number-1 */}
   <div className="col-lg-6 md-lg-6">

  <div className="card mb-3">

  <div className="row g-0">

    <div className="col-md-4">

      <img
        src="https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.webp"
        alt="Trendy Pants and Shoes"
        className="img-fluid rounded-start card-image"
      />

    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title event-title ">The World’s Greatest Tribute Bands on AXS TV</h5>
        
        <div className="loctaion-time py-2">
          <span className="d-flex align-items-center  date-titele"> <FaFileUpload/> <span className="text-color ms-2 ">08/23/2016 at 20:00 - 22:00 </span> </span>
        <span className="d-flex align-items-center  date-titele "> <FaFileDownload/> <span className="text-color ms-2">08/23/2016 at 20:00 - 22:00 </span> </span>
        <span className="d-flex align-items-center  date-titele text-danger mt-1"> <FaMapMarkerAlt/> <span className="text-color ms-2">Manhattan / New York</span> </span>
        </div>
    
        <p className="free-ticket event-title py-t"> Tickets from $ free</p>
        <p className="card-text event-discription ">
          TFusce pellentesque velvitae tincidunt egestas. Pellentesque habitant morbi..
        </p>
        <p className="card-text">
          <small className="text-muted">Last updated 3 mins ago</small>
        </p>
        <div className="d-flex justify-content-between">
          <button type="button" className="px-5 py-2 rounded-2 event-title hover-zoom text-uppercase btn-RSVP ">RSVP</button>
          <button type="button" className=" px-5 py-2 rounded-2 event-title text-uppercase btn-view">View</button>
          
        </div>
      </div>
    </div>
  </div>
</div>
   </div>

 
              
 </div>
  {/* // row event cards */}
 <div className="row justify-content-center mt-2">

  {/* col-number-1 */}
   <div className="col-lg-6 md-lg-6">

  <div className="card mb-3">

  <div className="row g-0">

    <div className="col-md-4">

      <img
        src="https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.webp"
        alt="Trendy Pants and Shoes"
        className="img-fluid rounded-start card-image"
      />

    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title event-title ">The World’s Greatest Tribute Bands on AXS TV</h5>
        
        <div className="loctaion-time py-2">
          <span className="d-flex align-items-center  date-titele"> <FaFileUpload/> <span className="text-color ms-2 ">08/23/2016 at 20:00 - 22:00 </span> </span>
        <span className="d-flex align-items-center  date-titele "> <FaFileDownload/> <span className="text-color ms-2">08/23/2016 at 20:00 - 22:00 </span> </span>
        <span className="d-flex align-items-center  date-titele text-danger mt-1"> <FaMapMarkerAlt/> <span className="text-color ms-2">Manhattan / New York</span> </span>
        </div>
    
        <p className="free-ticket event-title py-t"> Tickets from $ free</p>
        <p className="card-text event-discription ">
          TFusce pellentesque velvitae tincidunt egestas. Pellentesque habitant morbi..
        </p>
        <p className="card-text">
          <small className="text-muted">Last updated 3 mins ago</small>
        </p>
        <div className="d-flex justify-content-between">
          <button type="button" className="px-5 py-2 rounded-2 event-title hover-zoom text-uppercase btn-RSVP ">RSVP</button>
          <button type="button" className=" px-5 py-2 rounded-2 event-title text-uppercase btn-view">View</button>
          
        </div>
      </div>
    </div>
  </div>
</div>
   </div>
  {/* col-number-1 */}
   <div className="col-lg-6 md-lg-6">

  <div className="card mb-3">

  <div className="row g-0">

    <div className="col-md-4">

      <img
        src="https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.webp"
        alt="Trendy Pants and Shoes"
        className="img-fluid rounded-start card-image"
      />

    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title event-title ">The World’s Greatest Tribute Bands on AXS TV</h5>
        
        <div className="loctaion-time py-2">
          <span className="d-flex align-items-center  date-titele"> <FaFileUpload/> <span className="text-color ms-2 ">08/23/2016 at 20:00 - 22:00 </span> </span>
        <span className="d-flex align-items-center  date-titele "> <FaFileDownload/> <span className="text-color ms-2">08/23/2016 at 20:00 - 22:00 </span> </span>
        <span className="d-flex align-items-center  date-titele text-danger mt-1"> <FaMapMarkerAlt/> <span className="text-color ms-2">Manhattan / New York</span> </span>
        </div>
    
        <p className="free-ticket event-title py-t"> Tickets from $ free</p>
        <p className="card-text event-discription ">
          TFusce pellentesque velvitae tincidunt egestas. Pellentesque habitant morbi..
        </p>
        <p className="card-text">
          <small className="text-muted">Last updated 3 mins ago</small>
        </p>
        <div className="d-flex justify-content-between">
          <button type="button" className="px-5 py-2 rounded-2 event-title hover-zoom text-uppercase btn-RSVP ">RSVP</button>
          <button type="button" className=" px-5 py-2 rounded-2 event-title text-uppercase btn-view">View</button>
          
        </div>
      </div>
    </div>
  </div>
</div>
   </div>

 
              
 </div>

   
</section>
          </div>
          </div>



    
    </>
  )
}
