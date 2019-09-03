import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loading from "./loading";

export const Shop = props => {
  const [users, setUsers] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [getUsersUrl, setgetUsersUrl] = useState("https://jsonplaceholder.typicode.com/users");
  //const [object, setObject] = useState("seconed");

  // const routes = [
  //   {
  //     path: '/shop/:id',
  //     component: Shop
  //   }
  // ]

  // const RouteWithSubRoutes = (route) => (
  //   <Route path={route.path} render={(props) => (
  //     <route.component {...props} routes={route.routes} />
  //   )} />
  // )

  console.log("props", props);

  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    setIsLoading(false)
    await axios
      .get(getUsersUrl)
      .then(response => {
        // console.log(response.data);
        setUsers(response.data);
        setIsLoading(true)
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h1>Shop component page</h1>
      <hr />
      <div>
        {isLoading
          ? users.map(user => (
            <h3 key={user.id}>
              <Link to={`/shop/${user.id}`}>{user.name}</Link>
            </h3>
          ))
          : <Loading />
        }
      </div>
    </div>
  );
};

export default Shop;
