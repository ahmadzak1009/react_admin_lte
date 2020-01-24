import React from "react";
import { withRouter, Link } from "react-router-dom";

const Navbar = props => {
  const handleLogout = e => {
    e.preventDefault();
    localStorage.removeItem("token");
    props.history.push("/login");
  };

  return (
    <>
      {/* <!-- Navbar --> */}
      <nav class="main-header navbar navbar-expand navbar-white navbar-light">
        {/* <!-- Left navbar links --> */}
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" data-widget="pushmenu" href="#">
              <i class="fas fa-bars"></i>
            </a>
          </li>
          <li class="nav-item d-none d-sm-inline-block">
            <a href="/" class="nav-link">
              Home
            </a>
          </li>
          <li class="nav-item d-none d-sm-inline-block">
            <a href="/" class="nav-link">
              Contact
            </a>
          </li>
        </ul>

        {/* <!-- SEARCH FORM --> */}
        <form class="form-inline ml-3">
          <div class="input-group input-group-sm">
            <input
              class="form-control form-control-navbar"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <div class="input-group-append">
              <button class="btn btn-navbar" type="submit">
                <i class="fas fa-search"></i>
              </button>
            </div>
          </div>
        </form>

        {/* <!-- Right navbar links --> */}
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#">
              <i class="fas fa-th-large"></i>
            </a>
          </li>
        </ul>
      </nav>
      {/* <!-- /.navbar --> */}

      {/* <!-- Main Sidebar Container --> */}
      <aside class="main-sidebar sidebar-dark-primary elevation-4">
        {/* <!-- Brand Logo --> */}
        <a href="/" class="brand-link">
          <img
            src="./AdminLTE/dist/img/AdminLTELogo.png"
            alt="AdminLTE Logo"
            class="brand-image img-circle elevation-3"
            style={{ opacity: 0.8 }}
          />
          <span class="brand-text font-weight-light">AdminLTE 3</span>
        </a>

        {/* <!-- Sidebar --> */}
        <div class="sidebar">
          {/* <!-- Sidebar user (optional) --> */}
          <div class="user-panel mt-3 pb-3 mb-3 d-flex">
            <div class="image">
              <img
                src="./AdminLTE/dist/img/user2-160x160.jpg"
                class="img-circle elevation-2"
                alt="User Image"
              />
            </div>
            <div class="info">
              <a href="#" class="d-block">
                Ahmad Zaki
              </a>
            </div>
          </div>

          {/* <!-- Sidebar Menu --> */}
          <nav class="mt-2">
            <ul
              class="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* <!-- Add icons to the links using the .nav-icon class */}
              {/* with font-awesome or any other icon font library --> */}
              <li class="nav-item">
                <Link to="/" class="nav-link">
                  <i class="nav-icon fas fa-th"></i>
                  <p>Dashboard</p>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/contact" class="nav-link">
                  <i class="nav-icon fas fa-envelope"></i>
                  <p>Contact</p>
                </Link>
              </li>
              <li class="nav-item" onClick={handleLogout}>
                <Link to="/" class="nav-link">
                  <i class="nav-icon fas fa-sign-out-alt"></i>
                  <p>Logout</p>
                </Link>
              </li>
            </ul>
          </nav>
          {/* <!-- /.sidebar-menu --> */}
        </div>
        {/* <!-- /.sidebar --> */}
      </aside>
    </>
  );
};

export default withRouter(Navbar);
