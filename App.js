import React from "react";
import MainWindow from "./Components/MainWindow";
import { store } from "./redux/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <MainWindow />
    </Provider>
  );
}
