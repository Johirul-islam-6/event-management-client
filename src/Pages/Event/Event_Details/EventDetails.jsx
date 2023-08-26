import axios from "axios";
import { useEffect, useState } from "react";
import { FaFileDownload, FaFileUpload, FaMapMarkerAlt } from "react-icons/fa"
import {  Link, useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify";
import { Loding } from "../../../Components/Loding/Loding";
import { EditeEvent } from "../../../Components/Edite_Event/EditeEvent";
import Cookies from "js-cookie";
import { FacebookShareButton, LineShareButton, TwitterShareButton } from "react-share";



export const EventDetails = () => {

  const {id} = useParams();
  const navigate = useNavigate();

  const [ singelEvent, setSingelEvent] = useState();
  const [loding, setLoding] = useState(true)

  const userEmail = Cookies.get('userEmail')

   //checking valid Event creator email !== Local user Email 
    const userParmition = singelEvent?.email === userEmail;
    console.log(userParmition)

 // <-----========== Get New sinel event api request ==========------>
   useEffect(() => {
    fetch(`https://event-managment-jade.vercel.app/api/v1/event/${id}`)
      .then(response => response.json())
      .then(data => {
        setSingelEvent(data?.data); 
        setLoding(false)
        
      })
      .catch(error => {
        console.error("Error fetching events:", error?.message);
      });
  }, [id]);

 // <-----========== Get All Booking User request showing event booking member ==========------>
 const [eventbookingUser, setEventbookingUser] = useState()
   useEffect(() => {
    fetch(`https://event-managment-jade.vercel.app/api/v1/event-booking/${id}`)
      .then(response => response.json())
      .then(data => {
        setEventbookingUser(data?.data); 
        // setLoding(false)
        
      })
      .catch(error => {
        toast.error(error?.response?.data?.errorMessages[0]?.message)
      });
  }, [id]);




  // <------========= Delete singel Event api request start =======-------->

  const eventDelete =async (singelEvent) => {

    const {id, email} =singelEvent;

    //checking valid Event creator email !== Local user Email 
    const result = email === userEmail

    if(!result){
      return toast.error('you are not this event creator. So the event will not be deleted !')
    }

   try {
     
      const response = await axios.delete(`https://event-managment-jade.vercel.app/api/v1/event/${id}`);
      // Handle success, update state, or perform any necessary actions
            toast.success(response.data?.message)
             navigate('/')
  
    } catch (error) {
      // Handle error, display error message, etc.
      toast.error('Error : not deleted event  !', error);
    } 

  }

 // <------========= Delete singel Event api request end =======-------->

//  ============= Modal Edite Event Information start ===================>
 //optn modal
  const [modal ,setModal] = useState(false)
  const EditeEventInformation =() =>{
    setModal(true)
  }


  // close modal
  // const [closeModal ,setcloseModal] = useState();

  const CloseModal =(data) =>{
    setModal(data)
  }


  // Socal Media share

  const shareUrl = `https://event-management-client.vercel.app/${singelEvent?.id}`
  const information = {
    image : singelEvent?.image,
    titele : singelEvent?.title,
  }
// end

  return (
    <>
     {/* if data loade in server site then loading start */}
        {loding ? <><Loding/> </> : null}


    <div className="Event-Details-Page mx-md-5 mx-0">
       {/*<----==== routeing text contant =====---> */}
    <div className="my-3 ">
  <nav  aria-label="breadcrumb ">
  <ol className="breadcrumb">
    <li className="breadcrumb-item active event-heading-text text-uppercase fw-bold text-danger">
      Home
    </li>
    <li className="breadcrumb-item active event-heading-text text-uppercase fw-bold text-danger">
      Event
    </li>
    <li className="breadcrumb-item active event-heading-text text-uppercase text-info" aria-current="page">{id}</li>
  </ol>
</nav>
     </div>

{/*<----==== route text contant end =====---> */}


      <div className="card p-5 container-fluid ">
        <div className="row ">
          <div className=" col-md-5 col-lg-5 col-12">
            <img
        src={singelEvent?.image}
        alt="Trendy Pants and Shoes"
        className="img-fluid rounded-start details-card-image w-md-100 details-event-image"
      />
          </div>
          <div className="col-md-7 col-lg-7 col-12">
                   <div className="card-body">
        <h5 className="card-title event-title ">{singelEvent?.title}</h5>
        <p className=" event-title event-cretor  ">Event Creator - {singelEvent?.email}</p>
        
        <div className="loctaion-time py-2">
          <span className="d-flex align-items-center  date-titele"> <FaFileUpload/> <span className="text-color ms-2 ">{singelEvent?.start_date} at 10:00 A.M </span> </span>
        <span className="d-flex align-items-center  date-titele "> <FaFileDownload/> <span className="text-color ms-2"> {singelEvent?.end_date} at  08:00 P.M</span> </span>
        <span className="d-flex align-items-center  date-titele text-danger mt-1"> <FaMapMarkerAlt/> <span className="text-color ms-2">{singelEvent?.location}</span> </span>
        </div>
    
        <p className="free-ticket event-title py-t"> Tickets from $ free</p>
        <p className="card-text event-discription ">
        {singelEvent?.description}
        </p>
        <div className="d">
          <h6 className="text-uppercase fs-7 fw-bold latest-event ">Event attendees : <span className="text-danger">{eventbookingUser?.length ? eventbookingUser?.length : "0"} </span> Member <Link className="text-decoration-none" to={`/booking-member/${singelEvent?.id}`}><span id='show' className="ms-1 show">show </span></Link> </h6>
        </div>
     
<div className="d-flex d-md-flex justify-content-between align-items-center">
      {/* socal share */}
        <div>
      <p className="event-title event-cretor mt-2 px-2 text-white fw-bold bg-success">share social media</p>
      <FacebookShareButton url={shareUrl} quote={information}>
       <a className="btn btn-outline-light btn-floating m-1 bg-primary" href="#!" role="button"
        ><i className="fab fa-facebook-f"></i></a>
      </FacebookShareButton>
      <TwitterShareButton url={shareUrl} title={information}>
         <a className="btn btn-outline-light btn-floating m-1 bg-primary" href="#!" role="button"
        ><i className="fab fa-twitter"></i></a>
      </TwitterShareButton>
      <LineShareButton url={shareUrl} title={information}>
         <a className="btn btn-outline-light btn-floating m-1 bg-primary" href="#!" role="button"
        ><i className="fab fa-linkedin-in"></i></a>
      </LineShareButton>
    </div>

       {userParmition ? <>
         <div className="d-block gap-1 mt-5 ">
          <button onClick={EditeEventInformation} type="button"  className="btn fw-bold rounded-2 event-title hover-zoom text-uppercase bg-success text-white fw-bold">Edite</button>
          
          <button onClick={() => eventDelete(singelEvent)} type="button" className="btn fw-bold rounded-2 event-title hover-zoom text-uppercase bg-danger text-white fw-bold ms-2">Delete</button>

         </div>
       </> : <>
         <div className="mt-5">  <button onClick={() => toast.success('Liked')} type="button" className="btn fw-bold rounded-2 event-title hover-zoom text-uppercase bg-warning text-white fw-bold ms-2">Like</button> </div>
       </>}
         </div>
        
      </div>
          </div>
        </div>
      </div>



   {/*======================= A user Edite event information ==================== */}

          {
            modal  && <>
            <div className="modal-open-information container m-md-5">
              <div className="block m-md-5 py-3">
                <EditeEvent CloseModal={CloseModal} singelEvent={singelEvent}/>
              </div>
            </div>
            
            </>
          }
 





    </div>
    
    </>
  )
}
