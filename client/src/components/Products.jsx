import styled from "styled-components";
// import { popularProducts } from "../data";
import Product from "./Product";
import { React, useEffect, useState } from 'react';
import axios from "axios"


const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({ cat, filters, sort }) => {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  //WHEN CATEGORY CHANGES
  useEffect(() => {

    //REQ TO API
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : "http://localhost:5000/api/products"
        );
        setProducts(res.data);
      } catch (err) { }
    };
    getProducts();
  }, [cat]);

  //CHANGE CAT FILTERS
  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);


  //SORT CHANGES
  useEffect(() => {
    if (sort === "newest") {
      //USING CREATED AT
      setFilteredProducts((prev) => //all prev sort it
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {

      //USING PRICES
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {

      //USING PRICES
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);


  return (
    <Container>
      {cat ? filteredProducts.map((item) => (
        <Product item={item} key={item.id} />
      )) : products.slice(0, 8).map((item) => ( //DISPLAY MAX 8 ITEMS IN HOME 
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
