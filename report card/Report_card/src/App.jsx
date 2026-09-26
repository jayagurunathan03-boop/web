import React from "react";
import {
  Routes,
  Route,
  NavLink,
  useLocation
} from "react-router-dom";

import Student from "./student";
import "./app.css";

const student = {
  name: "JAYAGURUNATHAN",
  registerNo: "23CSE101",
  rollNo: "CSE-101",
  department: "Computer Science and Engineering",
  year: "III Year",
  semester: "V Semester",
  college: "Prince Dr K Vasudevaan College of Engineering and Technology",
  email: "student@example.com",
  phone: "+91 9876543210"
};

const subjects = [
  {
    code: "CS501",
    name: "Database Management Systems",
    internal: 24,
    external: 67,
    total: 91,
    grade: "S",
    point: 10
  },
  {
    code: "CS502",
    name: "Data Structures",
    internal: 23,
    external: 62,
    total: 85,
    grade: "A+",
    point: 9
  },
  {
    code: "CS503",
    name: "Operating Systems",
    internal: 22,
    external: 61,
    total: 83,
    grade: "A+",
    point: 9
  },
  {
    code: "CS504",
    name: "Computer Networks",
    internal: 21,
    external: 58,
    total: 79,
    grade: "A",
    point: 8
  },
  {
    code: "CS505",
    name: "Software Engineering",
    internal: 24,
    external: 60,
    total: 84,
    grade: "A+",
    point: 9
  }
];

function Layout({ children }) {
  const location = useLocation();

  return (
    <div className="app-container">

      <aside className="sidebar">

        <div className="brand">
          <div className="brand-icon">🎓</div>

          <div>
            <h2>EduTrack</h2>
            <span>Student Portal</span>
          </div>
        </div>

        <nav className="navigation">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            <span>⌂</span>
            Dashboard
          </NavLink>

          <NavLink
            to="/student"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            <span>👨‍🎓</span>
            Student Profile
          </NavLink>

          <NavLink
            to="/results"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            <span>📊</span>
            Results
          </NavLink>

          <NavLink
            to="/attendance"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            <span>📅</span>
            Attendance
          </NavLink>

          <NavLink
            to="/performance"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            <span>🏆</span>
            Performance
          </NavLink>

        </nav>

        <div className="sidebar-bottom">
          <div className="college-mini">
            <strong>Academic Year</strong>
            <span>2026 - 2027</span>
          </div>
        </div>

      </aside>

      <main className="main-content">

        <header className="topbar">

          <div>
            <p className="breadcrumb">
              Student Portal / {location.pathname === "/" ? "Dashboard" : location.pathname.substring(1)}
            </p>

            <h1>
              College Report Card
            </h1>
          </div>

          <div className="top-profile">
            <div className="avatar">
              J
            </div>

            <div>
              <strong>{student.name}</strong>
              <small>{student.registerNo}</small>
            </div>
          </div>

        </header>

        <section className="page-content">
          {children}
        </section>

        <footer className="footer">
          © 2026 EduTrack College Student Management System
        </footer>

      </main>

    </div>
  );
}

