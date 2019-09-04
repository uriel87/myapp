import React from "react";
import { useState, useEffect, useReducer } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loading from "../loading";
import songsListReducer from "./songsListReducer";

export const SongsList = props => {
  //const [songs, setSongs] = useState();
  //const [isLoading, setIsLoading] = useState(false);
  const [getUsersUrl, setgetUsersUrl] = useState("https://jsonplaceholder.typicode.com/users");
  // const [state, dispatch] = useReducer(songsListReducer.songReducer, songsListReducer.initialState);

  useEffect(() => {
    //fetchItem();
    fetchSongs();
  }, []);

  // const fetchItem = async () => {
  //   setIsLoading(false)
  //   await axios
  //     .get(getUsersUrl)
  //     .then(response => {
  //       setSongs(response.data);
  //       setIsLoading(true)
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // };


  const fetchSongs = async () => {
    await axios
      .get(getUsersUrl)
      .then(response => {
        console.log("response in fetchSongs", response);
        songsListReducer.dispatch({ type: "fetched", response });
      })
      .catch(err => songsListReducer.dispatch({ type: "fetch_failed", err }));
    // dispatch({ type: "fetched", songsLists });
  };

  return (
    <div className="container">
      <h1>Songs component page</h1>
      <hr />
      <div>
        {console.log("state.loading in render", songsListReducer.state)}

        {songsListReducer.state.loading
          ? songsListReducer.state.songsList.map(song => (
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
