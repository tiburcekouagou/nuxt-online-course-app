<script setup lang="ts">
const user = useSupabaseUser();

// get redirect path from cookies
const cookieName = useRuntimeConfig().public.supabase.cookieName
const redirectPath = useCookie(`${cookieName}-redirect-path`).value

watch(
  user,
  () => {
    if (user.value) {
      // clear cookie
      useCookie(`${cookieName}-redirect-path`).value = null
      // redirect to path
      return navigateTo(redirectPath || '/')
    }
  },
  { immediate: true }
);
</script>

<template>
  <div>
    <p>Redirecting ...</p>
  </div>
</template>
