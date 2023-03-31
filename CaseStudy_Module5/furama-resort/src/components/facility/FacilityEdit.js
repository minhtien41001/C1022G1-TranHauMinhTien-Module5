import { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import './FormFacility.css';

class EditFacility extends Component{
    render(){
        return(
            <div>
                <div className="container-fluid bg-gray-500 d-flex header" style={{height: "100px"}}>
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

                <div className="mx-5 px-5 pt-3">
                    <h2 className="text-center fw-bold">Add new Facility</h2>

                    <p className="text-center mt-3"><a href="/"><i className="fa-solid fa-house-chimney h5 mx-1"></i> Back to HOME</a></p>

                    <p className="text-center">
                        <a href="/facility/list"><i className="fa-solid fa-backward"></i> Back to Facility list</a>
                    </p>

                    <div className="d-flex justify-content-center">

                        <form className="w-50 border border-2 border-success p-3 rounded">
                            <div className="mt-3 form-group">
                                <label className="h6" for="facilityType">Facility Type:</label>
                                <p style={{color: "red"}} ></p>
                                <div className="input-group">
                                    <select id="facilityType" className="form-control" name="facilityType">
                                        <option>
                                        </option>
                                    </select>
                                    <span className="input-group-text"><i className="fa-solid fa-ranking-star"></i></span>
                                </div>
                            </div>

                            <div className="form-group">
                                <label for="name" className="h6" >Name:</label>
                                <p style={{color: "red"}} ></p>
                                <div className="input-group">
                                    <input type="text" id="name" className="form-control" placeholder="Input name" name="name" />
                                    <span className="input-group-text"><i className="fa-solid fa-person-circle-question"></i></span>
                                </div>
                            </div>

                            <div className="mt-3 form-group">
                                <label for="area" className="h6">Area:</label>
                                <p style={{color: "red"}} ></p>
                                <input type="text" id="area" className="form-control" name="area" />
                            </div>

                            <div className="mt-3 form-group">
                                <label for="cost" className="h6">Cost:</label>
                                <p style={{color: "red"}} ></p>
                                <input type="text" id="cost" className="form-control" name="cost" />
                            </div>


                            <div className="mt-3 form-group">
                                <label for="maxPeople" className="h6">Max People:</label>
                                <p style={{color: "red"}} ></p>
                                <div className="input-group">
                                    <input type="text" id="maxPeople" className="form-control" placeholder="Input max People" name="maxPeople" />
                                    <span className="input-group-text"><i className="fa-solid fa-id-card"></i></span>
                                </div>
                            </div>

                            <div className="mt-3 form-group">
                                <label for="standardRoom" className="h6">Standard Room:</label>
                                <p style={{color: "red"}} ></p>
                                <div className="input-group">
                                    <input type="text" id="standardRoom" className="form-control" placeholder="Input standard Room" name="standardRoom" />
                                    <span className="input-group-text"><i className="fa-solid fa-square-phone"></i></span>
                                </div>
                            </div>

                            <div className="mt-3 form-group">
                                <label for="descriptionOtherConvenience" className="h6">Description:</label>
                                <p style={{color: "red"}} ></p>
                                <div className="input-group">
                                    <input type="text" id="descriptionOtherConvenience" className="form-control" placeholder="Input Description" name="descriptionOtherConvenience" />
                                    <span className="input-group-text"><i className="fa-solid fa-envelope-circle-check"></i></span>
                                </div>
                            </div>

                            <div className="mt-3 form-group">
                                <label for="poolArea" className="h6">Pool Area:</label>
                                <p style={{color: "red"}} ></p>
                                <div className="input-group">
                                    <input type="text" id="poolArea" className="form-control" />
                                    <span className="input-group-text"><i className="fa-solid fa-map-location-dot"></i></span>
                                </div>
                            </div>

                            <div className="mt-3 form-group">
                                <label for="numberOfFloors" className="h6">Number Of Floors:</label>
                                <p style={{color: "red"}} ></p>
                                <div className="input-group">
                                    <input type="text" id="numberOfFloors" className="form-control" placeholder="Input number Of Floors" name="numberOfFloors" />
                                    <span className="input-group-text"><i className="fa-solid fa-map-location-dot"></i></span>
                                </div>
                            </div>

                            <div className="mt-3 form-group">
                                <label for="facilityFree" className="h6">Facility Free:</label>
                                <p style={{color: "red"}} ></p>
                                <div className="input-group">
                                    <input type="text" id="facilityFree" className="form-control" placeholder="Input Facility Free" name="facilityFree" />
                                    <span className="input-group-text"><i className="fa-solid fa-map-location-dot"></i></span>
                                </div>
                            </div>


                            <div className="mt-3 form-group">
                                <label className="h6" for="rentType">Rent Type:</label>
                                <p style={{color: "red"}} ></p>
                                <div className="input-group">
                                    <select id="rentType" className="form-control" name="rentType" >
                                        <option></option>
                                    </select>
                                    <span className="input-group-text"><i className="fa-solid fa-ranking-star"></i></span>
                                </div>
                            </div>


                            <div className="mt-3 text-center">
                                <button className="btn btn-info btn-outline-success btn-sm border border-2 border-success text-dark">
                                    -- Save <i className="fa-solid fa-floppy-disk"></i> --
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="container-fluid text-center footer" style="height: 50px " >
                    <p className="text-light pt-2">&copy;FURAMA - officially operated in 1997.</p>
                </div>
            </div>
        )
    }
}