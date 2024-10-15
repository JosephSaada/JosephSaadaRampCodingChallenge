import React, { useState, useEffect } from "react";

const App = () => {
  const [flag, setFlag] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFlag = async () => {
      try {
        const response = await fetch(
          "https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/656c61"
        );
        const data = await response.text();
        setFlag(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching the flag:", error);
      }
    };

    fetchFlag();
  }, []);

  return (
    <div>{loading ? <p>Loading...</p> : <TypewriterEffect text={flag} />}</div>
  );
};

const TypewriterEffect = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1));
      index++;
      if (index === text.length) {
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <ul>
      {displayedText.split("").map((char, index) => (
        <li key={index}>{char}</li>
      ))}
    </ul>
  );
};

export default App;

// let url = '';
// document.querySelectorAll('code[data-class^="23"] div[data-tag$="93"] span[data-id*="21"] i.char').forEach((element) => {
//   url += element.getAttribute('value');
// });
// console.log(url);
