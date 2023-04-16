import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as PlayerService from "../service/PlayerService";
import * as ClubService from "../service/ClubService";

function ListPlayer() {
    const [player, setPlayer] = useState([]);
    const [club, setClub] = useState([]);
    const [playerDelete,setPlayerDelete] = useState(0);
    const [playerName,setPlayername] = useState("");

    const findAllPlayer = async () => {
        const res = await PlayerService.findAllPlayer()
        setPlayer(res)
    }

    const findAllClub = async () => {
        const res = await ClubService.findAllClub()
        setClub(res)
    }

    useEffect(() => {
        findAllClub()
        findAllPlayer()
    },[])

    const getIdDelete = (id,name) => {
        setPlayerDelete(id)
        setPlayername(name)
    }

    const deletePlayer = async (id) => {
        await PlayerService.deleteById(id)
        findAllPlayer()
    }

    


    return (
        <>
            <h2 className="text-center fw-bold">List Player</h2>
            <a>
                <button className="btn btn-success btn-outline-secondary btn-sm">
                    <span className="fa-solid fa-house-medical text-light h5 my-auto me-1" />
                    <span className="text-light"><NavLink to={"players/create"}>Create Player</NavLink> </span>
                </button>
            </a>
            <table
                id="playerTable"
                className="table table-light table-striped table-bordered"
            >
                <thead>
                    <tr className="table-dark text-light">
                        <th>Id</th>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Club</th>
                        <th className="text-center">Edit</th>
                        <th className="text-center">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {player.map((player, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{player.name}</td>
                            <td>{player.location}</td>
                            <td>{club.filter((clubs) => clubs.id == player.clubId)[0]?.clubName}</td>
                            <td className="text-center">
                                <a >
                                    <button className="btn btn-primary btn-outline-secondary btn-sm">
                                        <span className="fa-solid fa-house-circle-exclamation text-light h6 m-auto px-2">
                                            <Link to={"players/edit/" + player.id}>Edit</Link>
                                        </span>
                                    </button> 
                                </a>
                            </td>
                            <td class="text-center">
                                <a data-bs-toggle="modal"
                                    data-bs-target="#deleteStudent" >
                                    <button className="btn btn-danger btn-outline-secondary btn-sm" >
                                        <span className="fa-solid fa-person-circle-minus text-light h6 m-auto px-2" onClick={() => getIdDelete(player.id,player.name)}>Delete</span>
                                    </button>
                                </a>
                            </td>
                        </tr>
                    ))

                    }
                </tbody>
            </table>

            <div>

                <div
                    className="modal fade"
                    id="deleteStudent"
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">
                                    Modal title
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                />
                            </div>
                            <div className="modal-body">Do you want to delete <span
                                className={"text-danger"}></span>?
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>
                                <button data-bs-dismiss="modal" onClick={() => deletePlayer(playerDelete)} type="button"
                                    className="btn btn-primary">
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ListPlayer;