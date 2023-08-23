

export const LastNavbar = () => {
  return (
    <div className=" justify-content-center bg-body-tertiary last-navbar pt-md-5 pt-3  pb-3 ">
  
      <form action="">
        
        <div className=" d-flex justify-content-center">
          
          
          
          <div className="col-md-12  ">

             <div className="d-flex w-50 mx-auto justify-content-center form-outline form-white search-bar">
               <input type="text" id="searching-data" className="form-control  mx-auto" />
              <button type="submit" className="btn btn-outline-light  ms-2 mt-md-0 searching-btn event-discription ">
              Search
            </button>
             </div>

         
             <label className="w-100 mx-auto pt-2 text-center event-discription text-uppercase searching-content d-none d-md-block" >searching event name, location, start-date/time, etc.. </label>
          </div>

          
          
        </div>
        
      </form>


</div>
  )
}
