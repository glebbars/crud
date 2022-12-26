import React from "react";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";

import Home from "./components/Home/Home";
import { ReactQueryDevtools } from "react-query/devtools";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
