import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import classes from "./UsersDetails.module.css";

const UsersDetails = () => {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setIsError] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const onBack = () => navigate(-1);
  

  useEffect(() => {
    setIsLoading(true);

    fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setIsError("");
      })
      .catch((err) => {
        setIsError(err.message);
        setUser(null);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className={classes.post}>
      {user && (
        <>
         <button onClick={onBack}>Back</button>
          <h2>
            {user.name} {user.email} {user.phone}
          </h2>
        </>
      )}
      {user && (
        <p>
          SD:{user.company.bs} catchPhrase: {user.company.catchPhrase} NAME:{" "}
          {user.company.name}
        </p>
      )}
    </div>
  );
};

export default UsersDetails;