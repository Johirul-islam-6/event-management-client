import { useState } from "react";
import PropTypes from 'prop-types';
import { toast } from "react-toastify";

export const Pagination = ({ onDataUpdate }) => {
  const [activePage, setActivePage] = useState(1);
  const [pageNumbers, setPageNumbers] = useState([1, 2, 3, 4, 5]);
//   get page number  value 
  const handlePageClick = (pageNumber) => {
    setActivePage(pageNumber);
  };

  onDataUpdate(activePage);


  // created Next page number 
  const handleAddPageNumber = () => {
    if(pageNumbers.length >14){
        return toast.success("Max page is 15")
    }
    const newPageNumber = pageNumbers[pageNumbers.length - 1] + 1;
    setPageNumbers([...pageNumbers, newPageNumber]);
    
  };



  return (
    <>
      <div className="page-content page-container Pagination-component py-3" id="page-content">
        <div className="padding">
          <div className="row container d-flex justify-content-center">
            <div className="">
              <div className="card pt-4">
                <div className="">
                  <nav>
                    <ul className="pagination d-flex justify-content-center gap-md-3  pagination-flat pagination-success">
                      <li 
                      
                      className="page-item ">
                        <a className="page-link left-right-icon-bg"  data-abc="true">
                          <i className="fa fa-angle-left"></i>
                        </a>
                      </li>
                      {/* //all page number map */}
                      {pageNumbers?.map((number) => (
                        <li key={number} className={`page-item ${number === activePage ? "active" : ""}`}>
                          <a
                            className="page-link"
                            href="#"
                            data-abc="true"
                            onClick={(e) => {
                              e.preventDefault();
                              handlePageClick(number);
                            }}
                          >
                            {number}
                          </a>
                        </li>
                      ))}
                      {/* --------create a new page number ------- */}
                      <li className="page-item">
                        <a
                          className="page-link left-right-icon-bg left-right-icon-bg"
                          href="#"
                          data-abc="true"
                          onClick={(e) => {
                            e.preventDefault();
                            handleAddPageNumber();
                          }}
                        >
                          <i className="fa fa-angle-right"></i>
                        </a>
                      </li>
                     
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Pagination.propTypes = {
  onDataUpdate: PropTypes.func.isRequired
};