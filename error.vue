<script setup lang="ts">
interface AppError {
  url?: string;
  statusCode: number;
  statusMessage: string;
  message: string;
  description: string;
  stack: string;
  data?: any;
}

function isAppError(arg: unknown): arg is AppError {
  return !!arg && typeof arg === "object";
}

const error = useError();
if (!isAppError(error.value))
  throw new Error("Unknown error type or error is undeinfed");
const {
  fatal,
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
      <h1>{{ statusCode }} - {{ statusMessage }}</h1>

      <h2>{{ message }}</h2>
      <p v-if="url"><strong>URL: </strong> {{ url }}</p>
      <p v-if="stack">
          <pre>{{ stack }}</pre>
      </p>
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
