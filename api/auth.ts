import { fetch } from '@/helpers/fetch';
import { encode } from '@/helpers/base64';
import { API_KEY } from '@/config/constants';
import type { AuthData } from '@/types/Auth';

/**
 * Выполняет запрос аутентификации пользователя.
 *
 * @param {string} login - Логин пользователя.
 * @param {string} password - Пароль пользователя.
 */
export const authenticate = (login: string, password: string) => fetch<AuthData>('/login/', {
    method: 'POST',
    body:   {
        apiKey: API_KEY,
        login:  encode(login),
        pass:   encode(password),
    }
});
