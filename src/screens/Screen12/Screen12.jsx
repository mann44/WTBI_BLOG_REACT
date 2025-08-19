import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const Screen12 = () => {
  // state for search text.  Currently unused for filtering but allows the
  // user to type freely in the search bar.
  const [searchText, setSearchText] = useState("");
  // state for month/year for the calendar.  Default to current month/year.
  const now = new Date();
  const [month, setMonth] = useState(now.getMonth());
  const [year, setYear] = useState(now.getFullYear());

  // track which date is visually highlighted in the calendar (for example, the
  // current day).  This state is independent of whether a date has been
  // explicitly selected by the user for filtering.
  const [highlightDate, setHighlightDate] = useState({
    day: now.getDate(),
    month: now.getMonth(),
    year: now.getFullYear(),
  });
  // track the date selected by the user for filtering.  When
  // isDateSelected is false this value is not used for filtering events.
  const [selectedDate, setSelectedDate] = useState({
    day: now.getDate(),
    month: now.getMonth(),
    year: now.getFullYear(),
  });
  // flag indicating whether a date has been selected for filtering.  When
  // false we show all events in the currently displayed month.
  const [isDateSelected, setIsDateSelected] = useState(false);

  // paging state for events.  Each page shows a fixed number of events
  const [currentPage, setCurrentPage] = useState(0);

  // number of events displayed per page
  const eventsPerPage = 5;

  /**
   * Determine whether an event should be displayed based on the current
   * selection state and calendar month/year.  When a date has been
   * explicitly selected we show only events that match that exact day,
   * otherwise we show events whose month and year match the calendar's
   * currently visible month and year.
   *
   * @param {number} eventYear - full year of the event (e.g. 2025)
   * @param {number} eventMonth - zero-based month index (0=Jan)
   * @param {number} eventDay - day of month (1-31)
   * @returns {boolean} True if the event should be visible
   */
  function shouldShowEvent(eventYear, eventMonth, eventDay) {
    if (isDateSelected) {
      return (
        selectedDate.day === eventDay &&
        selectedDate.month === eventMonth &&
        selectedDate.year === eventYear
      );
    }
    return eventYear === year && eventMonth === month;
  }

  // Define the complete list of events.  Each entry contains date
  // information (year, month, day) as well as a type, title and
  // description.  Additional events have been added to fill out the
  // calendar.  Weekday abbreviations are computed based on the date.
  const events = [
    {
      key: "bbq",
      year: 2025,
      month: 6,
      day: 12,
      type: "Event",
      title: "Company BBQ Event",
      description:
        "Fire up your appetite! Good food, great people, and fun vibes await at this month’s Company BBQ. Don’t miss the chance to relax and reconnect.",
    },
    {
      key: "site-meeting",
      year: 2025,
      month: 6,
      day: 14,
      type: "Meeting",
      title: "State of the Site Meeting",
      description:
        "Stay in the know! Join us for important updates, key wins, and a look ahead at what’s next for our site. Your voice matters—don’t miss this opportunity to connect and contribute.",
    },
    {
      key: "basketball",
      year: 2025,
      month: 6,
      day: 23,
      type: "Event",
      title: "Team Basketball Tournament",
      description:
        "Don’t miss our company basketball event this coming Thursday! Be sure to sign up with the team and bring your a game.",
    },
    {
      key: "welcome-party",
      year: 2025,
      month: 6,
      day: 28,
      type: "Event",
      title: "New Hire Welcome Party",
      description:
        "Help us give a warm welcome to our newest team members! Swing by for snacks, smiles, and a chance to get to know the fresh faces joining our crew.",
    },
    {
      key: "safety-meeting",
      year: 2025,
      month: 6,
      day: 29,
      type: "Meeting",
      title: "Safety Meeting",
      description:
        "Safety starts with awareness. Join this month’s meeting to stay sharp on protocols, share feedback, and help keep our site safe for everyone.",
    },
    // Additional events for July
    {
      key: "family-day",
      year: 2025,
      month: 6,
      day: 1,
      type: "Event",
      title: "Family Day",
      description:
        "Bring your family along for a day of fun and games on site! We’ll have activities for all ages and plenty of snacks to share.",
    },
    {
      key: "clean-up",
      year: 2025,
      month: 6,
      day: 5,
      type: "Event",
      title: "Volunteer Clean‑up",
      description:
        "Join us for a community clean‑up to keep our surroundings neat and green. Gloves and supplies provided; just bring your enthusiasm!",
    },
    {
      key: "lunch-learn",
      year: 2025,
      month: 6,
      day: 8,
      type: "Event",
      title: "Lunch & Learn: Sustainability",
      description:
        "Grab a bite and learn about sustainable practices that we can adopt at work and home. A guest speaker will provide great insights.",
    },
    {
      key: "town-hall",
      year: 2025,
      month: 6,
      day: 16,
      type: "Meeting",
      title: "Monthly Town Hall",
      description:
        "Our leadership team will discuss company progress and answer your questions. Attend to stay informed and have your voice heard.",
    },
    {
      key: "hackathon",
      year: 2025,
      month: 6,
      day: 19,
      type: "Event",
      title: "Innovation Hackathon",
      description:
        "Unleash your creativity! Join our hackathon to brainstorm and prototype new ideas that could transform our operations.",
    },
    {
      key: "talent-show",
      year: 2025,
      month: 6,
      day: 30,
      type: "Event",
      title: "Talent Show",
      description:
        "Show off your talents or cheer on your colleagues at our company‑wide talent show. From singing to juggling, all acts welcome!",
    },
  ].map((event) => ({
    ...event,
    // compute weekday abbreviation using locale; month is zero-based
    weekday: new Date(event.year, event.month, event.day).toLocaleDateString(
      "en-US",
      { weekday: "short" },
    ),
  }));

  // Compute the list of events that should be displayed based on the
  // current filter settings.  Events must match the date criteria and
  // also match the search string (if provided).  The search string is
  // case-insensitive and matches against the event title, description,
  // type, weekday abbreviation and date string (e.g., "7/12").
  const lowerSearch = searchText.toLowerCase().trim();
  const filteredEvents = events.filter((ev) => {
    // date filtering: only include events within the current month/year or
    // matching the explicitly selected date
    const matchesDate = shouldShowEvent(ev.year, ev.month, ev.day);
    // search filtering: include when search is empty or event fields contain
    // the search text
    const dateString = `${ev.month + 1}/${ev.day}`;
    const matchesSearch =
      lowerSearch === "" ||
      ev.title.toLowerCase().includes(lowerSearch) ||
      ev.description.toLowerCase().includes(lowerSearch) ||
      ev.type.toLowerCase().includes(lowerSearch) ||
      ev.weekday.toLowerCase().includes(lowerSearch) ||
      dateString.includes(lowerSearch);
    return matchesDate && matchesSearch;
  });

  // Determine the maximum page index based on the number of filtered
  // events.  When there are no events the maxPage is zero.
  const maxPage = Math.max(
    0,
    Math.ceil(filteredEvents.length / eventsPerPage) - 1,
  );

  // Events shown on the current page.  If the current page is beyond
  // the maxPage (which can happen after filtering) clamp to the last
  // available page.
  const clampedPage = Math.min(currentPage, maxPage);
  const eventsForPage = filteredEvents.slice(
    clampedPage * eventsPerPage,
    (clampedPage + 1) * eventsPerPage,
  );

  // Reset to the first page whenever the filter criteria changes (for
  // example, when a user selects a date or navigates to another month).
  useEffect(() => {
    setCurrentPage(0);
  }, [isDateSelected, selectedDate.day, selectedDate.month, selectedDate.year, month, year, searchText]);

  // Handlers for pagination arrows
  const handlePrevPageClick = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : 0));
  };
  const handleNextPageClick = () => {
    setCurrentPage((prev) => (prev < maxPage ? prev + 1 : maxPage));
  };

  // NOTE: selectedDate state is defined above to capture the day/month/year
  // chosen by the user for filtering.  Do not redefine it here.  Previously
  // a duplicate declaration existed which caused React to re-initialise
  // selectedDate twice.  That duplicate has been removed.

  // helper to move to previous month
  const handlePrevMonth = () => {
    let newMonth = month - 1;
    let newYear = year;
    if (newMonth < 0) {
      newMonth = 11;
      newYear -= 1;
    }
    setMonth(newMonth);
    setYear(newYear);
    // reset selection when navigating months
    setIsDateSelected(false);
    setHighlightDate(null);
  };
  // helper to move to next month
  const handleNextMonth = () => {
    let newMonth = month + 1;
    let newYear = year;
    if (newMonth > 11) {
      newMonth = 0;
      newYear += 1;
    }
    setMonth(newMonth);
    setYear(newYear);
    // reset selection when navigating months
    setIsDateSelected(false);
    setHighlightDate(null);
  };

  // generate array of days for the current month
  const getCalendarDays = () => {
    // first day of month (0=Monday, 6=Sunday).  We shift the native
    // getDay() result (0=Sunday) so Monday becomes 0.
    const firstDay = (new Date(year, month, 1).getDay() + 6) % 7;
    // number of days in month
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const days = [];
    // fill preceding blanks
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }
    // fill days of month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    return days;
  };

  // month names
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];


  const calendarDays = getCalendarDays();

  return (
    <div className="screen-12">
      {/* Replace the top-level Link with a plain div so the entire page is not clickable */}
      <div className="the-berg-3">
        <div className="overlap-182">
          <div className="overlap-183">
            <img
              className="rectangle-78"
              alt="Rectangle"
              src="/img/rectangle-1-12.png"
            />

            <div className="rectangle-79" />

            <header className="header-18">
              <div className="overlap-group-82">
                <div className="search-12">
                  <div className="icon-36">
                    <img
                      className="vector-42"
                      alt="Vector"
                      src="/img/vector-174.png"
                    />
                  </div>
                </div>

                <div className="content-25">
                  <button className="button-35">
                    <div className="sign-up-13">Sign Out</div>
                  </button>
                </div>
              </div>

              <div className="menu-40">
                <div className="destination-13">Archive</div>

                <div className="tours-13">FQA</div>
              </div>

              <div className="VENTURE-25">FRTIO LAY ROSENBERG NEWSLETTER</div>
            </header>

            <div className="group-382">
              <div className="group-383">
                <div className="overlap-group-83">
                  <div className="group-384" />

                  <div className="group-385" />
                </div>
              </div>
            </div>
          </div>

        <Link to="/the-berg-2" className="group-386">
          <div className="his-dolorem-habemus-48">Back</div>
          <div className="icon-37">
            <img
              className="vector-43"
              alt="Vector"
              src="/img/vector-159.png"
            />
          </div>
        </Link>
        </div>

        <div className="calendar-collapsed-3">
          <div className="month-selector-3">
            <div
              className="july-3"
              style={{ width: "auto", whiteSpace: "nowrap" }}
              /**
               * When the user clicks the month name, clear any date-based
               * filtering.  This toggles off the selected date and resets
               * the highlight so that all events for the current month
               * are displayed.  Without this handler there is no way to
               * deselect a previously chosen day via the UI.
               */
              onClick={() => {
                setIsDateSelected(false);
                setHighlightDate(null);
              }}
            >
              {monthNames[month]} {year}
            </div>
            <div className="arrows-5">
              {/* previous button */}
              <img
                className="previous-5"
                alt="Previous"
                src="/img/previous-6.png"
                onClick={handlePrevMonth}
                style={{ cursor: "pointer" }}
              />
              {/* next button */}
              <img
                className="next-5"
                alt="Next"
                src="/img/next-6.png"
                onClick={handleNextMonth}
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
          <div className="calendar-events-2">
            {/* Weekday headers */}
            <div className="weekdays-weeks-3">
              <div
                className="weekdays-3"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  color: "#ffffff",
                  position: "relative",
                }}
              >
                {[
                  "Mo",
                  "Tu",
                  "We",
                  "Th",
                  "Fr",
                  "Sa",
                  "Su",
                ].map((dayName) => (
                  <div key={dayName} style={{ flex: 1, textAlign: "center" }}>
                    {dayName}
                  </div>
                ))}
              </div>
              {/* Render calendar days as rows of up to 7 */}
              {Array.from({ length: Math.ceil(calendarDays.length / 7) }).map(
                (_, rowIndex) => {
                  const rowDays = calendarDays.slice(
                    rowIndex * 7,
                    rowIndex * 7 + 7,
                  );
                  return (
                    <div
                      key={rowIndex}
                      className={`week-${rowIndex}`}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: rowIndex === 0 ? "8px" : "4px",
                      }}
                    >
                      {rowDays.map((day, idx) => {
                        const isHighlighted =
                          highlightDate &&
                          day !== null &&
                          day === highlightDate.day &&
                          month === highlightDate.month &&
                          year === highlightDate.year;
                        return (
                          <div
                            key={idx}
                            style={{ flex: 1, textAlign: "center" }}
                              onClick={() => {
                                if (day) {
                                  // If the clicked date is already selected and filtering is active,
                                  // toggle off the date filter.  Otherwise update the selected date
                                  // and enable filtering.
                                  if (
                                    isDateSelected &&
                                    selectedDate.day === day &&
                                    selectedDate.month === month &&
                                    selectedDate.year === year
                                  ) {
                                    // toggle off date filter and clear highlight
                                    setIsDateSelected(false);
                                    setHighlightDate(null);
                                  } else {
                                    // update highlight for visual selection
                                    setHighlightDate({ day: day, month, year });
                                    // record the selected date for filtering
                                    setSelectedDate({ day: day, month, year });
                                    setIsDateSelected(true);
                                  }
                                }
                              }}
                          >
                            {day ? (
                              <span
                                style={{
                                  display: "inline-flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  width: "28px",
                                  height: "28px",
                                  lineHeight: "28px",
                                  borderRadius: "50%",
                                  backgroundColor: isHighlighted ? "#ffffff" : "transparent",
                                  color: isHighlighted ? "#005896" : "#ffffff",
                                }}
                              >
                                {day}
                              </span>
                            ) : (
                              ""
                            )}
                          </div>
                        );
                      })}
                    </div>
                  );
                },
              )}
            </div>
          </div>
        </div>

        <div className="light-field-default-33">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search"
            className="placeholder-21"
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              outline: "none",
              paddingLeft: "15px",
              fontSize: "16px",
              fontFamily: "DM Sans, Helvetica",
              color: "#58617b",
              borderRadius: "16px",
              backgroundColor: "transparent",
            }}
          />
        </div>

        {/* Render the event cards for the current page.  Cards are spaced
            vertically and use absolute positioning to align with the
            existing design. */}
        <div className="event-cards-container">
          {eventsForPage.map((ev, idx) => (
            <div
              key={ev.key}
              className="group-387"
              style={{ top: `${606 + idx * 235}px` }}
            >
              <div className="overlap-185">
                <div className="rectangle-80" />
                <div className="group-388">
                  <div className="overlap-group-85">
                    <div className="element-5">{ev.weekday}</div>
                    <div className="element-6">{ev.month + 1}/{ev.day}</div>
                  </div>
                </div>
              </div>
              <div className="text-wrapper-168">{ev.type}</div>
              <div className="collaboration-e-5">{ev.title}</div>
              <div className="dots-three-3">
                <img
                  className="vector-44"
                  alt="Vector"
                  src="/img/vector-158.png"
                />
                <img
                  className="vector-45"
                  alt="Vector"
                  src="/img/vector-158.png"
                />
                <img
                  className="vector-46"
                  alt="Vector"
                  src="/img/vector-158.png"
                />
              </div>
              <p className="his-dolorem-habemus-49">{ev.description}</p>
            </div>
          ))}
        </div>
        {/* Pagination controls: show only when there are more events than can
            fit on a single page */}
        {filteredEvents.length > eventsPerPage && (
          <div
            className="page-nav"
            style={{
              position: "absolute",
              left: "168px",
              top: `${606 + eventsPerPage * 235}px`,
              height: "25px",
              width: "149px",
            }}
          >
            <div className="arrows-6">
              <img
                className="previous-6"
                alt="Previous"
                src="/img/previous-8.png"
                onClick={handlePrevPageClick}
                style={{
                  cursor: currentPage > 0 ? "pointer" : "default",
                  opacity: currentPage > 0 ? 1 : 0.5,
                }}
              />
              <img
                className="next-6"
                alt="Next"
                src="/img/next-8.png"
                onClick={handleNextPageClick}
                style={{
                  cursor: currentPage < maxPage ? "pointer" : "default",
                  opacity: currentPage < maxPage ? 1 : 0.5,
                }}
              />
            </div>
          </div>
        )}

        <div className="group-396">
          <div className="we-craft-digital-25">Rosenburg Event Calender</div>
        </div>

        <div className="group-397">
          <div className="we-craft-digital-26">THIS MONTH</div>

          <div className="group-398">
            <p className="his-dolorem-habemus-51">
              <span className="text-wrapper-169">
                4th of July Celebration
                <br />
              </span>

              <span className="text-wrapper-170">
                His dolorem habemus mandamus et, eius ponderum at nec.
                <br />
                <br />
              </span>

              <span className="text-wrapper-169">
                NEW FLAVORS:
                <br />
              </span>

              <span className="text-wrapper-170">
                Fiery Skulls in BCP, Jalapeno Lime Twists, Guacamole Doritos
              </span>
            </p>

            <img className="path-798" alt="Path" src="/img/path-7-7.png" />

            <img className="path-799" alt="Path" src="/img/path-7-7.png" />
          </div>
        </div>

        <div className="footer-menu-7">
          <footer className="footer-18">
            <div className="cel-42">
              <div className="logo-text-13">
                <div className="VENTURE-26">ROSENBURG NEWSLETTER</div>

                <p className="feel-and-enjoy-the-8">
                  Published by <br />
                  What’s The Big Idea?
                </p>
              </div>

              <div className="menu-41">
                <div className="content-26">
                  <div className="supports-13">Support</div>

                  <div className="cel-43">
                    <div className="help-13">Archive</div>

                    <div className="location-13">Location Info</div>

                    <div className="employees-13">Resources</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="cel-44">
              <div className="frame-13">
                <div className="terms-condditions-13">
                  Terms &amp; Conditions
                </div>

                <div className="ellipse-20" />

                <div className="text-wrapper-171">Privacy Policy</div>
              </div>

              <div className="element-venture-all-13">
                ©2025 All rights reserved
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};
