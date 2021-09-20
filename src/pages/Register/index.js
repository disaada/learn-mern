import React from "react";
import './register.scss'
import {RegisterBg} from "@assets"
import {Input, Button, Gap, Link} from "@components";
import { useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory()

  return (
    <div className="main-page">
      <div className="left">
        <img src={RegisterBg} alt="" className="bg-image" />
      </div>
      <div className="right">
        <p className="title">Form Register</p>
        <Input label="Full Name" placeholder="Full Name" />
        <Gap height={18} />
        <Input label="Email" placeholder="Email" />
        <Gap height={18} />
        <Input label="Password" placeholder="Password" />
        <Gap height={20} />
        <Button title="Register" />
        <Gap height={100} />
        <Link onClick={() => history.push('/login')} title="Kembali ke Login" />
      </div>
    </div>
  );
};

export default Register;
