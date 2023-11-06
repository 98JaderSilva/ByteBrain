import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import EnterpriseList from "./pages/enterprises/enterpriseList";

function App() {
    return (
        <SnackbarProvider>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/enterpriseList"
                        element={
                            <EnterpriseList
                                enterprises={[
                                    { cnpjOrCpf: "1", name: "Alpha" },
                                    { cnpjOrCpf: "2", name: "Beta" },
                                ]}
                            />
                        }
                    />
                </Routes>
            </BrowserRouter>
        </SnackbarProvider>
    );
}

export default App;
