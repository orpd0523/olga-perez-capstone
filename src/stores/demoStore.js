import create from "zustand";

const TIMES = [
  "7:00 AM",
  "8:00 AM",
  "12:00 PM",
  "4:00 PM",
  "8:00 PM",
  "11:00 PM",
];

const MAX_INDEX = TIMES.length - 1;
const MIN_INDEX = 0;

const useDemoStore = create((set) => ({
  currentTime: TIMES[0],
  times: TIMES,
  forwardTime: () =>
    set((state) => {
      const { currentTime } = state;
      const currentIndex = TIMES.indexOf(currentTime);
      let newIndex = currentIndex + 1;
      newIndex = newIndex > MAX_INDEX ? MAX_INDEX : newIndex;
      return { currentTime: TIMES[newIndex] };
    }),
  backwardTime: () =>
    set((state) => {
      const { currentTime } = state;
      const currentIndex = TIMES.indexOf(currentTime);
      let newIndex = currentIndex - 1;
      newIndex = newIndex < MIN_INDEX ? MIN_INDEX : newIndex;
      return { currentTime: TIMES[newIndex] };
    }),
  resetTime: () => set((state) => ({ currentTime: TIMES[0] })),
}));

export default useDemoStore;
