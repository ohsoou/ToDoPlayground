import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider, createRoutesFromElements, Route} from "react-router-dom";
import ListBoard from "./pages/ListBoard";
import Header from "./components/Header";
import {CssBaseline, GlobalStyles} from "@mui/material";

const router = createBrowserRouter(
    createRoutesFromElements(
    <Route
        element={<ListBoard />}
        path="/"
    />
));

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <CssBaseline/>
        <GlobalStyles
            styles={(theme) => ({
                body: { backgroundColor: theme.palette.background.paper },
            })}
        />
        <Header/>
        <RouterProvider router={router} />
    </React.StrictMode>
);
