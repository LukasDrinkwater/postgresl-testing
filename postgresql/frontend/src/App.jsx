import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

// import pages
import NewFormPage from "./components/pages/NewFormPage";
import DeleteUserPage from "./components/pages/DeleteUserPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/new" element={<NewFormPage />} />
        <Route path="/users" element={<DeleteUserPage />} />
      </Routes>
    </>
  );
}

export default App;
