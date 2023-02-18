import { Outlet, Link } from 'react-router-dom';

// function layout()
// {}

const Layout= () => {
	return (

            <>

              <nav className="navbar">

                <ul className="navbar-link">
                <li>

                   <Link to="/">Home</Link> 
                
                </li>

                <li>

                   <Link to="/feedback">Feedback</Link> 
                
                </li>
                <li>

                   <Link to="/review">Reviews</Link> 
                
                </li>

                <li>

                   <Link to="/login">Login</Link> 
                
                </li>
                <li>

                   <Link to="/register">Register</Link> 
                
                </li>
                <li>

                   <Link to="/contact">Conatct</Link> 
                
                </li>

                </ul>
              </nav>
              <Outlet/>
            </>

		)
}

export default Layout