

import sladerPromos1 from "../assets/img/sladerPromos1.png";
import sladerPromo2 from "../assets/img/sladerPromo2.png";


function IndividualIntervalsExample() {
  return (
    <>
 
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel">
        <div className="carousel-inner h-10 ">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src={sladerPromo2} className="img1" alt="img1" />
          </div>
          <div className="carousel-item active" data-bs-interval="2000">
            <img src={sladerPromos1} className="img1" alt="img1" />
          </div>
     
          
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev">
          <span
            className="carousel-control-prev-icon bg-body-secondary p-4 rounded-circle "
            aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next">
          <span
            className="carousel-control-next-icon bg-body-secondary p-4 rounded-circle "
            aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default IndividualIntervalsExample;
