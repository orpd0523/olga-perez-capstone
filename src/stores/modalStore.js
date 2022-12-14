import create from "zustand";

const useModalStore = create((set) => ({
  visible: false,
  toggle: (value) =>
    set((state) => {
      const { visible } = state;
      const newValue = typeof value === "boolean" ? value : !visible;
      return { visible: newValue };
    }),
}));

export default useModalStore;
