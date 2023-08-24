/* eslint-disable react/prop-types */
import axios from "axios"
// import CalendarView from "../../../Components/React_Calender/CalendarView"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import PropTypes from 'prop-types';
import Cookies from "js-cookie";



// eslint-disable-next-line react/prop-types
export const EditeEvent = ({singelEvent:EditeEventData, CloseModal}) => {

      // get user in cookies
  const  userEmail = Cookies.get('userEmail')

 const navigate = useNavigate()


  console.log('informationEvent' , EditeEventData)



    // ================== Update  Event Data sending ================
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
      
      const response = await axios.patch(`https://event-managment-jade.vercel.app/api/v1/event/64e70b18f9c99f5d825f8575${EditeEventData?.id}`, EventInputData)
   
      if (response.status === 200) {
        toast.success('event Edited  successfully')
        navigate('/')
      } 

    } catch (error) {
      console.error('Error:', error);
      toast.error('event not Edited successfully', error?.message)
    }

    };



    // modal close 
    const ModalClose = () =>{
        CloseModal(false)
    }

  return (
    <>

    <div className="row ">
      <div className="col-lg-12 mx-auto">
        <div className="card mt-2 mx-auto p-md-4 bg-light px-md-5">

   {/* ---------======== event from input field start ==========---------- */}

        <form className="px-5" onSubmit={submitData}>

            <div className=" row px-md-5 pt-3">
                <div className="d-flex justify-content-between">
                     <h1>Event Data Edite</h1>
                 <button onClick={ModalClose} className="btn-close fw-bold"></button>
                </div>
                 {/*--- 1st row cetagory, title---*/}
                <div className="row mt-4">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="event-discription fs-6 ms-2 mb-1 ">Event cetagory *</label>
                            <select id="form_need" name="cetagory" className="form-control event-discription py-2 py-2 event-input-text-color fs-7" required="required" data-error="Please specify your need.">
                                <option  defaultValue={EditeEventData?.cetagory} selected disabled> --Select cetagory-- </option>
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
                            <input defaultValue={EditeEventData?.title} id="title" type="text" name="title" className="form-control event-discription py-2 py-2 event-input-text-color fs-7" placeholder=" Event title *" required/>
                            </div>
                    </div>
                </div>
                
                {/* ----2 row---- loctaion, user email */}
                <div className="row mt-4">
                    <div className="col-md-6">
                        <div className="form-group">
                              <label className="event-discription fs-6 ms-2 mb-1">Event Location *</label>
                            <input defaultValue={EditeEventData?.location} id="location" type="text" name="location" className="form-control event-discription py-2 py-2 event-input-text-color fs-7" placeholder="select event location *" required/>
                            
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
                            <input defaultValue={EditeEventData?.image} id="photo" type="text" name="image" className="form-control event-discription py-2 py-2 event-input-text-color fs-7" placeholder="event photo online link *" required/>
                            
                        </div>
                    </div>
                    
                </div>
                {/* ----4 row----  start_date, end date ---- */}
                <div className="row mt-4">
                    <div className="col-md-6">
                        <div className="form-group  ">
                               <label className="event-discription fs-6 ms-2 mb-1">Event Start Time *</label>
                            <br />  
                            <div className="d-flex position-relative">
                      <input defaultValue={EditeEventData?.start_date} id="date" type="text" name="start_date" className="form-control py-2" placeholder="event Start data *" required/>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group  ">
                               <label className="event-discription fs-6 ms-2 mb-1">Event End Time *</label>
                            <br />  
                            <div className="d-flex position-relative">
                            <input defaultValue={EditeEventData?.start_date} id="date" type="text" name="end_date" className="form-control py-2" placeholder="event End data *" required/>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
                {/* ------5 row discription --- */}
                <div className="row mt-4">
                    <div className="col-md-12">
                        <div className="form-group">
                             <label className="event-discription fs-6 ms-2 mb-2 ">Event Description *</label>
                            <textarea defaultValue={EditeEventData?.description} id="description" name="description" className="form-control event-discription" placeholder="Write your event description here." rows="4" required></textarea>
                            </div>

                        </div>


                     <div className="col-md-12 mt-4 d-flex justify-content-center gap-3">
                        
                        <input onClick={ModalClose} type="button" className="btn  bg-danger btn-send  pt-2 btn-block px-md-4 py-md-6" defaultValue="close" />
                        <input onSubmit={submitData} type="submit" className="btn btn-success btn-send  pt-2 btn-block px-md-4 py-md-3 fs-6 " defaultValue="Send Data" />
                    
                </div>
          
                </div>
         </div>
         </form>
      
        
   
 




 
       

    </div>
    

   </div>
  </div>

    </>
  )
}
EditeEvent.propTypes = {
  onDataUpdate: PropTypes.func.isRequired
};
