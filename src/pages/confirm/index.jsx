import React from "react";
import { useSelector } from "react-redux";

function Confirm() {
  const data = useSelector((state) => state.product);
  const product = data.product;
  const amount = data.amount;
  const method = data.method || ["UPI", "Card"];
  return (
    <div className="flex justify-center items-start p-8 overflow-auto">
      <div className="w-[560px] p-4 bg-[#fff] text-black rounded-[4px]">
        {/* cards */}
        {product.map((item, index) => (
          <div
            className="flex items-center gap-10 my-4 phone:flex-col tablet:flex-row"
            key={index}
          >
            <img
              src={item.image}
              className="w-40 h-40 p-2 align-top bg-gray-300 rounded-sm object-cover"
            />
            <div className="flex-1 font-medium">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p>
                Quantity : <bold>{item.quantity}</bold>
              </p>
              <p>
                Price : <strong>{item.price}</strong>
              </p>
            </div>
          </div>
        ))}

        {/* Via ? Upi : Cards */}
        <div>
          <p>Payment Method : {method[Math.floor(Math.random() * 2)]}</p>
        </div>
        <div>
          <p>Total Amount : {amount}</p>
        </div>
        <div>
          <p>Status : Success ✔️</p>
        </div>
      </div>
    </div>
  );
}

export default Confirm;
