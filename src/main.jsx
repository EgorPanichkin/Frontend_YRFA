import ReactDOM from "react-dom/client";
import App from "./app";
import { Provider } from "react-redux";
import "./app/i18n/i18n";
import { store } from "./app/store";
import "./app/scss/index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
