import React from 'react';

const StudentCard = ({ student, semester, subjects }) => {
  const isExamEligible = student.attendance >= 75;
  const isPlacementEligible = student.cgpa >= 8.0;

  return (
    <div className="student-card">
      <div className="student-profile">
        <img 
          src={student.photoUrl} 
          alt={`${student.name}'s profile`} 
          className="student-photo"
        />
        {/* Task 7: Inline Styling for Student Name */}
        <h3 style={{ color: 'blue' }}>Name: {student.name}</h3>
      </div>

      <div className="student-info">
        <p><strong>Register No:</strong> {student.registerNo}</p>
        <p><strong>Department:</strong> {student.department}</p>
        <p><strong>Year:</strong> {student.year}</p>
        
        {/* Task 5: JSX Expressions */}
        <p><strong>Current Year:</strong> {student.year}</p>
        <p><strong>Current Semester:</strong> {semester}</p>
        <p><strong>Total Subjects:</strong> {subjects.length}</p>

        {/* Task 7: Inline Styling for CGPA */}
        <p style={{ color: 'green' }}>
          <strong>CGPA:</strong> {student.cgpa}
        </p>

        {/* Task 7: Inline Styling for Attendance */}
        <p style={{ color: 'orange' }}>
          <strong>Attendance:</strong> {student.attendance}%
        </p>

        {/* Task 6: Conditional Rendering */}
        <div className="status-section">
          <p>
            <strong>Attendance Status: </strong>
            <span className={isExamEligible ? 'status-pass' : 'status-fail'}>
              {isExamEligible ? 'Eligible for Semester Exam' : 'Not Eligible'}
            </span>
          </p>

          <p>
            <strong>Placement Status: </strong>
            <span className={isPlacementEligible ? 'status-pass' : 'status-fail'}>
              {isPlacementEligible ? 'Eligible' : 'Need Improvement'}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;