import React, { Component } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, match } from "react-router-dom";

// export const ShopItem = props => {

function ShopItem({ match }) {

  const [userItem, setUserItem] = useState();

  useEffect(() => {
    fetchItem();
    console.log("match", match);

  }, []);

  const fetchItem = async () => {
    const data = await axios
      .get(`https://jsonplaceholder.typicode.com/posts?userId=${match.params.id}`)
      .then(response => {
        console.log("match.params.id", response.data);
        setUserItem(response.data);
        console.log("userItem", userItem);

      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h1>shopItem component page</h1>
      {/* <h3>{JSON.stringify(userItem)}</h3> */}

      {userItem
        ? userItem.map(userItem => (
          <h3 key={userItem.id}>
            {userItem.body}
          </h3>
        ))
        : ""}
    </div>
  );
};

export default ShopItem;