import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

window.LoginWidget = class LoginWidget {
    init(opts) {
        const pageConfig = opts.pageConfig;
        if (!pageConfig) {
            throw new Error("pageConfig must be provided in opts");
        }

        ReactDOM.render(
            <App pageConfig={pageConfig} />,
            document.getElementById("root")
        );
    }
};
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
