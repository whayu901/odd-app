import React from "react";
import { Provider } from "react-redux";
import { Provider as PaperProvider } from "react-native-paper";

import store from "./src/redux/store";
import Route from "./src/navigations";

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <Route />
      </PaperProvider>
    </Provider>
  );
};

export default App;
