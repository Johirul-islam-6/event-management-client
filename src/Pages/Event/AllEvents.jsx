import { FaFileDownload,  FaFileUpload, FaLocationArrow, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import {LastNavbar } from '../../Components/Navbar/LastNavbar'
import { useEffect, useState } from "react";
import moment from 'moment-timezone';
import { Loding } from "../../Components/Loding/Loding";
import { Pagination } from "../../Components/Pagination/Pagination";
import CalanderView from '../../Components/React_Calender/CalendarView'


export const AllEvents = () => {

 // by defult display show 4 event state
  const [allEvent, setAllEvent] = useState();
  const [loding, setLoding] = useState(true);

  // searching input Base data loade input text
  const [receivedSearchingData, setReceivedSearchingData] = useState();

  //Event lish show the Display Searching , pagination etc start
  const [QueryEventData , setQueryEventData] = useState(allEvent)

  // =================== Pagination  functionality =============>
  // pagination state bydefult value -1
  const [receivedPaginationData, setReceivedPaginationData] = useState("1");

  //transfer the function send pagination.jsx page
  const updateReceivedPaginationData = newData => {
    setReceivedPaginationData(newData);
  };


   // ============= By Default 4 Event Display. Query Pagination get request start ==============>

   useEffect(() => {
    fetch(`https://event-managment-jade.vercel.app/api/v1/event/?page=${receivedPaginationData}&limit=4&sort=createdAt&sortOrder=desc`)
      .then(response => response.json())
      .then(data => {
        
        setAllEvent(data?.data); // Update the events state with fetched data
        setLoding(false)
      })
      .catch(error => {
        console.error("Error fetching events:", error);
      });
  }, [receivedPaginationData]);

  // ============= By Default 4 Event Display. Query Pagination get request end <================

  // ============= Searching functionality start =================>

  

 //transfer the function send LastNavber.jsx page
  const updateReceivedData = newData => {
    setReceivedSearchingData(newData);
  };
  // ================= Searching functionality End <====================


    // =============== Searching input field to get api request Start ============>
    // create extranal fetchData()
  async function fetchData() {
    setLoding(true)
  try {
    const response = await fetch(`https://event-managment-jade.vercel.app/api/v1/event/?searchTerm=${receivedSearchingData}&page=${receivedPaginationData}&limit=4`); // Replace with your API endpoint
    const eventsData = await response.json();
    setQueryEventData(eventsData); // Update state with fetched data
    
    setLoding(false)
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

  
   useEffect( () =>{
     // call extranal fetchingData() 
      fetchData()
   },[receivedSearchingData,receivedPaginationData]) // searching dependency

console.log('searching' , QueryEventData)
 // =============== Searching input field to get api request Start <============


 //  ============= RSVP Attendance Modal functionality  ============>

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



  return (
    <>
    {/* send up updateReceivedData() apply searchin data */}
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

  {/* ================> All Event Cards Designing Part  start ===============>  */}
 <div className="all-event-cards pt-5 ">
 <div className="row ">
 {/* if data loading then run loding */}
{loding ? <><Loding/> </> : null}

 
 {/*---------Conditon base Event Not Found | show display data ----------> */}
{ 
  QueryEventData?.data?.length > 0 ? (
   
    // all Card map () applay ----------->
     QueryEventData.data.map(event => (
           <>
 
 {/* ----------- col-number-1 ----------- */}
 <div key={event?._id} className="col-lg-6 md-lg-6 ">

   {/* card body information details */}
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
{/*<---------Conditon base Event Not Found | show display data End ---------- */}

 </div>
 </div>
          </div>


{/* ------------export to Pagination Components updateReceivedPaginationData() to get resive data  ---------- */}
     <Pagination onDataUpdate ={updateReceivedPaginationData}/>

     {/* ------------> Attendance Modal Open-------- */}

     {
      attendanceModal ? <>
        <div className="attendanceModal py-5 ">
          <div className="row bg-white  RSVP-modal-body p-md-3 p-1 mx-auto w-50 ">
            <div className="col-lg-12 d-flex justify-content-center">
              <div className="d-block">
                
             <CalanderView attendanceEvent={attendanceEvent} closeModal={bookingModalClose}/>
              </div>
            </div>
          </div>
        </div>
      
      </> : null
     }

     </section>

      {/* //=============== Parents section end ================> */}



    
    </>
  )
}
