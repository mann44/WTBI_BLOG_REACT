import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

export const Screen14 = () => {
  // Local state to capture the search query.  When users type in this field
  // the value will update.  We attach click handlers to prevent the
  // containing anchor from triggering navigation when interacting with
  // the search or sign out controls.
  const [searchQuery, setSearchQuery] = useState("");
  // useNavigate allows us to programmatically change routes without a full
  // page reload.  We'll use it to handle sign‑out by redirecting to the
  // landing page.
  const navigate = useNavigate();
  // Stop click events from propagating to the parent Link so that
  // interacting with the search input doesn't trigger navigation.
  const handleSearchContainerClick = (e) => {
    e.stopPropagation();
  };
  // Handle the sign‑out button.  This stops the click event from bubbling up
  // and then navigates the user back to the landing page.  In a real
  // application you would also clear authentication tokens here.
  const handleSignOut = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate("/the-berg-2");
  };
  /*
   * The landing page includes interactive UI elements such as an off–canvas
   * navigation drawer (hamburger menu) and modal dialogs for the “Read More”
   * sections of the July events and employee spotlight cards.  The state
   * hooks and helper functions below manage those interactive elements.  If
   * these values are undefined the app will crash, so we define them here.
   */
  // Track whether the hamburger menu is open.  When true we render the
  // off–canvas navigation on top of the page.
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Toggle the off–canvas menu on click.  We call stopPropagation on the
  // event to avoid triggering navigation from parent links.
  const toggleMenu = (e) => {
    if (e && typeof e.stopPropagation === "function") {
      e.stopPropagation();
    }
    setIsMenuOpen((prev) => !prev);
  };
  // Track whether a modal dialog is open and the currently displayed content.
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  // Helper to open a modal with a specific piece of text.
  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };
  // Close the modal and reset the content.
  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent("");
  };
  // Predefined extended text for the modal dialogs.  When the user clicks
  // “more” links these strings are passed to openModal.
  const contents = {
    julyevents:
      "The month of July is packed with fun and exciting events for our team! \n\n" +
      "From family picnics and community service days to team‑building workshops, " +
      "there’s something for everyone. These events are designed to celebrate our " +
      "hard work and foster a sense of togetherness. We encourage you to participate, " +
      "share your experiences, and strengthen the bonds within our team. \n\n" +
      "Stay tuned for more details in upcoming newsletters and keep an eye on the calendar " +
      "for specific dates and times. We look forward to seeing you there!",
    employeespotlight:
      "Our Employee Spotlight highlights outstanding team members who have gone above and beyond. \n\n" +
      "This month, we’re celebrating Jane Doe from the packaging department. Jane’s dedication " +
      "to quality and her positive attitude make her a role model for us all. In her free time, " +
      "Jane enjoys volunteering at the local food bank and spending time with her family. \n\n" +
      "Be sure to congratulate Jane when you see her, and let us know who you’d like to see featured " +
      "in future spotlights!"
  };


  return (
    <div className="screen-14">
      <Link className="the-berg-5" to="/the-berg-sitedirector">
        <div className="overlap-198">
          <img
            className="rectangle-91"
            alt="Rectangle"
            src="/img/rectangle-1-14.png"
          />

          <div className="rectangle-92" />

          <header className="header-21">
            <div className="overlap-group-93">
              <div
                className="search-14"
                onClick={handleSearchContainerClick}
              >
                <div className="icon-42">
                  <img
                    className="vector-49"
                    alt="Vector"
                    src="/img/vector-174.png"
                  />
                </div>
                {/* Inline search input for filtering content.  Clicking in this field */}
                {/* should not trigger navigation, so we stop event propagation in onClick */}
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onClick={(e) => e.stopPropagation()}
                />
              </div>

              <div className="header-22" />

              {/* Hamburger menu button toggles off-canvas navigation */}
              <button
                className="hamburger-menu"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleMenu(e);
                }}
              >
                ☰
              </button>

              <div className="menu-44">
                {/* Make the menu items actual navigation links */}
                <Link className="destination-15" to="/archive">Archive</Link>

                <Link className="tours-15" to="/faq">FAQ</Link>
              </div>

              <div className="content-29">
                <button className="button-38" onClick={handleSignOut}>
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

        <div className="group-435">
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

          <Link to="/director-message" className="group-436">
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
          </Link>
        </div>

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
                <div className="group-440">
                  <div className="overlap-group-97">
                    <div className="rectangle-93" />

                    <div className="text-wrapper-182">View all</div>
                  </div>
                </div>

                <div className="group-440">
                  <div className="overlap-group-97">
                    <div className="rectangle-94" />

                    <div className="text-wrapper-183">Our People</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="tab-rollover-37">
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

                    <div className="text-wrapper-183">HR Corner</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="tab-rollover-38">
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

                    <div className="text-wrapper-183">Health &amp; Safety</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="tab-rollover-39">
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

                    <div className="text-wrapper-183">Site Updates</div>
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

        <Link className="group-441" to="/the-berg-team-spotlight">
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

                <span
                  className="text-wrapper-184"
                  onClick={(e) => {
                    e.stopPropagation();
                    openModal(contents.julyevents);
                  }}
                >
                  more
                </span>

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

        {/* Wrap the leadership card in a link so users can read the full message */}
        <Link
          className="group-446"
          to="/leadership-message"
          onClick={(e) => e.stopPropagation()}
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

                <span
                  className="text-wrapper-184"
                  onClick={(e) => {
                    e.stopPropagation();
                    openModal(contents.employeespotlight);
                  }}
                >
                  more
                </span>

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

        <div className="group-447">
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

        <div className="group-448">
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

              <span
                className="text-wrapper-184"
                onClick={(e) => {
                  e.stopPropagation();
                  openModal(contents.employeespotlight);
                }}
              >
                more
              </span>

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

        <Link className="group-450" to="/the-berg-the-green-spot">
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

        <div className="group-454">
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

        <Link className="group-455" to="/the-berg-3">
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

        <Link className="group-456" to="/the-berg-4">
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

        <div className="group-457">
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

        <div className="group-458">
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

        <div className="group-459">
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

        <div className="group-460">
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

        <div className="group-461">
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

        <div className="image-slider-4">
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
      {/* Off-canvas menu and modal overlays */}
      {isMenuOpen && (
        <div className="menu-overlay" onClick={(e) => toggleMenu(e)}>
          <div className="menu-content" onClick={(e) => e.stopPropagation()}>
            <Link to="/the-berg-2" onClick={(e) => { e.stopPropagation(); toggleMenu(e); }}>Home</Link>
            <Link to="/archive" onClick={(e) => { e.stopPropagation(); toggleMenu(e); }}>Archive</Link>
            <Link to="/faq" onClick={(e) => { e.stopPropagation(); toggleMenu(e); }}>FAQ</Link>
            <Link to="/the-berg-team-spotlight" onClick={(e) => { e.stopPropagation(); toggleMenu(e); }}>Team Spotlight</Link>
            <Link to="/the-berg-the-green-spot" onClick={(e) => { e.stopPropagation(); toggleMenu(e); }}>Green Spot</Link>
            <Link to="/the-berg-world-map" onClick={(e) => { e.stopPropagation(); toggleMenu(e); }}>World Map</Link>
            <Link to="/the-berg-1" onClick={(e) => { e.stopPropagation(); toggleMenu(e); }}>Calendar</Link>
          </div>
        </div>
      )}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <p>{modalContent}</p>
            <button onClick={(e) => { e.stopPropagation(); closeModal(); }}>Close</button>
          </div>
        </div>
      )}
      </Link>
    </div>
  );
};
