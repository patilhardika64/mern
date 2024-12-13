import { useState, useEffect } from "react";
import axios from "axios";

const DepartmentList = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const result = await axios.get("/api/departments/getAllDept");
        console.log("Fetched departments:", result.data);
        setDepartments(result.data);
      } catch (error) {
        console.error("Error fetching departments:", error);
      }
    };

    fetchDepartments();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Department Information</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Department Name</th>
            <th>Code</th>
          </tr>
        </thead>
        <tbody>
          {departments.length === 0 ? (
            <tr>
              <td colSpan="2">No departments found</td>
            </tr>
          ) : (
            departments.map((department, index) => (
              <tr key={index}>
                <td>{department.name}</td>
                <td>{department.code}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DepartmentList;
