import create from "zustand";

const MAX_HP = 10;
const MIN_HP = 0;
const LS_KEY = "health";
const updateLocalStorage = (health) => {
  localStorage.setItem(LS_KEY, health);
};

const useHealthStore = create((set) => ({
  health: 10,
  getHealthFromLS: () =>
    set((state) => {
      if (localStorage[LS_KEY]) {
        const data = parseInt(localStorage.getItem(LS_KEY));
        return { health: data };
      } else {
        return { health: state.health };
      }
    }),
  setHealth: (num) =>
    set((state) => {
      if (num > MAX_HP) {
        num = MAX_HP;
      }
      if (num < MIN_HP) {
        num = MIN_HP;
      }
      return { health: num };
    }),
  increaseHealth: (num) =>
    set((state) => {
      let newHealth = state.health + num;
      newHealth = newHealth > MAX_HP ? MAX_HP : newHealth;
      updateLocalStorage(newHealth);
      return { health: newHealth };
    }),
  decreaseHealth: (num) =>
    set((state) => {
      let newHealth = state.health - num;
      newHealth = newHealth < MIN_HP ? MIN_HP : newHealth;
      updateLocalStorage(newHealth);
      return { health: newHealth };
    }),
}));

export default useHealthStore;
