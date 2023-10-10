import React, { useEffect } from "react";
import data from "../OffersApi";
import { data2, data3, data4, data5, data6, data7, data8 } from "../OffersApi";
import { setLogin } from "../app/counterSlice";
import { useDispatch } from "react-redux";
import Navbar from "./Navbar";

const MainOffers = () => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    if (user) {
      dispatch(setLogin());
    }
  }, []);

  return (
    <div className="min-w-[1024px]">
      <Navbar/>
      <div
        id="carouselExampleControls"
        className="relative"
        data-te-carousel-init
        data-te-carousel-slide
      >
        {/* <!--Carousel items--> */}
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          {/* <!--First item--> */}
          <div
            className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item
            data-te-carousel-active
          >
            <img
              src="https://m.media-amazon.com/images/I/91xWBRGmh8L._SX3000_.jpg"
              className="block w-full"
              alt="Wild Landscape"
            />
          </div>
          {/* <!--Second item--> */}
          <div
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item
          >
            <img
              src="https://m.media-amazon.com/images/I/81yyiHwepLL._SX3000_.jpg"
              className="block w-full"
              alt="Camera"
            />
          </div>
          {/* <!--Third item--> */}
          <div
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item
          >
            <img
              src="https://m.media-amazon.com/images/I/713Vu52G84L._SX3000_.jpg"
              className="block w-full"
              alt="Exotic Fruits"
            />
          </div>
        </div>

        {/* <!--Carousel controls - prev item--> */}
        <button
          className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          data-te-target="#carouselExampleControls"
          data-te-slide="prev"
        >
          <span className="inline-block h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </span>
          <span className="!absolute top-0 !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Previous
          </span>
        </button>
        {/* <!--Carousel controls - next item--> */}
        <button
          className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          data-te-target="#carouselExampleControls"
          data-te-slide="next"
        >
          <span className="inline-block h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Next
          </span>
        </button>
      </div>

      {/* slider offer 1 */}
      <div className=" relative ">
        <div className="absolute -top-[300px] flex justify-evenly w-[100%] ">
          {/* card */}
          <div className="min-w-[300px] w-[20vw] h-[70vh] bg-slate-50">
            <h3 className="font-bold p-4">
              Most searched smartphone series on Amazon
            </h3>

            <div className="flex justify-evenly flex-wrap">
              {data.map((item, index) => {
                return (
                  <>
                    <div key={index} className="">
                      <img className="w-[130px] h-[110px]" src={item.link} />
                      <p className="text-[13px] text-gray-800">
                        {item.descline1}
                        <br /> {item.descline2 ? item.descline2 : null}
                      </p>
                    </div>
                  </>
                );
              })}
            </div>
            <p className="text-[13px] ml-3 mt-3 text-blue-800">
              Prime Early Deals | See all offers
            </p>
          </div>

          <div className="min-w-[300px] w-[20vw] h-[70vh] bg-slate-50">
            <h3 className="font-bold p-4">
              Starting ₹79 | Home, kitchen & more
            </h3>

            <div className="flex justify-evenly flex-wrap">
              {data2.map((item, index) => {
                return (
                  <>
                    <div key={index} className="">
                      <img className="w-[130px] h-[110px]" src={item.link} />
                      <p className="text-[13px] text-gray-800">
                        {item.descline1}
                        <br /> {item.descline2 ? item.descline2 : null}
                      </p>
                    </div>
                  </>
                );
              })}
            </div>
            <p className="text-[13px] ml-3 mt-3 text-blue-800">
              Prime Early Deals | See all offers
            </p>
          </div>

          <div className="min-w-[300px] flex flex-col justify-between items-center w-[20vw] h-[70vh] bg-slate-50">
            <h3 className="font-bold p-4">
              Up to 60% off | Upgrade to Smart TVs
            </h3>
            <img
              className="w-[90%] h-[300px] mb-2"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/TVs/BAU/Kamya/JanART/PC_CategoryCard_758X608_2._SY304_CB615772840_.jpg"
            />
            <p className="text-[13px] ml-3 mb-5 self-start text-blue-800">
              Prime Early Deals | See all offers
            </p>
          </div>

          <div className="min-w-[300px] flex flex-col items-center justify-between w-[22vw] h-[70vh] ">
            <div className="h-[150px] bg-white">
              <h3 className="font-bold p-4">
                Sign in for your best experience
              </h3>
              <p className=" text-center bg-yellow-400 rounded-2xl text-[16px] py-1 mx-2">
                Sign in Securely
              </p>
            </div>
            <div>
              <img src="https://m.media-amazon.com/images/G/31/img19/AMS/Houseads/Laptops-Sept2019._CB436595915_.jpg" />
            </div>
          </div>
        </div>
      </div>

      {/* slider overlap offer 2*/}
      <div className="bg-blue-100 pt-36 flex justify-evenly w-[98%] mt-14">
        {/* card */}
        <div className="min-w-[300px] w-[20vw] h-[70vh] bg-slate-50">
          <h3 className="font-bold p-4">
            Most searched smartphone series on Amazon
          </h3>

          <div className="flex justify-evenly flex-wrap">
            {data4.map((item, index) => {
              return (
                <>
                  <div key={index} className="">
                    <img className="w-[130px] h-[110px]" src={item.link} />
                    <p className="text-[13px] text-gray-800">
                      {item.descline1}
                      <br /> {item.descline2 ? item.descline2 : null}
                    </p>
                  </div>
                </>
              );
            })}
          </div>
          <p className="text-[13px] ml-3 mt-3 text-blue-800">
            Prime Early Deals | See all offers
          </p>
        </div>

        <div className="min-w-[300px] w-[20vw] h-[70vh] bg-slate-50">
          <h3 className="font-bold p-4">Starting ₹79 | Home, kitchen & more</h3>

          <div className="flex justify-evenly flex-wrap">
            {data3.map((item, index) => {
              return (
                <>
                  <div key={index} className="">
                    <img className="w-[130px] h-[110px]" src={item.link} />
                    <p className="text-[13px] text-gray-800">
                      {item.descline1}
                      <br /> {item.descline2 ? item.descline2 : null}
                    </p>
                  </div>
                </>
              );
            })}
          </div>
          <p className="text-[13px] ml-3 mt-3 text-blue-800">
            Prime Early Deals | See all offers
          </p>
        </div>

        <div className="min-w-[300px] w-[20vw] h-[70vh] bg-slate-50">
          <h3 className="font-bold p-4">Starting ₹79 | Home, kitchen & more</h3>

          <div className="flex justify-evenly flex-wrap">
            {data5.map((item, index) => {
              return (
                <>
                  <div key={index} className="">
                    <img className="w-[130px] h-[110px]" src={item.link} />
                    <p className="text-[13px] text-gray-800">
                      {item.descline1}
                      <br /> {item.descline2 ? item.descline2 : null}
                    </p>
                  </div>
                </>
              );
            })}
          </div>
          <p className="text-[13px] ml-3 mt-3 text-blue-800">
            Prime Early Deals | See all offers
          </p>
        </div>

        <div className="min-w-[300px] flex flex-col justify-between items-center w-[20vw] h-[70vh] bg-slate-50">
          <h3 className="font-bold p-4">
            Up to 60% off | Upgrade to Smart TVs
          </h3>
          <img
            className="w-[90%] h-[300px] mb-2"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/TVs/BAU/Kamya/JanART/PC_CategoryCard_758X608_2._SY304_CB615772840_.jpg"
          />
          <p className="text-[13px] ml-3 mb-5 self-start text-blue-800">
            Prime Early Deals | See all offers
          </p>
        </div>
      </div>

      {/* horizontal scrollbar 1*/}

      {/* <div
        id="carouselExampleCaptions"
        className=" bg-blue-100 px-6 py-4 carousel slide relative"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="bg-white rounded-[3px] carousel-inner relative w-full overflow-hidden">
          <div className="carousel-item active relative float-left w-full">
            <h1 className="font-bold ml-14 pt-3">Blockbuster Deals</h1>
            <div className="flex justify-evenly items-center w-full p-3">
              {data6.map((item, index) => {
                return (
                  <>
                    <div key={index}>
                      <img
                        className="w-[150px] h-42 rounded-lg"
                        src={item.link}
                      />
                      <p className="text-[13px] mt-2 bg-pink-700 w-fit px-1 rounded-sm text-white">
                        {item.off}
                      </p>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="carousel-caption hidden md:block absolute text-center">
              <h5 className="text-xl">First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item relative float-left w-full">
            <h1 className="font-bold ml-14 pt-3">Blockbuster Deals</h1>
            <div className="flex justify-evenly items-center w-full p-3">
              {data7.map((item, index) => {
                return (
                  <>
                    <div key={index}>
                      <img
                        className="w-[150px] h-42 rounded-lg"
                        src={item.link}
                      />
                      <p className="text-[13px] mt-2 bg-pink-700 w-fit px-1 rounded-sm text-white">
                        {item.off}
                      </p>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="carousel-caption hidden md:block absolute text-center">
              <h5 className="text-xl">Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item relative float-left w-full">
            <h1 className="font-bold ml-14 pt-3">Blockbuster Deals</h1>
            <div className="flex justify-evenly items-center w-full p-3">
              {data8.map((item, index) => {
                return (
                  <>
                    <div key={index}>
                      <img
                        className="w-[150px] h-42 rounded-lg"
                        src={item.link}
                      />
                      <p className="text-[13px] mt-2 bg-pink-700 w-fit px-1 rounded-sm text-white">
                        {item.off}
                      </p>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="carousel-caption hidden md:block absolute text-center">
              <h5 className="text-xl">Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="border rounded-md py-12 bg-black carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="border rounded-md py-12 bg-black carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}

    

      <div className="flex justify-center items-center bg-blue-100 p-4">
        <img src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/052e6b42-b92e-42a5-89e5-e83ab591fbb5.gif" />
      </div>

      <footer>
        <div className="bg-slate-500 text-center py-1 text-[16px] font-medium text-white">
          Back to top
        </div>
        <div className="bg-slate-800 text-gray-200">
          <div className="flex justify-center ">
            <div className="m-10">
              <h5 className="my-2 text-[15px] text-white font-bold">
                Get to Know Us
              </h5>
              <p className="my-[3px] cursor-pointer hover:underline text-[15px]">
                About Us
              </p>
              <p className="my-[3px] cursor-pointer hover:underline text-[15px]">
                Careers
              </p>
              <p className="my-[3px] cursor-pointer hover:underline text-[15px]">
                Press Releases
              </p>
              <p className="my-[3px] cursor-pointer hover:underline text-[15px]">
                Amazon Science
              </p>
            </div>

            <div className="m-10">
              <h5 className="my-2 text-[15px] text-white font-bold">
                Connect with Us
              </h5>
              <p className="my-[3px] cursor-pointer hover:underline text-[15px]">
                Facebook
              </p>
              <p className="my-[3px] cursor-pointer hover:underline text-[15px]">
                Twitter
              </p>
              <p className="my-[3px] cursor-pointer hover:underline text-[15px]">
                Instagram
              </p>
            </div>

            <div className="m-10">
              <h5 className="my-2 text-[15px] text-white font-bold">
                Make Money with Us
              </h5>
              <p className="my-[3px] cursor-pointer hover:underline text-[15px]">
                Sell on Amazon
              </p>
              <p className="my-[3px] cursor-pointer hover:underline text-[15px]">
                Sell under Amazon Accelerator
              </p>
              <p className="my-[3px] cursor-pointer hover:underline text-[15px]">
                Protect and Build Your Brand
              </p>
              <p className="my-[3px] cursor-pointer hover:underline text-[15px]">
                Amazon Global Selling
              </p>
              <p className="my-[3px] cursor-pointer hover:underline text-[15px]">
                Become an Affiliate
              </p>
              <p className="my-[3px] cursor-pointer hover:underline text-[15px]">
                Fulfilment by Amazon
              </p>
              <p className="my-[3px] cursor-pointer hover:underline text-[15px]">
                Advertise Your Products
              </p>
              <p className="my-[3px] cursor-pointer hover:underline text-[15px]">
                Amazon Pay on Merchants
              </p>
            </div>

            <div className="m-10">
              <h5 className="my-2 text-[15px] text-white font-bold">
                Let Us Help You
              </h5>
              <p className="my-[3px] cursor-pointer hover:underline text-[15px]">
                COVID-19 and Amazon
              </p>
              <p className="my-[3px] cursor-pointer hover:underline text-[15px]">
                Your Account
              </p>
              <p className="my-[3px] cursor-pointer hover:underline text-[15px]">
                Returns Centre
              </p>
              <p className="my-[3px] cursor-pointer hover:underline text-[15px]">
                100% Purchase Protection
              </p>
              <p className="my-[3px] cursor-pointer hover:underline text-[15px]">
                Amazon App Download
              </p>
              <p className="my-[3px] cursor-pointer hover:underline text-[15px]">
                Amazon Assistant Download
              </p>
              <p className="my-[3px] cursor-pointer hover:underline text-[15px]">
                Help
              </p>
            </div>
          </div>

          <div className="mx-2 h-[1px] bg-slate-700" />

          <div className="flex justify-center py-8">
            <img
              className="w-24 h-6 px-3"
              src="https://zeevector.com/wp-content/uploads/LOGO/Amazon-India-Logo-PNG-White.png"
            />
            <p className="w-20 h-6 px-3 cursor-pointer border rounded">
              English
            </p>
          </div>

          <div className="pb-5">
            <ul className="flex justify-center">
              <li className="text-[14px] hover:underline hover:cursor-pointer p-1">
                Astralia
              </li>
              <li className="text-[14px] hover:underline hover:cursor-pointer p-1">
                Brazil
              </li>
              <li className="text-[14px] hover:underline hover:cursor-pointer p-1">
                Canada
              </li>
              <li className="text-[14px] hover:underline hover:cursor-pointer p-1">
                China
              </li>
              <li className="text-[14px] hover:underline hover:cursor-pointer p-1">
                France
              </li>
              <li className="text-[14px] hover:underline hover:cursor-pointer p-1">
                Germany
              </li>
              <li className="text-[14px] hover:underline hover:cursor-pointer p-1">
                Italy
              </li>
              <li className="text-[14px] hover:underline hover:cursor-pointer p-1">
                Japan
              </li>
              <li className="text-[14px] hover:underline hover:cursor-pointer p-1">
                Mexico
              </li>
              <li className="text-[14px] hover:underline hover:cursor-pointer p-1">
                Netherlands
              </li>
              <li className="text-[14px] hover:underline hover:cursor-pointer p-1">
                Poland
              </li>
              <li className="text-[14px] hover:underline hover:cursor-pointer p-1">
                Singapore
              </li>
              <li className="text-[14px] hover:underline hover:cursor-pointer p-1">
                Spain
              </li>
              <li className="text-[14px] hover:underline hover:cursor-pointer p-1">
                Turkey
              </li>
              <li className="text-[14px] hover:underline hover:cursor-pointer p-1">
                United Arab Emirates
              </li>
            </ul>
            <ul className="flex justify-center">
              <li className="text-[14px] px-1 hover:underline hover:cursor-pointer">
                United Kingdom
              </li>
              <li className="text-[14px] px-1 hover:underline hover:cursor-pointer">
                United State
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center text-[12px] bg-slate-900 text-slate-400">
          <div className="cursor-pointer my-6 mx-14">
            <p>
              <span className=" text-white text-bold">AbeBooks</span> <br />
              Books, art <br />& collectibles
            </p>
            <p className="mt-4">
              <span className=" text-white text-bold">Shopbop</span> <br />
              Desiner <br />
              Fashion Brand
            </p>
          </div>

          <div className="cursor-pointer my-6 mx-14">
            <p>
              <span className=" text-white text-bold">Amazon Web Services</span>
              <br />
              Scalable Cloud <br />
              Computing Services
            </p>
            <p className="mt-4">
              <span className=" text-white text-bold">Amazon Bussiness</span>
              <br />
              Everything for <br />
              Your Bussiness
            </p>
          </div>

          <div className="cursor-pointer my-6 mx-14">
            <p>
              <span className=" text-white text-bold">Audible</span> <br />
              Download
              <br />
              Audio Book
            </p>
            <p className="mt-4">
              <span className=" text-white text-bold">Prime Now</span> <br />2
              Hour delivery
              <br />
              on every Items
            </p>
          </div>
          <div className="cursor-pointer my-6 mx-14">
            <p>
              <span className=" text-white text-bold">DPReview</span> <br />
              Digital <br />
              Photography
            </p>
            <p className="mt-4">
              <span className=" text-white text-bold">Amazon prime music</span>
              <br />
              90 Million songs ad-free <br />
              over 15 Million podcast episode
            </p>
          </div>

          <div className="cursor-pointer my-6 mx-14">
            <p>
              <span className=" text-white text-bold">IMDb</span> <br />
              Movies, TV <br />& Celebrities
            </p>
          </div>
        </div>

        <div className="pb-6 flex flex-col items-center justify-center text-[12px] bg-slate-900 text-white">
          <p>Conditions of Use & Sale Privacy Notice Interest-Based Ads </p>
          <p>© 1996-2023, Amazon.com, Inc. or its affiliates</p>
        </div>
      </footer>
    </div>
  );
};

export default MainOffers;
