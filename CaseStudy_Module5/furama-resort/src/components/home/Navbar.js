import { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import './Home.css';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid mx-5">
                    <a className="navbar-brand font-weight-bold" href="/">Home</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown ms-3">
                                <a className="nav-link text-dark" href="/employee" role="button" >Employee</a>
                            </li>

                            <li className="nav-item dropdown ms-3">
                                <a className="nav-link text-dark" href="/customer/list" role="button" >Customer</a>
                            </li>

                            <li className="nav-item dropdown ms-3">
                                <a className="nav-link text-dark" href="/facility/list" role="button" >Facility</a>
                            </li>

                            <li className="nav-item dropdown ms-3">
                                <a className="nav-link text-dark" href="/contract/list" role="button" >Contract</a>
                            </li>
                        </ul>

                        <form className="d-flex my-2" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-success" type="submit">
                                    <i className="fa-solid fa-magnifying-glass"></i></button>
                        </form>
                    </div>
                </div>
            </nav>
        )
    }
}