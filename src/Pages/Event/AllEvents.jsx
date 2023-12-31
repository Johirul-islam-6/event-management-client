import { FaFileDownload,  FaFileUpload, FaLocationArrow, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import {LastNavbar } from '../../Components/Navbar/LastNavbar'
import { useEffect, useState } from "react";
import { Loding } from "../../Components/Loding/Loding";
import { Pagination } from "../../Components/Pagination/Pagination";
import CalanderView from '../../Components/React_Calender/CalendarView'
import { toast } from "react-toastify";


export const AllEvents = () => {
 
     // Loading state
  const [loding, setLoding] = useState(true);
   // pagination state bydefult value -1
  const [receivedPaginationData, setReceivedPaginationData] = useState();
   // seargin input fild value resive state. 
  const [receivedSearchingData, setReceivedSearchingData] = useState();

  //All Events store this state. 
  const [QueryEventData , setQueryEventData] = useState()
  


  // ===================> Pagination Event Lisht Api request functionality start ==================>

  //transfer the function send pagination.jsx page
  const updateReceivedPaginationData = newData => {
    setReceivedPaginationData(newData);
  };

   useEffect(() => {

   //condition pagination searchin data null
   if(receivedSearchingData){
    setLoding(false)
    return  
    }
    //fetchin pagination 
    fetch(`https://event-managment-jade.vercel.app/api/v1/event/?page=${receivedPaginationData}&limit=4&sort=createdAt&sortOrder=desc`)
      .then(response => response.json())
      .then(data => {
        setQueryEventData(data)
        setLoding(false)
      })
      .catch(error => {
        console.log(error);
        toast.error(error?.response?.data?.errorMessages[0]?.message)
      });
  }, [receivedPaginationData,receivedSearchingData]);

  // <=================== Pagination Event Lisht Api request functionality end <==================




  // =============> Searching Query Event Lisht data functionality  start =================>

 //get input resive searching value in lastNavbar.jsx file
  const updateReceivedData = newData => {
    setReceivedSearchingData(newData);
  };

 // searching useEffect
   useEffect(  () =>{
      
      setLoding(true)
      //condition
    if(!receivedSearchingData){
      return 
    }
     
     // if page number 1 < 2
     if(receivedPaginationData > 1){
      toast.warning( `Current Page is - ${receivedPaginationData} [ Change the page ! ]`)
          setTimeout(() => {
        toast.success('please select page - 1');
      
       }, 1000);
     }

    //fetching 
     fetch(`https://event-managment-jade.vercel.app/api/v1/event/?searchTerm=${receivedSearchingData}&page=${receivedPaginationData}&limit=4`)
     .then(res => res.json())
     .then(data => {
      setQueryEventData(data)
      setLoding(false)
     }).catch(error => {
        console.log(error);
        toast.error(error?.response?.data?.errorMessages[0]?.message)
      });
     

   },[receivedSearchingData,receivedPaginationData]) // searching dependency


  // =============> Searching Query Event Lisht data functionality  End =================>



 //  =================> Modal Event Booking  RSVP  Attendance  functionality start  =============>

 const [attendanceEvent, setAttendanceEvent] = useState();
 const [attendanceModal, setAttendanceModal] = useState(false)

 const RSVP = (event) => {

  
  setAttendanceEvent(event)
  setAttendanceModal(true);

 }

 // modal close function function
 const bookingModalClose =() =>{
   setAttendanceModal(false)
 }

//  =================> Modal Booking  RSVP  Attendance  functionality start  =============>


  return (
    <>
    {/* Top Searching component  */}
    <LastNavbar onDataUpdate={updateReceivedData}/>

     {/* //=============== Parents section start ================> */}
          <section className="AllEvents py-4 mx-md-5 mx-2">
            <div className="Event-Management-body d-block justify-content-start ">

        {/*----> Leatest text content div start */}
            <section className="d-flex align-items-center overflow-hidden">
           
             <span><FaLocationArrow className="text-danger fs-2 me-3 "/></span>
            
            <span className="event-heading-border ">
              <h2 className="event-heading-text text-uppercase latest-event pt-2 ms-1">Latest events</h2>
            </span>
            <span className="event-heading-border">
            <h2  className="event-heading-text-all text-uppercase latest-event pt-2 ms-1">All </h2>
           </span>
            </section>
         {/* <---- Leatest text content div end */}


  {/* ================> All Event Cards Design start  ==================>  */}

 <div className="all-event-cards pt-5 ">
 <div className="row ">

 {/* Loader is Loding */}
{loding ? <><Loding/> </> : null}

 
 {/*---------Conditon base Event Not Found  ----------> */}
{ 
  QueryEventData?.data?.length > 0 ? (
   
    // all event list  map ()  --------->
     QueryEventData?.data?.map(event => (
           <>
 
 {/* ----------- col-number-1 ----------- */}
 <div key={event?._id} className="col-lg-6 md-lg-6 ">

   {/* even card body information  */}
      <div className="card mb-3">

  <div className="row g-0 align-items-center">

    <div className="col-md-4">

      <img
        src={event?.image}
        alt="Trendy Pants and Shoes"
        className="img-fluid rounded-start card-image"
      />

    </div>
    <div className="col-md-8 ps-md-4">
      <div className="card-body">
        <h5 className="card-title event-title "> {event?.title?.slice(0,42)}..</h5>
         <p className=" event-title event-cretor ms-2">Event Creator - {event?.email?.slice(0,30)}</p>
        <div className="loctaion-time ">
          <span className="d-flex align-items-center  date-titele"> <FaFileUpload/> <span className="text-color ms-2 ">{event?.start_date} </span> </span>
        <span className="d-flex align-items-center  date-titele mt-1 "> <FaFileDownload/> <span className="text-color ms-2">{event?.end_date} at 20:00 - 22:00 </span> </span>
        <span className="d-flex align-items-center  date-titele text-danger mt-1"> <FaMapMarkerAlt/> <span className="text-color ms-2">{event?.location}</span> </span>
        </div>
    
        <p className="free-ticket event-title pt-2"> Tickets from $ free</p>
        <p className="card-text event-discription ">
          {event?.description?.slice(0, 85)} More...
        </p>
        
        <div className="d-flex justify-content-between">
          <button onClick={() => RSVP(event)} type="button" className="px-md-5 px-3 py-2 rounded-2 event-title hover-zoom text-uppercase btn-RSVP ">RSVP</button>
        
         <Link to={`/event/${event?._id}`}>
          <button type="button" className=" px-md-5 px-3 py-2 rounded-2 event-title text-uppercase btn-view">View</button>
         </Link>
       
        </div>
      </div>
    </div>
  </div>
 </div>
            
 </div>
          
          </>  
    ))

  ) : <div className="not-abailable-event"> <h1 className="text-uppercase pb-5 mt-5 text-center">Not available Event !</h1></div>
  
}
{/*<--------- Conditon base Event Not Found  End ---------- */}

 </div>
 </div>

   {/* <================ All Event Cards Design end  <==================  */}
   
          </div>


{/* =========== Export & Import data in Pagination page ===========================  */}
     <Pagination onDataUpdate ={updateReceivedPaginationData}/>



     {/* ------------> RSVP btn Insite Modal component Design -------- */}

     {
      attendanceModal ? <>
        <div className="attendanceModal py-5 ">
          <div className="row bg-white  RSVP-modal-body p-md-3 p-1 mx-auto w-50 ">
            <div className="col-lg-12 d-flex justify-content-center">
              <div className="d-block">
                {/* =========== Export & Import data in Calander page ===========================  */}
             <CalanderView attendanceEvent={attendanceEvent} closeModal={bookingModalClose}/>
              </div>
            </div>
          </div>
        </div>
      
      </> : null
     }

      {/* ------------> RSVP Modal Open Design end -------- */}

     </section>

  
    
    </>
  )
}
