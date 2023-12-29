import React, { useContext, useState } from "react";
import style from "../loginAndRegister.module.css";
import FormElemet from "../FormElement";
import { validate } from "../../../tools/validateForms";
import axios from "axios";
import { LoadingContext } from "../../../context/context";
import { AlertContext } from "../../../components/Alert/Alert";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const inputs = [
  { name: "email", type: "email", label: "Email" },
  { name: "password", type: "password", label: "Password" },
];
const dataKey = {
  password: "",
  email: "",
};
const Login = () => {
  const [formData, setFormData] = useState(dataKey);
  const [error, setError] = useState(dataKey);
  // loading context
  const { changeStatus } = useContext(LoadingContext);
  const { showAlert } = useContext(AlertContext);
  // hook localstorage

  const navigate = useNavigate();

  const changeValue = (e) => {
    // validate value
    //return object {value , error}
    const validateData = validate(e.target.value, e.target.name);
    // set Error
    setError((prev) => {
      return {
        ...prev,
        [e.target.name]: validateData.error,
      };
    });
    // set Value
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: validateData.value,
      };
    });
  };
  // submited form || login
  const loginUser = (e) => {
    e.preventDefault();
    // show loading
    changeStatus();
    axios
      .post("/api/login", {
        email: formData.email,
        password: formData.password,
      })
      .then((resp) => {
        // check Status code
        if (resp.status === 200) {
          const token = jwtDecode(resp.data.data);

          // set Token in localStorage
          localStorage.setItem("token", JSON.stringify(resp.data.data));
          // stop loading
          changeStatus();
          // check confirm email
          if (token.user.isConfirmed) {
            // alert success loagin
            showAlert("success", resp.data.message);
          } else {
            showAlert(
              "warning",
              `${resp.data.message} , but you did not confirm the email`
            );
          }
          navigate("/");
        }
      })
      .catch((err) => {
        changeStatus();
        // alert error
        showAlert("error", err.response.data.message);
      });
  };

  return (
    <div className={style.register}>
      <header>
        <h3> Log in </h3>
      </header>
      <FormElemet
        error={error}
        valueInputs={formData}
        changeValue={changeValue}
        submited={loginUser}
        inputs={inputs}
        type="login"
      />
    </div>
  );
};

export default Login;
