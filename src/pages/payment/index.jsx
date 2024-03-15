import React, { useEffect, useState } from "react";
import {
  AiOutlineLeft,
  AiFillCreditCard,
  AiOutlineRight,
} from "react-icons/ai";
import { PiTruck } from "react-icons/pi";
import { CiWallet } from "react-icons/ci";
import { BsBank } from "react-icons/bs";
import { useRouter } from "next/router";
import { runConfetti } from "@/lib/utils";
import { useSelector } from "react-redux";

function Payment() {
  const router = useRouter();
  const [amount, setAmount] = useState(
    useSelector((state) => state.product.amount)
  );
  const [method, setMethod] = useState(
    useSelector((state) => state.product.method)
  );

  const [paymentMethod, setPaymentMethod] = useState(null);
  method.forEach((item) => console.log(item));
  const handleSelectPaymentMethod = (pay) => {
    setPaymentMethod(pay);
  };

  const handlePayment = async () => {
    if (paymentMethod === null) {
      alert("please select payment method");
      return;
    } else {
      router.push("/confirm");
      runConfetti();
    }
  };

  return (
    <div className="flex justify-center items-center p-8 relative overflow-auto phone:p-1">
      <div className="w-[400px] h-screen p-4 bg-[#fff] text-black rounded-[4px]">
        {/* upper header */}
        <div className="relative">
          <button
            className="absolute top-4 text-[#5748b3] uppercase align-middle transition-all select-none  active:opacity-50 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            onClick={() => router.back()}
          >
            <AiOutlineLeft size={20} />
          </button>

          <div className="flex flex-row items-center justify-center py-3 font-semibold text-lg">
            Payment
          </div>
        </div>
        {/* Delivery detail and phone number*/}
        <div>
          <h3 className="font-bold py-4 text-gray-500">
            Choose Payment Method
          </h3>
        </div>

        {/* Payment Method List */}
        <div>
          <div
            className="flex items-center p-4 my-2 text-sm border-[0.2px] relative cursor-pointer"
            style={
              paymentMethod === 0
                ? { backgroundColor: "rgb(209, 213, 219)" }
                : { backgroundColor: "inherit" }
            }
            onClick={() => handleSelectPaymentMethod(0)}
          >
            <AiFillCreditCard className="w-10 h-10 content-center text-gray-800" />

            <div className="h-10 px-8 text-[14px] tracking-wide flex justify-between flex-col items-start ">
              <h4>Debit Card</h4>
              <p className=" tracking-wider text-black ">1234********</p>
            </div>
            <button className="absolute align-middle right-4 transition-all select-none  active:opacity-50 disabled:pointer-events-none ">
              {" "}
              <AiOutlineRight className="w-5 h-5 content-center" />
            </button>
          </div>

          {/* <div
            className="flex items-center p-4 my-2 text-sm border-[0.2px] relative cursor-pointer"
            style={
              paymentMethod === 0
                ? { backgroundColor: "rgb(209, 213, 219)" }
                : { backgroundColor: "inherit" }
            }
            onClick={() => handleSelectPaymentMethod(0)}
          >
            <AiFillCreditCard className="w-10 h-10 content-center text-gray-800" />

            <div className="h-10 px-8 text-[14px] tracking-wide flex justify-between flex-col items-start ">
              <h4>Debit Card</h4>
              <p className=" tracking-wider text-black ">1234********</p>
            </div>
            <button className="absolute align-middle right-4 transition-all select-none  active:opacity-50 disabled:pointer-events-none ">
              {" "}
              <AiOutlineRight className="w-5 h-5 content-center" />
            </button>
          </div> */}

          <div
            className="flex items-center  p-4 my-2 text-sm border-[0.2px]  relative cursor-pointer"
            style={
              paymentMethod === 1
                ? { backgroundColor: "rgb(209, 213, 219)" }
                : { backgroundColor: "inherit" }
            }
            onClick={() => handleSelectPaymentMethod(1)}
          >
            <BsBank className="w-10 h-10 content-center text-gray-800" />

            <div className="h-10 px-8 text-[14px] tracking-wide flex items-center ">
              <h4>UPI</h4>
            </div>
            <button className="absolute align-middle right-4 transition-all select-none  active:opacity-50 disabled:pointer-events-none ">
              {" "}
              <AiOutlineRight className="w-5 h-5 content-center" />
            </button>
          </div>

          <div
            className="flex items-center  p-4 my-2 text-sm border-[0.2px]  relative cursor-pointer"
            style={
              paymentMethod === 2
                ? { backgroundColor: "rgb(209, 213, 219)" }
                : { backgroundColor: "inherit" }
            }
            onClick={() => handleSelectPaymentMethod(2)}
          >
            <CiWallet className="w-10 h-10 content-center text-gray-800" />

            <div className="h-10 px-8 text-[14px] tracking-wide flex items-center ">
              <h4>E-Wallet</h4>
            </div>
            <button className="absolute align-middle right-4 transition-all select-none  active:opacity-50 disabled:pointer-events-none ">
              {" "}
              <AiOutlineRight className="w-5 h-5 content-center" />
            </button>
          </div>

          <div
            className="flex items-center p-4 my-2 text-sm border-[0.2px]  relative cursor-pointer"
            style={
              paymentMethod === 3
                ? { backgroundColor: "rgb(209, 213, 219)" }
                : { backgroundColor: "inherit" }
            }
            onClick={() => handleSelectPaymentMethod(3)}
          >
            <PiTruck className="w-10 h-10 content-center text-gray-800" />

            <div className="h-10 px-8 text-[14px] tracking-wide flex justify-between flex-col items-start ">
              <h4>Cash on Delivery</h4>
              <p className=" tracking-wide text-black ">
                Pay directly to the Driver
              </p>
            </div>
            <button className="absolute align-middle right-4 transition-all select-none  active:opacity-50 disabled:pointer-events-none ">
              {" "}
              <AiOutlineRight className="w-5 h-5 content-center" />
            </button>
          </div>
        </div>

        {/* Total and Payment button */}
        <div className="flex flex-col phone:absolute phone:w-[90%] phone:bottom-4 justify-between  mt-16 align-bottom">
          <div className="flex justify-between">
            <h4 className="text-[12px] capitalize text-gray-400 font-semibold">
              Admin fee
            </h4>
            <h2 className=" text-sm">0</h2>
          </div>
          <div className="flex justify-between">
            <h4 className="text-[12px] uppercase text-gray-400 font-semibold">
              total
            </h4>
            <h2 className="font-bold text-lg">
              {amount * 1.0 >= 10 ? amount * 1.0 - 10 : 0}
            </h2>
          </div>

          <button
            className="w-full py-2 my-2 font-bold text-gray-100 bg-blue-500 rounded-sm transition-all select-none  active:opacity-50 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            onClick={handlePayment}
          >
            Make a Payment
          </button>
        </div>
      </div>
    </div>
  );
}

export default Payment;
