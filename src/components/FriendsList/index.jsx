import React from "react";
import { usePagination } from "../../hooks/usePagination";
import { EmptyState } from "../EmptyState";
import { FriendListCard } from "../FriendListCard";
import { Pagination } from "../Pagination";

export const FriendsList = ({ friends, filterQuery }) => {
  const { pageNumber, totalPages, paginatedData, changePage } =
    usePagination(friends);
  return (
    <>
      {!filterQuery && paginatedData && paginatedData.length === 0 && (
        <EmptyState
          text={"No friends available, add some !"}
          icon={
            <i
              className="fa fa-exclamation-triangle icon-large"
              aria-hidden="true"
            ></i>
          }
        />
      )}
      {filterQuery && paginatedData.length === 0 && (
        <EmptyState
          text={"No friends found with current filter"}
          icon={<i className="fa fa-trash-o icon-large" aria-hidden="true"></i>}
        />
      )}
      {paginatedData.map((friend) => (
        <FriendListCard friend={friend} key={friend.name} />
      ))}
      <Pagination
        pageNumber={pageNumber}
        totalPages={totalPages}
        changePage={changePage}
      />
    </>
  );
};
