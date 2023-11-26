import { useState } from "react";
import { message } from 'antd';

const Register = (props) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = () => {
    if (!name) {
      setErrorMessage("Please fill your name.");
    }else if(!username){
      setErrorMessage("Please fill your username.");
    }else if(!password){
      setErrorMessage("Plase fill your password")
    }else {
        let obj = {
            name: name,
            username: username,
            password: password
        }
        props.setRegisteredData([...props.registeredData, obj])
        setErrorMessage("")
        message.success("Registered Succesfully")
    }
  };

  return (
    <>
    <div className="container" style={{ paddingBottom: "150px"}}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5" style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)" }}>
            <h2 className="card-header d-flex justify-content-center fw-bold" style={{ backgroundColor: "green", color: "black" }}>Register</h2>
            <div className="card-body">
            {errorMessage && (
                  <div className="alert alert-danger" role="alert">
                    {errorMessage}
                  </div>
                )}
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-bold">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your name"
                    value={name}
                    style={{borderColor:"black"}}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label fw-bold">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Enter a username"
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
                    placeholder="Enter a password"
                    value={password}
                    style={{borderColor:"black"}}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="d-flex justify-content-center">
                <button
                  type="button"
                  className="btn btn-dark"
                  style={{ color: "white" }}
                  onClick={()=>{handleRegister()}}
                >
                <i className="fa fa-user-plus me-1"></i>
                  Sign Up
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

export default Register;