

import blog2 from "../assets/img/blog2.jpg";
import blog1 from "../assets/img/blog1.jpg";
import blog3 from "../assets/img/blog3.jpg";

function IndividualIntervalsExample() {
  return (
    <>
   
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel">
        <div className="carousel-inner h-10 ">
          <div className="carousel-item active d-flex justify-content-center bg-warning " data-bs-interval="10000">
            <img src={blog1} className="img1" alt="img1" />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={blog2} className="img1 d-block w-100" alt="logo yo campo" />
          </div>
          <div className="carousel-item">
            <img src={blog3} className="img1 d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev">
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next">
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default IndividualIntervalsExample;
