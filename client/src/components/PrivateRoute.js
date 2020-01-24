import React, { useState, useEffect } from "react";
import Axios from "axios";
import { withRouter } from "react-router-dom";

const PrivateRoute = props => {
  const [login, setLogin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return props.history.push("/login");

    // cek token
    Axios.get("/auth/cek-token", { headers: { Authorization: `Bearer ${token}` } })
      .then(res => res.data)
      .then(data => {
        if (data !== "Token Valid!") {
          console.log(data);
          localStorage.removeItem("token");
          setLogin(false);
          props.history.push("/login");
        }

        setLogin(true);
      })
      .catch(err => {
        localStorage.removeItem("token");
        setLogin(false);
        props.history.push("/login");
      });

    // eslint-disable-next-line
  }, []);

  if (login) {
    return <>{props.children}</>;
  } else {
    return <>Loading...</>;
  }
};

export default withRouter(PrivateRoute);
