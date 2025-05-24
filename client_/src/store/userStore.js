import { create } from 'zustand';

const useUserStore = create((set) => ({
    user: null,

    setUser: (userData) => set({ user: userData }),

    updateUserName: (newName) =>
        set((state) => ({
            user: {...state.user, name: newName },
        })),

    logout: () => set({ user: null }),
}));

export default useUserStore;