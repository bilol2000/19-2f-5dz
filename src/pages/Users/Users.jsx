import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./style.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import fetchAllUsers from "../store/Reducers/userReducer";

const Users = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { users, isLoading, errorUsers } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  function getShortValue(value, id) {
    if (value && value.length > 20) {
      return (
        <div>
          {value.substr(0, 20)}...
          <Link to={`/users/${id}`}> More...</Link>
        </div>
      );
    }
  }

  return (
    <div className={classes.container}>
      {users &&
        users.map((user) => (
          <div className={classes.mod} key={user.id}>
            <div className={classes.posts}>
              <h1>{user.id}</h1>
              <div className={classes.flexing}>
                <h3>
                  {user.name} {user.email}
                </h3>
                <button onClick={() => navigate(`/users/${user.id}`)}>
                  Learn More
                </button>
              </div>
              <br />
              <p>catchPhrase: {getShortValue(user.company?.catchPhrase, user.id)}</p>
            </div>
          </div>
        ))}
      {isLoading && "loading..."}
      {errorUsers && errorUsers}
    </div>
  );
};

export default Users;
