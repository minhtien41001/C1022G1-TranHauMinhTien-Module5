
import "bootstrap/dist/css/bootstrap.css";
import './FormCustomer.css';
function CustomerCreate() {
    return (
        <div className="mx-5 px-5 pt-3">
            <h2 className="text-center fw-bold">Add new Customer</h2>
            <p className="text-center mt-3">
                <a href="/">
                    <i className="fa-solid fa-house-chimney h5 mx-1" /> Back to HOME
                </a>
            </p>
            <p className="text-center">
                <a href="/customer/list">
                    <i className="fa-solid fa-backward" /> Back to Customer list
                </a>
            </p>
            <div className="d-flex justify-content-center">
                <form
                    className="w-50 border border-2 border-success p-3 rounded"
                    action="/customer/save"
                    method="post"
                >
                    <div className="form-group">
                        <label htmlFor="name" className="h6">
                            Name:
                        </label>
                        <p style={{ color: "red" }} />
                        <div className="input-group">
                            <input
                                type="text"
                                id="name"
                                className="form-control"
                                placeholder="Input name"
                                name="name"
                            />
                            <span className="input-group-text">
                                <i className="fa-solid fa-person-circle-question" />
                            </span>
                        </div>
                    </div>
                    <div className="mt-3 form-group">
                        <label htmlFor="dateOfBirth" className="h6">
                            Date of Birth:
                        </label>
                        <p style={{ color: "red" }} />
                        <input
                            type="date"
                            id="dateOfBirth"
                            className="form-control"
                            name="dateOfBirth"
                        />
                    </div>
                    <div className="mt-3 form-group">
                        <label className="h6">Gender:</label>
                        <div className="d-flex">
                            <label className="d-block me-4">
                                <input
                                    type="radio"
                                    defaultValue={1}
                                    name="gender"
                                    defaultChecked=""
                                />{" "}
                                Male
                                <i className="fa-solid fa-mars" />
                            </label>
                            <label className="d-block">
                                <input type="radio" defaultValue={0} name="gender" /> Female
                                <i className="fa-solid fa-venus" />
                            </label>
                            <p style={{ color: "red" }} />
                        </div>
                    </div>
                    <div className="mt-3 form-group">
                        <label htmlFor="idCard" className="h6">
                            Id card:
                        </label>
                        <p style={{ color: "red" }} />
                        <div className="input-group">
                            <input
                                type="text"
                                id="idCard"
                                className="form-control"
                                placeholder="Input Id card"
                                name="idCard"
                            />
                            <span className="input-group-text">
                                <i className="fa-solid fa-id-card" />
                            </span>
                        </div>
                    </div>
                    <div className="mt-3 form-group">
                        <label htmlFor="phone" className="h6">
                            Phone number:
                        </label>
                        <p style={{ color: "red" }} />
                        <div className="input-group">
                            <input
                                type="text"
                                id="phone"
                                className="form-control"
                                placeholder="Input Phone number"
                                name="phone"
                            />
                            <span className="input-group-text">
                                <i className="fa-solid fa-square-phone" />
                            </span>
                        </div>
                    </div>
                    <div className="mt-3 form-group">
                        <label htmlFor="email" className="h6">
                            Email:
                        </label>
                        <p style={{ color: "red" }} />
                        <div className="input-group">
                            <input
                                type="text"
                                id="email"
                                className="form-control"
                                placeholder="Input Email"
                                name="email"
                            />
                            <span className="input-group-text">
                                <i className="fa-solid fa-envelope-circle-check" />
                            </span>
                        </div>
                    </div>
                    <div className="mt-3 form-group">
                        <label htmlFor="address" className="h6">
                            Address:
                        </label>
                        <p style={{ color: "red" }} />
                        <div className="input-group">
                            <input
                                type="text"
                                id="address"
                                className="form-control"
                                placeholder="Input Address"
                                name="address"
                            />
                            <span className="input-group-text">
                                <i className="fa-solid fa-map-location-dot" />
                            </span>
                        </div>
                    </div>
                    <div className="mt-3 form-group">
                        <label className="h6" htmlFor="customerType">
                            Customer Type:
                        </label>
                        <p style={{ color: "red" }} />
                        <div className="input-group">
                            <select
                                id="customerType"
                                className="form-control"
                                name="customerType"
                            >
                                <option />
                            </select>
                            <span className="input-group-text">
                                <i className="fa-solid fa-ranking-star" />
                            </span>
                        </div>
                    </div>
                    <div className="mt-3 text-center">
                        <button className="btn btn-info btn-outline-success btn-sm border border-2 border-success text-dark">
                            -- Save <i className="fa-solid fa-floppy-disk" /> --
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
}

export default CustomerCreate;