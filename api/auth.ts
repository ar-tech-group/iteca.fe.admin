import fetch from '@/helpers/fetch';
import type { AuthDataType } from '@/@typs/AuthData';

/**
 * Выполняет запрос аутентификации пользователя
 *
 * @param {string} email
 * @param {string} password
 */
export const authenticate = (email: string, password: string) => fetch<AuthDataType>('/login', {
    method: 'POST',
    body:   {
        email,
        password,
    },
});
