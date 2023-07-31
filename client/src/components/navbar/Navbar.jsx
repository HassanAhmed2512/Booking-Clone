import { Link } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {

  const { user ,dispatch} = useContext(AuthContext);

  const handleLogout =()=>{

    dispatch({ type: "LOGOUT" });
    
  }

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">BookForMe</span>
        </Link>

      {user ?( 
             <div className="navItems">
              <span>
               Welcome  {user}
              </span>
             <Link to="/register" style={{ color: "inherit", textDecoration: "none" }}>
             <button className="navButtom" onClick={handleLogout} > Logout </button>
             </Link>
           
           </div>
       ) : (
      <div className="navItems">
          <Link to="/register" style={{ color: "inherit", textDecoration: "none" }}>
          <button className="navButtom"> Register </button>
          </Link>
          <Link to="/login" style={{ color: "inherit", textDecoration: "none" }}>
          <button className="navButtom"> Login </button>
          </Link>
        </div>
        )}

      </div>
    </div>
  );
};

export default Navbar;
