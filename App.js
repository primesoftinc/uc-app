import React, { Component } from "react";
import AppNavigator from "./src/containers/AppNavigator";
import client from "./src/util/apollo";
import { ApolloProvider } from "@apollo/react-hooks";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <AppNavigator />
    </ApolloProvider>
  );
}
