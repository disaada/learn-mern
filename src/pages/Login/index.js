import React from "react";
import {Input, Button, Gap, Link} from "@components";
import {LoginBg} from "@assets"

const Login = () => {
  return (
    <div className="main-page">
      <div className="left">
        <img src={LoginBg} alt="" className="bg-image" />
      </div>
      <div className="right">
        <p className="title">Login</p>
        <Input label="Email" placeholder="Email" />
        <Gap height={18} />
        <Input label="Password" placeholder="Password" />
        <Gap height={20} />
        <Button title="Login" />
        <Gap height={100} />
        <Link title="Belum punya akun? Daftar" />
      </div>
    </div>
  );
};

export default Login;
