import React from "react"
import { Outlet, useRoutes } from "react-router-dom"
import AppLayout from "../layouts/AppLayout"
import PortfolioPage from "../pages/PortfolioPage"

const Router = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: (
        <AppLayout>
          <Outlet />
        </AppLayout>
      ),
      children: [{ element: <PortfolioPage />, index: true }],
    },
  ])

  return routes
}

export default Router
