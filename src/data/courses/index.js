import { m3Software } from './m3-software';

export const courses = [
  m3Software
];

export const getCourseById = (id) => {
  return courses.find(course => course.id === id);
};
