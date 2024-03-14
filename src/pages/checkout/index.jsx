import React, { useEffect, useState } from "react";
import {
  AiOutlineLeft,
  AiOutlinePhone,
  AiOutlineEnvironment,
  AiOutlinePlus,
  AiOutlineMinus,
} from "react-icons/ai";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { updateQuantity } from "../store/slice/product";

function Checkout() {
  const router = useRouter();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.product);
  const total = useSelector((state) => state.product.amount);
  const [orders, setOrder] = useState(JSON.parse(JSON.stringify(product)));
  const [amount, setAmount] = useState(total);
  const [voucher, setVoucher] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [phone, setPhone] = useState("");

  const handlePromoBtn = async () => {
    if (promoCode !== "") {
      setVoucher(true);
      await setTimeout(() => {
        setVoucher(false);
      }, 2000);
    }
  };

  const handleQuantity = (sign, index, price) => {
    dispatch(updateQuantity({ sign, index, price }));
    if (sign === "+") {
      orders[index].quantity += 1;
      let currAmount = amount * 1.0 + price * 1.0;

      setAmount(currAmount.toFixed(3));
      // amount = amount + price * 1.0;
    } else if (sign === "-") {
      orders[index].quantity -= 1;
      let currAmount = amount * 1.0 - price * 1.0;

      setAmount(currAmount.toFixed(3));
      // amount = amount + price * 1.0;
    }
  };

  return (
    <div className="flex justify-center items-center h-screen p-4">
      <div className="w-[400px] p-4 bg-[#fff] text-black rounded-[4px] ">
        {/* upper header */}
        <div className="relative">
          <button
            className="absolute top-4 text-[#5748b3] uppercase align-middle transition-all select-none  active:opacity-50 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            onClick={() => router.back()}
          >
            <AiOutlineLeft size={20} />
          </button>

          <div className="flex flex-row items-center justify-center py-3 font-semibold text-lg">
            Checkout
          </div>
        </div>
        {/* Delivery detail and phone number*/}
        <div>
          <h3 className="font-bold py-4 text-gray-500">Delivery Detail</h3>
          <div className="flex items-center gap-2 max-w-max bg-gray-200 p-2 text-gray-600 rounded-sm">
            <AiOutlineEnvironment />
            15, Yemen road, Yemen
          </div>
          <div className="flex items-center p-2 my-4 w-full bg-white border-[1px] border-gray-500 rounded-sm">
            <AiOutlinePhone className="rotate-90" />
            <input
              placeholder="9876543210"
              type="text"
              className="mx-2 placeholder:py-2
               border-none outline-none"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
          </div>
        </div>

        {/* Order list */}
        <div>
          <h4 className="text-[12px] capitalize text-gray-400 font-semibold py-2 mt-4">
            Order List
          </h4>

          {orders.map((item, ind) => (
            <div
              key={ind}
              className="flex items-start p-2 my-1 text-sm border-[0.2px] relative"
            >
              <img
                src={item.image}
                alt={item.title.split(" ")[0]}
                className="w-10 h-10 bg-gray-200 content-center"
              />
              <div className="h-10 px-8 text-[12px] flex justify-between flex-col items-start ">
                <h4>
                  {item.title?.split(" ")[0] +
                    " " +
                    item.title.split(" ")[1] +
                    " ..."}
                </h4>
                <p className="font-semibold text-gray-400">{item.price} $</p>
              </div>
              <div className="absolute align-middle right-4 flex p-2">
                <button
                  className="border-[0.6px] px-2 transition-all select-none  active:opacity-50 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none rounded-sm"
                  style={
                    item.quantity === 1
                      ? {
                          display: "none",
                        }
                      : {}
                  }
                  onClick={() => handleQuantity("-", ind, item.price)}
                >
                  <AiOutlineMinus />
                </button>
                <div className="border-[0.6px] w-8 mx-[1.6px] align-middle px-2 rounded-sm">
                  {item.quantity}
                </div>
                <button
                  className="border-[0.6px] px-2 transition-all select-none  active:opacity-50 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none rounded-sm"
                  onClick={() => handleQuantity("+", ind, item.price)}
                >
                  <AiOutlinePlus />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Promo code */}
        <div className="relative">
          <h4 className="text-[12px] capitalize text-gray-400 font-semibold mt-4">
            Promo Code
          </h4>
          <div className="flex items-center p-2 my-2 w-full bg-white border-[1px] border-gray-500 rounded-sm relative">
            <input
              placeholder="DISCOUNT DEDO NA"
              type="text"
              className="mx-2 placeholder:py-2 placeholder:text-sm
               border-none outline-none"
              onChange={(e) => setPromoCode(e.target.value)}
              value={promoCode}
            />
            <button
              className="absolute  font-semibold text-sm  right-4 text-[#5748b3] align-middle transition-all select-none  active:opacity-50 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              onClick={handlePromoBtn}
            >
              APPLY
            </button>
          </div>
          <span
            className="text-[10px] font-semibold absolute bottom-[-16px]"
            style={voucher ? { display: "block" } : { display: "none" }}
          >
            Voucher applied
          </span>
        </div>

        {/*  Order Summary */}
        <div>
          <h3 className="font-bold py-2 text-gray-500">Order Summary</h3>
          <div className="flex justify-between text-sm ">
            <ul className="flex flex-col items-start gap-1">
              <li>Order Amount</li>
              <li>Delivery Fee</li>
              <li>Discount</li>
            </ul>
            <ul className="flex flex-col items-end gap-1">
              <li>{amount}</li>
              <li>20.00</li>
              <li>10.00</li>
            </ul>
          </div>
        </div>

        {/* Total and Payment button */}
        <div className="flex items-center justify-between my-4">
          <div>
            <h4 className="text-[12px] uppercase text-gray-400 font-semibold">
              total
            </h4>
            <h2 className="font-bold text-lg">
              {amount * 1.0 >= 10 ? amount * 1.0 - 10 : 0}
            </h2>
          </div>

          <button
            className="w-44 py-2 font-bold text-gray-100 bg-blue-500 rounded-sm transition-all select-none  active:opacity-50 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            style={
              amount === 0
                ? {
                    opacity: "0.6",
                    cursor: "not-allowed",
                    pointerEvents: "none",
                  }
                : {}
            }
            onClick={() => router.push("/payment")}
          >
            Payment
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
