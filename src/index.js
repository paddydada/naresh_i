import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import bootstrap from "bootstrap";
import { Login } from "./login/login.jsx";
import { Register } from "./register/register.jsx";
import { DataBinding } from "./databinding/data-binding.jsx";
import { JsonDataBinding } from "./databinding/json-data.jsx";
import { ProductsDataBinding } from "./databinding/productdisplay.jsx";
import { FlipcartDataBinding } from "./databinding/productsflipcart.jsx";
import { FlipProdArrayDataBinding } from "./databinding/Flipkart-Products-Array.jsx";
import { CardProductDataBinding } from "./databinding/card-product-display.jsx";
import { OneDataBinding } from "./databinding/oneway-data.jsx";
import { AjaxDemo } from "./ajax-demo/demo-ajax.jsx";
import { AjaxDemoPromise } from "./ajax-demo/demo-ajax-promise.jsx";
import { AjaxJqueryDemo } from "./ajax-demo/demo-jquery-ajax.jsx";
import { AjaxAxiosDemo } from "./ajax-demo/demo-ajax-ax.jsx";
import { NasaAPI } from "./nasa-api/nasa-api.jsx";
import { UVIndex } from "./nasa-api/sample.jsx";
import { NewsList } from "./nasa-api/twiter.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Login />
    <Register />
    <DataBinding />
    <JsonDataBinding />
    <ProductsDataBinding />
    <FlipcartDataBinding />
    <FlipProdArrayDataBinding /> */}
    {/* <CardProductDataBinding />
    <OneDataBinding />
    <AjaxDemo />
    <AjaxDemoPromise />
    <AjaxJqueryDemo /> */}
    {/* <AjaxAxiosDemo /> */}
    {/* <NasaAPI /> */}
    {/* <UVIndex /> */}
    <NewsList />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
