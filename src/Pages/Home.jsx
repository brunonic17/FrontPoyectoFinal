import CarouselIndividualIntervals from "../Components/SliderCarousels";
import Productos from "./Productos";

// import IndividualIntervalsExample from "../Components/SliderCarousels"

function Home() {
  return (
    <>
      <h1 className="container text-center ">SOY LA PAGINA DE INICIO</h1>

      <CarouselIndividualIntervals />
      <Productos />
    </>
  );
}

export default Home;
