const User = require("../models/user");
const Cart = require("../models/cart");
const Product = require("../models/product");

const stripe = require("stripe")(process.env.STRIPE_SECRET);

exports.createPaymentIntent = async (req, res) => {
  // console.log(req.body);

  // later apply coupon
  // later calculate price

  // 1 find user
  const user = await User.findOne({ email: req.user.email }).exec();
  // 2 get user cart total
  const { cartTotal, totalAfterDiscount } = await Cart.findOne({
    orderdBy: user._id,
  }).exec();
  // console.log("CART TOTAL", cartTotal, "AFTER DIS%", totalAfterDiscount);

  let finalAmount = 0;

  finalAmount = cartTotal * 100;

  // create payment intent with order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: finalAmount,
    currency: "gbp",
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
    cartTotal,
    totalAfterDiscount,
    payable: finalAmount,
  });
};
