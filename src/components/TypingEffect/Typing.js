import React, { useState, useEffect } from "react";
import './TypingEffect.css';  // Import the CSS file

const quotes = [
  "Dholera: Dream. Develop. Deliver.",
  "Dholera: Gateway to Growth.",
  "Smart Living, Dholera Way.",
  "Dholera: Future in Motion."
];

const TypingEffect = () => {
  const [currentQuote, setCurrentQuote] = useState("");
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState(""); // State for fade class
  const pauseTime = 2000; // Pause after full quote is displayed

  useEffect(() => {
    let timer;

    // Change quote and trigger fade-in effect
    setFadeClass("fade-in");
    setCurrentQuote(quotes[quoteIndex]);

    // Pause after fully displaying the quote
    timer = setTimeout(() => {
      setFadeClass(""); // Remove fade class to trigger fade-out
    }, pauseTime);

    // Switch to the next quote after fade-out
    const switchQuoteTimer = setTimeout(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, pauseTime + 3000); // Delay to give time for fade-out

    return () => {
      clearTimeout(timer);
      clearTimeout(switchQuoteTimer);
    };
  }, [quoteIndex]);

  return (
    <div className="container">
      {/* Background Video */}
      <video className="video" autoPlay loop muted>
        <source
          src="https://www.canva.com/design/DAGIItnEhnY/tYBDD5ZYXXljBgvJHQrQkw/view"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Fade-in Effect Text */}
      <div className="overlay">
        <h1 className={`text ${fadeClass}`}>{currentQuote}</h1>
      </div>
    </div>
  );
};

export default TypingEffect;
