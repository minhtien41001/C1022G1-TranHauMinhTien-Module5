import { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import './Home.css';

class HomeFurama extends Component {
    render() {
        return (
            <div>
                <div class="container-fluid bg-gray-500 d-flex header" style={{ height: "100px" }}>
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
                                    <a className="nav-link text-dark" role="button" >Employee</a>
                                </li>

                                <li className="nav-item dropdown ms-3">
                                    <a className="nav-link text-dark" role="button" >Customer</a>
                                </li>

                                <li className="nav-item dropdown ms-3">
                                    <a className="nav-link text-dark" role="button" >Facility</a>
                                </li>

                                <li className="nav-item dropdown ms-3">
                                    <a className="nav-link text-dark" role="button" >Contract</a>
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

                <div className="container-fluid body" style={{ height: "520px" }}>
                    <div className="row mx-3">
                        <div className="col-2 left">
                            <p className="ms-2 mt-2 text-success">Item 1</p>
                            <img className="img-fluid zoom border border-primary" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkVmLmFswjaPR6nEZpl54_5iCVRwtZrf7ds6cnFnhH5DBRHAurKWkeKQc1OrF8jKURPGs&usqp=CAU" alt="" />

                            <p className="ms-2 mt-4 text-secondary">Item 2</p>
                            <img className="img-fluid zoom border border-success" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi-taWYvyjOC_LUqwf5eHpUrgn-G2IqOqRowmd5rQoVMFW1D1OtrBioJhy1rZ319e96nc&usqp=CAU" alt="" />

                            <p className="ms-2 mt-4 text-success">Item 3</p>
                            <img className="img-fluid zoom border border-danger" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9iS90e5jZmIgNx23HNAi4IFUwvjVCFhiZ4m1rj8C3PfYYFQPwuf9XJLcHijTMadm-QmM&usqp=CAU" alt="" />

                            <p className="ms-2 mt-4 text-secondary">Item 4</p>
                            <img className="img-fluid zoom border border-warning" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWXGdKlUj-vG5q3kiSbZbXIZsvOV5arHkhn5IW24NExOxJBh1C12cfd2Q1jlEQLUqO2QQ&usqp=CAU" alt="" />

                            <p className="ms-2 mt-4 text-success">Item 5</p>
                            <img className="img-fluid zoom border border-info" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWQfQa65lK7gySRtU6GwaV2LEIi7DdDg4N5mdR36doe06APb7d-L1-6B56DbAsUbhsonI&usqp=CAU" alt="" />

                            <p className="ms-2 mt-4 text-secondary">Item 6</p>
                            <img className="img-fluid zoom border border-warning" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7YoFQEjitLVkwprh31XODzfX2nwG6_p9bZ8w0zAkN2WiBrbZ69iLoJZzLeeBUvHiT29s&usqp=CAU" alt="" />

                            <p className="ms-2 mt-4 text-success">Item 7</p>
                            <img className="img-fluid zoom border border-success" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJDxUz9fzPbDof1B28f5_FLMNhNPor9MfjFQ&usqp=CAU" alt="" />
                        </div>

                        <div className="col-10">
                            <img className="img-fluid mt-4 ms-2 border border-4 border-light" src="http://ngocdiep.vn/wp-content/uploads/2020/12/4.flamigo-cat-ba.jpg" alt="" />
                        </div>
                    </div>
                </div>

                <div className="container-fluid text-center footer" style={{ height: "50px" }}>
                    <p className="text-light pt-2">&copy;FURAMA - officially operated in 1997.</p>
                </div>
            </div>
        );
    }
}

export default HomeFurama;