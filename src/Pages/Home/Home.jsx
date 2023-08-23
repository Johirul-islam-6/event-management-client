
import CalendarView from "../../Components/React_Calender/CalendarView";
import { AllEvents } from "../Event/AllEvents";


export const Home = () => {
  return (
    <>
    <div className="Home-page mx-md-5 mx-2">
          
          <AllEvents/>

            <CalendarView />

    </div>
    
    </>
  )
}
