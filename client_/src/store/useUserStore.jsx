import {create} from "zustand"


const useUserDataStore = create((set) => ({
  userName: "",
  profile: "",

  setUserName: (name) => set((state) => ({
    userName: name,
  })),
  setUserProfile: (image) => set((state) => ({
    profile: image,
  })),

  
}));

export default useUserDataStore;