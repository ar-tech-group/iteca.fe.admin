import loginMocks from '../__mocks__/login.json';

export default defineEventHandler(async (event) =>  {
    const body = await readBody(event);

    if (body.email === 'test@mail.ru') {
        return loginMocks;
    }

    return body;
});
