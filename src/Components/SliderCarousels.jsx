// import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

// function CarouselIndividualIntervals() {
//   return (
//     <Carousel>
//       <Carousel.Item interval={1000}>
//         <ExampleCarouselImage text="Promo 10% de descuento" />
//         <Carousel.Caption>
//           <h3>Promo 10% de descuento</h3>
//           <p>El mejor producto lo encontras en Yo Campo.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item interval={1000}>
//         <ExampleCarouselImage text="Promo 10% de descuento" />
//         <Carousel.Caption>
//           <h3>Promo 10% de descuento label</h3>
//           <p>El mejor producto lo encontras en Yo Campo.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item interval={1000}>
//         <ExampleCarouselImage text="Promo 10% de descuento" />
//         <Carousel.Caption>
//           <h3>Promo 10% de descuento label</h3>
//           <p>El mejor producto lo encontras en Yo Campo.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item interval={1000}>
//         <ExampleCarouselImage text="Promo 10% de descuento" />
//         <Carousel.Caption>
//           <h3>Promo 10% de descuento label</h3>
//           <p>El mejor producto lo encontras en Yo Campo.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item interval={1000}>
//         <ExampleCarouselImage text="Second slide" />
//         <Carousel.Caption>
//           <h3>Promo 10% de descuento label</h3>
//           <p>El mejor producto lo encontras en Yo Campo.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <ExampleCarouselImage text="Third slide" />
//         <Carousel.Caption>
//           <h3>Promo 10% de descuento label</h3>
//           <p>
//           El mejor producto lo encontras en Yo Campo.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default CarouselIndividualIntervals;

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
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src={blog1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={blog2} className="d-block w-100" alt="logo yo campo" />
          </div>
          <div className="carousel-item">
            <img src={blog3} className="d-block w-100" alt="..." />
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
