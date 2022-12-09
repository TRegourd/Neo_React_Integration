import { Button, Divider, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CourseCard from "../components/dashboard/Card";
import coursesServices from "../services/courses";
import TuneIcon from "@mui/icons-material/Tune";

export default function Progress() {
  const [courses, setCourses] = useState([]);

  async function fetchCourses() {
    coursesServices.getUserCourses().then((result) => {
      setCourses(result);
    });
  }

  useEffect(() => {
    fetchCourses();
  });

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="h5">{courses?.length} courses</Typography>
        </Grid>
        <Grid item>
          <Button variant="contained" sx={{ padding: "10px" }}>
            <TuneIcon />
            Filter Courses
          </Button>
        </Grid>
      </Grid>
      <Divider sx={{ margin: "20px" }} />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {courses.map((course, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <CourseCard course={course} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
