import React from "react";
import { useNavigate } from "react-router-dom";

// Simple screen showing a longer message from leadership.  This page is
// reachable via the "A Message from Leadership" card on the landing page.
// A back button allows the user to return to the previous page without
// needing to use the browser’s navigation controls.
export const LeadershipMessage = () => {
  const navigate = useNavigate();
  return (
    <div className="leadership-message-screen" style={{ padding: "20px" }}>
      <h1>A Message from Leadership</h1>
      <p>
        Our leadership team is committed to creating a workplace culture that
        values safety, collaboration and growth. Throughout our history we’ve
        challenged ourselves to innovate and improve, and we know that our
        success depends on everyone pulling together. As we close this
        quarter we ask you to continue to prioritize personal and food safety,
        engage in site‑wide improvement initiatives and support one another.
        Thank you for your continued dedication and let’s keep moving
        forward as one team.
      </p>
      {/* Back button to return to previous screen */}
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};