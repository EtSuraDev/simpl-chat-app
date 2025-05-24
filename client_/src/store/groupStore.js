import { create } from 'zustand';

const useGroupStore = create((set) => ({
    groups: {},


    selectedGroupId: null,
    setSelectedGroupId: (groupId) => set({ selectedGroupId: groupId }),

    // 1. Create or update groups
    createGroups: (groupDataArray) =>
        set((state) => {
            const updated = {...state.groups };
            groupDataArray.forEach(({ id, name, members, admin, messages, info }) => {
                if (!updated[id]) {
                    let lastMessage = null;
                    if (messages && messages.length && messages[messages.length - 1]) {
                        lastMessage = messages[messages.length - 1].message;
                        // console.log(lastMessage)
                    }
                    updated[id] = {
                        groupName: name,
                        id: id,
                        messages: messages || [],
                        pendingMessages: [],
                        lastMessage,
                        info: info || null
                    };
                }
            });
            return { groups: updated };
        }),

    // 2. Add pending 
    addPendingMessage: (groupId, message) =>
        set((state) => {
            const group = state.groups[groupId];
            if (!group) return {};
            return {
                groups: {
                    ...state.groups,
                    [groupId]: {
                        ...group,
                        pendingMessages: [...group.pendingMessages, message],
                    },
                },
            };
        }),

    // 3. Confirm message (remove from pending, move to confirmed)
    confirmMessage: (groupId, confirmedMessage) =>
        set((state) => {
            const group = state.groups[groupId];
            if (!group) return {};
            return {
                groups: {
                    ...state.groups,
                    [groupId]: {
                        ...group,
                        pendingMessages: group.pendingMessages.filter(
                            (msg) => msg.id !== confirmedMessage.id
                        ),
                        messages: [...group.messages, confirmedMessage],
                        lastMessage: confirmedMessage,
                    },
                },
            };
        }),
}));

export default useGroupStore;