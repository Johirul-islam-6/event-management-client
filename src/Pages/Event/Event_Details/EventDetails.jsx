import axios from "axios";
import { useEffect, useState } from "react";
import { FaFileDownload, FaFileUpload, FaMapMarkerAlt } from "react-icons/fa"
import {  useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify";
import { Loding } from "../../../Components/Loding/Loding";
import { EditeEvent } from "../../../Components/Edite_Event/EditeEvent";



export const EventDetails = () => {

  const {id} = useParams();
  const navigate = useNavigate();

  const [ singelEvent, setSingelEvent] = useState();
  const [loding, setLoding] = useState(true)




  // const userEmail = 'rasel1@gmil.com'; 


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


  // <------========= Delete singel Event api request start =======-------->

  const eventDelete =async (singelEvent) => {

    const {id, email} =singelEvent;
       console.log(email)
        //checking valid Event creator email === user Email function
    // const result = email !== userEmail

    // if(result){
    //   return toast.error('you are not this event creator. So the event will not be deleted !')
    // }else if(!result){
    //  return console.log('continues..')
    // }

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

//  ============= Modal EditeEventInformation start ===================>
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

  return (
    <>
     {/* if data loade in server site then loading start */}
        {loding ? <><Loding/> </> : null}


    <div className="Event-Details-Page mx-md-5 mx-1">
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
        className="img-fluid rounded-start details-card-image w-md-100"
      />
          </div>
          <div className="col-md-7 col-lg-7 col-12">
                   <div className="card-body">
        <h5 className="card-title event-title ">{singelEvent?.title}</h5>
        
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
          <h5 className="text-uppercase ">attendees list : 31 Membrs </h5>
        </div>
     

         <div className="d-block d-md-flex justify-content-end ">
        
         <button onClick={EditeEventInformation} type="button"  className="px-5 py-2 fw-bold rounded-2 event-title hover-zoom text-uppercase bg-success text-white fw-bold">Edite</button>
        
         
          <button onClick={() => eventDelete(singelEvent)} type="button" className=" px-5 fw-bold py-2 rounded-2 ms-md-2 my-md-0 my-2 event-title text-uppercase bg-danger text-white fw-bold">Delete</button>

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
