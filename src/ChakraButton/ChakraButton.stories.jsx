import React from "react";
import { Button, ChakraProvider } from "@chakra-ui/react";

export default {
  title: "Chakra/Button",
  components: Button,
};

export const Success = () => (
  <ChakraProvider>
    <Button colorScheme="green">Success</Button>
  </ChakraProvider>
);

export const Danger = () => (
  <ChakraProvider>
    <Button colorScheme="red">Danger</Button>
  </ChakraProvider>
);
