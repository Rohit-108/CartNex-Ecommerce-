
import Hero from "./Hero";
import IntroductionSection from "./IntroductionSection";
import Categorymenu from "./Categorymenu";
import ProductSection from "./ProductSection";

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
