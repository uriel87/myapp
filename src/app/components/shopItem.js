import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../components/loading"

// export const ShopItem = props => {

function ShopItem({ match }) {

  const [userItem, setUserItem] = useState();
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
        setUserItem(response.data);
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
      <h1>shopItem component page</h1>
      {isLoading
        ? userItem.map(userItem => (
          <h3 key={userItem.id}>
            {userItem.body}
          </h3>
        ))
        : <Loading />}
    </div>
  );
};

export default ShopItem;