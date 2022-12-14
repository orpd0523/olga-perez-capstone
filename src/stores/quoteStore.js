import create from "zustand";

const QUOTES_API = process.env.REACT_APP_QUOTES_API;
const DEFAULT_QUOTE =
  "If you see this we have not yet retrieved your quote... sorry for the inconvenience! 🫠";
const LS_KEY = "quotes";
const updateLocalStorage = (data) => {
  localStorage.setItem(LS_KEY, data);
};

const useQuoteStore = create((set) => ({
  quote: DEFAULT_QUOTE,
  quotes: [DEFAULT_QUOTE],
  getQuotes: async () => {
    if (localStorage[LS_KEY]) {
      const data = JSON.parse(localStorage.getItem(LS_KEY));
      return { quotes: data, quote: data[0] };
    } else {
      const response = await fetch(QUOTES_API);
      const data = await response.json();
      const quotes = data.map(({ quote }) => {
        return quote;
      });
      set({ quotes, quote: quotes[0] });
    }
  },
  randomQuote: () =>
    set((state) => {
      const { quotes } = state;
      const max = quotes.length - 1;
      const index = Math.floor(Math.random() * max);
      return { quote: quotes[index] };
    }),
}));

export default useQuoteStore;
