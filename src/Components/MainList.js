import React, { useState } from "react";
import "../App.css";

const MainList = ({ filter }) => {
  const { setFilterRating, setFilterPrice, setFilterDistance, setPlaceName } =
    filter;

  const submitHandler = (e) => {
    e.preventDefault();
    setPlaceName(e.target[0].value);
  };
  return (
    <div className="p-2 pb-3 ps-4 pe-4 shadow">
      <div className="row align-itmes-center">
        <div className="col-6">
          <Menu />
        </div>
        <div className="col-6 text-end">
          <button
            type="button "
            className="btn ps-3 pe-3 p-1 fs-7 fw-light btn-primary"
          >
            Route Planner
          </button>
        </div>
      </div>
      <div className="mt-2">
        <form
          className="d-flex align-itmes-center border-bottom "
          onSubmit={submitHandler}
        >
          <div className=" mt-2">
            <Search />
          </div>

          <input
            className=" form-control w-100 border-0 form-control shadow-none fs-5  "
            type="search"
            placeholder="Search ..."
          />
        </form>
      </div>
      <div className="d-flex gap-2 mt-3">
        <select
          className=" w-100 rounded border border-gray ps-2 pe-2 p-1 fs-8  shadow-none "
          aria-label="Default select example"
          style={{ color: "gray" }}
          onChange={(e) => {
            setFilterRating(e.target.value);
          }}
        >
          <option defaultValue>Rating</option>
          <option value="1">⭐</option>
          <option value="2">⭐⭐</option>
          <option value="3">⭐⭐⭐</option>
          <option value="4">⭐⭐⭐⭐ </option>
          <option value="5">⭐⭐⭐⭐⭐</option>
        </select>
        <select
          className=" w-100 rounded border border-gray ps-2 pe-2 p-1 fs-8  shadow-none"
          aria-label="Default select example"
          style={{ color: "gray" }}
          onChange={(e) => {
            setFilterDistance(e.target.value);
          }}
        >
          <option defaultValue>Distance</option>
          <option value="1">Lass 1️⃣ (Km)</option>
          <option value="5">Lass 5️⃣ (Km)</option>
          <option value="10">Lass 1️⃣0️⃣ (Km)</option>
          <option value="50">Lass 5️⃣0️⃣ (Km)</option>
        </select>
        <select
          className="  w-100 rounded border border-gray ps-2 pe-2 p-1 fs-8  shadow-none"
          aria-label="Default select example"
          style={{ color: "gray" }}
          onChange={(e) => {
            setFilterPrice(e.target.value);
          }}
        >
          <option defaultValue>Price</option>
          <option value="1-5">1$ - 5$</option>
          <option value="10-50">10$ - 50$</option>
          <option value="50-100">50$ - 100$</option>
          <option value="100-500">100$ - 500$</option>
          <option value="500-1000">500$ - 1000$</option>
        </select>
      </div>
    </div>
  );
};

export default MainList;

const Menu = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="gray"
      className="bi bi-box-arrow-right"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
      />
      <path
        fillRule="evenodd"
        d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
      />
    </svg>
  );
};

const Search = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="#4285F4"
      className="bi bi-search"
      viewBox="0 0 16 16"
    >
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
    </svg>
  );
};
