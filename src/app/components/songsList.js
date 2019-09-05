import React from "react";
import { useState, useEffect, useReducer } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loading from "../components/loading";

export const SongsList = props => {
  //const [songs, setSongs] = useState();
  //const [isLoading, setIsLoading] = useState(false);
  const [getUsersUrl, setgetUsersUrl] = useState("https://jsonplaceholder.typicode.com/users");

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
        dispatch({ type: "fetched", response });
      })
      .catch(err => dispatch({ type: "fetch_failed", err }));
  };



  const initialState = {
    loading: false,
    error: false,
    songsList: []
  };

  // function songReducer(state, action) {
  const songReducer = (state = initialState, action) => {
    switch (action.type) {
      case "fetching":
        return { ...state, loading: false };
      case "fetched":
        return { ...state, songsList: action.response.data, loading: true };
      case "fetch_failed":
        return { ...state, error: true };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(songReducer, initialState);


  return (
    <div className="container">
      <h1>Songs component page</h1>
      <hr />
      <div>
        {console.log("state.loading in render", state)}

        {state.loading
          ? state.songsList.map(song => (
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
