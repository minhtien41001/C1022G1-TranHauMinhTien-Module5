import { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import './Facility.css';
import facilityData from './model/Facility';

function FacilityList() {
    return (
        <div className="p-3">
            <h2 className="text-center fw-bold">FACILITY LIST</h2>
            <p className="text-center mt-3">
                <a href="/">
                    <i className="fa-solid fa-house-chimney h5 mx-1" /> Back to HOME
                </a>
            </p>
            <nav className="navbar navbar-expand-lg py-0 my-0">
                <div className="container-fluid">
                    <a href="/facility/create">
                        <button className="btn btn-success btn-outline-secondary btn-sm">
                            <span className="fa-solid fa-house-medical text-light h5 my-auto me-1" />
                            <span className="text-light"> Add new Facility</span>
                        </button>
                    </a>
                    <form className="d-flex my-2" role="search" action="/facility/list">
                        <input
                            className="form-control me-2"
                            type="text"
                            placeholder="Input search name"
                            // value="${nameSearch}"
                            aria-label="Search"
                            name="nameSearch"
                            style={{ width: "210%" }}
                        />
                        <input
                            className="form-control me-2"
                            type="text"
                            placeholder="Input search FacilityType"
                            // value="${facilityType}"
                            aria-label="Search"
                            name="facilityTypeSearch"
                            style={{ width: "210%" }}
                        />
                        <button
                            className="btn btn-outline-success"
                            type="submit"
                            name="action"
                            value="search"
                        >
                            <i className="fa-solid fa-magnifying-glass" />
                        </button>
                    </form>
                </div>
            </nav>
            <table
                id="facilityTable"
                className="table table-light table-striped table-bordered"
            >
                <thead>
                    <tr className="table-dark text-light">
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
                        <th className="text-center">Edit</th>
                        <th className="text-center">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        facilityData.facility.map((facilityLists, index) => (

                            <tr key={index}>
                                <td  >{index + 1}</td>
                                <td>{facilityLists.name}</td>
                                <td>{facilityLists.area}</td>
                                <td>{facilityLists.cost}</td>
                                <td>{facilityLists.maxPeople}</td>
                                <td>{facilityLists.standardRoom}</td>
                                <td>{facilityLists.descriptionOtherCovenience}</td>
                                <td>{facilityLists.poolArea}</td>
                                <td>{facilityLists.numberOfFloors}</td>
                                <td>{facilityLists.facilityFree}</td>
                                <td>{facilityLists.rentType.name}</td>
                                <td>{facilityLists.facilityType.name}</td>
                                <td class="text-center">
                                    <a >
                                        <button class="btn btn-primary btn-outline-secondary btn-sm">
                                            <span class="fa-solid fa-house-circle-exclamation text-light h6 m-auto px-2">Edit</span>
                                        </button>
                                    </a>
                                </td>
                                <td class="text-center">
                                    <a data-bs-toggle="modal"
                                        data-bs-target="#deleteFacility" >
                                        <button class="btn btn-danger btn-outline-secondary btn-sm">
                                            <span class="fa-solid fa-person-circle-minus text-light h6 m-auto px-2">Delete</span>
                                        </button>
                                    </a>
                                </td>
                            </tr>


                        ))
                    }
                </tbody>
            </table>
        </div>
    )
};

export default FacilityList;