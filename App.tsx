import React from "react";
import { Provider as PaperProvider } from "react-native-paper";

import Route from "./src/navigations";

const App = () => {
  return (
    <PaperProvider>
      <Route />
    </PaperProvider>
  );
};

export default App;
