import { Link } from "react-router-dom";
import { Section } from "../Section/Section";

export const Navbar = () => {
  return (
    <>
      <div className="navbar" style={{justifyContent:"space-around",display:"flex",background:"skyblue",padding:"20px"}}>
        <button className="home"  >
          <Link to="/" >{"home"}</Link>
          {/* Home */}
        </button>
        <button className="mystery" >
        <Link to="/books/mystery" > {"mystery"}</Link>
        
        </button>
        <button className="technology">
        <Link to="/books/technology" >technology</Link>
        
        </button>
        <button className="mythology" >
        <Link to="/books/mythology" >mythology</Link>
        
        </button>
        <button className="history">
        <Link to="/books/history" > history</Link>
       
        </button>

        {/* Populate 5 buttons with EXACT same classnames as of their routes name */}
        {/* Example: 
            <button className="history"> Link to history here  </button>  */}
        {/* Home component will have `/` route and classname as `home`  */}
      </div>
    </>
  );
};
