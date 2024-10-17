import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="nav-logo" to="/">
          <div>logo</div>
        </Link>
        <div className="nav-link-container">
          <Link className="nav-link" to="/shop">
            This is Shop Link
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
