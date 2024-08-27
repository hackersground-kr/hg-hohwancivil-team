import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: 2 },
  },
});

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    (async function () {
      const { text } = await (await fetch(`/api/message`)).json();
      setData(text);
    })();
  });
  console.log(data);

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <RouterProvider router={router} />
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
