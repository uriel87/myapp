import React, {Component} from "react";
import {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export const Shop = props => {
  const [users, setUsers] = useState();

  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    const data = await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        console.log(response.data);
        setUsers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h1>Shop component page</h1>
      {/* <p>{JSON.stringify(users)}</p> */}
      <hr />
      <div>
        {users
          ? users.map(user => (
              <h3 key={user.id}>
                <Link to={`/shop/${user.id}`}>{user.name}</Link>
              </h3>
            ))
          : ""}
      </div>
    </div>
  );
};

export default Shop;

// const js = [
//   {
//     id: 1,
//     name: "Leanne Graham",
//     username: "Bret"
//   },
//   {
//     id: 2,
//     name: "Ervin Howell",
//     username: "Antonette"
//   }
// ];

// const jso = JSON.stringify(js);
