import type { Chapter, Course, Lesson } from "~/@types";
import courseData from "./courseData";

export const useCourse = (): Course => {
    const chapters: Chapter[] = courseData.chapters.map((chapter) => {
        const lessons: Lesson[] = chapter.lessons.map((lesson) => ({
            ...lesson,
            path: `/course/chapter/${chapter.slug}/lesson/${lesson.slug}`,
        }));
        return {
            ...chapter,
            lessons,
        }
    })
    const firstLesson: Lesson = chapters[0].lessons[0]
    return { ...courseData, chapters, firstLesson };
}