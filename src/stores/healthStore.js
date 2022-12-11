import create from "zustand";//a simplified version of useState!!!  
//importing zustand for state management, allow to control state from anywhere within the app

const MAX_HP = 10;
const MIN_HP = 0;
const useHealthStore = create((set) => ({
  //creating health store
  health: 10, //state
  increaseHealth: (num) =>
    set((state) => {
      let newHealth = state.health + num;
      newHealth = newHealth > MAX_HP ? MAX_HP : newHealth;//if(?) newHealth is greater than(>) MAX_HP(10)(?) return MAX_HP(10)(true) else(:) return newHealth. Condition comes before the if(newHealth > MAX_HP).
      return { health: newHealth };
    }), //function to increase the current health state
  decreaseHealth: (num) =>
    set((state) => {
      let newHealth = state.health - num;
      newHealth = newHealth < MIN_HP ? MIN_HP : newHealth;//same as above, just changing condition to MIN_HP, less than(<)
      return { health: newHealth };
    }), //function for decreasing the current health state
}));

export default useHealthStore;
