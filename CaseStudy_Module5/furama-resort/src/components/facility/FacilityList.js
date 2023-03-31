import { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import './Facility.css';

class FacilityList extends Component {
    render() {
        return (
            <div className="p-3">
                <h2 className="text-center fw-bold">FACILITY LIST</h2>

                <p className="text-center mt-3"><a href="/"><i className="fa-solid fa-house-chimney h5 mx-1"></i> Back to HOME</a></p>

                <nav className="navbar navbar-expand-lg py-0 my-0">
                    <div className="container-fluid">
                        <a href="/facility/create">
                            <button className="btn btn-success btn-outline-secondary btn-sm">
                                <span className="fa-solid fa-house-medical text-light h5 my-auto me-1"></span>
                                <span className="text-light"> Add new Facility</span>
                            </button>
                        </a>

                        <form className="d-flex my-2" role="search" action="/facility/list">
                            <input className="form-control me-2" type="text" placeholder="Input search name" aria-label="Search" name="nameSearch" style={{ width: "210%" }}></input>
                            <input className="form-control me-2" type="text" placeholder="Input search FacilityType"
                                aria-label="Search" name="facilityTypeSearch" style={{ width: "210%" }}></input>
                            <button className="btn btn-outline-success" type="submit" name="action" value="search">
                                <i className="fa-solid fa-magnifying-glass"></i></button>
                        </form>
                    </div>
                </nav>

                <table id="facilityTable" class="table table-light table-striped table-bordered">
                    <thead>
                        <tr class="table-dark text-light">
                            <th>Id</th>
                            <th>Name</th>
                            <th>Area</th>
                            <th>Cost</th>
                            <th>Max people</th>
                            <th>Standard</th>
                            <th>Description</th>
                            <th>Pool area</th>
                            <th>Number of Floors</th>
                            <th>Facility Free</th>
                            <th>Rent type</th>
                            <th>Facility type</th>
                            <th class="text-center">Edit</th>
                            <th class="text-center">Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div >
        )
    }
}