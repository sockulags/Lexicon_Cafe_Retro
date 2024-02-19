/* eslint-disable react/prop-types */
import { TEXT } from "../constants/text";

const MenuItems = ({ details }) => { 
  const { item, price } = details.menuItems;
  return (
    <div className="container">
      {item.map((menuItem, index) => (
        <>
          <p className="menu">{menuItem}</p>
          <p className="price">{price[index]}</p>
        </>
      ))}
    </div>
  );
};

const Info = ({ info }) => {
  const { leftInfo, rightInfo } = info;
  return (
    <>   
      <p className="left info">{leftInfo}</p>
      <p className="right info">{rightInfo}</p>
    </>
  );
};

function Section() {
  return (
    <>
      {Object.entries(TEXT).map(([categoryName, details]) => (
        <section key={categoryName} id={categoryName}>
          <h1>{categoryName}</h1>
          <Info info={details} />
          <MenuItems details={details} />          
          <img src={details.image} alt={categoryName} />
        </section>
      ))}
    </>
  );
}

export default Section;
