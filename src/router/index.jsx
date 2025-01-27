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
      }
    ]    
  },
  {
    path: '/auth',
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <PageAuthIndex />
      }
    ]    
  },
  {
    path: '/profile',
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <PageProfileIndex />
      }
    ]    
  },
  {
    path: '/manage',
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <PageManageIndex />
      }
    ]    
  },
  {
    path: '/reserve/process',
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <PageReserveProcess />
      }
    ]    
  },
  {
    path: '/reserve/confirm',
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <PageReserveConfirm />
      }
    ]    
  },
  {
    path: '/reserve/finish',
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <PageReserveFinish />
      }
    ]    
  },
  {
    path: '/services',
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <PageServicesIndex />
      }
    ]    
  },
  {
    path: '/services/detail',
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <PageServicesDetail />
      }
    ]    
  },
]);
export default router;
