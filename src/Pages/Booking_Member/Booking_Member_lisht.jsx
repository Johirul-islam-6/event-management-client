
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Loding } from "../../Components/Loding/Loding";


export const Booking_Member_lisht = () => {

  const {id} = useParams();
  // const userEmail = Cookies.get('userEmail')
 const [loading, setLoding] = useState(true)

    // <-----========== Get All Booking User request showing event booking member ==========------>
 const [eventbookingUser, seteventbookingUser] = useState()

   useEffect(() => {
    fetch(`https://event-managment-jade.vercel.app/api/v1/event-booking/${id}`)
      .then(response => response.json())
      .then(data => {
        seteventbookingUser(data?.data); 
        setLoding(false)
        
      })
      .catch(error => {
        toast.error(error?.response?.data?.errorMessages[0]?.message)
      });
  }, [id]);

  

  return (
    <>
    {/* if data loade in server site then loading start */}
        {loading ? <><Loding/> </> : null}

    <div className="w-100 pb-5 booking_member-page">
      
  <section className="py-b">
  <div className="container py-5 justify-content-center ">
      <h3 className="text-center py-3 ">Booking All Members</h3>

         
          <div className="card body-card mx-auto card" data-mdb-perfect-scrollbar="true" >

            <table className="table mb-0 ">
              <thead>
                <tr>
                  <th scope="col">profile</th>
                  <th scope="col">email</th>
                </tr>
              </thead>
              <tbody>
                {
                    eventbookingUser?.map((member, index )=> {
                        return <>
                        
                    <tr key={member.id} className="fw-normal">
                  <th className="d-flex">
                    <p className="mx-2">{index + 1}</p>
                    <img src="https://png.pngtree.com/png-vector/20191103/ourmid/pngtree-handsome-young-guy-avatar-cartoon-style-png-image_1947775.jpg"
                      className="shadow-1-strong rounded-circle w-25 " alt="avatar 1"
                       />
                   
                  </th>
                  
                  <td className="align-middle">
                    <h6 className="mb-0"><span className="badge bg-danger fs-6">{member?.userEmail}</span></h6>
                  </td>
                 
                </tr>
                        
                        </>
                    })
                }
                
                
              </tbody>
            </table>

          </div>
         
   
  </div>
</section>

    </div>
        </>
  )
}
