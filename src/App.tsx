import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import SpinnerBackdrop from "./components/SpinnerBackdrop";

function App() {
  const Layout = lazy(() => import("./layout"));
  const Error = lazy(() => import("./pages/Error"));
  const Movies = lazy(() => import("./pages/Movies"));
  const MovieDetailed = lazy(() => import("./pages/Movie/Detailed"));
  const MovieCreate = lazy(() => import("./pages/Movie/Create"));
  const Directors = lazy(() => import("./pages/Directors"));
  const DirectorDetailed = lazy(() => import("./pages/Director/Detailed"));
  const DirectorCreate = lazy(() => import("./pages/Director/Create"));

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
          <Route path="directors" element={<Layout />}>
            <Route index element={<Directors />} />
            <Route path=":id" element={<DirectorDetailed />} />
            <Route path="create" element={<DirectorCreate />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
