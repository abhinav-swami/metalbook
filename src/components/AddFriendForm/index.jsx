import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const AddFriendForm = () => {
  const [newFriendName, setNewFriendName] = useState("");
  const friends = useSelector((state) => state.friends.friends);
  const dispatch = useDispatch();
  const saveFriend = (e) => {
    e.preventDefault();
    if (!newFriendName) {
      alert("invalid name");
      return "";
    }
    if (
      friends.some((existingFriend) => existingFriend.name === newFriendName)
    ) {
      alert("alreadty exists");
    } else {
      dispatch({
        type: "ADD_FRIEND",
        payload: newFriendName,
      });
      setNewFriendName("");
    }
  };
  return (
    <form onSubmit={saveFriend}>
      <input
        className="search-bar"
        type="text"
        placeholder="Enter your friend's name"
        value={newFriendName}
        onChange={(e) => setNewFriendName(e.target.value)}
      />
    </form>
  );
};
