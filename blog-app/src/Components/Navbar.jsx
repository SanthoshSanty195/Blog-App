import { useState } from "react";
import { useNavigate } from "react-router-dom";



function Navbar() {
    let [isLogged, setIsLogged] = useState(false)
    let navi = useNavigate()




    return (
        <nav className="navbar navbar-expand-lg py-3 shadow-sm" style={{background:"green"}}>
        <div className="container">
            <div className="navbar-brand fw-bold fs-4"  onClick={()=>navi("/")} >Blogify</div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <div className="nav-link active fw-bold" aria-current="page" onClick={()=>navi("/")} style={{ fontSize: "18px" }}>Home</div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link fw-bold" onClick={()=>navi("/blog")} style={{ fontSize: "18px" }}>My Blog</div>
                    </li>
                </ul>
                <div className="buttons">
                    <div className="btn btn-dark" onClick={()=>navi("/login")}>
                        <i className="fa fa-sign-in me-1"></i>Login</div>
                    <div className="btn btn-dark ms-2" onClick={()=>navi("/register")}>
                        <i className="fa fa-user-plus me-1"></i>Register</div>
                    <div className="btn btn-dark ms-2" onClick={()=>navi("/")}>
                        <i className="fa fa-sign-out me-1"></i>Logout</div>
                </div>
            </div>
        </div>
    </nav>
    );
  }
export default Navbar;