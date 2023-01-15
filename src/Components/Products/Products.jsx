import React, { useEffect, useState } from "react";
import "./Product.css";

const Products = () => {
  const productApi =
    "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json";

  const [products, setProducts] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(productApi);
      const newData = await data.json();
      setProducts(newData);
      console.log(newData);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="container">
        <div className="big_box">
          {products?.map((item) => {
            return (
              <>
                <div className="card" key={item.id} style={{ width: "18rem" }}>
                  <img
                    className="card-img-top"
                    src={item.imageURL}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.price}</p>
                    <a className="btn btn-primary">Add to Cart</a>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
