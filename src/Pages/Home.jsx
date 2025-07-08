import ProductsList from "../Components/ProductsList";
import IndividualIntervalsExample from "../Components/SliderCarousels";

const Home = () => {
  return (
    <>
      <main>
        <div className="">
          <IndividualIntervalsExample />
        </div>
        <div className=" container-fluid d-flex flex-column align-items-center mt-4">
          <ProductsList />
        </div>
      </main>
    </>
  );
};

export default Home;
