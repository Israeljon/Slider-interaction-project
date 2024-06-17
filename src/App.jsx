import Carousel from "./Carousel";
import StlickCarousel from "./StlickCarousel";
import Hero from "./Hero";
import "./fonts/AeonikTRIAL-Regular.otf"
const App = () => {
  return (
    <main className="slider-main">
      <Hero />
      <Carousel />
      {/* <StlickCarousel /> */}
    </main>
  );
};
export default App;
