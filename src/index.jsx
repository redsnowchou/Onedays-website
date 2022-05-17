import React from "react";
import ReactDOM from "react-dom";
import Rout from "Rout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "css/app.scss";
import "css/style.scss";

import "commons/auth";

ReactDOM.render(
  <div>
    <ToastContainer
      position="top-right"
      autoClose={100}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
    <Rout />
  </div>,
  document.getElementById("root")
);
