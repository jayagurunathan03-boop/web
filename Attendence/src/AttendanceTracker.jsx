import { useState } from "react";
import "./App.css";

function App() {
  const initialStudents = [
    { id: 1, name: "Jayagurunathan J", present: true },
    { id: 2, name: "shivani M", present: true },
    { id: 3, name: "Parvathi M", present: false },
    { id: 4, name: "Jai J", present: true },
    { id: 5, name: "Guru J", present: true },
    { id: 6, name: "Arjun E M", present: false },
    { id: 7, name: "Kishal B", present: true },
    { id: 8, name: "Tarun N", present: true },
    { id: 9, name: "Bharath Kumar M", present: false },
    { id: 10, name: "Bharath kumar P", present: true },
    { id: 11, name: "Sanjay K V", present: true },
    { id: 12, name: "Jebshilin J L", present: false },
    { id: 13, name: "Dilli Babu U", present: true },
    { id: 14, name: "Dilliganesh U", present: true },
    { id: 15, name: "Arasu S", present: false },
    { id: 16, name: "Balaji G", present: true },
    { id: 17, name: "Jeevashri J", present: true },
    { id: 18, name: "Hema sri J", present: false },
    { id: 19, name: "Reetha J", present: true },
    { id: 20, name: "Vidhaya sri J", present: true }
  ];

  const [students, setStudents] = useState(initialStudents);

  // Change Present / Absent
  const toggleAttendance = (id) => {
    setStudents(
      students.map((student) =>
        student.id === id
          ? { ...student, present: !student.present }
          : student
      )
    );
  };

  // Calculate attendance
  const totalStudents = students.length;

  const presentCount = students.filter(
    (student) => student.present
  ).length;

  const absentCount = students.filter(
    (student) => !student.present
  ).length;

  const attendancePercentage =
    totalStudents > 0
      ? ((presentCount / totalStudents) * 100).toFixed(2)
      : 0;

  return (
    <div className="app">

      {/* Header */}
      <header className="header">
        <h1>📚 Attendance Tracker</h1>
        <p>Student Attendance Management System</p>
      </header>

      <div className="main-container">

        {/* Student List */}
        <div className="student-section">

          <h2>Student Attendance</h2>

          <div className="student-list">

            {students.map((student) => (
              <div className="student-card" key={student.id}>

                <div className="student-info">
                  <span className="student-number">
                    {student.id}
                  </span>

                  <span className="student-name">
                    {student.name}
                  </span>
                </div>

                <button
                  className={
                    student.present
                      ? "attendance-btn present"
                      : "attendance-btn absent"
                  }
                  onClick={() => toggleAttendance(student.id)}
                >
                  {student.present ? "Present" : "Absent"}
                </button>

              </div>
            ))}

          </div>
        </div>

        {/* Sidebar */}
        <aside className="sidebar">

          <h2>📊 Attendance</h2>

          <div className="percentage">
            {attendancePercentage}%
          </div>

          <p className="percentage-label">
            Overall Attendance
          </p>

          <div className="stat-box">
            <span>Total Students</span>
            <strong>{totalStudents}</strong>
          </div>

          <div className="stat-box">
            <span>Present</span>
            <strong>{presentCount}</strong>
          </div>

          <div className="stat-box">
            <span>Absent</span>
            <strong>{absentCount}</strong>
          </div>

          <div className="progress-container">
            <div
              className="progress-bar"
              style={{
                width: `${attendancePercentage}%`
              }}
            ></div>
          </div>

          <p className="status">
            {attendancePercentage >= 75
              ? "✅ Good Attendance"
              : "⚠️ Low Attendance"}
          </p>

        </aside>

      </div>
    </div>
  );
}

export default App;