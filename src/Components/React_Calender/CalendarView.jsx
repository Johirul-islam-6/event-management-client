/* eslint-disable react/prop-types */

import Cookies from "js-cookie";
import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PropTypes from 'prop-types';
import axios from "axios";

const CalendarView = ({closeModal, attendanceEvent}) => {

   const navigate = useNavigate()
  const userEmail = Cookies.get('userEmail');
  const [ EventTime, setEventTime] = useState()

  // date resive
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [bookingDate, setBookingDate] = useState(selectedDate.toDateString());
   setBookingDate()
  // You can replace this mock data with your actual event data
  const events = [
    { date: "2023-08-26", title: "Event 1" },
    { date: "2023-08-27", title: "Event 2" },
    // ... Add more events
  ];




  // user Booking information Object 

 
  

  // =================== RSVP Booking Api Request start ===================>

  const RSVPbooking = async (event) => {
    event.preventDefault()
    // if user checking
      if(!userEmail){
        toast.warning('please Login after booking event')
      return navigate('/login')
    }

 ///boking data
  const bookingInformaion = {
    eventId : attendanceEvent?.id,   
    userEmail,
    bookingDate,
    bookingTime : EventTime

  }

  console.log(bookingInformaion)

  // input value error handeling
   if(!bookingInformaion?.bookingDate){
     return toast.warning('select one date')
    }
    else if(!bookingInformaion?.bookingTime){
     return toast.warning('select Time slot ')
    }
    else if(userEmail === attendanceEvent?.email){
     return toast.warning('You are event creator. Don`t Allow Booking this event')
    }


    // fetching api post request---------->
     try {
      
      const response = await axios.post(`https://event-managment-jade.vercel.app/api/v1/event-booking/create`, bookingInformaion)
   
      if (response.status === 200) {
        toast.success('Booking successfully')
        closeModal()
      } 

    } catch (error) {
      console.error('Error:', error);
      toast.error(error?.response?.data?.errorMessages[0]?.message)
    }


  }


  return (
    <div className="pb-5">
      <div className="d-flex w-100 justify-content-center pt-2 pb-1 overflow-hidden">
        <button onClick={() => closeModal()} className="btn-close bg-danger p-2 "></button>
      </div>
      <h3 className="event-title pt-1 text-center">Event Booking Attendance</h3>
      <p className="event-title text-center fw-bolder text-success">User : {userEmail}</p>
      <p className="event-title pb-3 text-center  text-info">Event Creator : {attendanceEvent?.email}</p>
      <div className="calendar-container">
         <p className="event-title mt-2 ">only select one day : <span className="text-danger  roboto-navbar-text ">{attendanceEvent?.start_date} to {attendanceEvent?.end_date}</span></p>
        <Calendar
          onChange={setSelectedDate}
          defaultdefaultValue={selectedDate}
          tileContent={({ date }) => {
            const event = events.find(
             (event) => event.date === date.toISOString().split("T")[0]
            );
            return event ? <div className=""></div> : null;
          }}
        />
      </div>
      <div className="event-list">
        
        <h5 className="event-title mt-2 ">Events Booking Date : <span className="text-danger fw-bolder roboto-navbar-text fs-6">{selectedDate.toDateString()}</span></h5>
        <h5 className="event-title pb-2 ">Events Time is : <span onChange={(e) => setEventTime(e?.target?.value)} className="text-danger fw-bolder roboto-navbar-text fs-6">{EventTime}</span></h5>
        
      </div>
                 {/* booking slot Time */}
    <div className="row">
      <div className="col-lg-12">
                         <div className="form-group">
                           
                            <select  id="form_need" name="time" onChange={(e) => setEventTime(e?.target?.value)} className="form-control roboto-navbar-text py-2 py-2 event-input-text-color fs-7" required>
                                <option className="text-center"   selected disabled> ---- Select Event Time --- </option>
                                <option >10:00 A.M - 01:00 P.M</option>
                                <option >03:00 P.M - 06:00 P.M</option>
                                <option >8:00 A.M - 11:00 P.M</option>
                                
                            </select>
                            
                        </div>

                        

      </div>
      <div className="col-lg-12">
         <div className="d-flex justify-content-center my-4">
  <button onClick={RSVPbooking} type='submit' className="btn btn-success px-5 fs-6 fw-bolder py-2 w-100 text-event text-uppercase">confirm</button>
 </div>
      </div>
    </div>
    </div>  
  );
};

export default CalendarView;

CalendarView.propTypes = {
  onDataUpdate: PropTypes.func.isRequired
};
