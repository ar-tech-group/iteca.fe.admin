export default defineNuxtRouteMiddleware((to, from) => {
    const token = useCookie('authToken');
    const localePath = useLocalePath();

    if (token.value && (to.path === '/login' || to.path === '/en/login')) {
        return navigateTo(localePath('/'));
    }

    if (!token.value && to.path !== '/login' && to.path !== '/en/login') {
        return navigateTo(localePath('/login'));
    }
});
