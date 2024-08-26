
import { Hero, IntroductionSection, Categorymenu, ProductSection } from "../Components/index";


const Body = () => {


  return (
    <>
      <div className="product-main-page">
        <Hero />
        <IntroductionSection />
        <Categorymenu />
        <ProductSection />


      </div>
    </>
  );
};

export default Body;
