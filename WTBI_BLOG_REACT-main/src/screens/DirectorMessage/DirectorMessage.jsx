import React from "react";
import { useNavigate } from "react-router-dom";

export const DirectorMessage = () => {
  const navigate = useNavigate();
  return (
    <div className="director-message-screen" style={{ padding: "20px" }}>
      <h1>Message from Our Director</h1>
      <p>
        I have been with Frito-Lay for almost 24 years and I have worked in 4
        locations, with all of my experience being in the field. Frito-Lay
        provided me with fantastic opportunities to grow my career and
        provided me with different experiences. I am the proud father of five,
        who reside in North Carolina. I have been in Texas for three and a half
        years (three years in San Antonio and the last six months in Houston).
        I started at Frito Lay as an experience hire in Jonesboro, Arkansas.
        As we prepare to close Q1, it has been a challenging quarter from a
        food safety and cost standpoint. As shared previously, our site
        priorities are: Personal Safety, Food Safety, and then Everything Else.
        Let’s lean heavily into these priorities as we close P3 to ensure a
        successful Q2. There are areas of improvement that we can leverage
        as a springboard forward: Continued Safety Excellence, site-wide
        improvement, and labor performance in the warehouse. We have the people
        and talent to be an Award of Excellence-winning site, and it takes all
        of us moving forward together to make it happen.
      </p>
      {/* Back button to return to previous screen */}
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};