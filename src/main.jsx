import '@/index.css';
import Home from '@/pages/Home/Home';
import ProductDetail from '@/pages/ProductDetail/ProductDetail.jsx';
import SearchPage from '@/pages/Search/SearchPage.jsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/product-detail",
        element: <ProductDetail />
      },
      {
        path: "/search-page",
        element: <SearchPage/>
      }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
