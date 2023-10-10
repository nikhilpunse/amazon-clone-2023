import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const PlacedOrderCard = ({ item, index,setTrigger }) => {
  const [data, setData] = useState(item.products);
  console.log("PlacedOrderCard :", data);
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);

  const Card = ({ item }) => {
    return (
      <>
        <div className="min-w-[450px] w-[70vw] h-[280px] flex border-b rounded-[5px] overflow-hidden">
          <div className="w-[40%] flex justify-center">
            <img className="h-[200px] rounded-[14px] mt-6" src={item.link} />
          </div>
          <div className="p-4 text-[14px]">
            <p className="text-[18px] font-[500]">{}</p>
            <p className="py-1 px-2 my-1 text-[12px] bg-orange-400 w-fit">
              Republic Day Sale
            </p>
            <p>
              ₹<span className="text-[20px] font-semibold">{item.price}</span>
              <span className="line-through"> ₹85,999</span> Save ₹35,000 (41%)
            </p>
            <p className="font-[450]">
              Save extra with No Cost EMISave extra with No Cost EMI
            </p>
            <div className="relative my-1 ml-3 text-[16px] font-bold text-blue-600">
              <i className="absolute -top-2 -left-4 text-[28px] bi bi-check text-orange-500"></i>
              prime
            </div>
            <div>
              <button className="px-3 py-1 rounded-xl hover:bg-slate-300 bg-slate-200 shadow-md">
                  Delete Item
                </button>
            </div>
            <p className="mt-1">FREE Delivery by Amazon</p>
          </div>
        </div>
      </>
    );
  };

  const sendReq = (id) => {
    fetch("/cancelorder", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({ id }),
    }).then((output) => {
      setTrigger(state=>state+1)
    });
  };

  return (
    <div key={item._id}>
      <div className="bg-slate-200 px-2 my-2 flex justify-between items-center">
        Order number {index + 1} : Total amount :{item.totalAmount}
        <div>
          <span onClick={() => setToggle(!toggle)} className="text-[34px] mx-2">
            {toggle ? "-" : "+"}
          </span>
          <span
            onClick={() => {
              sendReq(item._id);
            }}
            className="text-white bg-black px-3 py-[2px] hover:cursor-pointer rounded "
          >
            Cancel
          </span>
        </div>
      </div>
      {toggle
        ? data.map((item) => {
            return (
              <>
                <Card item={item} />
              </>
            );
          })
        : null}
    </div>
  );
};

export default PlacedOrderCard;
