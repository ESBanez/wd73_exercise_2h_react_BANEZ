import { useEffect, useState } from "react";
import ProductItem from "../components/ProductItem";
import { useSelector } from "react-redux";

function ProductGallery() {
  const [products, setProducts] = useState([]);
  const cartItemCount = useSelector((state) => state.cartItemCount); //useSelector para sa Redux

  useEffect(() => {
    document.title = "Products";
  }, []);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [setProducts]);

  return (
    <>
      <h3>
        Cart Items: <span className="fw-bold">{cartItemCount}</span>
      </h3>
      <div className="d-flex flex-wrap">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            thumbnail={product.image}
            discountPercentage={product.discountPercentage}
          />
        ))}
      </div>
    </>
  );
}

export default ProductGallery;
