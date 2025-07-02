import ProductsList from "../Components/ProductsList";
import IndividualIntervalsExample from "../Components/SliderCarousels";

const Home = () => {
  return (
    <>
      <main>
        <div className="">
          <IndividualIntervalsExample />
        </div>
        <div className="container">
          <ProductsList />
        </div>
      </main>
    </>
  );
};

export default Home;
