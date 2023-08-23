
export const CreateEvent = () => {
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
                             <form id="contact-form" role="form">

            

            <div className="controls">

                <div className="row mt-4">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label >title *</label>
                            <input id="form_name" type="text" name="name" className="form-control" placeholder="Please enter your firstname *" required="required" data-error="Firstname is required."/>
                            
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label >cetagory *</label>
                            <input id="form_lastname" type="text" name="surname" className="form-control" placeholder="Please enter your lastname *" required="required" data-error="Lastname is required."/>
                                                            </div>
                    </div>
                </div>
                {/* ----2 row---- */}
                <div className="row mt-4">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label >start date *</label>
                            <input id="form_name" type="text" name="name" className="form-control" placeholder="Please enter your firstname *" required="required" data-error="Firstname is required."/>
                            
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label >end date *</label>
                            <input id="form_lastname" type="text" name="surname" className="form-control" placeholder="Please enter your lastname *" required="required" data-error="Lastname is required."/>
                                                            </div>
                    </div>
                </div>
                {/* ----3 row---- */}
                <div className="row mt-4">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label >start time *</label>
                            <input id="form_name" type="text" name="name" className="form-control" placeholder="Please enter your firstname *" required="required" data-error="Firstname is required."/>
                            
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label >end time *</label>
                            <input id="form_lastname" type="text" name="surname" className="form-control" placeholder="Please enter your lastname *" required="required" data-error="Lastname is required."/>
                                                            </div>
                    </div>
                </div>
                {/* ----4 row---- */}
                <div className="row mt-4">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label >location *</label>
                            <input id="form_name" type="text" name="name" className="form-control" placeholder="Please enter your firstname *" required="required" data-error="Firstname is required."/>
                            
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label >Shift *</label>
                            <input id="form_lastname" type="text" name="surname" className="form-control" placeholder="Please enter your lastname *" required="required" data-error="Lastname is required."/>
                                                            </div>
                    </div>
                </div>


                <div className="row mt-4">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Email *</label>
                            <input id="form_email" type="email" name="email" className="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required."/>
                            
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label >Please specify your need *</label>
                            <select id="form_need" name="need" className="form-control" required="required" data-error="Please specify your need.">
                                <option value="" selected disabled>--Select Your Issue--</option>
                                <option >Request Invoice for order</option>
                                <option >Request order status</option>
                                <option >Havent received cashback yet</option>
                                <option >Other</option>
                            </select>
                            
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-12">
                        <div className="form-group">
                            <label >Message *</label>
                            <textarea id="form_message" name="message" className="form-control" placeholder="Write your message here." rows="4" required="required" data-error="Please, leave us a message."></textarea
                                >
                            </div>

                        </div>


                    <div className="col-md-12 mt-4 d-flex justify-content-center">
                        
                        <input type="submit" className="btn btn-success btn-send  pt-2 btn-block
                            " value="Send Data" />
                    
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
