import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

import "./SignIn.css";

function Signin() {


  const { login } = useAuth();

  const navigate = useNavigate();



  const [formData, setFormData] = useState({

    email:"",
    password:"",

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



    const user = {

      id: Date.now(),

      email: formData.email,

    };



    login(user);



    navigate("/");


  };




  return (

    <div className="signin-page">


      <form 
        className="signin-form"
        onSubmit={handleSubmit}
      >


        <h1>
          Welcome Back
        </h1>



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




        <button type="submit">

          Login

        </button>




        <p>

          Don't have an account?

          <Link to="/signup">

            Sign Up

          </Link>

        </p>



      </form>


    </div>

  );


}


export default Signin;