import React, { useState } from "react";
import axios from "axios";
import './App.css';

function App() {
  const [fullUrl, setFullUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://shorturl-k2vv.onrender.com/shorten", { fullUrl });
      setShortUrl(`https://shorturl-k2vv.onrender.com/${response.data.shortUrl}`);
    } catch (error) {
      alert("Error shortening URL");
    }
  };

  // Styles
  const containerStyle = {
    fontFamily: "'Poppins', sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    margin: 0,
    background: "linear-gradient(135deg, #6E85B7, #B2ABBF)",
    color: "#fff",
  };

  const formStyle = {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
    maxWidth: "500px",
    width: "100%",
  };

  const inputStyle = {
    width: "80%",
    padding: "12px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "16px",
  };

  const buttonStyle = {
    background: "#6E85B7",
    color: "#fff",
    padding: "12px 20px",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "10px",
    transition: "all 0.3s ease",
  };

  const buttonHoverStyle = {
    ...buttonStyle,
    background: "#4F6272",
  };

  const resultStyle = {
    marginTop: "20px",
    fontSize: "18px",
    textAlign: "center",
  };

  const linkStyle = {
    color: "#28A745",  //Change the color
    textDecoration: "none",
    fontWeight: "bold",
  };

  const [buttonHover, setButtonHover] = useState(false);

  return (
    <div style={containerStyle}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "20px", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)" }}>
        URL Shortener
      </h1>
      <div style={formStyle}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your URL here..."
            value={fullUrl}
            onChange={(e) => setFullUrl(e.target.value)}
            style={inputStyle}
          />
          <button
            type="submit"
            style={buttonHover ? buttonHoverStyle : buttonStyle}
            onMouseEnter={() => setButtonHover(true)}
            onMouseLeave={() => setButtonHover(false)}
          >
            Shorten URL
          </button>
        </form>
        {shortUrl && (
          <div style={resultStyle}>
            <p>Shortened URL:</p>
            <a href={shortUrl} target="_blank" rel="noopener noreferrer" style={linkStyle}>
              {shortUrl}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
