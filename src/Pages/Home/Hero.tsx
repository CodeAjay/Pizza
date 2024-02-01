import im from "../../assets/Frame.png";
import gg from "../../assets/leaf.png";
import "./Home.css";

const Hero = () => {
  return (
    <>
      <div className="flex h-fit w-[100%] text-5xl text-black-600 font-bold top-0 z-10 pt-[150px] pb-0 hero justify-center items-center">
        <div className="container text-center">
          <h1 className="font-lato p-5 leading-normal heading">
            Made by Your Brand Name
            <br />
            Loved by All
          </h1>
          <div className="ellipse m-auto w-fit">
            <img src={im} className="w-[90%] m-auto" />
          </div>
          <img src={gg} className="w-[40%] leaf2" />
        </div>
      </div>
    </>
  );
};

export default Hero;
