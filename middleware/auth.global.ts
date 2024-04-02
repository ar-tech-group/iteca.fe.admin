export default defineNuxtRouteMiddleware((to, from) => {
    const token = useCookie('token');
    const localePath = useLocalePath();

    if (to.path === '/login' || to.path === '/en/login') return;

    if (token.value && to.path === '/login') {
        return navigateTo(localePath('/'));
    }

    if (token.value && to.path === '/en/login') {
        return navigateTo(localePath('/'));
    }

    if (!token.value && to.path !== '/login') {
        return navigateTo(localePath('/login'));
    }

    if (!token.value && to.path !== '/en/login') {
        return navigateTo(localePath('/login'));
    }
});
