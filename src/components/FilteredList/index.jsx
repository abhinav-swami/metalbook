import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { FriendsList } from "../FriendsList";

export const FilteredList = () => {
  const [filterQuery, setFilterQuery] = useState("");
  const friends = useSelector((state) => state.friends.friends);
  const filteredList = useMemo(() => {
    const data = friends.filter((friend) =>
      friend.name.toUpperCase().match(filterQuery.toUpperCase())
    );
    return data;
  }, [filterQuery, friends]);
  return (
    <>
      <div className="filter-container">
        <input
          className="filter-search-bar"
          placeholder="Filter by name"
          value={filterQuery}
          onChange={(e) => setFilterQuery(e.target.value)}
        />
      </div>

      <FriendsList
        filterQuery={filterQuery}
        friends={filteredList}
        key={filteredList.length}
      />
    </>
  );
};
