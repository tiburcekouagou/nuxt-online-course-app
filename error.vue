<script setup lang="ts">
interface AppError {
  url?: string;
  statusCode: number;
  statusMessage: string;
  message: string;
  description: string;
  stack?: string;
  data?: any;
  fatal: boolean;
  cause?: string;
  name: string;
}

function isAppError(arg: unknown): arg is AppError {
  return !!arg && typeof arg === "object";
}

const error = useError();
if (!isAppError(error.value))
  throw new Error("Unknown error type or error is undeinfed");
const {
  fatal,
  cause,
  name,
  url,
  statusCode,
  statusMessage,
  message,
  description,
  data,
  stack,
} = error.value;

const handleError = () => {
  clearError({ redirect: "/course" });
};
</script>
<template>
  <NuxtLayout>
    <div class="prose text-center">
        <h1 v-if="fatal">Fatal error</h1>

      <h2 v-if="name">Name: {{ name }}</h2>
      <h2 v-if="statusCode">{{ statusCode }}</h2>
      <h2 v-if="statusMessage">{{ statusMessage }}</h2>
      <p v-if="cause">{{ cause }}</p>
      <p v-if="message">{{ message }}</p>
      <p v-if="url"><strong>URL: </strong> {{ url }}</p>
      <p v-if="stack"><pre>{{ stack }}</pre></p>
      <p v-if="description">{{ description }}</p>
      <p v-if="data">data: {{ data }}</p>
      <div class="prose text-center max-w-full">
        <p>
          Go to
          <a class="hover:cursor-pointer" @click="handleError">course home</a>
        </p>
      </div>
    </div>
  </NuxtLayout>
</template>
