export default {
    namespace: false,
    actions: {
        isLoggedIn(): boolean {
            const list: any = {};
            console.log(document.cookie)
            document.cookie.split(';').forEach((cookie) => {
                const parts = cookie.split('=');
                const key = parts.shift();
                if (key !== undefined) {
                    list[key.trim()] = decodeURI(parts.join('='));
                }
            });

            console.log(list)
            return !!list.auth;
        },
    },
};
