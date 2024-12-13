// import React from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css"; // Optional for styling

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to="/Department" style={styles.navLink}>
            Department
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/StudentList" style={styles.navLink}>
            Student
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/teacher" style={styles.navLink}>
            Teacher
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: "white",
    padding: "10px",
    textAlign: "center",
  },
  navList: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    justifyContent: "center",
  },
  navItem: {
    margin: "0 15px",
  },
  navLink: {
    textDecoration: "none",
    color: "black",
    fontSize: "18px",
  },
};

export default Navbar;
