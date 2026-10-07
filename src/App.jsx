import { useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("Asansol");
  const [search, setSearch] = useState("");

  const searchCity = () => {
    if (search.trim() !== "") {
      setCity(search);
      setSearch("");
    }
  };

  const askAI = () => {
    alert("AI Assistant will answer this question soon!");
  };

  return (
    <div className="app">

      {/* HEADER */}
      <header className="header">
        <div className="logo">☁️ Climatify</div>

        <div className="live">
          <span></span>
          LIVE
        </div>
      </header>

      {/* MAIN */}
      <main className="main">

        {/* HERO */}
        <section className="hero">
          <p>AI POWERED CLIMATE ASSISTANT</p>

          <h1>
            Understand your weather.
            <br />
            <span>Stay one step ahead.</span>
          </h1>

          <div className="subtitle">
            Real-time weather insights and flood risk information
            for any location.
          </div>
        </section>

        {/* SEARCH */}
        <div className="search-box">
          <span>🔍</span>

          <input
            type="text"
            placeholder="Search a city or location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                searchCity();
              }
            }}
          />

          <button onClick={searchCity}>
            Search
          </button>
        </div>

        {/* LOCATION */}
       <div className="location">
  <div>
    <h2>{city}</h2>
    <p>West Bengal, India</p>
    <small>Weather data updated recently</small>
  </div>

  <div className="live-weather">
    <span></span>
    Live Weather
  </div>
</div>
<div className="weather-card">
  <div className="icon">💨</div>
  <p>Wind Speed</p>
  <h3>18 km/h</h3>
  <small>Moderate wind</small>
</div>

<div className="weather-card">
  <div className="icon">☀️</div>
  <p>UV Index</p>
  <h3>6</h3>
  <small>Moderate UV level</small>
</div>
        {/* WEATHER CARDS */}
        <div className="weather-grid">

          <div className="weather-card">
            <div className="icon">☁️</div>
            <p>Condition</p>
            <h3>Cloudy</h3>
            <small>Partly cloudy skies</small>
          </div>

          <div className="weather-card">
            <div className="icon">🌡️</div>
            <p>Temperature</p>
            <h3>28°C</h3>
            <small>Feels like 30°C</small>
          </div>

          <div className="weather-card">
            <div className="icon">🌧️</div>
            <p>Rain Probability</p>
            <h3>72%</h3>
            <small>High chance of rain</small>
          </div>

          <div className="weather-card">
            <div className="icon">💧</div>
            <p>Humidity</p>
            <h3>82%</h3>
            <small>High humidity</small>
          </div>

        </div>

        {/* FLOOD RISK */}
        <section className="flood-card">

          <div className="flood-top">
            <div>
              <p>FLOOD MONITORING</p>
              <h2>Flood Risk Status</h2>
            </div>

            <div className="risk">
              Moderate Risk
            </div>
          </div>

          <div className="flood-content">

            <div className="risk-circle">
              <strong>62%</strong>
              <small>Risk Score</small>
            </div>
            <div className="risk-bar-container">
  <div className="risk-bar">
    <div className="risk-fill"></div>
  </div>
  <div className="risk-labels">
    <span>Low</span>
    <span>Moderate</span>
    <span>High</span>
  </div>
</div>

            <div className="risk-info">

              <div>
                <span>🌧️ Rainfall</span>
                <strong>24 mm</strong>
              </div>

              <div>
                <span>🌊 Water Level</span>
                <strong>Moderate</strong>
              </div>

              <div>
                <span>💨 Wind Speed</span>
                <strong>18 km/h</strong>
              </div>

            </div>

          </div>

        </section>
        {/* WEATHER OVERVIEW */}
<section className="overview-card">

  <div className="overview-header">
    <div>
      <p>WEATHER OVERVIEW</p>
      <h2>Today's Conditions</h2>
    </div>

    <span>24 Hours</span>
  </div>

  <div className="overview-items">

    <div>
      <small>Morning</small>
      <strong>24°C</strong>
      <span>☁️ Cloudy</span>
    </div>

    <div>
      <small>Afternoon</small>
      <strong>29°C</strong>
      <span>🌧️ Rain</span>
    </div>

    <div>
      <small>Evening</small>
      <strong>27°C</strong>
      <span>🌦️ Showers</span>
    </div>

    <div>
      <small>Night</small>
      <strong>25°C</strong>
      <span>☁️ Cloudy</span>
    </div>

  </div>

</section>

        {/* AI RECOMMENDATION */}
        <section className="recommendation">

          <div className="recommendation-icon">
            💡
          </div>

          <div>
            <p>AI RECOMMENDATION</p>

            <h3>
              Carry an umbrella if you are going outside.
            </h3>

            <span>
              Rain probability is currently high.
              Avoid low-lying areas during heavy rainfall.
            </span>
          </div>

        </section>

        {/* CHATBOT */}
        <section className="chatbot">

          <div className="chat-heading">

            <div className="bot">
              🤖
            </div>

            <div>
              <h2>Climatify AI Assistant</h2>

              <p>
                Ask anything about weather or flood risk.
              </p>
            </div>

          </div>

          <div className="chat-input">

            <input
              type="text"
              placeholder="Ask: Should I carry an umbrella today?"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  askAI();
                }
              }}
            />

            <button onClick={askAI}>
              ➤
            </button>

          </div>

        </section>

      </main>

    </div>
  );
}

export default App;
