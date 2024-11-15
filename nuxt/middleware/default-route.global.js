export default defineNuxtRouteMiddleware((to) => {
    // Check if we're on the root path
    if (to.path === '/') {
      // Redirect to your desired default route
      return navigateTo('/pivot-table-demo');
    }
  })