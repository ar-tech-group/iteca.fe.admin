export default defineEventHandler((event) => {
    return readBody(event);
});
