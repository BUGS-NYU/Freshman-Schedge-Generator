import React from "react";

const Course = ({ course }) => {
  return (
    <>
      <div className="Rtable-cell reg-num Rtable-cell--head">
        {course.regNumber}
      </div>
      <div className="Rtable-cell date">{course.date}</div>
      <div className="Rtable-cell start">{course.start}</div>
      <div className="Rtable-cell end">{course.end}</div>
      <div className="Rtable-cell class-name">{course.className}</div>
      <div className="Rtable-cell professor Rtable-cell--foot">
        {course.instructor}
      </div>
    </>
  );
};

const Table = ({ courses }) => {
  return (
    <div className="Rtable Rtable--6cols Rtable--collapse">
      <div className="Rtable-cell reg-num head">
        <h3>Reg Number</h3>
      </div>
      <div className="Rtable-cell date head">
        <h3>Day(s)</h3>
      </div>
      <div className="Rtable-cell start head">
        <h3>Start Time</h3>
      </div>
      <div className="Rtable-cell end head">
        <h3>End Time</h3>
      </div>
      <div className="Rtable-cell class-name head">
        <h3>Class</h3>
      </div>
      <div className="Rtable-cell professor head">
        <h3>Professor</h3>
      </div>
      {Object.entries(courses).map(([key, course]) => {
        return <Course key={key} course={course} />;
      })}
    </div>
  );
};

export default Table;
