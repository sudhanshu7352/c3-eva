import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <button className="home" >
          <Link to="/" ></Link>
          Home
        </button>
        <button className="mystery">
        <Link to="/mystery" ></Link>
        mystery
        </button>
        <button className="technology">
        <Link to="/technology" ></Link>
        technology
        </button>
        <button className="mythology" >
        <Link to="/mythology" ></Link>
        mythology
        </button>
        <button className="history">
        <Link to="/history" ></Link>
        history
        </button>

        {/* Populate 5 buttons with EXACT same classnames as of their routes name */}
        {/* Example: 
            <button className="history"> Link to history here  </button>  */}
        {/* Home component will have `/` route and classname as `home`  */}
      </div>
    </>
  );
};
