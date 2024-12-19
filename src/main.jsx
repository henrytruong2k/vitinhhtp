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
<<<<<<< Updated upstream
=======
import { Cart, Home, ProductDetail, SearchPage, Payment } from './pages/render';

>>>>>>> Stashed changes
import NotFound from './pages/NotFound/NotFound';
import { Cart, Home, ProductDetail, SearchPage, Test } from './pages/render';


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
        path: "/home",
        element: lazyComponent(<Home />),
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
<<<<<<< Updated upstream
        path: "/test",
        element: lazyComponent(<Test />)
=======
        path: "/payment",
        element: lazyComponent(<Payment />)
>>>>>>> Stashed changes
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
