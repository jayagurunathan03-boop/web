import React from "react";
import "./App.css";

function App() {
  const hobbies = [
    {
      icon: "🎮",
      title: "Gaming",
      description:
        "Playing games helps me relax, improve my thinking and have fun."
    },

    {
      icon: "🎵",
      title: "Listening to Music",
      description:
        "I enjoy listening to different types of music during my free time."
    },

    {
      icon: "📚",
      title: "Reading",
      description:
        "Reading books helps me gain knowledge and develop new ideas."
    },

    {
      icon: "💻",
      title: "Coding",
      description:
        "I enjoy creating websites and learning new programming technologies."
    },

    {
      icon: "📷",
      title: "Photography",
      description:
        "Photography allows me to capture interesting moments and memories."
    },

    {
      icon: "⚽",
      title: "Sports",
      description:
        "Playing sports keeps me active, healthy and energetic."
    }
  ];

  return (
    <div className="app">
      <header className="header">
        <h1>My Hobbies</h1>
        <p>Things I enjoy doing in my free time</p>
      </header>

      <section className="about">
        <h2>About My Hobbies</h2>
        <p>
          Hobbies are activities that I enjoy doing in my free time.
          They help me relax, learn new skills and stay active.
        </p>
      </section>

      <section className="hobbies">
        {hobbies.map((hobby, index) => (
          <div className="hobby-card" key={index}>
            <div className="icon">{hobby.icon}</div>

            <h2>{hobby.title}</h2>

            <p>{hobby.description}</p>

            <button>Explore</button>
          </div>
        ))}
      </section>

      <footer>
        <p>© 2026 My Hobbies | React Web Interface</p>
      </footer>
    </div>
  );
}

export default App;