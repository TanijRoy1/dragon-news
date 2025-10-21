import React, { use } from "react";
import { Link } from "react-router";
import AuthContext from "../Context/AuthContext";

const Login = () => {
    const {signInUser} = use(AuthContext);
    const handleLogin = (e) => {
        e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInUser(email, password)
      .then(res => {
        console.log(res.user)
      })
      .catch(error => {
        console.log(error);
      })
    }
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl border border-gray-300">
      <div className="card-body">
        <form onSubmit={handleLogin}>
            <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" name="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name="password" className="input" placeholder="Password" />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button type="submit" className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        </form>
        <p>Don’t Have An Account ? <Link to={`/auth/register`} className="text-red-500 font-semibold hover:underline">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
