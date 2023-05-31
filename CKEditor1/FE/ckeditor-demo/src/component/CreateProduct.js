import React, { useEffect, useState } from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { NavLink, useNavigate } from 'react-router-dom'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import * as ProductService from "../service/ProductService"

export default function CreateProduct() {
    const [productList, setProductList] = useState([]);

    return (
        <>
            <Formik
                initialValues={{ name: "", description: '' }}

                onSubmit={(values) => {

                    const createProduct = async () => {
                        await ProductService.saveProduct(values)
                        alert("Them moi' thanh` cong")
                    }
                    createProduct()
                }}
            >
                <>
                    <h2 className="text-center fw-bold">Add new Product</h2>
                    <div className="d-flex justify-content-center">
                        <Form
                            className="w-50 border border-2 border-success p-3 rounded"
                            method="post"
                        >
                            <div className="form-group">
                                <label htmlFor="name" className="h6">
                                    Name:
                                </label>
                                <div className="input-group">
                                    <Field
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

                            <div className="form-group">
                                <label htmlFor="description" className="h6">
                                    description:
                                </label>
                                <div className="input-group">
                                    <Field
                                        type="text"
                                        id="description"
                                        className="form-control"
                                        placeholder="Input description"
                                        name="description"
                                    >
                                        {({ field, form }) => (
                                            <CKEditor
                                                editor={ClassicEditor}
                                                data={field.value}
                                                onReady={editor => {

                                                }}
                                                onChange={(event, editor) => {
                                                    const data = editor.getData();
                                                    form.setFieldValue('description', data);
                                                }}
                                                onBlur={(event, editor) => {
                                                    const data = editor.getData();
                                                    form.setFieldValue('description', data);
                                                    form.setFieldTouched('description', true);
                                                }}
                                            />
                                        )}
                                    </Field>
                                    <span className="input-group-text">
                                        <i className="fa-solid fa-person-circle-question" />
                                    </span>
                                </div>
                            </div>

                            <div className="mt-3 text-center">
                                <button className="btn btn-info btn-outline-success btn-sm border border-2 border-success text-dark" type="submit">
                                    -- Save <i className="fa-solid fa-floppy-disk" /> --
                                </button>
                            </div>
                        </Form>
                    </div>
                </>

            </Formik>
        </>
    )
}