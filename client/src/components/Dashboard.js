import React, { useEffect } from "react";
import Axios from "axios";

const Dashboard = props => {
  const body = document.querySelector("body");
  body.className = "hold-transition sidebar-mini";

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return props.history.push("/login");

    // cek token
    Axios.get("/auth/cek-token", { headers: { Authorization: `Bearer ${token}` } })
      .then(res => res.data)
      .then(data => {
        if (data !== "Token Valid!") {
          console.log(data);
          props.history.push("/login");
        }
      });

    // eslint-disable-next-line
  }, []);

  const handleLogout = e => {
    e.preventDefault();
    localStorage.removeItem("token");
    props.history.push("/login");
  };

  return (
    <div class="wrapper">
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
                <a href="/" class="nav-link">
                  <i class="nav-icon fas fa-th"></i>
                  <p>Dashboard</p>
                </a>
              </li>
              <li class="nav-item" onClick={handleLogout}>
                <a href="/" class="nav-link">
                  <i class="nav-icon fas fa-circle"></i>
                  <p>Logout</p>
                </a>
              </li>
            </ul>
          </nav>
          {/* <!-- /.sidebar-menu --> */}
        </div>
        {/* <!-- /.sidebar --> */}
      </aside>

      {/* <!-- Content Wrapper. Contains page content --> */}
      <div class="content-wrapper">
        {/* <!-- Content Header (Page header) --> */}
        <section class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1>Dashboard Page</h1>
              </div>
              <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                  <li class="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li class="breadcrumb-item active">Dashboard Page</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Main content --> */}
        <section class="content">
          {/* <!-- Default box --> */}
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Title</h3>

              <div class="card-tools">
                <button
                  type="button"
                  class="btn btn-tool"
                  data-card-widget="collapse"
                  data-toggle="tooltip"
                  title="Collapse"
                >
                  <i class="fas fa-minus"></i>
                </button>
                <button
                  type="button"
                  class="btn btn-tool"
                  data-card-widget="remove"
                  data-toggle="tooltip"
                  title="Remove"
                >
                  <i class="fas fa-times"></i>
                </button>
              </div>
            </div>
            <div class="card-body">Start creating your amazing application!</div>
            {/* <!-- /.card-body --> */}
            <div class="card-footer">Footer</div>
            {/* <!-- /.card-footer--> */}
          </div>
          {/* <!-- /.card --> */}
        </section>
        {/* <!-- /.content --> */}
      </div>
      {/* <!-- /.content-wrapper --> */}

      <footer class="main-footer">
        <div class="float-right d-none d-sm-block">
          <b>Version</b> 3.0.1
        </div>
        <strong>
          Copyright &copy; 2014-2019 <a href="http://adminlte.io">AdminLTE.io</a>.
        </strong>{" "}
        All rights reserved.
      </footer>

      {/* <!-- Control Sidebar --> */}
      <aside class="control-sidebar control-sidebar-dark">
        {/* <!-- Control sidebar content goes here --> */}
      </aside>
      {/* <!-- /.control-sidebar --> */}
    </div>
  );
};

export default Dashboard;
