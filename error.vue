<script setup lang="ts">
interface AppError {
url?: string;
statusCode?: number;
statusMessage?: string;
message?: string;
description?: string;
stack?: string;
data?: any;
}

const error = useError() as Ref<AppError>;
const handleError = () => {
    clearError({redirect: "/course"});
}
</script>
<template>
    <NuxtLayout>
        <div class="prose text-center">
            <h1>{{ error.statusCode }} - {{ error.statusMessage }}</h1>
            <h2>{{ error.message }}</h2>
            <p><strong>URL: </strong> {{ error.url }}</p>
            <pre v-if="error.stack">{{ error.stack }}</pre>
            <div class="prose">
                <p>
                    Go to
                    <a
                        class="hover:cursor-pointer"
                     @click="handleError">course home</a>
                </p>
            </div>
        </div>
    </NuxtLayout>
</template>