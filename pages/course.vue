<script setup lang="ts">
const course = await useCourse();
const route = useRoute();

const showSplash = computed<boolean>(() => {
  return route.path === "/course";
})
const isActiveLink = (lessonPath: string): boolean => {
  return lessonPath === route.fullPath
}
const resetError = async (error: Ref<Error | null>) => {
  await navigateTo("/course/chapter/1-chapter-1/lesson/1-introduction-to-typescript-with-vue-js-3");
  error.value = null;
}
</script>

<template>
  <div>
    <div class="prose mb-4 flex justify-between items-center w-full">
      <h1 class="text-3xl">
        <NuxtLink to="/course" class="no-underline">
          <span class="font-medium">
            <span class="font-bold">{{ course.title }}</span>
          </span>
        </NuxtLink>
      </h1>
      <UserCard />
    </div>

    <div class="flex flex-row justify-center flex-grow">
      <div class="prose mr-4 p-8 bg-white rounded-md min-w-[20ch] max-w-[30ch] flex flex-col">
        <h3>Chapters</h3>

        <!-- Chapters -->
        <div v-for="chapter in course.chapters" :key="chapter.slug">
          <h4>{{ chapter.title }}</h4>
          <NuxtLink v-for="(lesson, index) in chapter.lessons" :key="lesson.slug" :to="lesson.path"
            class="flex flex-row space-x-1 no-underline prose-sm font-normal py-1 px-4 -mx-4" :class="{
              'text-blue-500': isActiveLink(lesson.path),
              'text-gray-600': !isActiveLink(lesson.path)
            }">
            <span class="text-gray-500">{{ index + 1 }}.</span>
            <span>{{ lesson.title }}</span>
          </NuxtLink>
        </div>
        <!-- / Chapters -->
      </div>

      <div class="prose p-12 bg-white rounded-md w-[65ch]">
        <div v-if="showSplash">
          <h2>Welcome to the course</h2>
          <div class="rounded-md overflow-hidden">
            <img src="/splash.webp" alt="vueschool image" class="m-0">
          </div>
        </div>
        <div else>
          <NuxtErrorBoundary>
            <NuxtPage />
            <template #error="{ error }">
              <p>Sorry Tiburce ! The milk is not good !</p>
              <p>{{ error }}</p>
              <p class="hover:cursor-pointer bg-gray-500 text-white font-bold py-1 px-3 rounded"
                @click="resetError(error)">
                <button>Reset</button>
              </p>
            </template>
          </NuxtErrorBoundary>
        </div>
      </div>
    </div>
  </div>
</template>
