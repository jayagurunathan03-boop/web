import React from "react";
import "./student.css";

export default function Student({ student }) {

  return (
    <div className="student-page">

      <div className="student-title">

        <div>
          <h2>Student Profile</h2>
          <p>Complete student academic information</p>
        </div>

        <button
          className="edit-button"
          onClick={() => window.print()}
        >
          🖨 Print Profile
        </button>

      </div>

      <div className="profile-card">

        <div className="profile-top">

          <div className="profile-image">
            {student.name.charAt(0)}
          </div>

          <div className="profile-main">

            <h2>{student.name}</h2>

            <p>
              {student.department}
            </p>

            <span className="student-status">
              ● Active Student
            </span>

          </div>

        </div>

        <div className="profile-divider"></div>

        <div className="profile-details">

          <div className="detail-item">
            <span>Register Number</span>
            <strong>{student.registerNo}</strong>
          </div>

          <div className="detail-item">
            <span>Roll Number</span>
            <strong>{student.rollNo}</strong>
          </div>

          <div className="detail-item">
            <span>Academic Year</span>
            <strong>2026 - 2027</strong>
          </div>

          <div className="detail-item">
            <span>Year</span>
            <strong>{student.year}</strong>
          </div>

          <div className="detail-item">
            <span>Current Semester</span>
            <strong>{student.semester}</strong>
          </div>

          <div className="detail-item">
            <span>Department</span>
            <strong>{student.department}</strong>
          </div>

          <div className="detail-item">
            <span>Email</span>
            <strong>{student.email}</strong>
          </div>

          <div className="detail-item">
            <span>Phone Number</span>
            <strong>{student.phone}</strong>
          </div>

        </div>

      </div>

      <div className="student-section-grid">

        <div className="student-info-card">

          <div className="section-heading">
            <span>🎓</span>
            <h3>College Information</h3>
          </div>

          <p>
            {student.college}
          </p>

          <div className="college-details">

            <div>
              <span>Institution Type</span>
              <strong>Engineering College</strong>
            </div>

            <div>
              <span>University</span>
              <strong>Anna University</strong>
            </div>

            <div>
              <span>Program</span>
              <strong>B.E.</strong>
            </div>

          </div>

        </div>

        <div className="student-info-card">

          <div className="section-heading">
            <span>📊</span>
            <h3>Academic Summary</h3>
          </div>

          <div className="academic-summary">

            <div>
              <strong>8.9</strong>
              <span>CGPA</span>
            </div>

            <div>
              <strong>92%</strong>
              <span>Attendance</span>
            </div>

            <div>
              <strong>25</strong>
              <span>Subjects</span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}