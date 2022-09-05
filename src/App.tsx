import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
  const Movies = lazy(() => import("./pages/Movies"));
  const Layout = lazy(() => import("./layout"));

  return (
    <BrowserRouter>
      <Suspense fallback={<h1>Loading..</h1>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/movies" element={<Movies />} />
            <Route path="*" element={<Navigate to="/movies" />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
