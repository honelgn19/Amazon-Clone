import { useCart } from "./CartContext";
import CartItem from "./CartItem";

function Cart() {
  const { cart } = useCart();

  const total = cart.reduce(
  (acc, item) => acc + Number(item.price) * (item.qty || 1),
  0
);
  return (
    <div>
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}

          <h3>Total: ${total.toFixed(2)}</h3>
        </>
      )}
    </div>
  );
}

export default Cart;
