import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import SpinnerBackdrop from "./components/SpinnerBackdrop";

function App() {
  const Layout = lazy(() => import("./layout"));
  const Error = lazy(() => import("./pages/Error"));
  const Movies = lazy(() => import("./pages/Movies"));
  const MovieDetailed = lazy(() => import("./pages/Movie/Detailed"));
  const MovieCreate = lazy(() => import("./pages/Movie/Create"));

  return (
    <BrowserRouter>
      <Suspense fallback={<SpinnerBackdrop />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/movies" />} />
            <Route path="*" element={<Navigate to="/movies" />} />
            <Route path="error" element={<Error />} />
          </Route>
          <Route path="movies" element={<Layout />}>
            <Route index element={<Movies />} />
            <Route path=":id" element={<MovieDetailed />} />
            <Route path="create" element={<MovieCreate />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
