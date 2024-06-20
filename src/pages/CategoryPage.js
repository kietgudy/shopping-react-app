import React, { useContext } from "react";
import "./styles/CategoryPage.scss";
import { ShopContext } from "../context/ShopContext";
import dropdown_icon from "../assets/dropdown_icon.png";
import Item from "../components/Item/Item";

const CategoryPage = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="category">
      <img className="category-banner" src={props.banner} alt="banner" />
      <div className="category-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="category-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="category-products">
        {all_product.map((item, index) => {
          if (props.category === item.category) {
            return (
              <Item
                key={index}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default CategoryPage;
