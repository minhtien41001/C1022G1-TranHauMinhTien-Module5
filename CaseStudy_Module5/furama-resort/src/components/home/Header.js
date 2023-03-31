import { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import './Home.css';

class Header extends Component {
    render() {
        return (
            <div className="container-fluid bg-gray-500 d-flex header" style="height: 100px">
                <img className="h-100 p-4" src="https://www.furama.com/images/LOGOFurama_4C_Normal.png" alt="" />
                <img className="ms-5 ps-5" src="https://furamavietnam.com/wp-content/uploads/2019/02/Ariyana-Tourism-Complex-02-2.png"
                    alt="" />

                <div className="container-fluid text-end my-4 me-4">
                    <span className="badge text-bg-warning mt-3">Trần Hậu Minh Tiến</span>
                </div>
            </div>
        )
    }
}

export default Header;