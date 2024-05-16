<script setup lang="ts">
interface GithubUserMetaData {
  avatar_url: string;
  email: string;
  email_verified: boolean;
  full_name: string;
  iss: string;
  name: string;
  phone_verified: boolean;
  preferred_username: string;
  provider_id: string;
  sub: string;
  user_name: string;
}

const { auth } = useSupabaseClient();
const user = useSupabaseUser();

const name = computed(
  () => (user.value?.user_metadata as GithubUserMetaData).full_name
);
const profile = computed(
  () => (user.value?.user_metadata as GithubUserMetaData).avatar_url
);

const logout = async () => {
  const { error } = await auth.signOut();

  if (error) {
    console.error(error);
    return;
  }

  await navigateTo("/login");
};
</script>
<template>
  <div class="rounded p-3 flex items-center space-x-3 bg-white">
    <img
      :src="profile"
      alt=""
      class="rounded-full w-12 h-12 border-2 border-blue-400"
    />
    <div class="text-right">
      <span class="font-medium">{{ name }}</span>
      <button @click="logout" class="text-sm underline text-slate-500">
        Log out
      </button>
    </div>
  </div>
</template>
