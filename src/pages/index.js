import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { addproduct } from "../store/slice/product";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const sendrequest = () => {
    const res = fetch(
      "https://groww-intern-assignment.vercel.app/v1/api/order-details"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data.products.length === 0) {
          sendrequest();
          return;
        }
        let amount = 0;
        data.products.map(
          (item) => (amount = amount + item.quantity * item.price * 1.0)
        );
        dispatch(
          addproduct({
            product: data.products,
            amount: amount.toFixed(3),
            method: data.paymentMethods,
          })
        );
        setLoading(true);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };
  useEffect(() => {
    sendrequest();
  }, []);
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-24 ${inter.className}`}
    >
      <button
        className=" text-white font-bold text-xl uppercase align-middle transition-all select-none  active:opacity-50 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none py-4 px-4 bg-gray-700"
        onClick={() => (loading ? router.push("/checkout") : {})}
      >
        Go To Cart
      </button>
    </main>
  );
}
