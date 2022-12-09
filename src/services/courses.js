import coursesData from "../data/coursesData.json";

const coursesServices = {
  getUserCourses() {
    return Promise.resolve(coursesData);
  },
};

export default coursesServices;
