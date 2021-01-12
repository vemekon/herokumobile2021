import React from "react";
import laptop from "../../images/laptop.png";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  CloseOutlined,
} from "@ant-design/icons";

const ProductCardInCheckout = ({ p }) => {
  const colors = ["Black", "Brown", "Silver", "White", "Blue"];
  let dispatch = useDispatch();

  const handleColorChange = (e) => {
    console.log("color changed", e.target.value);

    let cart = [];
    if (typeof window !== "undefined") {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }

      cart.map((product, i) => {
        if (product._id === p._id) {
          cart[i].color = e.target.value;
        }
      });

      //  console.log('cart udpate color', cart)
      localStorage.setItem("cart", JSON.stringify(cart));
      dispatch({
        type: "ADD_TO_CART",
        payload: cart,
      });
    }
  };

  const handleQuantityChange = (e) => {
    // console.log("available quantity", p.quantity);
    let count = e.target.value < 1 ? 1 : e.target.value;

    if (count > p.quantity) {
      toast.error(`Max available quantity: ${p.quantity}`);
      return;
    }

    let cart = [];

    if (typeof window !== "undefined") {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }

      cart.map((product, i) => {
        if (product._id == p._id) {
          cart[i].count = count;
        }
      });

      localStorage.setItem("cart", JSON.stringify(cart));
      dispatch({
        type: "ADD_TO_CART",
        payload: cart,
      });
    }
  };

  const handleRemove = () => {
    // console.log(p._id, "to remove");
    let cart = [];

    if (typeof window !== "undefined") {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      // [1,2,3,4,5]
      cart.map((product, i) => {
        if (product._id === p._id) {
          cart.splice(i, 1);
        }
      });

      localStorage.setItem("cart", JSON.stringify(cart));
      dispatch({
        type: "ADD_TO_CART",
        payload: cart,
      });
    }
  };
  return (
    <div className="container-fluid m-0 p-0 m-md-2">
      <div className="row m-1">
        <div className="col-md-12">
          <div className="row">
            <div className="card p-2 mb-1" style={{ width: "100%" }}>
              <div className="card-title ">
                <h5>{p.title}</h5>
              </div>

              <div className="row g-0 m-0 p-0">
                <div className="col-3 p-0 m-0">
                  <img
                    src={p.images && p.images.length ? p.images[0].url : laptop}
                    alt="pic"
                    style={{
                      maxWidth: "5rem",
                      maxHeight: "5rem",
                      borderRadius: "5%",
                    }}
                  />
                </div>
                <div className="col-9 p-0">
                  <div className="card-body m-0 p-0">
                    <p className="card-text">{p.description}</p>
                    <p className="card-text">
                      <small className="text-danger">£{p.price}</small>
                    </p>

                    <div className=" mb-2">
                      <div className="row align-items-start">
                        <div className="col">
                          <p>
                            {" "}
                            Free Shipping?{" "}
                            <span>
                              {p.shipping === "Yes" ? (
                                <CheckCircleOutlined className="text-success" />
                              ) : (
                                <CloseCircleOutlined className="text-danger" />
                              )}
                            </span>
                          </p>
                        </div>
                        <div className="col">
                          <select
                            onChange={handleColorChange}
                            name="color"
                            className="form-control p-0 m-0"
                          >
                            {p.color ? (
                              <option value={p.color}>{p.color}</option>
                            ) : (
                              <option>Select</option>
                            )}
                            {colors
                              .filter((c) => c !== p.color)
                              .map((c) => (
                                <option key={c} value={c}>
                                  {c}
                                </option>
                              ))}
                          </select>
                        </div>
                      </div>

                      <div className=" pt-2">
                        <div className="row align-items-start ">
                          <div className="col">
                            {" "}
                            <input
                              type="number"
                              className="form-control p-0 m-0"
                              value={p.count}
                              onChange={handleQuantityChange}
                            />
                          </div>

                          <div className="col">
                            <p className="pl-autoo">
                              {" "}
                              Remove Item
                              <CloseOutlined
                                onClick={handleRemove}
                                className="text-danger pointer"
                              />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardInCheckout;
