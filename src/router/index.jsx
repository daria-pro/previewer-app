import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import RepositoryPage from "../pages/RepositoryPage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/repository", element: <RepositoryPage />, exact: true },
]);

export default router;
