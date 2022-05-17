import React, { UseState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [Email, setEmail] = React.useState("");
  const [Password, setPassword] = React.useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    //1.阻止默認事件行為
    event.preventDefault();
    //2.獲取表單數據
    console.log(Email, Password);
    //3.處理登錄邏輯
    //4.跳轉到首頁視圖
    navigate("/");
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="login-wrapper" onSubmit={handleSubmit}>
      <form className="box login-box">
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Email"
              name="email"
              value={Email}
              onChange={handleChangeEmail}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input
              className="input"
              type="password"
              placeholder="Password"
              name="password"
              value={Password}
              onChange={handleChangePassword}
            />
          </div>
        </div>
        <div className="control">
          <button className="button is-fullwidth is-primary">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
