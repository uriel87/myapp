import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./loading"

// export const ShopItem = props => {

function Song({ match }) {

  const [song, setSong] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [getUserUrl, setgetUserUrl] = useState(`https://jsonplaceholder.typicode.com/posts?userId=${match.params.id}`);

  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    setIsLoading(false);
    await axios
      .get(getUserUrl)
      .then(response => {
        setSong(response.data);
        setIsLoading(true);

        // console.log("match.params.id", response.data);
        // console.log("userItem", userItem);

      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h1>Song component page</h1>
      {isLoading
        ? song.map(song => (
          <h3 key={song.id}>
            {song.body}
          </h3>
        ))
        : <Loading />}
    </div>
  );
};

export default Song;