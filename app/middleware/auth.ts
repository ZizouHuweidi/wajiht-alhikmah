export default defineNuxtRouteMiddleware((to, from) => {
    const { user } = useAuth()

    // Protected routes (allow expanding this list or logic)
    // For now, let's assume everything outside of auth pages and the landing page is protected
    // OR more simply: if we had a dashboard.
    // However, the landing page (/) is public.
    // The auth pages (/auth/...) are public.

    // Example: Protect a dashboard route if we had one
    // if (to.path.startsWith('/dashboard') && !user.value) {
    //   return navigateTo('/auth/login')
    // }

    // Redirect logged-in users away from auth pages
    if (user.value && to.path.startsWith('/auth')) {
        return navigateTo('/')
    }
})
