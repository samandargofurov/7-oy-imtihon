import { useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Login() {
  const [users, setUsers] = useState([]);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  function validate(email, password) {
    if (email.value.trim().length < 3) {
      alert('Email has an error');
      return false;
    }

    if (password.value.trim().length < 3) {
      alert('Password has an error');
      return false;
    }

    return true;
  }

  function getUsers() {
    let users = [];

    if (localStorage.getItem('users')) {
      users = JSON.parse(localStorage.getItem('users'));
    }

    return users;
  }

  function handleClick() {
    const isValid = validate(emailRef.current, passwordRef.current);

    if (isValid) {
      const user = {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      };

      let userData = users.find(user => user.email === user.email && user.password === user.password);

      if (userData) {
        navigate('/');
      } else {
        let copied = [...users, user];
        localStorage.setItem('users', JSON.stringify(copied));
        setUsers(copied);
        navigate('/');
      }
    }

    emailRef.current.value = '';
    passwordRef.current.value = '';
  }

  return (
    <>
      <div className="container w-96 mx-auto">
        <div className="shadow-2xl w-[350px] mt-20 rounded-2xl p-8">
          <h1 className="flex justify-center text-3xl font-semibold">Login</h1>
          <div className="flex flex-col gap-6 pt-10">
            <div className="input input-bordered flex items-center gap-2">
              <label className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  ref={emailRef}
                  type="text"
                  className="grow"
                  placeholder="Email"
                />
              </label>
            </div>

            <div className="input input-bordered flex items-center gap-2">
              <label className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  ref={passwordRef}
                  type="password"
                  className="grow"
                  placeholder="Password"
                />
              </label>
            </div>
          </div>
          <button
            onClick={handleClick}
            className="btn btn-info w-full text-white mt-10"
          >
            LOGIN
          </button>
          <div className="flex justify-center gap-5 mt-3">
            <p className="text-sm">Not a member yet?</p>
            <NavLink
              to="/register"
              className="text-info text-sm hover:underline"
            >
              Register
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
