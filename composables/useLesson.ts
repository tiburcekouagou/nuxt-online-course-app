import type { Lesson } from "~/@types";
import { StorageSerializers } from "@vueuse/core";

export default async (chapterSlug: string, lessonSlug: string) => {
    return useFetchWithCache<Lesson>(`/api/course/chapter/${chapterSlug}/lesson/${lessonSlug}`);
}