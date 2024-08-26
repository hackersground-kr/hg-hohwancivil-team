import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MyPage from "../pages/MyPage";
import DefaultLayout from "./layout/DefaultLayout";
import DetailPage from "../pages/DetailPage";
import UploadPage from "../pages/UploadPage";
import SearchPage from "../pages/SearchPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/mypage/:userId",
        element: <MyPage />,
      },
      {
        path: "/upload/work",
        element: <UploadPage />,
      },
      {
        path: "/work/:workid",
        element: <DetailPage />,
      },
      {
        path: "/keyword",
        element: <SearchPage />,
      },
    ],
  },
]);
