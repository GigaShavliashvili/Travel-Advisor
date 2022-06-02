import React from "react";
import { useLocation, Link, useParams } from "react-router-dom";
const Sidebar = () => {
  const { pathname } = useLocation();
  const params = useParams();

  return (
    <div
      className="d-flex flex-column flex-shrink-0 bg-light h-100 s"
      style={{ width: "4.5rem" }}
    >
      <a
        href="/"
        className="d-block m-auto  link-dark text-decoration-none mt-4"
        title=""
        data-bs-toggle="tooltip"
        data-bs-placement="right"
        data-bs-original-title="Icon-only"
      >
        <Logo />
      </a>
      <div className="h-100 d-flex ">
        <ul className="nav nav-pills nav-flush m-auto flex-column  text-center h-50  justify-content-around">
          <li className="nav-item">
            <Link to="/">
              <Home color={pathname === "/" ? "#4285F4" : "gray"} />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Map/restaurants">
              <Rest color={params.id === "restaurants" ? "#4285F4" : "gray"} />
            </Link>
          </li>

          <li className="nav-item">
            {" "}
            <Link to="/Map/hotels">
              <Hotel color={params.id === "hotels" ? "#4285F4" : "gray"} />
            </Link>
          </li>
          <li className="nav-item">
            {" "}
            <Link to="/Map/attractions">
              <Ent color={params.id === "attractions" ? "#4285F4" : "gray"} />
            </Link>
          </li>
        </ul>
      </div>
      <div className="dropdown border-top">
        <a
          href="#"
          className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle"
          id="dropdownUser3"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8kEDK_4Ku1I6-ezlMKBwFYOgJONsmkJnBmA&usqp=CAU"
            alt="mod"
            className="rounded-circle"
            width="30"
            height="30"
          />
        </a>
        <ul
          className="dropdown-menu text-small shadow"
          aria-labelledby="dropdownUser3"
        >
          <li>
            <a className="dropdown-item" href="#">
              New project...
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <a className="dropdown-divider"></a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

const Home = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill={color}
      className="bi bi-house-door-fill"
      viewBox="0 0 16 16"
    >
      <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" />
    </svg>
  );
};
const Rest = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill={color}
      className="bi bi-cloud-fog"
      viewBox="0 0 16 16"
    >
      <path d="M3 13.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm10.405-9.473a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 12H13a3 3 0 0 0 .405-5.973zM8.5 3a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 3z" />
    </svg>
  );
};
const Hotel = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill={color}
      className="bi bi-house-heart-fill"
      viewBox="0 0 16 16"
    >
      <path d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.707L8 2.207 1.354 8.853a.5.5 0 1 1-.708-.707L7.293 1.5Z" />
      <path d="m14 9.293-6-6-6 6V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9.293Zm-6-.811c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.691 0-5.018Z" />
    </svg>
  );
};
const Ent = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill={color}
      className="bi bi-emoji-smile-fill"
      viewBox="0 0 16 16"
    >
      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zM4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z" />
    </svg>
  );
};

const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="#4285F4"
      class="bi bi-compass-fill"
      viewBox="0 0 16 16"
    >
      <path d="M15.5 8.516a7.5 7.5 0 1 1-9.462-7.24A1 1 0 0 1 7 0h2a1 1 0 0 1 .962 1.276 7.503 7.503 0 0 1 5.538 7.24zm-3.61-3.905L6.94 7.439 4.11 12.39l4.95-2.828 2.828-4.95z" />
    </svg>
  );
};
