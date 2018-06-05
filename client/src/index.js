import React from "react";
import ReactDOM from "react-dom";
import "bulma/css/bulma.css";
import "./styles/index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import "./assets/fontawesome-all.min";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
