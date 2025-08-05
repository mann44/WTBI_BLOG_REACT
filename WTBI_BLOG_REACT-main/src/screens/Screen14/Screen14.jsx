import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NewsletterCard from "../../components/NewsletterCard";
import "./style.css";

export const Screen14 = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const handleSearchContainerClick = (e) => {
    e.stopPropagation();
  };
  const handleSignOut = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate("/the-berg-2");
  };

  const [filterTag, setFilterTag] = useState("all");

  const cards = [
    {
      id: "director",
      title: "Message from Our Director",
      subtitle: "Brian Angus, Rosenberg Site Director",
      image: "/img/rectangle-1-14.png",
      snippet:
        "I have been with Frito-Lay for almost 24 years and I have worked in 4 locations...",
      link: "/director-message",
      tag: "hr",
    },
    {
      id: "team",
      title: "Team Spotlight",
      subtitle: "The Legend Has Retired",
      image: "/img/rectangle-109.png",
      snippet:
        "After an incredible 31-year career with the PepsiCo family, we’re...",
      link: "/the-berg-team-spotlight",
      tag: "people",
    },
    {
      id: "july",
      title: "July Events This Month!",
      subtitle: "We’re so excited to have you",
      image: "/img/rectangle-111.png",
      snippet:
        "Highlights this month: Shoot hoops at the Basketball Tournament,…",
      link: "/the-berg-team-spotlight",
      tag: "site",
    },
    {
      id: "employee",
      title: "Employee Spotlight",
      subtitle: "Food Safety Hero Shout Out",
      image: "/img/rectangle-112.png",
      snippet:
        "Great job Angelica for catching a hold in TC2 while verifying…",
      link: "/the-berg-team-spotlight",
      tag: "people",
    },
    {
      id: "fact",
      title: "One Fact, Big Impact",
      subtitle: "This Month’s Green Spot",
      image: "/img/rectangle-113.png",
      snippet:
        "Great job Angelica for catching a hold in TC2 while verifying…",
      link: "/the-berg-the-green-spot",
      tag: "safety",
    },
  ];

  return (
    <div className="screen-14" style={{ display: "block" }}>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          className="search-14"
          onClick={handleSearchContainerClick}
          style={{ display: "block" }}
        >
          <input
            type="text"
            className="search-input"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ display: "block" }}
          />
        </div>
        <button onClick={handleSignOut} style={{ display: "block" }}>
          Sign Out
        </button>
      </header>

      <div style={{ display: "flex", gap: "8px", marginTop: "16px" }}>
        {[
          { key: "all", label: "View All" },
          { key: "hr", label: "HR Corner" },
          { key: "people", label: "Our People" },
          { key: "site", label: "Site Updates" },
          { key: "safety", label: "Health & Safety" },
        ].map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setFilterTag(key)}
            style={{
              display: "block",
              padding: "8px 12px",
              cursor: "pointer",
              backgroundColor: filterTag === key ? "#ccc" : "#eee",
              border: "1px solid #ccc",
            }}
          >
            {label}
          </button>
        ))}
      </div>

      <div style={{ marginTop: "16px" }}>
        {cards
          .filter((card) => filterTag === "all" || card.tag === filterTag)
          .map((card) => (
            <NewsletterCard key={card.id} {...card} />
          ))}
      </div>
    </div>
  );
};
