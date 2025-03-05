import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";

// Home page
import Home from "@/pages/Home";

// Services pages
import PageServicesIndex from "@/pages/services";
import PageServicesDetail from "@/pages/services/detail";

// Reserve pages
import PageReserveProcess from "@/pages/reserve/process";
import PageReserveConfirm from "@/pages/reserve/confirm";
import PageReserveFinish from "@/pages/reserve/finish";

// Auth pages
import PageAuthIndex from "@/pages/auth";

// Profile pages
import PageProfileIndex from "@/pages/profile";

// Manage pages
import PageManageIndex from "@/pages/manage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/auth',
        element: <PageAuthIndex />
      },
      {
        path: '/profile',
        element: <PageProfileIndex />
      },
      {
        path: '/manage',
        element: <PageManageIndex />
      },
      {
        path: '/reserve/process',
        element: <PageReserveProcess />
      },
      {
        path: '/reserve/confirm',
        element: <PageReserveConfirm />
      },
      {
        path: '/reserve/finish',
        element: <PageReserveFinish />
      },
      {
        path: '/services',
        element: <PageServicesIndex />
      },
      {
        path: '/services/detail',
        element: <PageServicesDetail />
      },
    ]
  },
]);
export default router;
