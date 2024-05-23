import type { Chapter, Lesson } from "~/@types";
import courseData from "~/server/courseData";

export default defineEventHandler((event): Lesson => {
    const { chapterSlug, lessonSlug } = event.context.params || {};

    const chapter: Maybe<Chapter> = courseData.chapters.find(
        (chapter) => chapter.slug === chapterSlug
    );

    if (!chapter) {
        throw createError({
            statusCode: 404,
            statusMessage: "Not Found",
            message: "Chapter not found",
        });
    }

    const lesson: Maybe<Lesson> = chapter.lessons.find((lesson) => lesson.slug === lessonSlug)

    if (!lesson) {
        throw createError({
            statusCode: 404,
            statusMessage: "Not Found",
            message: "Lesson not found",
        });
    }
    return {
        ...lesson,
        path: `/course/chapter/${chapterSlug}/lesson/${lessonSlug}`
    };
})
