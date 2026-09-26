import React from 'react';
import Header from './components/Header';
import StudentCard from './components/StudentCard';
import SubjectList from './components/SubjectList';
import Footer from './components/Footer';
import './App.css';

function App() {
  // Task 4 Array
  const subjectsList = ["React", "Java", "Python", "SQL", "DBMS"];
  
  // Student Props Data
  const studentData = {
    name: "JAYAGURUNATHAN J",
    registerNo: "411625149016",
    department: "CSE(CYBER SECURITY)",
    year: "II",
    cgpa: 8.5,
    attendance: 96.56,
    photoUrl: "https://jayagurunathan03-boop.github.io/web-project-1/pic.jpeg"
  };

  const currentSemester = "III";

  return (
    <div className="app-container">
      <Header />
      <main className="dashboard-content">
        <StudentCard 
          student={studentData} 
          semester={currentSemester} 
          subjects={subjectsList} 
        />
        <SubjectList subjects={subjectsList} />
      </main>
      <Footer />
    </div>
  );
}

export default App;