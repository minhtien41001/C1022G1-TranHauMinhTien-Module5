import { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import './Customer.css';

class CustomerList extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid bg-gray-500 d-flex header" style={{ height: "100px" }}>
                    <img className="h-100 p-4" src="https://www.furama.com/images/LOGOFurama_4C_Normal.png" alt="" />
                    <img className="ms-5 ps-5" src="https://furamavietnam.com/wp-content/uploads/2019/02/Ariyana-Tourism-Complex-02-2.png"
                        alt="" />

                    <div className="container-fluid text-end my-4 me-4">
                        <span className="badge text-bg-warning mt-3">Trần Hậu Minh Tiến</span>
                    </div>
                </div>

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
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">
                                    <i className="fa-solid fa-magnifying-glass"></i></button>
                            </form>
                        </div>
                    </div>
                </nav>
                <table id="customerTable" className="table table-light table-striped table-bordered">
                    <thead>
                        <tr className="table-dark text-light">
                            <th>Id</th>
                            <th>Name</th>
                            <th>Birthday</th>
                            <th>Gender</th>
                            <th>Id card</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>CustomerType</th>
                            <th className="text-center">Edit</th>
                            <th className="text-center">Delete</th>
                        </tr>
                    </thead>
                </table>

                <div className="container-fluid text-center footer" style={{height: "50px"}}>
                    <p className="text-light pt-2">&copy;FURAMA - officially operated in 1997.</p>
                </div>
            </div>
        )
    }
}