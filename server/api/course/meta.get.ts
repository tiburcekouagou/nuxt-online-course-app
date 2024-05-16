import courseData from "~/server/courseData";
import { Chapter, Course } from "~/@types";
import { ChapterMeta, CourseMeta, LessonMeta } from "~/@types/course-meta";

courseData as Course


export default defineEventHandler((event): CourseMeta => {
    const chapterMeta: ChapterMeta[] = courseData.chapters.reduce(
        (prev: ChapterMeta[], next: Chapter) => {
            const lessons: LessonMeta[] = next.lessons.map((lesson) => ({
                title: lesson.title,
                slug: lesson.slug,
                number: lesson.number,
                path: `/course/chapter/${next.slug}/lesson/${lesson.slug}`,
            }))

            const chapter: ChapterMeta = {
                title: next.title,
                slug: next.slug,
                number: next.number,
                lessons,
            }

            return [...prev, chapter]
        },
        []
    );
    return {
        title: courseData.title,
        chapters: chapterMeta
    }
})