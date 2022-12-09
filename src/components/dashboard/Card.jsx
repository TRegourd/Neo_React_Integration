import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import React from "react";

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
        }}
        alt="Remy Sharp"
        src={`/${course.logo}`}
      />
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="div">
            {course.name}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {course.description}
          </Typography>

          <Typography
            variant="body2"
            sx={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
            <AccessTimeIcon />
            {course.duration}
          </Typography>
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
          {/* <Button size="small">Learn More</Button> */}

          <Avatar src={`/${course.creator_avatar}`} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
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
        </CardActions>
      </Card>
    </>
  );
}
