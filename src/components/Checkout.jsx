import { useSelector } from "react-redux";

function Checkout() {
  const cart = useSelector((state) => state.cart);

  return (
    <>
      <h3>Checkout</h3>
      <div className="border shadow m-3">
        {cart.map((cartItem) => {
          return (
            <div key={cartItem.id} className="d-flex border m-3">
              <h4>{cartItem.title}</h4>
              <div>
                <p>Price: ${cartItem.price}</p>
                <p>Count: {cartItem.count}</p>
              </div>
              <button>Remove Item</button>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Checkout;
