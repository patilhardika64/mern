import { useState, useEffect } from "react";
import axios from "axios";

const TeacherList = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const result = await axios.get("/api/teachers/getAllTeachers");
        console.log("Fetched teachers:", result.data);
        setTeachers(result.data);
      } catch (error) {
        console.error("Error fetching teachers:", error);
      }
    };

    fetchTeachers();
  }, []);

  return (
    <div>
      <h2>Teacher Information</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Teacher Name</th>
            <th>Email</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {teachers.length === 0 ? (
            <tr>
              <td colSpan="3">No teachers found</td>
            </tr>
          ) : (
            teachers.map((teacher, index) => (
              <tr key={index}>
                <td>{teacher.name}</td>
                <td>{teacher.email}</td>
                <td>{teacher.department.name}</td>
                {/* <td>{teacher.department?.name || 'N/A'}</td> */}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TeacherList;
