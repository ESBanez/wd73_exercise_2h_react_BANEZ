import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartItemCountReducer";
import { addProductToCart } from "../store/cartReducer";

function ProductItem(props) {
  const { id, title, price, description, thumbnail, discountPercentage } =
    props;
  const dispatch = useDispatch();

  let saleBanner;
  if (discountPercentage > 10) {
    saleBanner = <span className="fw-bold text-danger">SALE!!!</span>;
  }

  function handleClick() {
    dispatch(addToCart(1));
    dispatch(
      addProductToCart({
        id,
        title,
        price,
      })
    );
  }

  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={thumbnail}
          className="card-img-top"
          alt="..."
          style={{ height: "15rem", width: "9rem" }}
        />
        <div className="card-body">
          <h4 className="card-title">
            {title} {saleBanner}
          </h4>
          <p className="card-text">{description}</p>
          <button className="btn btn-primary" onClick={handleClick}>
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductItem;
