import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

import "./Signup.css";


function Signup() {

  const { login } = useAuth();

  const navigate = useNavigate();


  const [formData, setFormData] = useState({

    name: "",
    email: "",
    password: "",
    confirmPassword: "",

  });



  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,

    });

  };



  const handleSubmit = (
    e: React.FormEvent
  ) => {

    e.preventDefault();



    if(formData.password !== formData.confirmPassword){

      alert("Passwords do not match");

      return;

    }



    const newUser = {

      id: Date.now(),

      name: formData.name,

      email: formData.email,

    };



    login(newUser);


    navigate("/");

  };



  return (

    <div className="signup-page">


      <form
        className="signup-form"
        onSubmit={handleSubmit}
      >


        <h1>
          Create Account
        </h1>



        <input

          type="text"

          name="name"

          placeholder="Full Name"

          value={formData.name}

          onChange={handleChange}

          required

        />



        <input

          type="email"

          name="email"

          placeholder="Email"

          value={formData.email}

          onChange={handleChange}

          required

        />



        <input

          type="password"

          name="password"

          placeholder="Password"

          value={formData.password}

          onChange={handleChange}

          required

        />



        <input

          type="password"

          name="confirmPassword"

          placeholder="Confirm Password"

          value={formData.confirmPassword}

          onChange={handleChange}

          required

        />



        <button type="submit">

          Create Account

        </button>




        <p>

          Already have an account?

          <Link to="/signin">

            Login

          </Link>

        </p>



      </form>


    </div>

  );

}


export default Signup;