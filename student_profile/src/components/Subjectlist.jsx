import React from 'react';

const SubjectList = ({ subjects }) => {
  return (
    <div className="subject-list-container">
      <h3>Enrolled Subjects</h3>
      <ul>
        {subjects.map((subject, index) => (
          <li key={index}>{subject}</li>
        ))}
      </ul>
    </div>
  );
};

export default SubjectList;