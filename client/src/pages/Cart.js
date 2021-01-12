import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ProductCardInCheckout from "../components/cards/ProductCardInCheckout";
import { userCart } from "../functions/user";

const Cart = ({ history }) => {
  const { cart, user } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();

  const getTotal = () => {
    return cart.reduce((currentValue, nextValue) => {
      return currentValue + nextValue.count * nextValue.price;
    }, 0);
  };

  const saveOrderToDb = () => {
    // console.log("cart", JSON.stringify(cart, null, 4));
    userCart(cart, user.token)
      .then((res) => {
        console.log("CART POST RES", res);
        if (res.data.ok) history.push("/checkout");
      })
      .catch((err) => console.log("cart save err", err));
  };

  const showCartItems = () => (
    <>
      {cart.map((p) => (
        <ProductCardInCheckout key={p._id} p={p} />
      ))}
    </>
  );

  return (
    <div className="container-fluid pt-2">
      <div className="row">
        <div className="col-lg-7">
          <h4>Cart / {cart.length && cart.length} Product</h4>

          {!cart.length ? (
            <p>
              No products in cart. <Link to="/shop">Continue Shopping.</Link>
            </p>
          ) : (
            showCartItems()
          )}
        </div>
        <div className="col-lg-4 mx-auto">
          <div className="card my-5">
            <div className="card-body">
              <h5 className="card-title text-danger">Order Summary</h5>
              <p className="card-text"> Products </p>

              {cart.map((c, i) => (
                <div key={i}>
                  <p>
                    {c.title} x {c.count} = £{c.price * c.count}
                  </p>
                </div>
              ))}
              <p>
                {" "}
                Total: <span>£{getTotal()}</span>
              </p>
              {user ? (
                <button
                  onClick={saveOrderToDb}
                  className="btn btn-sm btn-primary mt-2"
                  disabled={!cart.length}
                >
                  Proceed to Checkout
                </button>
              ) : (
                <button className="btn btn-sm btn-primary mt-2">
                  <Link
                    to={{
                      pathname: "/login",
                      state: { from: "cart" },
                    }}
                  >
                    Login to Checkout
                  </Link>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
