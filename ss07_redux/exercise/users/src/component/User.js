import React, { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import {useNavigate} from 'react-router-dom' 
import { getAll } from "../redux/action/user";

export default function User() {
    const navigation = useNavigate
    const users = useSelector(state => state.users);
    const dispatch = useDispatch();
    console.log(users);

    useEffect(() => {

        dispatch(getAll());
        
    }, []);

    const handleDelete = (id) =>{
        navigation("/delete/" + id)
        
    }


  return (
    <>
     <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
            {users.map((userList,index) =>(
              <tr key={index.id}>
              <td>{userList.id}</td>
              <td>{userList.username}</td>
              <td>{userList.email}</td>
              <td>{userList.website}</td>
              <td>
                <button onClick={() => handleDelete(userList.id)} type="button" className="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr>
            ))}
        </tbody>
      </table>
    </div>
 </>

  )
}
