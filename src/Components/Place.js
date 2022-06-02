import React from "react";
import "../App.css";
const Place = ({ el }) => {
  const photo = el.photo ? el.photo : "";
  const img = photo.images ? photo.images : "";

  return (
    <>
      {img ? (
        <div className="card shadow p-1 mLocation" style={{ width: "5.5rem" }}>
          <p className="text-secodary p-0 m-0">{el.name}</p>
          <img
            className="card-img-top p-0 mt-1 m-0"
            src={img.medium ? img.medium.url : img.small.url}
            alt="Card image cap"
          />
          <div className="d-flex gap-2 align-items-center ">
            <div className="card-body p-0 m-0 mt-1 ">
              <div className="d-flex align-items-center">
                ⭐<p className="p-0 mt-1 me-1 m-0">{el.rating}</p>
              </div>
              <div
                className={
                  ("mt-1 ",
                  el.open_now_text === "Open Now" || el.is_closed === false
                    ? "text-success"
                    : "text-danger")
                }
              >
                {el.open_now_text === "Open Now" || el.is_closed === false
                  ? "Open"
                  : "Close"}
              </div>
            </div>
            <div className="mt-2">
              {el.price
                ? el.price
                : el.offer_group
                ? el.offer_group.lowest_price
                : "2.5$"}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Place;

const Star = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="orange"
      className="bi bi-star-fill"
      viewBox="0 0 16 16"
    >
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    </svg>
  );
};
