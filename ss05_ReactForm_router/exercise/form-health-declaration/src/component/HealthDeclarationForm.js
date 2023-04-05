import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { LineWave } from 'react-loader-spinner'
import "bootstrap/dist/css/bootstrap.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

function HealthDeclarationForm() {
    return (
        <>
            <Formik initialValues={{
                name: '',
                idCard: '',
                yearOfBirth: '',
                gender: '',
                nationality: '',
                company: '',
                workingParts: '',
                healthInsuranceCard: '',
                province: '',
                district: '',
                ward: '',
                addressNumber: '',
                phone: '',
                email: '',
                moveToCountry: '',
                medicalSign: [],
                contactWithSickPeople: []
            }}
                validationSchema={Yup.object(
                    {
                        name: Yup.string().required('Vui lòng nhập tên'),
                        idCard: Yup.string().required('Vui lòng nhập CMND'),
                        yearOfBirth: Yup.number().required('Vui lòng nhập năm sinh').min(1901, 'Chỉ được nhập người sinh sau năm 1990'),
                        nationality: Yup.string().required('Vui lòng nhập quốc tịch'),
                        company: Yup.string().required('Vui lòng nhập công ty'),
                        workingParts: Yup.string().required('Vui lòng nhập bộ phận làm việc'),
                        province: Yup.string().required('Vui lòng nhập tỉnh'),
                        district: Yup.string().required('Vui lòng nhập huyện'),
                        ward: Yup.string().required('Vui lòng nhập phường'),
                        addressNumber: Yup.string().required('Vui lòng nhập số nhà'),
                        phone: Yup.string().required('Vui lòng nhập số điện thoại'),
                        email: Yup.string().required('Vui lòng nhập Email').email('Vui lòng nhập email đúng định dạng')
                    }

                )}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        setSubmitting(false);
                        toast("thêm mới thành công");
                    }, 500)
                }}
            >

                {({ isSubmitting }) => (
                    <Form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputName" className="form-label">
                                Họ Tên:
                            </label>
                            <Field
                                type="text"
                                className="form-control"
                                id="exampleInputName"
                                name="name"
                            />
                            <ErrorMessage name="name" className="form-err" component="span" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputIdCard" className="form-label">
                                Số hộ chiếu/CMND:
                            </label>
                            <Field
                                type="text"
                                className="form-control"
                                id="exampleInputIdCard"
                                name="idCard"
                            />
                            <ErrorMessage name="idCard" className="form-err" component="span" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputYearOfBirth" className="form-label">
                                Năm sinh:
                            </label>
                            <Field
                                type="text"
                                className="form-control"
                                id="exampleInputYearOfBirth"
                                name="yearOfBirth"
                            />
                            <ErrorMessage name="yearOfBirth" className="form-err" component="span" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputNationality" className="form-label">
                                Quốc tịch:
                            </label>
                            <Field
                                type="text"
                                className="form-control"
                                id="exampleInputNationality"
                                name="nationality"
                            />
                            <ErrorMessage name="nationality" className="form-err" component="span" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputCompany" className="form-label">
                                Công ty làm việc:
                            </label>
                            <Field
                                type="text"
                                className="form-control"
                                id="exampleInputCompany"
                                name="company"
                            />
                            <ErrorMessage name="company" className="form-err" component="span" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputWorkingParts" className="form-label">
                                Bộ phận làm việc:
                            </label>
                            <Field
                                type="text"
                                className="form-control"
                                id="exampleInputWorkingParts"
                                name="workingParts"
                            />
                            <ErrorMessage name="workingParts" className="form-err" component="span" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputProvince" className="form-label">
                                Tỉnh thành:
                            </label>
                            <Field
                                type="text"
                                className="form-control"
                                id="exampleInputProvince"
                                name="province"
                            />
                            <ErrorMessage name="province" className="form-err" component="span" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputDistrict" className="form-label">
                                Quận/huyện:
                            </label>
                            <Field
                                type="text"
                                className="form-control"
                                id="exampleInputDistrict"
                                name="district"
                            />
                            <ErrorMessage name="district" className="form-err" component="span" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputWard" className="form-label">
                                Phường/Xã:
                            </label>
                            <Field
                                type="text"
                                className="form-control"
                                id="exampleInputWard"
                                name="ward"
                            />
                            <ErrorMessage name="ward" className="form-err" component="span" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputAddressNumber" className="form-label">
                                Số nhà:
                            </label>
                            <Field
                                type="text"
                                className="form-control"
                                id="exampleInputAddressNumber"
                                name="addressNumber"
                            />
                            <ErrorMessage name="addressNumber" className="form-err" component="span" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputPhone" className="form-label">
                                Số điện thoại:
                            </label>
                            <Field
                                type="text"
                                className="form-control"
                                id="exampleInputPhone"
                                name="phone"
                            />
                            <ErrorMessage name="phone" className="form-err" component="span" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail" className="form-label">
                                Email:
                            </label>
                            <Field
                                type="text"
                                className="form-control"
                                id="exampleInputEmail"
                                name="email"
                            />
                            <ErrorMessage name="email" className="form-err" component="span" />
                        </div>

                        <div className="col-xl-12 col-md-12 col-sm-12 mb-2">
                            <label className="form-label" >Trong vòng 14 ngày qua. Anh/Chị có đến quốc gia
                                /vùng lãnh thổ nào(Có thể đi qua nhiều quốc gia)</label>
                            <div className="input-group input-group-merge">
                                <Field type='text' placeholder='' component='textArea' name='moveToCountry' className='form-control' />
                            </div>
                        </div>

                        <div className="col-xl-12 col-md-12 col-sm-12 mb-2">
                            <label className="form-label" >Trong vòng 14 ngày qua. Anh/Chị có đến quốc gia
                                /vùng lãnh thổ nào(Có thể đi qua nhiều quốc gia)</label>
                                <br></br>
                            <label htmlFor='medicalSign1' className="form-label" >Sốt</label>
                            <Field type='checkbox' placeholder='' name='medicalSign' className='form-check-input' id='medicalSign1' value='Sot' />

                            <label style={{ marginLeft: '10%' }} htmlFor='medicalSign2' className="form-label" >Ho</label>
                            <Field type='checkbox' placeholder='' name='medicalSign' className='form-check-input' id='medicalSign2' value='Ho' />

                            <label style={{ marginLeft: '10%' }} htmlFor='medicalSign3' className="form-label" >Khó thở</label>
                            <Field type='checkbox' placeholder='' name='medicalSign' className='form-check-input' id='medicalSign3' value='KhoTho' />

                            <label style={{ marginLeft: '10%' }} htmlFor='medicalSign4' className="form-label" >Mệt mỏi</label>
                            <Field type='checkbox' placeholder='' name='medicalSign' className='form-check-input' id='medicalSign4' value='MetMoi' />

                            <label style={{ marginLeft: '10%' }} htmlFor='medicalSign2' className="form-label" >Đau họng</label>
                            <Field type='checkbox' placeholder='' name='medicalSign' className='form-check-input' id='medicalSign2' value='DauHong' />
                        </div>


                        <div className="col-xl-12 col-md-12 col-sm-12 mb-2">
                            <div className="row">
                                <div className="col-md-2">
                                    <Field type='checkbox' placeholder='' name='contactWithSickPeople'
                                        id='contactWithSickPeople1' value='Nghingo' />
                                </div>
                                <div className='col-md-10'>
                                    <label htmlFor='contactWithSickPeople1' className="form-label" >
                                        Người bệnh hoặc nghi ngờ, mắc bệnh COVID-19
                                    </label>
                                </div>

                                <div className="col-md-2">
                                    <Field type='checkbox' placeholder='' name='contactWithSickPeople'
                                        id='contactWithSickPeople2' value='ToiTuVungDich' />
                                </div>
                                <div className='col-md-10'>
                                    <label htmlFor='contactWithSickPeople2' className="form-label" >
                                        Người bệnh tới từ nước COVID-19
                                    </label>
                                </div>

                                <div className="col-md-2">
                                    <Field type='checkbox' placeholder='' name='contactWithSickPeople'
                                        id='contactWithSickPeople3' value='BieuHien' />
                                </div>
                                <div className='col-md-10'>
                                    <label htmlFor='contactWithSickPeople3' className="form-label" >
                                        Người bệnh có biểu hiện(Ho, Sốt,.....)
                                    </label>
                                </div>
                            </div>
                        </div>
                        {
                            isSubmitting ?
                                <LineWave
                                    height="100"
                                    width="100"
                                    color="#4fa94d"
                                    ariaLabel="line-wave"
                                    wrapperStyle={{}}
                                    wrapperClass=""
                                    visible={true}
                                    firstLineColor=""
                                    middleLineColor=""
                                    lastLineColor=""
                                />
                                :
                                <button type="submit" className="btn btn-primary">
                                    Submit
                                </button>
                        }

                    </Form>
                )}
            </Formik>
            <ToastContainer />
        </>
    )
}

export default HealthDeclarationForm;