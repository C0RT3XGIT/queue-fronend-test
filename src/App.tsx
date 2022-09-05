import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import SpinnerBackdrop from "./components/SpinnerBackdrop";

function App() {
  const Layout = lazy(() => import("./layout"));
  const Error = lazy(() => import("./pages/Error"));
  const Movies = lazy(() => import("./pages/Movies"));
  const MovieDetailed = lazy(() => import("./pages/MovieDetailed"));

  return (
    <BrowserRouter>
      <Suspense fallback={<SpinnerBackdrop />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="*" element={<Navigate to="/movies" />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:id" element={<MovieDetailed />} />
            <Route path="error" element={<Error />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
