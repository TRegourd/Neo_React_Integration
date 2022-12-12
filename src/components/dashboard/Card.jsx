import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  LinearProgress,
  Typography,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import React from "react";
import { Link } from "react-router-dom";

export default function CourseCard({ course }) {
  return (
    <>
      <Avatar
        sx={{
          position: "relative",
          top: "10px",
          left: "5%",
          borderColor: "gray",
          border: "solid 1px",
          padding: "5px",
          backgroundColor: "white",
        }}
        alt="course logo"
        src={`/${course.logo}`}
      />
      <Card variant="outlined" sx={{ borderRadius: "20px", boxShadow: 2 }}>
        <CardContent sx={{ minHeight: "200px" }}>
          <Typography variant="h5" component="div">
            {course.name}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {course.description}
          </Typography>

          <Box sx={{ paddingTop: "20px" }}>
            {course?.user_progression === 0 ? (
              <Typography
                variant="body2"
                sx={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <AccessTimeIcon />
                {course.duration}
              </Typography>
            ) : (
              <Box
                sx={{ width: "100%", display: "flex", alignItems: "center" }}
              >
                <Box sx={{ width: "100%", mr: 1 }}>
                  <LinearProgress
                    variant="determinate"
                    value={course?.user_progression}
                  />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  >{`${course?.user_progression}%`}</Typography>
                </Box>
              </Box>
            )}
          </Box>
        </CardContent>
        <Divider />

        <CardActions
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "10px",
          }}
        >
          {course?.user_progression === 0 ? (
            <>
              <Avatar src={`/${course.creator_avatar}`} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                  minHeight: "60px",

                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.primary"
                  gutterBottom
                >
                  {course.creator_name}
                </Typography>
                <Typography
                  sx={{ fontSize: 10 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {course.creator_position}
                </Typography>
              </Box>
            </>
          ) : (
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                minHeight: "60px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Link to={`/courses/${course.id}`}>
                <Button id="ContinueButton" variant="card">
                  Continue Course
                </Button>
              </Link>
            </Box>
          )}
        </CardActions>
      </Card>
    </>
  );
}
