import {  useState } from "react"
import PropTypes from 'prop-types';

export const LastNavbar = ({ onDataUpdate }) => {

  const [inputData, setInputData] = useState("");

  const handleInputChange = event => {
    setInputData(event.target.value);
    console.log(event.target.value)
  };

  const sendDataToParent = () => {
    onDataUpdate(inputData); // Call the parent's callback function
  };




  return (

 <div className="last-navbar pb-3">
   {/* --------searching data from---------- */}
   <div  className="d-flex justify-content-center">
        <div className="search">
            <input defaultValue={inputData} onChange={handleInputChange} name='search' type="text" className="search-input" placeholder="search..." />
            <button onClick={sendDataToParent}   className="search-icon">
                <i className="fa fa-search"></i>
            </button>
        </div>
    </div>

    </div>
  )
}
LastNavbar.propTypes = {
  onDataUpdate: PropTypes.func.isRequired}
