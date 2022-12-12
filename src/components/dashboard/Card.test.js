import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CourseCard from "./Card";

test("renders card without button when course is not started", () => {
  const course = {
    id: 1,
    user_progression: 0,
  };

  render(<CourseCard course={course} />);
  expect(screen.queryByRole("button")).not.toBeInTheDocument();
});

test("renders card with button when course is started", () => {
  const course = {
    id: 1,
    user_progression: 20,
  };
  render(<CourseCard course={course} />);
  expect(screen.getByRole("button")).toBeInTheDocument();
});
