import React from 'react'
import Slider from '../../Components/Slider/Slider';
import "./Home.scss";
import HomeInfoBox from "./HomeInfoBox";
import { productData } from "../../Components/Crocusel/data";
import CarouselItem from '../../Components/Crocusel/CarouselItem';
import  Carousel  from "../../Components/Crocusel/Carousel";
import ProductCategory from './ProductCategory';
import FooterLinks from '../../Components/Footer/FooterLinks';

const PageHeading = ({heading, btnText}) => {
  return (
    <>
    <div className="--flex-between">
      <h2 className="--fw-thin">{heading}</h2>
      <button className= "--btn">
        {btnText}
      </button>
    </div>
    <div className="--hr"></div>
    </>
  )
};

const Home = () => {
  const productItems = productData.map((item) =>(
    <div key={item.id}>
      <CarouselItem 
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
      />
    </div>
  ))
    return (
        <>
          <Slider/> 
           <section>
            <div className='container'>
              <HomeInfoBox />
              <PageHeading heading={"Latest Products"} 
              btnText={"Shop Now>>>"} />
             <Carousel products={productItems} />
            </div>
           </section>

           <section className="--bg-grey">
            <div className="container">
             <h4>Categories</h4>
             <ProductCategory />
            </div>
           </section>

           <section>
            <div className='container'>
              <PageHeading heading={"Mobile Phones"} 
              btnText={"Shop Now>>>"} />
             <Carousel products={productItems} />
            </div>
           </section>
           <FooterLinks />
        </>
    );
};

export default Home;


// import React from 'react';
// import Slider from '../../components/slider/Slider';
// import HomeInfoBox from "./HomeInfoBox";
// import { productData } from "../../components/carousel/data";
// import CarouselItem from '../../components/carousel/CarouselItem';
// import Carousel from "../../components/carousel/Carousel"; // Correct import name
// import "./Home.scss";

// const PageHeading = ({ heading, btnText }) => {
//   return (
//     <>
//       <div className="--flex-between">
//         <h2 className="--fw-thin">{heading}</h2>
//         <button className="--btn">
//           {btnText}
//         </button>
//       </div>
//       <div className="--hr"></div>
//     </>
//   )
// };

// const Home = () => {
//   const productItems = productData.map((item) => (
//     <div key={item.id}>
//       <CarouselItem
//         name={item.name}
//         url={item.imageurl}
//         price={item.price}
//         description={item.description}
//       />
//     </div>
//   ));

//   return (
//     <>
//       <Slider />
//       <section>
//         <div className='container'>
//           <HomeInfoBox />
//           <PageHeading heading={"Latest Products"}
//             btnText={"Shop Now>>>"}
//           />
//           <Carousel products={productItems} />
//         </div>
//       </section>
//     </>
//   );
// };

// export default Home;
