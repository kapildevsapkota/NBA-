import React from "react";
import "./products.css";

const ProductsCard = (productsDetails) => {
  const nproducts = productsDetails.products;

  const handleImageError = () => {
    console.error("Error loading image:", nproducts.pImage);
  };

  return (
    <>
      <div className="productsCard">
        <div className="productsRow">
          Name: {nproducts.poName}
        </div>
        <div className="productsRow">Country: {nproducts.country}</div>
        <div className="productsRow">Age: {nproducts.pAge}</div>
        <div className="productsRow">
          Image: <img src={nproducts.pImage} alt="Product" onError={handleImageError} />
        </div>
      </div>
    </>
  );
};

export default ProductsCard;
