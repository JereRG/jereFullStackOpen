import React from "react";

const Course = ({ course }) => (
  <div>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </div>
);

const Header = ({ course }) => <h1>{course}</h1>;

const Content = ({ parts }) => (
  <div>
    {parts.map(({ name, exercises, id }) => (
      <Part key={id} name={name} exercises={exercises} />
    ))}
  </div>
);

const Part = ({ name, exercises }) => (
  <p>{name} {exercises}</p>
);

const Total = ({ parts }) => {
  const total = parts.reduce(
    (accumulator, value) => accumulator + value.exercises,
    0
  );
  return <p><strong>Total number of exercises: </strong>{total}</p>;
};

export default Course;