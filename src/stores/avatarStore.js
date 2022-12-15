import create from "zustand";

const SELECTIONS = [
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
  "unicorn",
];
const LS_KEY = "avatar";
const updateLocalStorage = (data) => {
  localStorage.setItem(LS_KEY, data);
};

const useAvatarStore = create((set) => ({
  avatar: "bird",
  selection: SELECTIONS,
  getAvatarFromLS: () =>
    set((state) => {
      if (localStorage[LS_KEY]) {
        const data = localStorage.getItem(LS_KEY);
        return { avatar: data };
      } else {
        return { avatar: state.avatar };
      }
    }),
  setAvatar: (string) =>
    set((state) => {
      updateLocalStorage(string);
      return { avatar: string };
    }),
}));

export default useAvatarStore;
