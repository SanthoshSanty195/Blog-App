import { useState } from "react";
import { message } from 'antd'
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(null);
  const navi = useNavigate()

  const user = props.registeredData.find((user) => user.username === username && user.password === password);

  const handleLogin = () => {
    if(user){
      message.success(`You Logged in ${user.name}`);
      navi("/")
    }else{
      setLoginError("Invalid username or password. Please try again.");
    }

  };

  return (
    <>
    <div className="container" style={{ paddingBottom: "230px"}}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5" style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",borderColor:"darkgrey" }}>
            <h2 className="card-header d-flex justify-content-center fw-bold" style={{ backgroundColor: "green", color: "black" }}>Login</h2>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label fw-bold">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Enter username"
                    value={username}
                    style={{borderColor:"black"}}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label fw-bold">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter password"
                    value={password}
                    style={{borderColor:"black"}}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {loginError && (
                  <div className="alert alert-danger">{loginError}</div>
                )}
                <div className="d-flex justify-content-center">
                <button
                  type="button"
                  className="btn btn-dark"
                  style={{ color: "white" }}
                  onClick={handleLogin}
                >
                <i className="fa fa-sign-in me-2"></i>
                  Login
                </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default Login;