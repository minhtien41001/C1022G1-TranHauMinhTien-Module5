import "bootstrap/dist/css/bootstrap.css";
import './Contract.css';

function ContractCreate() {
    return (
        <div className="mx-5 px-5 pt-3">
            <h2 className="text-center fw-bold">Add new Contract</h2>
            <div className="d-flex justify-content-center">
                <form
                    className="border border-2 border-success p-3 rounded formCSS"
                    method="POST"
                >
                    <div className="modal-body">
                        <div className="form-group">
                            <div className="form-group">
                                <label className="h6" htmlFor="facility">
                                    Tên dịch vụ:
                                </label>
                                <div className="input-group">
                                    <select id="facility" className="form-select">
                                        <option />
                                    </select>
                                    <span className="input-group-text">
                                        <i className="fa-solid fa-file-signature" />
                                    </span>
                                </div>
                            </div>
                            <div className="mt-3 form-group">
                                <label className="h6" htmlFor="employee">
                                    Tên nhân viên:
                                </label>
                                <div className="input-group">
                                    <select id="employee" className="form-control">
                                        <option></option>
                                    </select>
                                    <span className="input-group-text">
                                        <i className="fa-solid fa-person-circle-question" />
                                    </span>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="h6" htmlFor="customer">
                                    Tên khách hàng:
                                </label>
                                <div className="input-group">
                                    <select id="customer" className="form-control">
                                        <option />
                                    </select>
                                    <span className="input-group-text">
                                        <i className="fa-solid fa-person-circle-question" />
                                    </span>
                                </div>
                            </div>
                            <div className="mt-3 form-group">
                                <label htmlFor="startDate" className="h6">
                                    Ngày bắt đầu:
                                </label>
                                <input type="date" id="startDate" className="form-control" />
                            </div>
                            <div className="mt-3 form-group">
                                <label htmlFor="endDate" className="h6">
                                    Ngày kết thúc:
                                </label>
                                <input type="date" id="endDate" className="form-control" />
                            </div>
                            <div className="mt-3 form-group">
                                <label htmlFor="deposit" className="h6">
                                    Tiền đặt cọc (VNĐ):
                                </label>
                                <div className="input-group">
                                    <input
                                        type="number"
                                        id="deposit"
                                        className="form-control"
                                        placeholder="Nhập tiền đặt cọc..."
                                    />
                                    <span className="input-group-text">
                                        <i className="fa-solid fa-money-bill-wave" />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3 text-center">
                            <button className="btn btn-info btn-outline-success btn-sm border border-2 border-success text-dark">
                                -- Save <i className="fa-solid fa-floppy-disk" /> --
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default ContractCreate;