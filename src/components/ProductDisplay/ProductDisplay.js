import React, { useContext } from "react";
import "./ProductDisplay.scss";
import star_icon from "../../assets/star_icon.png";
import star_dull_icon from "../../assets/star_dull_icon.png";
import { ShopContext } from "../../context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const {addToCart} = useContext(ShopContext)
  return (
    <div className="product-display">
      <div className="product-display-left">
        <div className="image-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="image-product">
          <img className="image-main" src={product.image} alt="" />
        </div>
      </div>
      <div className="product-display-right">
        <h1>{product.name}</h1>
        <div className="product-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="product-prices">
          <div className="price-old">${product.old_price}</div>
          <div className="price-new">${product.new_price}</div>
        </div>
        <div className="product-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quaerat
          officiis doloribus repudiandae velit ipsa rerum,{" "}
        </div>
        <div className="product-size">
          <h1>Select size</h1>
          <div className="product-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
          <div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p>
              <span>Category: </span>Women, T-Shirt, Crop Top
            </p>
            <p>
              <span>Tags: </span>Modern, Latest
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
