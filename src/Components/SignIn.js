import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
/* import { useDispatch, useSelector } from "react-redux";
import { userAuth } from "../redux/action"; */
import axios from "axios";
const SignIn = () => {
  const navigate = useNavigate();
  /*   const dispatch = useDispatch(); */

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const submitHandler = ({ username, password }) => {
    console.log(username, password);
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_AUTH_URL}/auth/signin`,
      data: {
        username,
        password,
      },
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        navigate("/Dashboard");
        window.alert("Success...");
        console.log(res);
      })
      .catch((err) => {
        window.alert("User dont find or Password is not correct");
      });
  };

  /*   const User = useSelector((state) => state.Auth.User);
  console.log(User);
  useEffect(() => {
    if (User) {
      navigate("/Dashboard");npm i @mui/material
    }
  }, []);
 */
  return (
    <div className="container pt-4 h-75">
      <div className="d-flex justify-content-center align-item-center h-100">
        <form
          className=" d-flex flex-column gap-3 justify-content-center align-item-center bg-light p-5 rounded"
          onSubmit={handleSubmit(submitHandler)}
        >
          {/*   username */}
          <Controller
            name="username"
            control={control}
            defaultValue=""
            rules={{
              required: true,
              maxLength: 20,
              minLength: 4,
            }}
            render={({ field }) => (
              <TextField
                id="userNamel"
                label="UserName"
                variant="outlined"
                inputProps={{ type: "text" }}
                error={Boolean(errors.username)}
                helperText={errors.username ? "userName is required" : ""}
                {...field}
              ></TextField>
            )}
          ></Controller>

          {/*password*/}
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{
              required: true,
              maxLength: 12,
              minLength: 6,
            }}
            render={({ field }) => (
              <TextField
                id="password"
                label="Password"
                variant="outlined"
                inputProps={{ type: "password" }}
                error={Boolean(errors.password)}
                helperText={
                  errors.password
                    ? errors.password.type === "maxLength" ||
                      errors.password.type === "minLength"
                      ? "password must contain between 6 and 12 letters or numbers."
                      : "password is required"
                    : ""
                }
                {...field}
              ></TextField>
            )}
          ></Controller>
          <p className="text-secondary">
            Dont Have A Account?{" "}
            <span
              className="text-primary "
              role="button"
              onClick={() => {
                navigate("/SignUp");
              }}
            >
              Sign Up
            </span>
          </p>
          <button className="btn bg-primary text-white" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
