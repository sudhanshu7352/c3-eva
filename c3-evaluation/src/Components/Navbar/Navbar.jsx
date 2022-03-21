import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <button className="home" >
          <Link to="/" >{"home"}</Link>
          {/* Home */}
        </button>
        <button className="mystery">
        <Link to="/mystery" > mystery</Link>
        
        </button>
        <button className="technology">
        <Link to="/technology" >technology</Link>
        
        </button>
        <button className="mythology" >
        <Link to="/mythology" >mythology</Link>
        
        </button>
        <button className="history">
        <Link to="/history" > history</Link>
       
        </button>

        {/* Populate 5 buttons with EXACT same classnames as of their routes name */}
        {/* Example: 
            <button className="history"> Link to history here  </button>  */}
        {/* Home component will have `/` route and classname as `home`  */}
      </div>
    </>
  );
};
