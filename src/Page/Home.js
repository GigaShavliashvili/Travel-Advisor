import React from "react";
import { Sidebar, SignIn, SignUp } from "../Components";
import "../App.css";
const Home = () => {
  const Slider = [
    {
      img: "/s1.jpg",
      text: "slider1",
    },
    {
      img: "/s2.jpg",
      text: "slider2",
    },
    {
      img: "/s3.jpg",
      text: "slider3",
    },
    {
      img: "/s4.jpg",
      text: "slider4",
    },
  ];

  return (
    <div className="vh-100 d-flex">
      <div>
        {" "}
        <Sidebar />
      </div>

      <div
        id="carouselExampleDark"
        className="carousel  carousel-dark slide w-100 h-100 "
        data-bs-ride="carousel"
        data-bs-interval="false"
        data-pause="hover"
      >
        <div className="carousel-indicators">
          {" "}
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
          ></button>
        </div>
        <div className="carousel-inner h-100">
          <div className="carousel-item active">
            <div
              className=" d-flex  align-items-center"
              style={{
                backgroundImage: `url(/s1.jpg)`,
                height: "100vh",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className="text-center text-light w-100">
                <h1 className="display-3">Welcome to Travel Advisor</h1>
                <h3 className="display-6">Sign Up and Find Your Fav Place</h3>
                <div className="d-flex justify-content-center gap-3 mt-4">
                  <button
                    type="button"
                    className="btn button btn-primary text-light ps-4 pe-4"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide="prev"
                  >
                    Sign Up
                  </button>
                  <h4 className="fw-light">Or</h4>
                  <button
                    type="button"
                    className="btn button btn-primary text-light ps-4 pe-4"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide="next"
                  >
                    Sign In
                  </button>
                </div>
              </div>
              <div></div>
            </div>
          </div>
          <div className="carousel-item ">
            <div
              className=" d-flex  align-items-center"
              style={{
                backgroundImage: `url(/s2.jpg)`,
                height: "100vh",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className="text-center text-light w-100">
                <div>
                  <SignIn />
                </div>
              </div>
              <div></div>
            </div>
          </div>
          <div className="carousel-item ">
            <div
              className=" d-flex  align-items-center"
              style={{
                backgroundImage: `url(/s3.jpg)`,
                height: "100vh",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className="text-center text-light w-100">
                <div>
                  <SignUp />
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
