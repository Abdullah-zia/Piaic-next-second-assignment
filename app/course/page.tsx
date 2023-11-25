import React from "react";
import Header from "../components/header/Header";
import Course from "../components/coursePage/course/Course";
import BestCourse from "../components/coursePage/bestCourse/BestCourse";

const course = () => {
  return (
    <>
      <header className="Sub-header">
        <Header />
        <h1>Our Courses</h1>
      </header>
      <Course />
      <BestCourse />
    </>
  );
};

export default course;
