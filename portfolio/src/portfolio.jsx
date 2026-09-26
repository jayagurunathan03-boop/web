import React from "react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <section className="page home-page">
      <div className="hero-content">
        <p className="welcome">WELCOME TO MY PORTFOLIO</p>
        <h1>
          Hi, I'm <span>Jayagurunathan</span>
        </h1>
        <h2>React Developer & Computer Science Student</h2>

        <p className="hero-text">
          I create modern, responsive and user-friendly web applications
          using React, JavaScript, HTML and CSS.
        </p>

        <div className="hero-buttons">
          <Link to="/projects" className="btn primary">
            View Projects
          </Link>
          <Link to="/contact" className="btn secondary">
            Contact Me
          </Link>
        </div>
      </div>

      <div className="hero-card">
        <div className="profile-circle">JG</div>
        <h3>Frontend Developer</h3>
        <p>React • JavaScript • HTML • CSS</p>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section className="page">
      <div className="section-title">
        <p>GET TO KNOW ME</p>
        <h1>About Me</h1>
      </div>

      <div className="about-grid">
        <div className="about-card">
          <h2>Who Am I?</h2>
          <p>
            I am a passionate computer science student interested in web
            development and modern technologies. I enjoy building responsive
            websites and interactive applications.
          </p>

          <p>
            My main focus is creating clean user interfaces and learning
            new technologies that help me become a better developer.
          </p>
        </div>

        <div className="info-card">
          <div>
            <strong>Name</strong>
            <span>Jayagurunathan</span>
          </div>

          <div>
            <strong>Role</strong>
            <span>React Developer</span>
          </div>

          <div>
            <strong>College</strong>
            <span>VIT</span>
          </div>

          <div>
            <strong>Interest</strong>
            <span>Web Development</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  const skills = [
    ["HTML", 90],
    ["CSS", 85],
    ["JavaScript", 80],
    ["React.js", 85],
    ["Java", 75],
    ["Python", 70],
    ["SQL", 75],
    ["Git & GitHub", 80],
  ];

  return (
    <section className="page">
      <div className="section-title">
        <p>MY TECHNICAL ABILITIES</p>
        <h1>Skills</h1>
      </div>

      <div className="skills-grid">
        {skills.map(([skill, percentage]) => (
          <div className="skill-card" key={skill}>
            <div className="skill-heading">
              <h3>{skill}</h3>
              <span>{percentage}%</span>
            </div>

            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="technology-box">
        <h2>Technologies I Use</h2>
        <div className="technology-list">
          <span>React</span>
          <span>JavaScript</span>
          <span>HTML5</span>
          <span>CSS3</span>
          <span>Java</span>
          <span>Python</span>
          <span>SQL</span>
          <span>GitHub</span>
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  const projects = [
    {
      title: "Attendance Management",
      type: "React Application",
      description:
        "A React-based attendance management system that displays student attendance percentage and status.",
      tech: "React • CSS • JavaScript",
    },
    {
      title: "Landslide Risk Monitoring",
      type: "Web Dashboard",
      description:
        "A professional dashboard for monitoring landslide risk using machine and sensor information.",
      tech: "React • JavaScript • Charts",
    },
    {
      title: "College Portfolio",
      type: "Web Application",
      description:
        "A responsive portfolio website designed to present academic achievements, skills and projects.",
      tech: "React • CSS • React Router",
    },
    {
      title: "Tourism Management",
      type: "Travel Website",
      description:
        "A tourism website that allows users to explore destinations, attractions and travel information.",
      tech: "HTML • CSS • JavaScript",
    },
  ];

  return (
    <section className="page">
      <div className="section-title">
        <p>MY RECENT WORK</p>
        <h1>Projects</h1>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <div className="project-icon">🚀</div>

            <p className="project-type">{project.type}</p>

            <h2>{project.title}</h2>

            <p>{project.description}</p>

            <div className="project-tech">{project.tech}</div>

            <button className="project-btn">View Project →</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section className="page">
      <div className="section-title">
        <p>MY ACADEMIC JOURNEY</p>
        <h1>Education</h1>
      </div>

      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-dot"></div>

          <div className="timeline-content">
            <span>Current</span>
            <h2>Bachelor's Degree</h2>
            <h3>VIT</h3>
            <p>
              Studying computer science with an interest in software
              development, web technologies and programming.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>

          <div className="timeline-content">
            <span>Higher Secondary</span>
            <h2>Higher Secondary Education</h2>
            <p>
              Completed higher secondary education with interest in
              mathematics and computer science.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section className="page">
      <div className="section-title">
        <p>MY DEVELOPMENT JOURNEY</p>
        <h1>Experience</h1>
      </div>

      <div className="experience-grid">
        <div className="experience-card">
          <span>01</span>
          <h2>Frontend Development</h2>
          <p>
            Developed responsive interfaces using HTML, CSS, JavaScript and
            React.
          </p>
        </div>

        <div className="experience-card">
          <span>02</span>
          <h2>React Projects</h2>
          <p>
            Created multiple React applications using components, state,
            events and React Router.
          </p>
        </div>

        <div className="experience-card">
          <span>03</span>
          <h2>GitHub Projects</h2>
          <p>
            Worked with Git and GitHub for source-code management and project
            deployment.
          </p>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  const services = [
    {
      icon: "💻",
      title: "Web Development",
      text: "Building responsive and modern websites.",
    },
    {
      icon: "⚛️",
      title: "React Development",
      text: "Creating component-based React applications.",
    },
    {
      icon: "🎨",
      title: "UI Design",
      text: "Designing clean and user-friendly interfaces.",
    },
    {
      icon: "📱",
      title: "Responsive Design",
      text: "Making websites work across mobile, tablet and desktop.",
    },
  ];

  return (
    <section className="page">
      <div className="section-title">
        <p>WHAT I CAN DO</p>
        <h1>Services</h1>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.title}>
            <div className="service-icon">{service.icon}</div>
            <h2>{service.title}</h2>
            <p>{service.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Resume() {
  return (
    <section className="page resume-page">
      <div className="section-title">
        <p>MY PROFESSIONAL PROFILE</p>
        <h1>Resume</h1>
      </div>

      <div className="resume-card">
        <h2>Jayagurunathan</h2>
        <p>React Developer | Computer Science Student</p>

        <div className="resume-section">
          <h3>Career Objective</h3>
          <p>
            To develop my technical and problem-solving skills while creating
            useful and innovative software applications.
          </p>
        </div>

        <div className="resume-section">
          <h3>Technical Skills</h3>
          <p>
            React.js, JavaScript, HTML, CSS, Java, Python, SQL, Git and
            GitHub.
          </p>
        </div>

        <div className="resume-section">
          <h3>Areas of Interest</h3>
          <p>Frontend Development, Full Stack Development and UI Design.</p>
        </div>

        <button className="btn primary">Download Resume</button>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section className="page">
      <div className="section-title">
        <p>LET'S CONNECT</p>
        <h1>Contact Me</h1>
      </div>

      <div className="contact-grid">
        <div className="contact-info">
          <h2>Get In Touch</h2>

          <p>
            Feel free to contact me for projects, collaborations or
            opportunities.
          </p>

          <div className="contact-item">
            <strong>📧 Email</strong>
            <span>yourmail@example.com</span>
          </div>

          <div className="contact-item">
            <strong>📱 Phone</strong>
            <span>+91 XXXXX XXXXX</span>
          </div>

          <div className="contact-item">
            <strong>📍 Location</strong>
            <span>Tamil Nadu, India</span>
          </div>
        </div>

        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Message submitted successfully!");
          }}
        >
          <input type="text" placeholder="Your Name" required />

          <input type="email" placeholder="Your Email" required />

          <input type="text" placeholder="Subject" required />

          <textarea
            rows="6"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit" className="btn primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}