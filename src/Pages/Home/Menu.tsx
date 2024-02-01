import "./Home.css";
import itemImage from "../../assets/Image.png"

const Item=()=>{
  return (
    <>
    <div className="item">
      <p className="tag"></p>
      <img src={itemImage} />  
      <h4 className="text-2xl font-bold text-center">Item Name</h4>
      <p className="text-center">$10 </p>
    </div>    
    </>
  )
}

const Menu = () => {
  return (
    <>
      <div className="menu py-[50px] px-[30px]">
        <div className="container">
          <h1 className="text-center text-5xl font-bold mb-5 heading">Menu</h1>
          <p className="m-auto text-center mb-7">Lacus lobortis nullam nam consectetur fermentum mattis pellentesque id nulla. Risus convallis iaculis risus ac aliquam sit ultricies. Adipiscing adipiscing pellentesque tincidunt vitae. Aliquam dolor egestas nam congue elit dolor.</p>
          <div className="tag flex flex-row gap-4 justify-center">
            <button className="tag p-2 bg-[#2D1312] text-white rounded-xl">
              Pizza
            </button>
            <button className="tag p-2 bg-[#2D1312] text-white rounded-xl">
              Cold Drinks
            </button>
            <button className="tag p-2 bg-[#2D1312] text-white rounded-xl">
              Coffee
            </button>
            <button className="tag p-2 bg-[#2D1312] text-white rounded-xl">
              Other
            </button>
          </div>
          <div className="items flex flex-col justify-center pt-9">
          <div className="flex flex-row m-auto">
            <Item />
            <Item />
            <Item />
            <Item />
          </div>
          <div  className="flex flex-row m-auto">
            <Item />
            <Item />
            <Item />
            <Item />
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