function Dashboard() {
  const totalMarks = subjects.reduce(
    (sum, subject) => sum + subject.total,
    0
  );

  const average = (totalMarks / subjects.length).toFixed(2);

  return (
    <div>

      <div className="welcome-card">

        <div>
          <p>WELCOME BACK</p>

          <h2>
            Hello, {student.name} 👋
          </h2>

          <span>
            Here is your academic performance overview.
          </span>
        </div>

        <div className="welcome-icon">
          🎓
        </div>

      </div>

      <div className="stats-grid">

        <div className="stat-card">
          <div className="stat-icon blue">📚</div>

          <div>
            <span>Total Subjects</span>
            <strong>{subjects.length}</strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon green">📈</div>

          <div>
            <span>Average Marks</span>
            <strong>{average}%</strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon purple">⭐</div>

          <div>
            <span>Current CGPA</span>
            <strong>8.9</strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon orange">📅</div>

          <div>
            <span>Attendance</span>
            <strong>92%</strong>
          </div>
        </div>

      </div>

      <div className="dashboard-grid">

        <div className="panel">

          <div className="panel-header">
            <div>
              <h3>Latest Semester Results</h3>
              <span>V Semester - 2026</span>
            </div>

            <NavLink to="/results" className="view-link">
              View All →
            </NavLink>
          </div>

          <div className="table-wrapper">

            <table>

              <thead>
                <tr>
                  <th>Code</th>
                  <th>Subject</th>
                  <th>Marks</th>
                  <th>Grade</th>
                </tr>
              </thead>

              <tbody>

                {subjects.map((subject) => (
                  <tr key={subject.code}>

                    <td>{subject.code}</td>

                    <td>{subject.name}</td>

                    <td>
                      <strong>{subject.total}/100</strong>
                    </td>

                    <td>
                      <span className="grade">
                        {subject.grade}
                      </span>
                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>

        </div>

        <div className="panel performance-panel">

          <div className="panel-header">
            <div>
              <h3>Overall Performance</h3>
              <span>Current Academic Year</span>
            </div>
          </div>

          <div className="circle-progress">
            <div className="circle-inner">
              <strong>89%</strong>
              <span>Overall</span>
            </div>
          </div>

          <div className="performance-info">

            <div>
              <span>CGPA</span>
              <strong>8.9 / 10</strong>
            </div>

            <div>
              <span>Attendance</span>
              <strong>92%</strong>
            </div>

            <div>
              <span>Status</span>
              <strong className="passed">PASSED</strong>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

function Results() {
  const total = subjects.reduce(
    (sum, subject) => sum + subject.total,
    0
  );

  return (
    <div>

      <div className="page-heading">
        <div>
          <h2>Semester Results</h2>
          <p>Detailed subject-wise academic results</p>
        </div>

        <button
          className="download-btn"
          onClick={() => window.print()}
        >
          🖨 Print Report
        </button>
      </div>

      <div className="report-card">

        <div className="report-header">

          <div className="college-logo">
            🎓
          </div>

          <div>
            <h2>{student.college}</h2>
            <p>END SEMESTER EXAMINATION RESULT</p>
            <span>Academic Year 2026 - 2027</span>
          </div>

        </div>

        <div className="student-summary">

          <div>
            <span>Student Name</span>
            <strong>{student.name}</strong>
          </div>

          <div>
            <span>Register Number</span>
            <strong>{student.registerNo}</strong>
          </div>

          <div>
            <span>Department</span>
            <strong>{student.department}</strong>
          </div>

          <div>
            <span>Semester</span>
            <strong>{student.semester}</strong>
          </div>

        </div>

        <div className="table-wrapper">

          <table className="result-table">

            <thead>
              <tr>
                <th>Code</th>
                <th>Subject</th>
                <th>Internal</th>
                <th>External</th>
                <th>Total</th>
                <th>Grade</th>
                <th>Point</th>
              </tr>
            </thead>

            <tbody>

              {subjects.map((subject) => (
                <tr key={subject.code}>

                  <td>{subject.code}</td>
                  <td>{subject.name}</td>
                  <td>{subject.internal}</td>
                  <td>{subject.external}</td>
                  <td>
                    <strong>{subject.total}</strong>
                  </td>

                  <td>
                    <span className="grade">
                      {subject.grade}
                    </span>
                  </td>

                  <td>{subject.point}</td>

                </tr>
              ))}

              <tr className="total-row">
                <td colSpan="4">TOTAL</td>
                <td>{total}</td>
                <td>-</td>
                <td>8.9</td>
              </tr>

            </tbody>

          </table>

        </div>

        <div className="result-summary">

          <div className="result-box">
            <span>Total Marks</span>
            <strong>{total}/500</strong>
          </div>

          <div className="result-box">
            <span>Percentage</span>
            <strong>84.4%</strong>
          </div>

          <div className="result-box">
            <span>CGPA</span>
            <strong>8.9</strong>
          </div>

          <div className="result-box">
            <span>Result</span>
            <strong className="passed">PASS</strong>
          </div>

        </div>

      </div>

    </div>
  );
}

function Attendance() {
  return (
    <div>

      <div className="page-heading">
        <div>
          <h2>Attendance</h2>
          <p>Subject-wise attendance details</p>
        </div>
      </div>

      <div className="attendance-grid">

        {subjects.map((subject, index) => {

          const attendance = [94, 91, 89, 93, 95][index];

          return (
            <div className="attendance-card" key={subject.code}>

              <div className="attendance-top">
                <div>
                  <span>{subject.code}</span>
                  <h3>{subject.name}</h3>
                </div>

                <strong>{attendance}%</strong>
              </div>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${attendance}%` }}
                ></div>
              </div>

              <div className="attendance-bottom">
                <span>Present</span>
                <span>
                  {attendance >= 75 ? "Eligible" : "Shortage"}
                </span>
              </div>

            </div>
          );
        })}

      </div>

      <div className="attendance-overall">

        <div>
          <span>Overall Attendance</span>
          <strong>92%</strong>
        </div>

        <div className="attendance-circle">
          92%
        </div>

      </div>

    </div>
  );
}

function Performance() {
  const semesterData = [
    { semester: "I", cgpa: 8.2 },
    { semester: "II", cgpa: 8.5 },
    { semester: "III", cgpa: 8.4 },
    { semester: "IV", cgpa: 8.7 },
    { semester: "V", cgpa: 8.9 }
  ];

  return (
    <div>

      <div className="page-heading">
        <div>
          <h2>Academic Performance</h2>
          <p>Semester-wise CGPA progression</p>
        </div>
      </div>

      <div className="performance-card">

        <div className="performance-title">
          <h3>CGPA Progress</h3>
          <span>Semester I - V</span>
        </div>

        <div className="chart">

          {semesterData.map((item) => (

            <div className="chart-column" key={item.semester}>

              <div className="bar-value">
                {item.cgpa}
              </div>

              <div
                className="chart-bar"
                style={{
                  height: `${item.cgpa * 25}px`
                }}
              ></div>

              <span>Sem {item.semester}</span>

            </div>

          ))}

        </div>

      </div>

      <div className="achievement-grid">

        <div className="achievement-card">
          <span>🏆</span>
          <div>
            <strong>Current CGPA</strong>
            <p>8.9 / 10</p>
          </div>
        </div>

        <div className="achievement-card">
          <span>⭐</span>
          <div>
            <strong>Best Semester</strong>
            <p>Semester V</p>
          </div>
        </div>

        <div className="achievement-card">
          <span>📚</span>
          <div>
            <strong>Subjects Cleared</strong>
            <p>25 Subjects</p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default function App() {

  return (
    <Layout>

      <Routes>

        <Route path="/" element={<Dashboard />} />

        <Route
          path="/student"
          element={<Student student={student} />}
        />

        <Route
          path="/results"
          element={<Results />}
        />

        <Route
          path="/attendance"
          element={<Attendance />}
        />

        <Route
          path="/performance"
          element={<Performance />}
        />

      </Routes>

    </Layout>
  );
}