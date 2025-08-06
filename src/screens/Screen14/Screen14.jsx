// Bring in useState from React so we can track which filter is currently active
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const Screen14 = () => {
  // selectedFilter holds the currently active filter.  When it is "View All" we
  // show every newsletter card.  Otherwise we show only those cards whose
  // category matches the selected filter.  This makes the newsletter section
  // interactive without changing the structure of the existing markup.
  const [selectedFilter, setSelectedFilter] = useState("View All");

  /**
   * Compute inline styles for each newsletter card based on its assigned tags
   * and the currently selected filter.  When the filter is set to "View All"
   * the card retains its default absolute positioning defined in the CSS and
   * flows as originally designed.  When a specific tag is selected we
   * override the absolute positioning so the visible cards stack
   * vertically and collapse unused space.  Cards whose tags do not match
   * the current filter are hidden completely via display: none.
   *
   * @param {string[]} cardTags - The list of category tags assigned to a card.
   * @returns {object} A style object to spread onto the card container.
   */
  const getCardStyle = (cardTags, cardWidth = null) => {
    // Determine if this card should be shown based on the selected filter
    const show = selectedFilter === "View All" || cardTags.includes(selectedFilter);
    if (!show) {
      return { display: "none" };
    }
    // In "View All" mode we keep the default absolute positioning; returning
    // an empty object allows the CSS styles to apply unchanged.
    if (selectedFilter === "View All") {
      return {};
    }
    // For filtered views, remove absolute positioning and allow the card to
    // participate in a flex-based grid.  We set a relative position so
    // absolutely positioned children (e.g. images, text) remain correct.
    // Each card keeps its original width (if provided) and height, and
    // spacing is introduced via margins.  When no width is provided we
    // default to auto allowing the browser to calculate the width.
    return {
      position: "relative",
      left: "0",
      top: "0",
      width: cardWidth ? `${cardWidth}px` : "auto",
      height: "585px",
      marginBottom: "24px",
    };
  };

  /**
   * Compute inline styles for the filter pills.  Each pill shares the
   * same underlying markup (either rectangle-93 or rectangle-94) and
   * differs only by its associated tag.  When the pill's tag matches
   * the currently selected filter we apply the blue theme (#005896)
   * used throughout the design; otherwise the pill appears as an
   * unselected state with a white background and grey border.  These
   * helpers centralize the styling logic so that all duplicate pills
   * remain in sync.
   *
   * @param {string} tag - The tag associated with the pill (e.g.
   *   "View All", "Our People", "HR Corner", etc.)
   * @returns {object} A style object for the pill's background and border.
   */
  const getFilterPillStyle = (tag) => {
    return {
      backgroundColor: selectedFilter === tag ? "#005896" : "#ffffff",
      borderColor: selectedFilter === tag ? "#005896" : "#bcbcbc",
    };
  };

  /**
   * Compute inline styles for the text inside a filter pill.  When a
   * pill is selected the text should be white to contrast the blue
   * background; otherwise it inherits the grey used in the default
   * stylesheet.  All other typography (font size, weight, etc.)
   * remains unchanged.
   *
   * @param {string} tag - The tag associated with the pill (e.g.
   *   "View All", "Our People", "HR Corner", etc.)
   * @returns {object} A style object controlling the text colour.
   */
  const getFilterTextStyle = (tag) => {
    return {
      color: selectedFilter === tag ? "#FFFFFF" : "#667085",
    };
  };
  return (
    <div className="screen-14">
      {/* Replace the top-level Link with a plain div so the entire page is not clickable. */}
      <div className="the-berg-5">
        <div className="overlap-198">
          <img
            className="rectangle-91"
            alt="Rectangle"
            src="/img/rectangle-1-14.png"
          />

          <div className="rectangle-92" />

          <header className="header-21">
            <div className="overlap-group-93">
              <div className="search-14">
                <div className="icon-42">
                  <img
                    className="vector-49"
                    alt="Vector"
                    src="/img/vector-174.png"
                  />
                </div>
              </div>

              <div className="header-22" />

              <div className="menu-44">
                <div className="destination-15">Archive</div>

                <div className="tours-15">FQA</div>
              </div>

              <div className="content-29">
                <button className="button-38">
                  <div className="sign-up-15">Sign Out</div>
                </button>
              </div>

              <div className="VENTURE-29">FRITO-LAY</div>
            </div>
          </header>

          <div className="group-430">
            <div className="we-craft-digital-29">The BERG</div>
          </div>

          <div className="group-431">
            <div className="group-432">
              <div className="overlap-group-94">
                <div className="group-433" />

                <div className="group-434" />
              </div>
            </div>
          </div>
        </div>

        {/* Make the message card itself clickable instead of the entire page */}
        <Link to="/the-berg-sitedirector" className="group-435">
          <div className="future-of-customer-s-19">
            Message from Our Director
          </div>

          <p className="ainara-vergara-24">
            Brian Angus, Rosenberg Site Director
          </p>

          <p className="his-dolorem-habemus-62">
            I have been with Frito-Lay for almost 24 years <br />
            and I have worked in 4 locations, with all of my experience being in
            the field. Frito-Lay provided me with fantastic opportunities to
            grow my career and provided me with different experiences. I am the
            proud father of 5, who reside in North Carolina. I have been in
            Texas for three and a half years (3 years in San Antonio and the
            last 6 months in Houston) I started at Frito Lay as an experience
            hire in Jonesboro, Arkansas. As we prepare to close Q1, it has been
            a challenging quarter from a Food Safety and Cost standpoint. As
            shared previously, our site priorities are: Personal Safety, Food
            Safety, and then Everything Else. Let’s lean heavily into these
            priorities as we close P3 to ensure a successful Q2. There are areas
            of improvement that we can leverage as a springboard forward:
            Continued Safety Excellence, site-wide improvement, and Labor
            performance in the WHSE. We have the people and talent to be an
            Award of Excellence-winning site, and it takes all of us moving
            forward together to make it happen.
            <br />
          </p>

          <div className="group-436">
            <div className="overlap-group-95">
              <div className="his-dolorem-habemus-63">Read More</div>

              <div className="icon-43">
                <img
                  className="vector-50"
                  alt="Vector"
                  src="/img/vector-175.png"
                />
              </div>
            </div>
          </div>
        </Link>

        <div className="footer-menu-9">
          <footer className="footer-20">
            <div className="cel-49">
              <div className="logo-text-15">
                <div className="VENTURE-30">ROSENBURG NEWSLETTER</div>

                <p className="feel-and-enjoy-the-10">
                  Published by <br />
                  What’s The Big Idea?
                </p>
              </div>

              <div className="menu-45">
                <div className="content-30">
                  <div className="supports-15">Support</div>

                  <div className="cel-50">
                    <div className="help-15">Archive</div>

                    <div className="location-15">Location Info</div>

                    <div className="employees-15">Resources</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="cel-51">
              <div className="overlap-group-96">
                <div className="cel-52" />

                <div className="frame-15">
                  <div className="terms-condditions-15">
                    Terms &amp; Conditions
                  </div>

                  <div className="ellipse-24" />

                  <div className="text-wrapper-179">Privacy Policy</div>
                </div>

                <div className="element-venture-all-15">
                  ©2025 All rights reserved
                </div>
              </div>
            </div>
          </footer>
        </div>

        <div className="group-437">
          <img
            className="ellipse-25"
            alt="Ellipse"
            src="/img/ellipse-1-9.png"
          />
        </div>

        <div className="group-438">
          <div className="we-craft-digital-30">TOP NEWS</div>

          <div className="group-439">
            <p className="his-dolorem-habemus-64">
              <span className="text-wrapper-180">
                SITE SHUTDOWN
                <br />
              </span>

              <span className="text-wrapper-181">
                Site will be down from March21st to 23rd FOR HFSD
                <br />
                <br />
              </span>

              <span className="text-wrapper-180">
                NEW FLAVORS:
                <br />
              </span>

              <span className="text-wrapper-181">
                Fiery Skulls in BCP, Jalapeno Lime Twists, Guacamole Doritos
              </span>
            </p>

            <img className="path-803" alt="Path" src="/img/path-7-7.png" />

            <img className="path-804" alt="Path" src="/img/path-7-7.png" />
          </div>
        </div>

        <div className="toggle-menu-6">
          <div className="overlap-group-97">
            <div className="tab-rollover-36">
              <div className="overlap-199">
                {/* Wrap the entire filter pill in a single container with an onClick so
                   clicking anywhere on the pill triggers the filter change.  This
                   prevents accidental clicks on underlying cards due to layering. */}
                <div className="group-440">
                  <div className="overlap-group-97">
                    <div
                      className="rectangle-93"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setSelectedFilter("View All");
                      }}
                      /* Use helper to compute the appropriate colours for the pill */
                      style={getFilterPillStyle("View All")}
                    />
                    {/* "View all" resets the filter so all cards are shown */}
                    <div
                      className="text-wrapper-182"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setSelectedFilter("View All");
                      }}
                      /* Compute text colour based on selected filter */
                      style={getFilterTextStyle("View All")}
                    >
                      View all
                    </div>
                  </div>
                </div>

                <div className="group-440">
                  <div className="overlap-group-97">
                    <div
                      className="rectangle-94"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setSelectedFilter("Our People");
                      }}
                      /* Highlight the selected filter pill using helper */
                      style={getFilterPillStyle("Our People")}
                    />
                    {/* Filter to show cards tagged as "Our People" */}
                    <div
                      className="text-wrapper-183"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setSelectedFilter("Our People");
                      }}
                      style={getFilterTextStyle("Our People")}
                    >
                      Our People
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="tab-rollover-37">
              <div className="overlap-199">
                <div className="group-440">
                  <div className="overlap-group-97">
                    <div
                      className="rectangle-93"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setSelectedFilter("View All");
                      }}
                      style={getFilterPillStyle("View All")}
                    />
                    {/* "View all" resets the filter so all cards are shown */}
                    <div
                      className="text-wrapper-182"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setSelectedFilter("View All");
                      }}
                      style={getFilterTextStyle("View All")}
                    >
                      View all
                    </div>
                  </div>
                </div>

                <div className="group-440">
                  <div className="overlap-group-97">
                    <div
                      className="rectangle-94"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setSelectedFilter("HR Corner");
                      }}
                      style={getFilterPillStyle("HR Corner")}
                    />
                    {/* Filter to show cards tagged as "HR Corner" */}
                    <div
                      className="text-wrapper-183"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setSelectedFilter("HR Corner");
                      }}
                      style={getFilterTextStyle("HR Corner")}
                    >
                      HR Corner
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="tab-rollover-38">
              <div className="overlap-199">
                <div className="group-440">
                  <div className="overlap-group-97">
                    <div
                      className="rectangle-93"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setSelectedFilter("View All");
                      }}
                      style={getFilterPillStyle("View All")}
                    />
                    {/* "View all" resets the filter so all cards are shown */}
                    <div
                      className="text-wrapper-182"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setSelectedFilter("View All");
                      }}
                      style={getFilterTextStyle("View All")}
                    >
                      View all
                    </div>
                  </div>
                </div>

                <div className="group-440">
                  <div className="overlap-group-97">
                    <div
                      className="rectangle-94"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setSelectedFilter("Health & Safety");
                      }}
                      style={getFilterPillStyle("Health & Safety")}
                    />
                    {/* Filter to show cards tagged as "Health & Safety" */}
                    <div
                      className="text-wrapper-183"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setSelectedFilter("Health & Safety");
                      }}
                      style={getFilterTextStyle("Health & Safety")}
                    >
                      Health &amp; Safety
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="tab-rollover-39">
              <div className="overlap-199">
                <div className="group-440">
                  <div className="overlap-group-97">
                    <div
                      className="rectangle-93"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setSelectedFilter("View All");
                      }}
                      style={getFilterPillStyle("View All")}
                    />
                    {/* "View all" resets the filter so all cards are shown */}
                    <div
                      className="text-wrapper-182"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setSelectedFilter("View All");
                      }}
                      style={getFilterTextStyle("View All")}
                    >
                      View all
                    </div>
                  </div>
                </div>

                <div className="group-440">
                  <div className="overlap-group-97">
                    <div
                      className="rectangle-94"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setSelectedFilter("Site Updates");
                      }}
                      style={getFilterPillStyle("Site Updates")}
                    />
                    {/* Filter to show cards tagged as "Site Updates" */}
                    <div
                      className="text-wrapper-183"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setSelectedFilter("Site Updates");
                      }}
                      style={getFilterTextStyle("Site Updates")}
                    >
                      Site Updates
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link className="tab-rollover-40" to="/the-berg-1">
              <div className="overlap-199">
                <div className="group-440">
                  <div className="overlap-group-97">
                    <div className="rectangle-93" />

                    <div className="text-wrapper-182">View all</div>
                  </div>
                </div>

                <div className="group-440">
                  <div className="overlap-group-97">
                    <div className="rectangle-94" />

                    <div className="text-wrapper-183">Calendar</div>
                  </div>
                </div>
              </div>
            </Link>

            <Link className="tab-rollover-41" to="/the-berg-world-map">
              <div className="overlap-199">
                <div className="group-440">
                  <div className="overlap-group-97">
                    <div className="rectangle-93" />

                    <div className="text-wrapper-182">View all</div>
                  </div>
                </div>

                <div className="group-440">
                  <div className="overlap-group-97">
                    <div className="rectangle-94" />

                    <div className="text-wrapper-183">World Map</div>
                  </div>
                </div>
              </div>
            </Link>

            <div className="tab-rollover-42">
              <div className="overlap-199">
                <div className="group-440">
                  <div className="overlap-group-97">
                    <div className="rectangle-94" />

                    <div className="text-wrapper-183">View all</div>
                  </div>
                </div>

                <div className="group-440">
                  <div className="overlap-group-97">
                    <div className="rectangle-93" />

                    <div className="text-wrapper-182">View all</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wrap all newsletter cards in a container.  In filtered views this
            becomes a flexbox to allow cards to flow and collapse space. */}
        <div
          className="newsletter-container"
          /*
           * When filtering (selectedFilter !== "View All") we switch this
           * container to a flex layout and absolutely position it so that
           * the top aligns with the original first card (1187px from the
           * top).  In the default "View All" state we return an empty
           * style so the original CSS positioning applies.
           */
          style={
            selectedFilter === "View All"
              ? {}
              : {
                  position: "absolute",
                  top: "1187px",
                  left: 0,
                  width: "100%",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "24px",
                  alignItems: "flex-start",
                }
          }
        >

        <Link
          className="group-441 team-spotlight"
          to="/the-berg-team-spotlight"
          style={getCardStyle(["Our People"], 364)}
        >
          <div className="overlap-200">
            <div className="group-442">
              <div className="future-of-customer-s-20">Team Spotlight</div>

              <img
                className="img-4"
                alt="Rectangle"
                src="/img/rectangle-109.png"
              />

              <div className="ainara-vergara-25">The Legend Has Retired</div>

              <p className="his-dolorem-habemus-65">
                <span className="text-wrapper-181">
                  After an incredible 31-year career with the PepsiCo family,
                  we’re…{" "}
                </span>

                <span className="text-wrapper-184">more</span>

                <span className="text-wrapper-181">
                  {" "}
                  locations, with all of my experience being in the field.
                  Frito-Lay provided me with fantastic opportunities to grow my
                  career and provided me with different experiences. I am the
                  proud father of 5, who reside in North Carolina. I have been
                  in Texas for three and a half years (3 years in San Antonio
                  and the last 6 months in Houston). I started at Frito Lay as
                  an experience hire in Jonesboro, Arkansas. <br />
                  <br />
                  As we prepare to close Q1, it has been a challenging quarter
                  from a Food Safety and Cost standpoint. As shared previously,
                  our site priorities are: Personal Safety, Food Safety, and
                  then Everything Else. Let’s lean heavily into these priorities
                  as we close P3 to ensure a successful Q2. <br />
                  <br />
                  There are areas of improvement that we can leverage as a
                  springboard forward: Continued Safety Excellence, site-wide
                  improvement, and Labor performance in the WHSE. We have the
                  people and talent to be an Award of Excellence-winning site,
                  and it takes all of us moving forward together to make it
                  happen.
                  <br />
                </span>
              </p>
            </div>

            <div className="group-443">
              <div className="group-444">
                <div className="overlap-group-98">
                  <img
                    className="exclusion-17"
                    alt="Exclusion"
                    src="/img/exclusion-1-71.png"
                  />

                  <div className="chev-down-9">
                    <img
                      className="icon-44"
                      alt="Icon"
                      src="/img/icon-71.png"
                    />
                  </div>
                </div>
              </div>

              <div className="group-445">
                <div className="overlap-group-98">
                  <img
                    className="exclusion-18"
                    alt="Exclusion"
                    src="/img/exclusion-1-73.png"
                  />

                  <div className="chev-down-9">
                    <img
                      className="icon-45"
                      alt="Icon"
                      src="/img/icon-73.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>

        <div
          className="group-446 message-from-leadership"
          style={getCardStyle(["HR Corner"], 364)}
        >
          <div className="overlap-200">
            <div className="group-442">
              <div className="future-of-customer-s-20">
                A Message from Leadership
              </div>

              <img
                className="img-4"
                alt="Rectangle"
                src="/img/rectangle-110.png"
              />

              <div className="ainara-vergara-25">
                This Month’s Regional Spotlight
              </div>

              <p className="his-dolorem-habemus-65">
                <span className="text-wrapper-181">
                  I have been with Frito-Lay for almost 24 years and I have
                  worked…{" "}
                </span>

                <span className="text-wrapper-184">more</span>

                <span className="text-wrapper-181">
                  {" "}
                  locations, with all of my experience being in the field.
                  Frito-Lay provided me with fantastic opportunities to grow my
                  career and provided me with different experiences. I am the
                  proud father of 5, who reside in North Carolina. I have been
                  in Texas for three and a half years (3 years in San Antonio
                  and the last 6 months in Houston). I started at Frito Lay as
                  an experience hire in Jonesboro, Arkansas. <br />
                  <br />
                  As we prepare to close Q1, it has been a challenging quarter
                  from a Food Safety and Cost standpoint. As shared previously,
                  our site priorities are: Personal Safety, Food Safety, and
                  then Everything Else. Let’s lean heavily into these priorities
                  as we close P3 to ensure a successful Q2. <br />
                  <br />
                  There are areas of improvement that we can leverage as a
                  springboard forward: Continued Safety Excellence, site-wide
                  improvement, and Labor performance in the WHSE. We have the
                  people and talent to be an Award of Excellence-winning site,
                  and it takes all of us moving forward together to make it
                  happen.
                  <br />
                </span>
              </p>
            </div>

            <div className="group-443">
              <div className="group-444">
                <div className="overlap-group-98">
                  <img
                    className="exclusion-17"
                    alt="Exclusion"
                    src="/img/exclusion-1-71.png"
                  />

                  <div className="chev-down-9">
                    <img
                      className="icon-44"
                      alt="Icon"
                      src="/img/icon-71.png"
                    />
                  </div>
                </div>
              </div>

              <div className="group-445">
                <div className="overlap-group-98">
                  <img
                    className="exclusion-18"
                    alt="Exclusion"
                    src="/img/exclusion-1-73.png"
                  />

                  <div className="chev-down-9">
                    <img
                      className="icon-45"
                      alt="Icon"
                      src="/img/icon-73.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="group-447 july-events"
          style={getCardStyle(["Site Updates"], 364)}
        >
          <div className="overlap-200">
            <div className="group-442">
              <div className="future-of-customer-s-20">
                July Events This Month!
              </div>

              <img
                className="img-4"
                alt="Rectangle"
                src="/img/rectangle-111.png"
              />

              <p className="ainara-vergara-25">We’re so excited to have you</p>

              <p className="his-dolorem-habemus-65">
                <span className="text-wrapper-181">
                  Highlights this month: Shoot hoops at the Basketball
                  Tournament,…{" "}
                </span>

                <span className="text-wrapper-184">more</span>

                <span className="text-wrapper-181">
                  {" "}
                  locations, with all of my experience being in the field.
                  Frito-Lay provided me with fantastic opportunities to grow my
                  career and provided me with different experiences. I am the
                  proud father of 5, who reside in North Carolina. I have been
                  in Texas for three and a half years (3 years in San Antonio
                  and the last 6 months in Houston). I started at Frito Lay as
                  an experience hire in Jonesboro, Arkansas. <br />
                  <br />
                  As we prepare to close Q1, it has been a challenging quarter
                  from a Food Safety and Cost standpoint. As shared previously,
                  our site priorities are: Personal Safety, Food Safety, and
                  then Everything Else. Let’s lean heavily into these priorities
                  as we close P3 to ensure a successful Q2. <br />
                  <br />
                  There are areas of improvement that we can leverage as a
                  springboard forward: Continued Safety Excellence, site-wide
                  improvement, and Labor performance in the WHSE. We have the
                  people and talent to be an Award of Excellence-winning site,
                  and it takes all of us moving forward together to make it
                  happen.
                  <br />
                </span>
              </p>
            </div>

            <div className="group-443">
              <div className="group-444">
                <div className="overlap-group-98">
                  <img
                    className="exclusion-17"
                    alt="Exclusion"
                    src="/img/exclusion-1-71.png"
                  />

                  <div className="chev-down-9">
                    <img
                      className="icon-44"
                      alt="Icon"
                      src="/img/icon-71.png"
                    />
                  </div>
                </div>
              </div>

              <div className="group-445">
                <div className="overlap-group-98">
                  <img
                    className="exclusion-18"
                    alt="Exclusion"
                    src="/img/exclusion-1-73.png"
                  />

                  <div className="chev-down-9">
                    <img
                      className="icon-45"
                      alt="Icon"
                      src="/img/icon-73.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="group-448 employee-spotlight"
          /* Employee Spotlight belongs to "Our People" */
          style={getCardStyle(["Our People"], 354)}
        >
          <div className="group-449">
            <div className="future-of-customer-s-20">Employee Spotlight</div>

            <img
              className="img-4"
              alt="Rectangle"
              src="/img/rectangle-112.png"
            />

            <p className="ainara-vergara-25">Food Safety Hero Shout Out</p>

            <p className="his-dolorem-habemus-65">
              <span className="text-wrapper-181">
                Great job Angelica for catching a hold in TC2 while verifying…{" "}
              </span>

              <span className="text-wrapper-184">more</span>

              <span className="text-wrapper-181">
                {" "}
                locations, with all of my experience being in the field.
                Frito-Lay provided me with fantastic opportunities to grow my
                career and provided me with different experiences. I am the
                proud father of 5, who reside in North Carolina. I have been in
                Texas for three and a half years (3 years in San Antonio and the
                last 6 months in Houston). I started at Frito Lay as an
                experience hire in Jonesboro, Arkansas. <br />
                <br />
                As we prepare to close Q1, it has been a challenging quarter
                from a Food Safety and Cost standpoint. As shared previously,
                our site priorities are: Personal Safety, Food Safety, and then
                Everything Else. Let’s lean heavily into these priorities as we
                close P3 to ensure a successful Q2. <br />
                <br />
                There are areas of improvement that we can leverage as a
                springboard forward: Continued Safety Excellence, site-wide
                improvement, and Labor performance in the WHSE. We have the
                people and talent to be an Award of Excellence-winning site, and
                it takes all of us moving forward together to make it happen.
                <br />
              </span>
            </p>
          </div>
        </div>

        <Link
          className="group-450 one-fact-big-impact"
          to="/the-berg-the-green-spot"
          /* One Fact, Big Impact belongs to Health & Safety */
          style={getCardStyle(["Health & Safety"], 359)}
        >
          <div className="group-451">
            <div className="overlap-201">
              <div className="div-19" />

              <div className="future-of-customer-s-20">
                One Fact, Big Impact
              </div>

              <img
                className="img-4"
                alt="Rectangle"
                src="/img/rectangle-113.png"
              />

              <div className="ainara-vergara-25">
                This Month’s Green Spot:
                <br />
              </div>

              <p className="his-dolorem-habemus-65">
                <span className="text-wrapper-181">
                  Great job Angelica for catching a hold in TC2 while verifying…{" "}
                </span>

                <span className="text-wrapper-184">more</span>

                <span className="text-wrapper-181">
                  {" "}
                  locations, with all of my experience being in the field.
                  Frito-Lay provided me with fantastic opportunities to grow my
                  career and provided me with different experiences. I am the
                  proud father of 5, who reside in North Carolina. I have been
                  in Texas for three and a half years (3 years in San Antonio
                  and the last 6 months in Houston). I started at Frito Lay as
                  an experience hire in Jonesboro, Arkansas. <br />
                  <br />
                  As we prepare to close Q1, it has been a challenging quarter
                  from a Food Safety and Cost standpoint. As shared previously,
                  our site priorities are: Personal Safety, Food Safety, and
                  then Everything Else. Let’s lean heavily into these priorities
                  as we close P3 to ensure a successful Q2. <br />
                  <br />
                  There are areas of improvement that we can leverage as a
                  springboard forward: Continued Safety Excellence, site-wide
                  improvement, and Labor performance in the WHSE. We have the
                  people and talent to be an Award of Excellence-winning site,
                  and it takes all of us moving forward together to make it
                  happen.
                  <br />
                </span>
              </p>

              <div className="group-452">
                <div className="group-453">
                  <div className="overlap-group-99">
                    <img
                      className="exclusion-18"
                      alt="Exclusion"
                      src="/img/exclusion-1-73.png"
                    />

                    <div className="chev-down-9">
                      <img
                        className="icon-45"
                        alt="Icon"
                        src="/img/icon-73.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>

        <div
          className="group-454 athletic-trainer-corner"
          /* Athletic Trainer Corner belongs to Health & Safety */
          style={getCardStyle(["Health & Safety"], 354)}
        >
          <div className="group-449">
            <div className="future-of-customer-s-20">
              Athletic Trainer Corner
            </div>

            <img
              className="img-4"
              alt="Rectangle"
              src="/img/rectangle-114.png"
            />

            <div className="ainara-vergara-25">National Training Month</div>

            <p className="his-dolorem-habemus-65">
              <span className="text-wrapper-181">
                National Athletic Trainer Month, celebrated each March, reco…{" "}
              </span>

              <span className="text-wrapper-184">more</span>

              <span className="text-wrapper-181">
                {" "}
                locations, with all of my experience being in the field.
                Frito-Lay provided me with fantastic opportunities to grow my
                career and provided me with different experiences. I am the
                proud father of 5, who reside in North Carolina. I have been in
                Texas for three and a half years (3 years in San Antonio and the
                last 6 months in Houston). I started at Frito Lay as an
                experience hire in Jonesboro, Arkansas. <br />
                <br />
                As we prepare to close Q1, it has been a challenging quarter
                from a Food Safety and Cost standpoint. As shared previously,
                our site priorities are: Personal Safety, Food Safety, and then
                Everything Else. Let’s lean heavily into these priorities as we
                close P3 to ensure a successful Q2. <br />
                <br />
                There are areas of improvement that we can leverage as a
                springboard forward: Continued Safety Excellence, site-wide
                improvement, and Labor performance in the WHSE. We have the
                people and talent to be an Award of Excellence-winning site, and
                it takes all of us moving forward together to make it happen.
                <br />
              </span>
            </p>
          </div>
        </div>

        <Link
          className="group-455 we-saw"
          to="/the-berg-3"
          /* We Saw belongs to Site Updates */
          style={getCardStyle(["Site Updates"], 359)}
        >
          <div className="group-451">
            <div className="overlap-201">
              <div className="div-19" />

              <div className="future-of-customer-s-20">We Saw</div>

              <img
                className="img-4"
                alt="Rectangle"
                src="/img/rectangle-115.png"
              />

              <div className="ainara-vergara-25">July 2025</div>

              <p className="his-dolorem-habemus-65">
                <span className="text-wrapper-181">
                  Bobby crushed it, loading his 12th truck, Bonnie enjoyed some…{" "}
                </span>

                <span className="text-wrapper-184">more</span>

                <span className="text-wrapper-181">
                  {" "}
                  locations, with all of my experience being in the field.
                  Frito-Lay provided me with fantastic opportunities to grow my
                  career and provided me with different experiences. I am the
                  proud father of 5, who reside in North Carolina. I have been
                  in Texas for three and a half years (3 years in San Antonio
                  and the last 6 months in Houston). I started at Frito Lay as
                  an experience hire in Jonesboro, Arkansas. <br />
                  <br />
                  As we prepare to close Q1, it has been a challenging quarter
                  from a Food Safety and Cost standpoint. As shared previously,
                  our site priorities are: Personal Safety, Food Safety, and
                  then Everything Else. Let’s lean heavily into these priorities
                  as we close P3 to ensure a successful Q2. <br />
                  <br />
                  There are areas of improvement that we can leverage as a
                  springboard forward: Continued Safety Excellence, site-wide
                  improvement, and Labor performance in the WHSE. We have the
                  people and talent to be an Award of Excellence-winning site,
                  and it takes all of us moving forward together to make it
                  happen.
                  <br />
                </span>
              </p>

              <div className="group-452">
                <div className="group-453">
                  <div className="overlap-group-99">
                    <img
                      className="exclusion-18"
                      alt="Exclusion"
                      src="/img/exclusion-1-73.png"
                    />

                    <div className="chev-down-9">
                      <img
                        className="icon-45"
                        alt="Icon"
                        src="/img/icon-73.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>

        <Link
          className="group-456 where-in-pepsico-world"
          to="/the-berg-4"
          /* Where in PepsiCo World belongs to Site Updates */
          style={getCardStyle(["Site Updates"], 359)}
        >
          <div className="group-451">
            <div className="overlap-201">
              <div className="div-19" />

              <p className="future-of-customer-s-20">
                Where in the PepsiCo World?
              </p>

              <img
                className="img-4"
                alt="Rectangle"
                src="/img/rectangle-116.png"
              />

              <p className="ainara-vergara-25">Vol. 08: São Paulo, Brazil</p>

              <p className="his-dolorem-habemus-65">
                <span className="text-wrapper-181">
                  Get your passport ready — this edition of Where in the Peps…{" "}
                </span>

                <span className="text-wrapper-184">more</span>

                <span className="text-wrapper-181">
                  {" "}
                  locations, with all of my experience being in the field.
                  Frito-Lay provided me with fantastic opportunities to grow my
                  career and provided me with different experiences. I am the
                  proud father of 5, who reside in North Carolina. I have been
                  in Texas for three and a half years (3 years in San Antonio
                  and the last 6 months in Houston). I started at Frito Lay as
                  an experience hire in Jonesboro, Arkansas. <br />
                  <br />
                  As we prepare to close Q1, it has been a challenging quarter
                  from a Food Safety and Cost standpoint. As shared previously,
                  our site priorities are: Personal Safety, Food Safety, and
                  then Everything Else. Let’s lean heavily into these priorities
                  as we close P3 to ensure a successful Q2. <br />
                  <br />
                  There are areas of improvement that we can leverage as a
                  springboard forward: Continued Safety Excellence, site-wide
                  improvement, and Labor performance in the WHSE. We have the
                  people and talent to be an Award of Excellence-winning site,
                  and it takes all of us moving forward together to make it
                  happen.
                  <br />
                </span>
              </p>

              <div className="group-452">
                <div className="group-453">
                  <div className="overlap-group-99">
                    <img
                      className="exclusion-18"
                      alt="Exclusion"
                      src="/img/exclusion-1-73.png"
                    />

                    <div className="chev-down-9">
                      <img
                        className="icon-45"
                        alt="Icon"
                        src="/img/icon-73.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>

        <div
          className="group-457 work-anniversaries"
          /* Work Anniversaries belongs to Our People */
          style={getCardStyle(["Our People"], 359)}
        >
          <div className="group-451">
            <div className="overlap-201">
              <div className="div-19" />

              <div className="future-of-customer-s-20">Work Anniversaries</div>

              <img
                className="img-4"
                alt="Rectangle"
                src="/img/rectangle-117.png"
              />

              <div className="ainara-vergara-25">July 2025</div>

              <p className="his-dolorem-habemus-65">
                <span className="text-wrapper-181">
                  Gerald Karemo- 30 Years, Angela Ervin- 25 Years, Doral Gray…{" "}
                </span>

                <span className="text-wrapper-184">more</span>

                <span className="text-wrapper-181">
                  {" "}
                  locations, with all of my experience being in the field.
                  Frito-Lay provided me with fantastic opportunities to grow my
                  career and provided me with different experiences. I am the
                  proud father of 5, who reside in North Carolina. I have been
                  in Texas for three and a half years (3 years in San Antonio
                  and the last 6 months in Houston). I started at Frito Lay as
                  an experience hire in Jonesboro, Arkansas. <br />
                  <br />
                  As we prepare to close Q1, it has been a challenging quarter
                  from a Food Safety and Cost standpoint. As shared previously,
                  our site priorities are: Personal Safety, Food Safety, and
                  then Everything Else. Let’s lean heavily into these priorities
                  as we close P3 to ensure a successful Q2. <br />
                  <br />
                  There are areas of improvement that we can leverage as a
                  springboard forward: Continued Safety Excellence, site-wide
                  improvement, and Labor performance in the WHSE. We have the
                  people and talent to be an Award of Excellence-winning site,
                  and it takes all of us moving forward together to make it
                  happen.
                  <br />
                </span>
              </p>

              <div className="group-452">
                <div className="group-453">
                  <div className="overlap-group-99">
                    <img
                      className="exclusion-18"
                      alt="Exclusion"
                      src="/img/exclusion-1-73.png"
                    />

                    <div className="chev-down-9">
                      <img
                        className="icon-45"
                        alt="Icon"
                        src="/img/icon-73.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="group-458 monthly-benefit-highlight"
          /* Monthly Benefit Highlight belongs to HR Corner */
          style={getCardStyle(["HR Corner"], 354)}
        >
          <div className="group-449">
            <div className="future-of-customer-s-20">
              Monthly Benefit Highlight
            </div>

            <img
              className="img-4"
              alt="Rectangle"
              src="/img/rectangle-118.png"
            />

            <p className="ainara-vergara-25">Check Out This Amazing Offer</p>

            <p className="his-dolorem-habemus-65">
              <span className="text-wrapper-181">
                Now thru March 31 st, enroll in Wellhub’s Starteror Starter…{" "}
              </span>

              <span className="text-wrapper-184">more</span>

              <span className="text-wrapper-181">
                {" "}
                locations, with all of my experience being in the field.
                Frito-Lay provided me with fantastic opportunities to grow my
                career and provided me with different experiences. I am the
                proud father of 5, who reside in North Carolina. I have been in
                Texas for three and a half years (3 years in San Antonio and the
                last 6 months in Houston). I started at Frito Lay as an
                experience hire in Jonesboro, Arkansas. <br />
                <br />
                As we prepare to close Q1, it has been a challenging quarter
                from a Food Safety and Cost standpoint. As shared previously,
                our site priorities are: Personal Safety, Food Safety, and then
                Everything Else. Let’s lean heavily into these priorities as we
                close P3 to ensure a successful Q2. <br />
                <br />
                There are areas of improvement that we can leverage as a
                springboard forward: Continued Safety Excellence, site-wide
                improvement, and Labor performance in the WHSE. We have the
                people and talent to be an Award of Excellence-winning site, and
                it takes all of us moving forward together to make it happen.
                <br />
              </span>
            </p>
          </div>
        </div>

        <div
          className="group-459 new-hires"
          /* New Hires belongs to Our People */
          style={getCardStyle(["Our People"], 354)}
        >
          <div className="group-449">
            <div className="future-of-customer-s-20">New Hires</div>

            <img
              className="img-4"
              alt="Rectangle"
              src="/img/rectangle-119.png"
            />

            <p className="ainara-vergara-25">
              Welcome to the New Manufacturing Team!
            </p>

            <p className="his-dolorem-habemus-65">
              <span className="text-wrapper-181">
                William Calhoun, Christian Smith, Paul Ramirez, Janie Gonzalez,…{" "}
              </span>

              <span className="text-wrapper-184">more</span>

              <span className="text-wrapper-181">
                {" "}
                locations, with all of my experience being in the field.
                Frito-Lay provided me with fantastic opportunities to grow my
                career and provided me with different experiences. I am the
                proud father of 5, who reside in North Carolina. I have been in
                Texas for three and a half years (3 years in San Antonio and the
                last 6 months in Houston). I started at Frito Lay as an
                experience hire in Jonesboro, Arkansas. <br />
                <br />
                As we prepare to close Q1, it has been a challenging quarter
                from a Food Safety and Cost standpoint. As shared previously,
                our site priorities are: Personal Safety, Food Safety, and then
                Everything Else. Let’s lean heavily into these priorities as we
                close P3 to ensure a successful Q2. <br />
                <br />
                There are areas of improvement that we can leverage as a
                springboard forward: Continued Safety Excellence, site-wide
                improvement, and Labor performance in the WHSE. We have the
                people and talent to be an Award of Excellence-winning site, and
                it takes all of us moving forward together to make it happen.
                <br />
              </span>
            </p>
          </div>
        </div>

        <div
          className="group-460 basketball-tournament"
          /* Basketball Tournament belongs to Site Updates */
          style={getCardStyle(["Site Updates"], 354)}
        >
          <div className="group-449">
            <div className="future-of-customer-s-20">Basketball Tournament</div>

            <img
              className="img-4"
              alt="Rectangle"
              src="/img/rectangle-120.png"
            />

            <div className="ainara-vergara-25">Join the Event</div>

            <p className="his-dolorem-habemus-65">
              <span className="text-wrapper-181">
                Don’t miss our company basketball event this coming Thursday!…{" "}
              </span>

              <span className="text-wrapper-184">more</span>

              <span className="text-wrapper-181">
                {" "}
                locations, with all of my experience being in the field.
                Frito-Lay provided me with fantastic opportunities to grow my
                career and provided me with different experiences. I am the
                proud father of 5, who reside in North Carolina. I have been in
                Texas for three and a half years (3 years in San Antonio and the
                last 6 months in Houston). I started at Frito Lay as an
                experience hire in Jonesboro, Arkansas. <br />
                <br />
                As we prepare to close Q1, it has been a challenging quarter
                from a Food Safety and Cost standpoint. As shared previously,
                our site priorities are: Personal Safety, Food Safety, and then
                Everything Else. Let’s lean heavily into these priorities as we
                close P3 to ensure a successful Q2. <br />
                <br />
                There are areas of improvement that we can leverage as a
                springboard forward: Continued Safety Excellence, site-wide
                improvement, and Labor performance in the WHSE. We have the
                people and talent to be an Award of Excellence-winning site, and
                it takes all of us moving forward together to make it happen.
                <br />
              </span>
            </p>
          </div>
        </div>

        <div
          className="group-461 are-cheetos-chips"
          /* Are Cheetos Chips belongs to Site Updates */
          style={getCardStyle(["Site Updates"], 354)}
        >
          <div className="group-449">
            <div className="future-of-customer-s-20">Are Cheetos Chips?</div>

            <img
              className="img-4"
              alt="Rectangle"
              src="/img/rectangle-121.png"
            />

            <div className="ainara-vergara-25">National News</div>

            <p className="his-dolorem-habemus-65">
              <span className="text-wrapper-181">
                This is a debate that’s been swirling in consumer circles for
                as…{" "}
              </span>

              <span className="text-wrapper-184">more</span>

              <span className="text-wrapper-181">
                {" "}
                locations, with all of my experience being in the field.
                Frito-Lay provided me with fantastic opportunities to grow my
                career and provided me with different experiences. I am the
                proud father of 5, who reside in North Carolina. I have been in
                Texas for three and a half years (3 years in San Antonio and the
                last 6 months in Houston). I started at Frito Lay as an
                experience hire in Jonesboro, Arkansas. <br />
                <br />
                As we prepare to close Q1, it has been a challenging quarter
                from a Food Safety and Cost standpoint. As shared previously,
                our site priorities are: Personal Safety, Food Safety, and then
                Everything Else. Let’s lean heavily into these priorities as we
                close P3 to ensure a successful Q2. <br />
                <br />
                There are areas of improvement that we can leverage as a
                springboard forward: Continued Safety Excellence, site-wide
                improvement, and Labor performance in the WHSE. We have the
                people and talent to be an Award of Excellence-winning site, and
                it takes all of us moving forward together to make it happen.
                <br />
              </span>
            </p>
          </div>
        </div>

        {/* Close the newsletter container before starting the image slider */}
        </div>

        <div
          className="image-slider-4"
          /* Hide the quote slider when a specific newsletter filter is active */
          style={{ display: selectedFilter === "View All" ? undefined : "none" }}
        >
          <div className="overlap-200">
            <div className="group-462">
              <div className="overlap-202">
                <div className="group-442">
                  <div className="future-of-customer-s-20">
                    Message from Our Director
                  </div>

                  <div className="overlap-203">
                    <div className="rectangle-95" />

                    <div className="group-463">
                      <div className="overlap-group-100">
                        <p className="text-wrapper-185">
                          We have the people and talent to be an Award of
                          Excellence-winning site, and it takes all of us moving
                          forward together to make it happen.
                        </p>

                        <div className="text-wrapper-186">“</div>
                      </div>

                      <div className="text-wrapper-187">”</div>
                    </div>
                  </div>

                  <p className="ainara-vergara-25">
                    Brian Angus, Rosenberg Site Director
                  </p>

                  <p className="his-dolorem-habemus-65">
                    <span className="text-wrapper-181">
                      I have been with Frito-Lay for almost 24 years and I have
                      worked…{" "}
                    </span>

                    <span className="text-wrapper-184">more</span>

                    <span className="text-wrapper-181">
                      {" "}
                      locations, with all of my experience being in the field.
                      Frito-Lay provided me with fantastic opportunities to grow
                      my career and provided me with different experiences. I am
                      the proud father of 5, who reside in North Carolina. I
                      have been in Texas for three and a half years (3 years in
                      San Antonio and the last 6 months in Houston). I started
                      at Frito Lay as an experience hire in Jonesboro, Arkansas.{" "}
                      <br />
                      <br />
                      As we prepare to close Q1, it has been a challenging
                      quarter from a Food Safety and Cost standpoint. As shared
                      previously, our site priorities are: Personal Safety, Food
                      Safety, and then Everything Else. Let’s lean heavily into
                      these priorities as we close P3 to ensure a successful Q2.{" "}
                      <br />
                      <br />
                      There are areas of improvement that we can leverage as a
                      springboard forward: Continued Safety Excellence,
                      site-wide improvement, and Labor performance in the WHSE.
                      We have the people and talent to be an Award of
                      Excellence-winning site, and it takes all of us moving
                      forward together to make it happen.
                      <br />
                    </span>
                  </p>
                </div>

                <div className="group-443">
                  <div className="group-444">
                    <div className="overlap-group-98">
                      <img
                        className="exclusion-17"
                        alt="Exclusion"
                        src="/img/exclusion-1-71.png"
                      />

                      <div className="chev-down-9">
                        <img
                          className="icon-44"
                          alt="Icon"
                          src="/img/icon-71.png"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="group-445">
                    <div className="overlap-group-98">
                      <img
                        className="exclusion-18"
                        alt="Exclusion"
                        src="/img/exclusion-1-73.png"
                      />

                      <div className="chev-down-9">
                        <img
                          className="icon-45"
                          alt="Icon"
                          src="/img/icon-73.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <img
                  className="rectangle-96"
                  alt="Rectangle"
                  src="/img/rectangle-43-1.png"
                />
              </div>
            </div>

            <div className="group-464">
              <div className="overlap-200">
                <div className="group-442">
                  <div className="future-of-customer-s-20">
                    Message from Our Director
                  </div>

                  <div className="overlap-group-101">
                    <img
                      className="areas-of-improvement"
                      alt="Areas of improvement"
                      src="/img/areas-of-improvement-to-leverage.png"
                    />

                    <img
                      className="group-465"
                      alt="Group"
                      src="/img/group-275.png"
                    />
                  </div>

                  <p className="ainara-vergara-25">
                    Brian Angus, Rosenberg Site Director
                  </p>

                  <Link to="/the-berg-sitedirector">
                    <p className="his-dolorem-habemus-65">
                      <span className="text-wrapper-181">
                        I have been with Frito-Lay for almost 24 years and I
                        have worked…{" "}
                      </span>

                      <span className="text-wrapper-184">more</span>

                      <span className="text-wrapper-181">
                        {" "}
                        locations, with all of my experience being in the field.
                        Frito-Lay provided me with fantastic opportunities to
                        grow my career and provided me with different
                        experiences. I am the proud father of 5, who reside in
                        North Carolina. I have been in Texas for three and a
                        half years (3 years in San Antonio and the last 6 months
                        in Houston). I started at Frito Lay as an experience
                        hire in Jonesboro, Arkansas. <br />
                        <br />
                        As we prepare to close Q1, it has been a challenging
                        quarter from a Food Safety and Cost standpoint. As
                        shared previously, our site priorities are: Personal
                        Safety, Food Safety, and then Everything Else. Let’s
                        lean heavily into these priorities as we close P3 to
                        ensure a successful Q2. <br />
                        <br />
                        There are areas of improvement that we can leverage as a
                        springboard forward: Continued Safety Excellence,
                        site-wide improvement, and Labor performance in the
                        WHSE. We have the people and talent to be an Award of
                        Excellence-winning site, and it takes all of us moving
                        forward together to make it happen.
                        <br />
                      </span>
                    </p>
                  </Link>
                </div>

                <div className="group-443">
                  <div className="group-444">
                    <div className="overlap-group-98">
                      <img
                        className="exclusion-17"
                        alt="Exclusion"
                        src="/img/exclusion-1-71.png"
                      />

                      <div className="chev-down-9">
                        <img
                          className="icon-44"
                          alt="Icon"
                          src="/img/icon-71.png"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="group-445">
                    <div className="overlap-group-98">
                      <img
                        className="exclusion-18"
                        alt="Exclusion"
                        src="/img/exclusion-1-73.png"
                      />

                      <div className="chev-down-9">
                        <img
                          className="icon-45"
                          alt="Icon"
                          src="/img/icon-73.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group-462">
              <div className="overlap-202">
                <div className="group-442">
                  <div className="future-of-customer-s-20">
                    Message from Our Director
                  </div>

                  <div className="our-site-priorities-wrapper">
                    <p className="our-site-priorities">
                      “Our site priorities are: <br />
                      Personal Safety, Food Safety, <br />
                      and then Everything Else.”
                    </p>
                  </div>

                  <p className="ainara-vergara-25">
                    Brian Angus, Rosenberg Site Director
                  </p>

                  <p className="his-dolorem-habemus-65">
                    <span className="text-wrapper-181">
                      I have been with Frito-Lay for almost 24 years and I have
                      worked…{" "}
                    </span>

                    <span className="text-wrapper-184">more</span>

                    <span className="text-wrapper-181">
                      {" "}
                      locations, with all of my experience being in the field.
                      Frito-Lay provided me with fantastic opportunities to grow
                      my career and provided me with different experiences. I am
                      the proud father of 5, who reside in North Carolina. I
                      have been in Texas for three and a half years (3 years in
                      San Antonio and the last 6 months in Houston). I started
                      at Frito Lay as an experience hire in Jonesboro, Arkansas.{" "}
                      <br />
                      <br />
                      As we prepare to close Q1, it has been a challenging
                      quarter from a Food Safety and Cost standpoint. As shared
                      previously, our site priorities are: Personal Safety, Food
                      Safety, and then Everything Else. Let’s lean heavily into
                      these priorities as we close P3 to ensure a successful Q2.{" "}
                      <br />
                      <br />
                      There are areas of improvement that we can leverage as a
                      springboard forward: Continued Safety Excellence,
                      site-wide improvement, and Labor performance in the WHSE.
                      We have the people and talent to be an Award of
                      Excellence-winning site, and it takes all of us moving
                      forward together to make it happen.
                      <br />
                    </span>
                  </p>
                </div>

                <div className="group-443">
                  <div className="group-444">
                    <div className="overlap-group-98">
                      <img
                        className="exclusion-17"
                        alt="Exclusion"
                        src="/img/exclusion-1-71.png"
                      />

                      <div className="chev-down-9">
                        <img
                          className="icon-44"
                          alt="Icon"
                          src="/img/icon-71.png"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="group-445">
                    <div className="overlap-group-98">
                      <img
                        className="exclusion-18"
                        alt="Exclusion"
                        src="/img/exclusion-1-73.png"
                      />

                      <div className="chev-down-9">
                        <img
                          className="icon-45"
                          alt="Icon"
                          src="/img/icon-73.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group-462">
              <div className="overlap-202">
                <div className="group-442">
                  <div className="future-of-customer-s-20">
                    Message from Our Director
                  </div>

                  <img
                    className="img-4"
                    alt="Rectangle"
                    src="/img/rectangle-124.png"
                  />

                  <p className="ainara-vergara-25">
                    Brian Angus, Rosenberg Site Director
                  </p>

                  <p className="his-dolorem-habemus-65">
                    <span className="text-wrapper-181">
                      I have been with Frito-Lay for almost 24 years and I have
                      worked…{" "}
                    </span>

                    <span className="text-wrapper-184">more</span>

                    <span className="text-wrapper-181">
                      {" "}
                      locations, with all of my experience being in the field.
                      Frito-Lay provided me with fantastic opportunities to grow
                      my career and provided me with different experiences. I am
                      the proud father of 5, who reside in North Carolina. I
                      have been in Texas for three and a half years (3 years in
                      San Antonio and the last 6 months in Houston). I started
                      at Frito Lay as an experience hire in Jonesboro, Arkansas.{" "}
                      <br />
                      <br />
                      As we prepare to close Q1, it has been a challenging
                      quarter from a Food Safety and Cost standpoint. As shared
                      previously, our site priorities are: Personal Safety, Food
                      Safety, and then Everything Else. Let’s lean heavily into
                      these priorities as we close P3 to ensure a successful Q2.{" "}
                      <br />
                      <br />
                      There are areas of improvement that we can leverage as a
                      springboard forward: Continued Safety Excellence,
                      site-wide improvement, and Labor performance in the WHSE.
                      We have the people and talent to be an Award of
                      Excellence-winning site, and it takes all of us moving
                      forward together to make it happen.
                      <br />
                    </span>
                  </p>
                </div>

                <div className="group-443">
                  <div className="group-444">
                    <div className="overlap-group-98">
                      <img
                        className="exclusion-17"
                        alt="Exclusion"
                        src="/img/exclusion-1-71.png"
                      />

                      <div className="chev-down-9">
                        <img
                          className="icon-44"
                          alt="Icon"
                          src="/img/icon-71.png"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="group-445">
                    <div className="overlap-group-98">
                      <img
                        className="exclusion-18"
                        alt="Exclusion"
                        src="/img/exclusion-1-73.png"
                      />

                      <div className="chev-down-9">
                        <img
                          className="icon-45"
                          alt="Icon"
                          src="/img/icon-73.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group-466">
              <div className="overlap-201">
                <div className="div-19">
                  <div className="overlap-group-102">
                    <div className="future-of-customer-s-20">
                      Message from Our Director
                    </div>

                    <div className="rectangle-95" />

                    <img
                      className="img-4"
                      alt="Wesaw copy"
                      src="/img/wesaw-copy-6-100-6.png"
                    />

                    <img
                      className="frito-lay-provided-2"
                      alt="Frito lay provided"
                      src="/img/frito-lay-provided-me-with-fantastic-opportunities-to-grow-my-c.png"
                    />

                    <img className="image" alt="Image" src="/img/file-1x.png" />

                    <img className="image-2" alt="Image" src="/img/file.png" />

                    <img
                      className="group-467"
                      alt="Group"
                      src="/img/ellipse-1-10.png"
                    />
                  </div>

                  <p className="ainara-vergara-25">
                    Brian Angus, Rosenberg Site Director
                  </p>

                  <p className="his-dolorem-habemus-65">
                    <span className="text-wrapper-181">
                      I have been with Frito-Lay for almost 24 years and I have
                      worked…{" "}
                    </span>

                    <span className="text-wrapper-184">more</span>

                    <span className="text-wrapper-181">
                      {" "}
                      locations, with all of my experience being in the field.
                      Frito-Lay provided me with fantastic opportunities to grow
                      my career and provided me with different experiences. I am
                      the proud father of 5, who reside in North Carolina. I
                      have been in Texas for three and a half years (3 years in
                      San Antonio and the last 6 months in Houston). I started
                      at Frito Lay as an experience hire in Jonesboro, Arkansas.{" "}
                      <br />
                      <br />
                      As we prepare to close Q1, it has been a challenging
                      quarter from a Food Safety and Cost standpoint. As shared
                      previously, our site priorities are: Personal Safety, Food
                      Safety, and then Everything Else. Let’s lean heavily into
                      these priorities as we close P3 to ensure a successful Q2.{" "}
                      <br />
                      <br />
                      There are areas of improvement that we can leverage as a
                      springboard forward: Continued Safety Excellence,
                      site-wide improvement, and Labor performance in the WHSE.
                      We have the people and talent to be an Award of
                      Excellence-winning site, and it takes all of us moving
                      forward together to make it happen.
                      <br />
                    </span>
                  </p>
                </div>

                <div className="group-468">
                  <div className="group-453">
                    <div className="overlap-group-99">
                      <img
                        className="exclusion-18"
                        alt="Exclusion"
                        src="/img/exclusion-1-73.png"
                      />

                      <div className="chev-down-9">
                        <img
                          className="icon-45"
                          alt="Icon"
                          src="/img/icon-73.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
