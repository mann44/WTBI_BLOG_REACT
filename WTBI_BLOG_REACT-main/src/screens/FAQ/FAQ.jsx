import React from "react";
import { useNavigate } from "react-router-dom";

export const FAQ = () => {
  const navigate = useNavigate();
  return (
    <div className="faq-screen" style={{ padding: "20px" }}>
      <h1>FAQ</h1>
      <p>This is the frequently asked questions page.</p>
      {/* Navigate back to the previous page */}
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};