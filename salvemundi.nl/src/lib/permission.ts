export default {
    namespaced: false,
    state: {
        permissions: [],
    },
    getters: {
        hasScopeForMember: (state: { permissions: string[] }): boolean => {
            return state.permissions.includes('user:read');
        },
        hasScopeForAccountancy: (state: { permissions: string[] }): boolean => {
            return state.permissions.includes('accountancy:read');
        },
    },
};
