import React from "react"
import { Outlet, useRoutes } from "react-router-dom"
import AppLayout from "../layouts/AppLayout"
import PortfolioPage from "../pages/PortfolioPage"
import OtherPage from "../pages/OtherPage"
import LandingPage from "../pages/LandingPage"

const Router = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: (
        <AppLayout>
          <Outlet />
        </AppLayout>
      ),
      children: [
        { element: <PortfolioPage />, index: true },
        { path: "/other", element: <OtherPage /> },
        { path: "/landing", element: <LandingPage /> },
      ],
    },
  ])

  return routes
}

export default Router
