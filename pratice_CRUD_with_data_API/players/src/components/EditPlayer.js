import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import * as ClubService from "../service/ClubService";
import * as PlayerService from "../service/PlayerService";

function EditPlayer() {

    const [club,setClub] = useState([]);
    const [player,setPlayer] = useState();

    const params = useParams();

    const navigate = useNavigate()

    const findAllClub = async () => {
        const res = await ClubService.findAllClub()
        setClub(res)
    }

    useEffect(() =>{
        findAllClub()
    },[])

    useEffect(() => {
        const fetchPlayer = async () =>{
            const res = await PlayerService.findById(params.id)
            setPlayer(res)
        }
        fetchPlayer()
    },[params.id])

    if(!player){
        return null
    }

    return (
        <>
            <Formik
                initialValues={{id: player?.id, name: player?.name, location: player?.location, clubId: player?.clubId}}

                validationSchema={Yup.object(
                    {
                        name: Yup.string().required("..."),
                        location: Yup.string().required("...")
                    }
                )}

                onSubmit={(values) => {
                    const updatePlayer = async () => {
                        await PlayerService.edit(values)
                        setPlayer(values)
                        alert("Chinh sua thanh cong")
                        navigate("/")
                    }
                    updatePlayer()
                }}
            >
                <>
                    <h2 className="text-center fw-bold">Add new Player</h2>
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
                                <ErrorMessage name="name" />
                            </div>
                            {/* <div className="mt-3 form-group">
                                <label className="h6">Gender:</label>
                                <div className="d-flex">
                                    <label className="d-block me-4">
                                        <Field
                                            type="radio"
                                            value="Nam"
                                            name="gender"
                                        />
                                        Male
                                        <i className="fa-solid fa-mars" />
                                    </label>
                                    <label className="d-block">
                                        <Field type="radio"
                                            value="Nu"
                                            name="gender" />
                                        Female
                                        <i className="fa-solid fa-venus" />
                                    </label>
                                </div>
                            </div> */}
                            <div className="mt-3 form-group">
                                <label htmlFor="location" className="h6">
                                location:
                                </label>
                                <div className="input-group">
                                    <Field
                                        type="text"
                                        id="location"
                                        className="form-control"
                                        placeholder="Input location"
                                        name="location"
                                    />
                                    <span className="input-group-text">
                                        <i className="fa-solid fa-id-card" />
                                    </span>
                                    <ErrorMessage name="location" />
                                </div>
                            </div>
                            <div className="mt-3 form-group">
                                <label className="h6" htmlFor="clubId">
                                    Class:
                                </label>
                                <div className="input-group">
                                    <Field as="select" name="clubId" id="clubId" className="form-control">
                                        {club.map((clubList, index) => (
                                            <option key={index} value={clubList.id}>
                                                {clubList.clubName}
                                            </option>
                                        ))}
                                    </Field>
                                    <span className="input-group-text">
                                        <i className="fa-solid fa-ranking-star" />
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

export default EditPlayer;