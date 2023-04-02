import React from "react";

export const EmptyState = ({ icon, text }) => {
  return (
    <div className="empty-state-container">
      {icon}

      <h6>{text}</h6>
    </div>
  );
};
