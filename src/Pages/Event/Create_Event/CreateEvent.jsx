import axios from "axios"
import Cookies from "js-cookie"
import { useState } from "react"
// import CalendarView from "../../../Components/React_Calender/CalendarView"
import Datepicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { FaCalendarAlt } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"


export const CreateEvent = () => {

    // get user in cookies
  const  userEmail = Cookies.get('userEmail')

 const [selectDate , setSelectedDate] = useState(null);
 const [selectEndDate , setSelectedEndDate] = useState(null);

 const navigate = useNavigate()


   const submitData = async (event) => {

    event.preventDefault()
    // console.log(event.target.title.value , "fsd" , cetagory)

    // input field value resive
    const inputForm = event.target;
    const cetagory = inputForm.cetagory?.value;
    const title = inputForm.title?.value;
    const location = inputForm.location?.value;
    const start_date = inputForm.start_date?.value;
    const end_date = inputForm.end_date?.value;
    const image = inputForm.image?.value;
    const email = inputForm.email?.value;
    const description = inputForm.description?.value;

 

    const EventInputData = {
        cetagory,
        title,
        location,
        start_date,
        end_date,
        image,
        email,
        description

    }



     try {
      
      const response = await axios.post(`https://event-managment-jade.vercel.app/api/v1/event/create-event`, EventInputData)
   
      if (response.status === 200) {
        toast.success('event created successfully')
        navigate('/')
      } 

    } catch (error) {
      console.error('Error:', error);
      toast.error('event not created successfully', error?.message)
    }

    };


 
 




  return (
    <>

   <div className="container Create-Event-Page pb-5">
        <div className=" text-center mt-5 ">

            <h1 className="latest-event fw-bold" >A User Created Event</h1>
                
            
        </div>

    
    <div className="row ">
      <div className="col-lg-7 mx-auto">
        <div className="card mt-2 mx-auto p-4 bg-light">
            <div className="card-body bg-light">
       
            <div className = "container">

   {/* ---------======== event from input field start ==========---------- */}


        <form onSubmit={submitData}>

            <div className="controls">

                 {/*--- 1st row cetagory, title---*/}
                <div className="row mt-4">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="event-discription fs-6 ms-2 mb-1 ">Event cetagory *</label>
                            <select id="form_need" name="cetagory" className="form-control event-discription py-2 py-2 event-input-text-color fs-7" required>
                                <option   selected disabled> --Select cetagory-- </option>
                                <option >educational</option>
                                <option >music and Concerts</option>
                                <option >conferences</option>
                                <option >sports and fitness</option>
                                <option >other..</option>
                            </select>
                            
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                             <label className="event-discription fs-6 ms-2 mb-1">Event title *</label>
                            <input id="title" type="text" name="title" className="form-control event-discription py-2 py-2 event-input-text-color fs-7" placeholder=" Event title *" required/>
                            </div>
                    </div>
                </div>
                
                {/* ----2 row---- loctaion, user email */}
                <div className="row mt-4">
                    <div className="col-md-6">
                        <div className="form-group">
                              <label className="event-discription fs-6 ms-2 mb-1">Event Location *</label>
                            <input id="location" type="text" name="location" className="form-control event-discription py-2 py-2 event-input-text-color fs-7" placeholder="select event location *" required/>
                            
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                             <label className="event-discription fs-6 ms-2 mb-1">Event creator *</label>
                            <input disabled defaultValue={userEmail} id="email" type="text" name="email" className="form-control" />
                              </div>
                    </div>
                </div>

                {/* ----3 row event photo link---- */}
             
                <div className="row mt-4">
                    <div className="col-md-12">
                        <div className="form-group">
                               <label className="event-discription fs-6 ms-2 mb-1">Event Photo *</label>
                            <input id="photo" type="text" name="image" className="form-control event-discription py-2 py-2 event-input-text-color fs-7" placeholder="event photo online link *" required/>
                            
                        </div>
                    </div>
                    
                </div>
                {/* ----4 row----  start_date, end_date*/}
                <div className="row mt-4">
                    <div className="col-md-6">
                        <div className="form-group  ">
                               <label className="event-discription fs-6 ms-2 mb-1">Event Start Date *</label>
                            <br />  
                            <div className="d-flex position-relative">
                          <Datepicker id="start_date"  name="start_date" type='date'   selected={selectDate} onChange={date => setSelectedDate(date)} 
                            dateFormat={'yyyy/MM/dd'} 
                            minDate={new Date()}
                            filterDate={date=>date.getDay()!=5}
                            showYearDropdown
                           
                            className="form-control event-discription py-2 py-2 event-input-text-color fs-7" required /> 
                          <FaCalendarAlt className="calander_positioning text-success position-absolute "/> 

                            </div>
                            
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group  ">
                             <label className="event-discription fs-6 ms-2 mb-1">Event End Date *</label>
                            <br />  
                            <div className="d-flex position-relative">
                          <Datepicker id="end_date"  name="end_date" type='date'  selected={selectEndDate} onChange={date => setSelectedEndDate(date)} 
                            dateFormat={'dd/MM/yyyy'} 
                            minDate={new Date()}
                            filterDate={date=>date.getDay()!=5}
                            showYearDropdown
                           
                            className="form-control event-discription py-2 py-2 event-input-text-color fs-7" required /> 
                          <FaCalendarAlt className="calander_positioning text-success position-absolute "/> 

                            </div>
                            
                        </div>
                    </div>
                    
                </div>
                {/* ------5 row discription --- */}
                <div className="row mt-4">
                    <div className="col-md-12">
                        <div className="form-group">
                             <label className="event-discription fs-6 ms-2 mb-2 ">Event Description *</label>
                            <textarea id="description" name="description" className="form-control event-discription" placeholder="Write your event description here." rows="4" required></textarea>
                            </div>

                        </div>


                    <div className="col-md-12 mt-4 d-flex justify-content-center">
                        
                        <input onSubmit={submitData} type="submit" className="btn btn-success btn-send  py-2 fs-6 btn-block latest-event fw-bold" defaultdefaultValue="Send Data" />
                    
                </div>
          
                </div>
         </div>
         </form>
        </div>
            </div>


    </div>
       

    </div>
    

   </div>
  </div>

    </>
  )
}
