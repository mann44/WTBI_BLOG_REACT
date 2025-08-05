import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NewsletterCard = ({ title, subtitle, image, snippet, link }) => (
  <Link to={link} className="newsletter-card" style={{ display: "block", textDecoration: "none", color: "inherit" }}>
    <div style={{ display: "flex", flexDirection: "column", border: "1px solid #ccc", marginBottom: "16px" }}>
      <img src={image} alt={title} style={{ width: "100%", height: "auto" }} />
      <div style={{ padding: "8px" }}>
        <h3 style={{ margin: "0 0 4px 0" }}>{title}</h3>
        {subtitle && <p style={{ margin: "0 0 8px 0", fontWeight: "bold" }}>{subtitle}</p>}
        <p style={{ margin: 0 }}>{snippet}</p>
      </div>
    </div>
  </Link>
);

NewsletterCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  image: PropTypes.string.isRequired,
  snippet: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default NewsletterCard;
