import type { Course } from "~/@types";
import courseData from "./courseData";

export const useCourse = (): Course => {
    return courseData;
}