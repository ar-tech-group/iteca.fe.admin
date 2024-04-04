import { TOKEN_KEY } from '@/config/constants';

export default defineNuxtRouteMiddleware((to) => {
    const token = useCookie(TOKEN_KEY);
    const localePath = useLocalePath();

    if (token.value && (to.path === '/login' || to.path === '/en/login')) {
        return navigateTo(localePath('/'));
    }

    if (!token.value && to.path !== '/login' && to.path !== '/en/login') {
        return navigateTo(localePath('/login'));
    }
});
