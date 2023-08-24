import { FaFileDownload,  FaFileUpload, FaLocationArrow, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import {LastNavbar } from '../../Components/Navbar/LastNavbar'
import { useEffect, useState } from "react";
import moment from 'moment-timezone';
import { Loding } from "../../Components/Loding/Loding";
import { Pagination } from "../../Components/Pagination/Pagination";

export const AllEvents = () => {

  const [allEvent, setAllEvent] = useState();
  const [loding, setLoding] = useState(true);

  // Main Display event Data storate state. searching data, limit= event, page=event get all data to display 
  const [QueryEventData , setQueryEventData] = useState(allEvent)


  // =================== Pagination base event Display function =============>

  const [receivedPaginationData, setReceivedPaginationData] = useState("1");

  const updateReceivedPaginationData = newData => {
    setReceivedPaginationData(newData);
  };


   // ============= By Default display the event data start ================>

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

  // ============= By Default display the event data end <================

  // ========================= searching querys get to the display data start function ==========================>

  // --------------- this searching text store useState start -------------->
  const [receivedSearchingData, setReceivedSearchingData] = useState("");

  const updateReceivedData = newData => {
    setReceivedSearchingData(newData);
  };
  // --------------- this searching text store useState end <--------------


    //-------- extranal fetchingData function use -------
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

   // ------------- we use useEffect searching dependency  ---------------
   useEffect( () =>{

     // call extranal fetchingData function in use effect
      fetchData()
   },[receivedSearchingData,receivedPaginationData])


 // ================= searching querys get to the display data End functionlty  <==========================


  //  setLocat base Time set start  ==================>
    const createdAtMoment = moment(allEvent?.createdAt).tz('Asia/Dhaka'); // Replace 'Asia/Dhaka' with your desired time zone

  const formattedCreatedAt = createdAtMoment.format('MMMM Do YYYY, h:mm:ss a');

  // console.log(formattedCreatedAt)

 //  setLocat base Time set end  <==================



  return (
    <>
    {/* searching event components last navbar import & [ get resive input field value ]  =====> */}
    <LastNavbar onDataUpdate={updateReceivedData}/>

     {/* // Parents section start ===================> */}
          <section className="AllEvents py-4 mx-md-5 mx-2">
            <div className="Event-Management-body d-block justify-content-start ">

        {/* Leatest 4 Event List Body Nav Text section  ====================>   */}
            <section className="d-flex align-items-center overflow-hidden">
           
             <span><FaLocationArrow className="text-danger fs-2 me-3 "/></span>
            
            <span className="event-heading-border ">
              <h2 className="event-heading-text text-uppercase latest-event pt-2 ms-1">Latest events</h2>
            </span>
            <span className="event-heading-border">
            <h2  className="event-heading-text-all text-uppercase latest-event pt-2 ms-1">All </h2>
           </span>
            </section>
         {/*  Leatest 4 Event List section end <====================   */}

  {/* =======================> All Event Cards section start ===============>  */}
 <div className="all-event-cards pt-5 ">
 <div className="row ">

  
 {/* if data loade in server site then loading start */}
{loding ? <><Loding/> </> : null}

 
 {/*---------Conditon start event get data ----------> */}
{ 
  QueryEventData?.data?.length > 0 ? (
   
    // --============= map () all event ========
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
          <button type="button" className="px-md-5 px-3 py-2 rounded-2 event-title hover-zoom text-uppercase btn-RSVP ">RSVP</button>
        
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

{/* -----------------condition close <---------- */}



 </div>
 </div>
</div>
  {/* =======================> All Event Cards section end <===============  */}


{/* ------------import Pagination Components and get resive page number ---------- */}
 <Pagination onDataUpdate ={updateReceivedPaginationData}/>

</section>



    
    </>
  )
}
