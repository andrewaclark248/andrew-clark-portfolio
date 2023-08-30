import NavBar from './NavBar'
import { Outlet } from "react-router-dom";



function Layout() {

    return (
      <div className='container-fluid bg-light' style={{height: "100vh"}}>
        <div className='row'>
          <NavBar />
        </div>
        <div className="row pt-4">
          <div className='col'>
            <h1 className="display-6">Andrew Clark Portfolio</h1>
          </div>
        </div>
        <div className="row">
            <Outlet />
        </div>
      </div>
    );
}

export default Layout;