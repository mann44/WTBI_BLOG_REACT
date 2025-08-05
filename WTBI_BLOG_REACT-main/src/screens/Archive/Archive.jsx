import React from "react";
import { useNavigate } from "react-router-dom";

export const Archive = () => {
  const navigate = useNavigate();
  return (
    <div className="archive-screen" style={{ padding: "20px" }}>
      <h1>Archive</h1>
      <p>This is the archive page.</p>
      {/* Navigate back to the previous page */}
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};