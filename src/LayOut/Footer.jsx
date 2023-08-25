

export const Footer = () => {


  return (
    <>
<footer className=" text-center text-white footer">
  
  <div className="container p-4">
    
    {/* ============== Icon section html code ========= */}
    <section className="mb-4">
      
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-facebook-f"></i></a>

      
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-twitter"></i></a>

      
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-google"></i></a>

      
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-instagram"></i ></a>

      
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-linkedin-in"></i></a>

      
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-github"></i ></a>
    </section>
    

    

    {/* ================== copy write policy =============== */}
    <section className="mb-4">
      <h4 className=" text-uppercase fw-bold text-dark realway fst-italic fs-3">
       OUR EVENTMANAGEMENT SYSTEM
      </h4>

      <div className="row mt-4">
        <div className="col-lg-4 text-start fs-6 event-title role"><span className="fs-4 me-2 latest-event text-danger">Step 1 :</span> When you register with us, we gather information about your preferences, hobbies, and interests. Using this data, we`re able to offer personalized event recommendations that match what you love. Say goodbye to sifting through countless events  we bring the best ones directly to you. </div>
        <div className="col-lg-4 text-start fs-6 event-title role"><span className="fs-4 me-2 latest-event text-danger">Step 2 :</span> Step 4: Timely Updates As the event date approaches, we`ll keep you in the loop with timely updates. This might include additional speakers, agenda details, and any last-minute changes. Stay tuned to your email for these important announcements.
     </div>
     <div className="col-lg-4 text-start fs-6 event-title role"><span className="fs-4 me-2 latest-event text-danger">Step 3 :</span> Attend and enjoy! By using our platform, you agree to our terms, privacy policy, and consent to receive event-related communications. Your data will be handled with care and used solely for event-related purposes.</div>
        
      </div>
    </section>

    
  </div>
  
  <div className="text-center p-3 role fs-7 fst-italic fw-bolder">
    © 2023 Copyright:
    <a className=" bg-white" href=""> event managemant.com</a>
  </div>
  
</footer>

   </>

  )
}
