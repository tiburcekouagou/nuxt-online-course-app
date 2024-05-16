export default defineNuxtRouteMiddleware(({ params, path }, from) => {
    const user = useSupabaseUser();
    console.log({user: user.value})
    
    if (user.value || params.chapterSlug === "1-chapter-1") {
        return;
    }
    return navigateTo(`/login?redirectTo=${path}`)
})