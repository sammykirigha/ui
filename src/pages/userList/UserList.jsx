import React, { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import "./UserList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Wrapper from "../../components/layouts/Wrapper";
import { useDispatch, useSelector } from "react-redux";
import { loadAllUsers } from "../../redux/actions/users";

const UserList = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.users);

  const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(loadAllUsers());
    setData(users);
  }, []);

  const user = users.map((user) => user);

  const admin = user?.isAdmin === 1 ? "Admin" : "User";

  const columns = [
    { field: `id`, headerName: "ID", width: 90 },

    {
      field: `username`,
      headerName: "User Name",
      width: 200,
    },

    { field: `email`, headerName: "Email", width: 200 },

    {
      field: `isAdmin`,
      headerName: "Role",
      width: 160,
    },

    {
      field: `gender`,
      headerName: "Gender",
      width: 160,
    },

    {
      field: `age`,
      headerName: "Age",
      width: 160,
    },

    {
      field: "action",
      headerName: "Action",
      width: 120,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/${params.row.id}/edit`}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              // onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  if (loading)
    return (
      <Wrapper>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Wrapper>
    );

  return (
    <Wrapper>
      <div className="userList">
        <DataGrid
          rows={data}
          disableSelectionOnClick
          columns={columns}
          pageSize={7}
          checkboxSelection
        />
      </div>
    </Wrapper>
  );
};

export default UserList;
