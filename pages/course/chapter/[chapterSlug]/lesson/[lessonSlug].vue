<script setup lang="ts">
const course = useCourse()
const route = useRoute()

const chapter = computed(() => {
return course.chapters.find(
  (chapter) => chapter.slug === route.params.chapterSlug
);
});

const lesson = computed(() => {
  return chapter.value?.lessons.find(
    (lesson) => lesson.slug === route.params.lessonSlug
  );
});
</script>

<template>
  <article>
      <h2>Lesson</h2>
      <p>{{ lesson?.title }}</p>
  </article>
</template>
