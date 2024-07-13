"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { getProducts } from "../redux/app/masters/products/products.slice";
import "./product.css";

const Products = () => {
  const dispatch: AppDispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.items);
  const status = useSelector((state: RootState) => state.products.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(getProducts());
    }
  }, [status, dispatch]);

  if (typeof window === "undefined") {
    return (
      <div>
        <p>Loading products...</p>
      </div>
    );
  }

  return (
    <div className="list">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt={product.title} className="image" />
          <div className="text">{product.title}</div>

          <div className="text">${product.price}</div>
        </div>
      ))}
    </div>
  );
};

export default Products;
