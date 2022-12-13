import create from "zustand";

const QUOTES_API = process.env.REACT_APP_QUOTES_API;

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
    "unicorn",
  ],
  quote: "Hello World",
  quotes: ["Hello World!"],
  setAvatar: (string) =>
    set((state) => {
      return { avatar: string };
    }),
  getQuotes: async () => {
    const response = await fetch(QUOTES_API);
    const data = await response.json();
    const quotes = data.map(({ quote }) => {
      return quote;
    });
    set({ quotes, quote: quotes[0] });
  },
  randomQuote: () =>
    set((state) => {
      const { quotes } = state;
      const max = quotes.length - 1;
      const index = Math.floor(Math.random() * max);
      return { quote: quotes[index]};
    }),
}));

export default useAvatarStore;
