import { useCart } from "../CartContext";

function CartItem({ item }) {
  const { dispatch } = useCart();

  return (
    <div className="cart-item">
      <img src={item.image} width={80} />

      <div>
        <h4>{item.title}</h4>
        <p>${item.price}</p>

        <div>
          <button
            onClick={() =>
              dispatch({ type: "DECREASE_QTY", payload: item.id })
            }
          >
            -
          </button>

          <span>{item.qty}</span>

          <button
            onClick={() =>
              dispatch({ type: "INCREASE_QTY", payload: item.id })
            }
          >
            +
          </button>
        </div>

        <button
          onClick={() =>
            dispatch({ type: "REMOVE_FROM_CART", payload: item.id })
          }
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;