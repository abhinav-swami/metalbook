import React from "react";
import { useDispatch } from "react-redux";

export const FriendListCard = ({ friend }) => {
  const dispatch = useDispatch();

  const changeFavourite = (friend) => {
    dispatch({
      type: friend.isFav
        ? "UNMARK_FRIEND_AS_FAVOURITE"
        : "MARK_FRIEND_AS_FAVOURITE",
      payload: friend.name,
    });
  };

  const removeContact = (friend) => {
    const confirmed = window.confirm(
      `are you sure you want to removed ${friend.name} from your friend list`
    );
    if (confirmed) {
      dispatch({
        type: "DELETE_FRIEND",
        payload: friend.name,
      });
    }
  };
  return (
    <div key={friend.name} className="friend-list-card">
      <div>
        <span className="text-title">{friend.name}</span>
        <text className="text-subtitle">is your friend</text>
      </div>
      <div>
        <button onClick={() => changeFavourite(friend)}>
          {friend.isFav ? (
            <i className="fa fa-star" aria-hidden="true"></i>
          ) : (
            <i className="fa fa-star-o" aria-hidden="true"></i>
          )}
        </button>
        <button
          style={{ marginLeft: "16px" }}
          onClick={() => removeContact(friend)}
        >
          <i className="fa fa-trash" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};
