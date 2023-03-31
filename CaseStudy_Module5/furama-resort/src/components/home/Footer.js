import { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import './Home.css';

class Footer extends Component {
    render() {
        return (
            <div className="container-fluid text-center footer" style="height: 50px">
                <p className="text-light pt-2">&copy;FURAMA - officially operated in 1997.</p>
            </div>
        )
    }
}

export default Footer;