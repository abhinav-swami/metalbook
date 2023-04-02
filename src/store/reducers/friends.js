const initialState = {
  friends: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_FRIEND":
      return {
        ...state,
        friends: [...state.friends, { name: action.payload, isFav: false }],
      };
    case "DELETE_FRIEND":
      return {
        ...state,
        friends: [...state.friends].filter(
          (friend) => friend.name !== action.payload
        ),
      };
    case "MARK_FRIEND_AS_FAVOURITE":
      const friends = [...state.friends];
      const friendIdx = friends.findIndex(
        (friend) => friend.name === action.payload
      );
      friends[friendIdx].isFav = true;
      return {
        ...state,
        friends,
      };
    case "UNMARK_FRIEND_AS_FAVOURITE":
      const allFriends = [...state.friends];
      const favFriendIdx = allFriends.findIndex(
        (friend) => friend.name === action.payload
      );
      allFriends[favFriendIdx].isFav = false;
      return {
        ...state,
        friends: allFriends,
      };
    default:
      return state;
  }
}
