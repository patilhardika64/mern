import StudentList from "./components/StudentList";
// import teacher from './components/teacher';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import DepartmentList from "./components/DepartmentList";
// import StudentList from './components/StudentList';
import TeacherList from "./components/TeacherList";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/StudentList" element={<StudentList />} />
        <Route path="/teacher" element={<TeacherList />} />
        <Route path="/Department" element={<DepartmentList />} />
      </Routes>
    </Router>
  );
};

export default App;

import "./App.css";

// function App() {
//   return (
//     <div>
//       <h1>Welcome to Student Management System</h1>
//       <StudentList />
//     </div>

//     )
// }

// export default App;
// import TeacherList from "./components/teacher";

// function App() {
//   return (
//     <div>
//       <TeacherList />
//     </div>
//   );
// }

// export default App;
