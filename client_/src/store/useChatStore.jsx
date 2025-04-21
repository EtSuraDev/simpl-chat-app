import {create} from "zustand"


const useChatStore = create((set) => ({
  messages: [],
  pendingMessages: [],
  input: "",

  addMessage: (msg) => set((state) => ({
    messages: [...state.messages, msg],
  })),

  addPendingMessage: (msg) => set((state) => ({
    pendingMessages: [...state.pendingMessages, msg],
  })),

  setInput: (val) => set((state) => ({
    input: typeof val === 'function' ? val(state.input) : val,
  })),

  clearPendingMessages: () => set({ pendingMessages: [] }),

}));

export default useChatStore;