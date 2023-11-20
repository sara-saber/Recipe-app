import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div>
      <nav>
        <div className="wrapper">
          <div className='wrapperdiv'>
            <a className="wrapperbtn" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
              =
            </a>
          </div>

          <div className="logo"><Link to="/">Recipe Book Application</Link></div>

          <ul className="nav-links">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/add" className="desktop-item"  > Add Recipe</Link></li>
            <li><Link to="/recipes" className="desktop-item"  >Recipes</Link></li>
            {/* <li><Link to="/recipes" className="desktop-item"  > Recipes</Link></li> */}
          </ul>

        </div>
      </nav>

      <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel"><Link to="/">Recipe Book</Link> </h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="nav-links">
            <li style={{ backgroundColor: "#fff" }}><Link to="/home">Home</Link></li>
            <li style={{ backgroundColor: "#fff" }}><Link to="/add" className="desktop-item"  > Add Recipe</Link></li>
          </ul>
        </div>
      </div>
    </div>

  );
}

export default Header;