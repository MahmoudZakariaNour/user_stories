import { createContext } from "react";

export const ContextFile = createContext({

  isLoading: true
});

const { Provider, Consumer } = ContextFile;
export const ConProvider = Provider;
export const ConConsumer = Consumer;
