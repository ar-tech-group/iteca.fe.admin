import {fetch} from '@/helpers/fetch';

export const auth = (email: string, password: string) => fetch('/login/login', {
    method: 'POST',
    body:   {
        email,
        password,
    }
});
