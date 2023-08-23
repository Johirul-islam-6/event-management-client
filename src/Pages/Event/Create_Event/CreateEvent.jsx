import { useState } from "react"
// import CalendarView from "../../../Components/React_Calender/CalendarView"
import Datepicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { FaCalendarAlt } from "react-icons/fa"
import { toast } from "react-toastify"


export const CreateEvent = () => {

 const [selectDate , setSelectedDate] = useState(null);
 const [selectEndDate , setSelectedEndDate] = useState(null);
 


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

 

    const EventInputData = {
        cetagory,
        title,
        location,
        start_date,
        end_date,
        image,
        email

    }

console.log(EventInputData)

     try {
      const response = await fetch(`http://localhost:5000/v1/event/create-event/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(EventInputData),
         mode: 'no-cors' // Temporarily set to 'no-cors'
      });
     console.log("first")
      if (response.ok) {
        toast.success('user created successfully')
        
      } else {
        console.error('Error sending event data');
      }

    } catch (error) {
      console.error('Error:', error);
    }

    };


 
 




  return (
    <>

   <div className="container Create-Event-Page pb-5">
        <div className=" text-center mt-5 ">

            <h1 >A User Created Event</h1>
                
            
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
                            <label >event cetagory *</label>
                            <select id="form_need" name="cetagory" className="form-control py-2" required="required" data-error="Please specify your need.">
                                <option value="" selected disabled> --Select cetagory-- </option>
                                <option >educational</option>
                                <option >music and Concerts</option>
                                <option >conferences</option>
                                <option >sports and fitness</option>
                                <option >other</option>
                            </select>
                            
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label >event title *</label>
                            <input id="title" type="text" name="title" className="form-control py-2" placeholder=" event title *" required/>
                            </div>
                    </div>
                </div>
                {/* ----2 row----  start_date, end_date*/}
                <div className="row mt-4">
                    <div className="col-md-6">
                        <div className="form-group  ">
                            <label >start date *</label>
                            <br />  
                            <div className="d-flex position-relative">
                          <Datepicker id="start_date"  name="start_date" type='date'   selected={selectDate} onChange={date => setSelectedDate(date)} 
                            dateFormat={'dd/MM/yyyy'} 
                            minDate={new Date()}
                            filterDate={date=>date.getDay()!=5}
                            showYearDropdown
                           
                            className="form-control py-2" required /> 
                          <FaCalendarAlt className="calander_positioning text-success position-absolute "/> 

                            </div>
                            
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group  ">
                            <label >end date *</label>
                            <br />  
                            <div className="d-flex position-relative">
                          <Datepicker id="end_date"  name="end_date" type='date'  selected={selectEndDate} onChange={date => setSelectedEndDate(date)} 
                            dateFormat={'dd/MM/yyyy'} 
                            minDate={new Date()}
                            filterDate={date=>date.getDay()!=5}
                            showYearDropdown
                           
                            className="form-control py-2" required /> 
                          <FaCalendarAlt className="calander_positioning text-success position-absolute "/> 

                            </div>
                            
                        </div>
                    </div>
                    
                </div>
                {/* ----3 row---- loctaion, user email */}
                <div className="row mt-4">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label >Location  *</label>
                            <input id="location" type="text" name="location" className="form-control py-2" placeholder="select your location *" required/>
                            
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label >email time*</label>
                            <input disabled value={'rasel@gmil.com'} id="email" type="text" name="email" className="form-control" />
                              </div>
                    </div>
                </div>

                {/* ----4 row event photo link---- */}
             
                <div className="row mt-4">
                    <div className="col-md-12">
                        <div className="form-group">
                            <label>event photo *</label>
                            <input id="photo" type="text" name="image" className="form-control py-2" placeholder="event photo online link *" required/>
                            
                        </div>
                    </div>
                    
                </div>
                {/* ------5 row discription --- */}
                <div className="row mt-4">
                    <div className="col-md-12">
                        <div className="form-group">
                            <label >description *</label>
                            <textarea id="description" name="description" className="form-control" placeholder="Write your event description here." rows="4" required></textarea>
                            </div>

                        </div>


                    <div className="col-md-12 mt-4 d-flex justify-content-center">
                        
                        <input onSubmit={submitData} type="submit" className="btn btn-success btn-send  pt-2 btn-block " value="Send Data" />
                    
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
