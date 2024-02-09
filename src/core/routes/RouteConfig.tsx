import { Suspense } from "react";
import { lazy } from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import BaseLayout from "../layouts/baseLayout/BaseLayout";

const HomePage = lazy(() => import("../../pages/Home/Home"));
const AddFile = lazy(() => import("../../pages/AddFile/AddFile"));
const InformationGuarding = lazy(() => import("../../pages/informationGuarding/informationGuarding"));
const Location = lazy(() => import("../../pages/Location/Location"));
const UpsertClient = lazy(() => import("../../pages/UpsertClient/UpsertClient"));
const Assignment = lazy(() => import("../../pages/Assignment/Assignment"));
const UserPanel = lazy(() => import("../../pages/UserPanel/UserPanel"));
const Chart = lazy(() => import("../../pages/Chart/Chart"));
const RouteConfig = () => {
  return (
    <Suspense fallback={<p>loading...</p>}>
      <Routes>
        <Route element={<WhithBaseLayout />}>
          <Route path="/dashboard" element={<HomePage />} />
          <Route path="/add-file" element={<AddFile />} />
          <Route path="/location" element={<Location />} />
          <Route path="/information" element={<InformationGuarding />} />
          <Route path="/refresh-user" element={<UpsertClient />} />
          <Route path="/list-view" element={<Assignment />} />
          <Route path="/work-space" element={<UserPanel />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="/" element={<Navigate to="/dashboard" />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default RouteConfig;

const WhithBaseLayout = () => {
  return (
    <BaseLayout>
      <Outlet />
    </BaseLayout>
  );
};
