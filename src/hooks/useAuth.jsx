import { useContext, useEffect, useState } from "react";
import { AlertContext } from "../components/Alert/Alert";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useAuth = (token) => {
  const { showAlert } = useContext(AlertContext);
  const navigate = useNavigate();
  const [check, setCheck] = useState(null);
   useEffect(() => {
    if (token) {
      axios
        .get("/api/getUser")
        .then((resp) => {
          if (resp.data.message === "successfull") {
            setCheck(true);
            navigate("/");
          }
        })
        .catch((err) => {
          setCheck(false);
          console.log("error");

          showAlert("error", err.response.data.message);
          localStorage.removeItem("token");
          navigate("/signup/login");
        });
    } else {
      console.log("error 2 ");
      setCheck(false);
      navigate("/signup/login");
    }
  },[localStorage.getItem('token')])
  return [check];
};

export { useAuth };
