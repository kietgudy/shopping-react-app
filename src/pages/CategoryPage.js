import React, { useContext } from "react";
import "./styles/CategoryPage.scss";
import { ShopContext } from "../context/ShopContext";

const CategoryPage = (props) => {
  const { all_product } = useContext(ShopContext);
  return <div className="category-page">CategoryPage</div>;
};

export default CategoryPage;
