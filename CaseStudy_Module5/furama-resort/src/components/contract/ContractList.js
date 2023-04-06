import "bootstrap/dist/css/bootstrap.css";
import './Contract.css';
import contractData from './model/Contract';

function ContractList() {
    return (
        <div className="p-3">
            <h2 className="text-center fw-bold">CONTRACT LIST</h2>
            <p className="text-center mt-3">
                <a href="/">
                    <i className="fa-solid fa-house-chimney h5 mx-1" /> Back to HOME
                </a>
            </p>
            <nav className="navbar navbar-expand-lg py-0 my-2">
                <div className="container-fluid">
                    <button
                        className="btn btn-primary btn-outline-secondary btn-sm"
                        data-bs-toggle="modal"
                        data-bs-target="#addContract"
                    >
                        <span className="fa-solid fa-plus text-light h6 my-auto me-1" />
                        <span className="text-light"> Thêm mới hợp đồng</span>
                    </button>
                </div>
            </nav>
            <table
                id="contractTable"
                className="table table-light table-striped table-bordered"
            >
                <thead>
                    <tr className="table-dark text-light">
                        <td>ID</td>
                        <td>Facility</td>
                        <td>Customer</td>
                        <td>Date Start</td>
                        <td>Date End</td>
                        <td>Deposit</td>
                        <td>Total Money</td>
                        <th className="text-center">Các dịch vụ đi kèm</th>
                    </tr>
                </thead>
                <tbody>
                    {contractData.contract.map((contracts, index) => (
                        <tr key={index}>
                            <td>{contracts.id}</td>
                            <td>{contracts.facility.name}</td>
                            <td>{contracts.customer.name}</td>
                            <td>{contracts.dateStart}</td>
                            <td>{contracts.dateEnd}</td>
                            <td>{contracts.deposit}</td>
                            <td>{contracts.totalMoney}</td>
                        <td className="text-center">
                            <button
                                className="btn btn-primary btn-outline-secondary btn-sm"
                                data-bs-toggle="modal"
                                data-bs-target="#addContractdetail"
                            >
                                <span className="fa-solid fa-plus text-light h6 m-auto" />
                            </button>
                            <button
                                className="btn btn-primary btn-outline-secondary btn-sm ms-3 px-3"
                                data-bs-toggle="modal"
                                data-bs-target="#showAttachDetail"
                            >
                                <span className="text-light m-auto">Danh sách dịch vụ đi kèm</span>
                            </button>
                        </td>
                    </tr>
                    ))
                    }
                </tbody>
            </table>
        </div>

    );
}

export default ContractList;