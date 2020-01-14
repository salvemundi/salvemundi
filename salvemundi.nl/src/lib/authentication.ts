export default function isLoggedIn() {
    const list: any = {};
    document.cookie.split(';').forEach((cookie) => {
    const parts = cookie.split('=');
    const key = parts.shift();

    if (key !== undefined) {
        list[key.trim()] = decodeURI(parts.join('='));
    }
    });

    return !!list.auth;
}
