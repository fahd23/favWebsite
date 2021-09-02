import React from "react";
import "./styles.css";
import { useState } from "react";

const websiteDB = {
  HTML: [
    { websitename: "MDN Web Docs", rating: "4.8/5" },
    { websitename: "freeCodeCamp", rating: "4.3/5" },
    { websitename: "W3Schools", rating: "4.2/5" }
  ],
  CSS: [
    { websitename: "MDN Web Docs", rating: "4.7/5" },
    { websitename: "freeCodeCamp", rating: "4.3/5" },
    { websitename: "W3Schools", rating: "4/5" }
  ],
  ColorInspiration: [
    { websitename: "Color Hunt", rating: "4.8/5" },
    { websitename: "coolors", rating: "4.2/5" },
    { websitename: "Tailwindcss", rating: "4/5" }
  ],

  JavaScript: [
    { websitename: "W3Schools", rating: "4.5/5" },
    { websitename: "MDN Web Docs", rating: "4.2/5" },
    { websitename: "javatpoint", rating: "4/5" }
  ]
};

export default function App() {
  const [selectedTopic, setTopic] = useState("HTML");
  function topicClickHandler(topic) {
    setTopic(topic);
  }
  return (
    <div className="App">
      <h1 style={{ fontSize: "2rem" }}> Cool Webistes to learn programming</h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite websites. Select a topic to get started{" "}
      </p>

      <div>
        {Object.keys(websiteDB).map((topic) => (
          <button
            onClick={() => topicClickHandler(topic)}
            style={{
              background: "#F0D9FF",
              borderRadius: "0.8rem",
              padding: "0.5rem  1rem",
              border: "1px solid #BFA2DB",
              margin: "1rem 0.3rem"
            }}
          >
            {topic}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {websiteDB[selectedTopic].map((web) => (
            <li
              key={web.websitename}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem ",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {web.websitename} </div>
              <div style={{ fontSize: "smaller" }}> {web.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
