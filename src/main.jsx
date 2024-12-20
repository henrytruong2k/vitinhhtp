import '@/index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import App from './App';
import Loader from './components/Loader/Loader';
import NotFound from './pages/NotFound/NotFound';
import { Cart, Home, Login, Payment, ProductDetail, Register, SearchPage } from './pages/render';

function lazyComponent(element) {
  return (
    <Suspense fallback={<Loader />}>
      {element}
    </Suspense>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: lazyComponent(<App />),
    children: [
      {
        path: "/",
        element: lazyComponent(<Home />),
      },
      {
        path: "/login",
        element: lazyComponent(<Login />)
      },
      {
        path: "/register",
        element: lazyComponent(<Register />)
      },
      {
        path: "/product-detail",
        element: lazyComponent(<ProductDetail />)
      },
      {
        path: "/search-page",
        element: lazyComponent(<SearchPage />)
      },
      {
        path: "/cart",
        element: lazyComponent(<Cart />)
      },
      {
        path: "/payment",
        element: lazyComponent(<Payment />)
      },
      {
        path: "*",
        element: <NotFound />
      }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
