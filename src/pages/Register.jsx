import React, { use } from "react";
import { Link } from "react-router";
import AuthContext from "../Context/AuthContext";

const Register = () => {
  const { signUpUser, updateUser } = use(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoURL = e.target.url.value;
    const name = e.target.name.value;
    console.log({ email, password, photoURL, name, signUpUser });

    signUpUser(email, password)
      .then((result) => {
        console.log(result.user);
        // navigate(location.state);
        updateUser({
          displayName: name,
          photoURL: photoURL,
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            console.log(error);
          });
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl border-gray-300">
      <div className="card-body">
        <form onSubmit={handleRegister}>
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Name"
              required
            />
            <label className="label">Photo URL</label>
            <input
              type="text"
              name="url"
              className="input"
              placeholder="Photo URL"
              required
            />
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
              required
            />
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
              required
            />

            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
          </fieldset>
        </form>
        <p>
          Have you already An Account ?{" "}
          <Link
            to={`/auth/login`}
            className="text-red-500 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
