import create from "zustand";

const useAvatarStore = create((set) => ({
  avatar: "bird",
  selection: [
    "bird",
    "cat",
    "chick",
    "dino",
    "dog",
    "fox",
    "kitty",
    "octopus",
    "turtle",
    "unicornPencil",
    "unicorn"
  ],
  setAvatar: (string) => set((state)=>{
    return { avatar: string }
  }),
  getQuotes: async () => {
    const response = await fetch(pond)
    set({ fishies: await response.json() })
  },
}));

export default useAvatarStore;