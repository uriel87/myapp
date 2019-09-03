import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loading from "./loading";

export const SongsList = props => {
  const [songs, setSongs] = useState();
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
        setSongs(response.data);
        setIsLoading(true)
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h1>Songs component page</h1>
      <hr />
      <div>
        {isLoading
          ? songs.map(song => (
            <h3 key={song.id}>
              <Link to={`/SongsList/${song.id}`}>{song.name}</Link>
            </h3>
          ))
          : <Loading />
        }
      </div>
    </div>
  );
};

export default SongsList;
