import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Header, Footer, Body, Error, SellerRegistration, Login, RegistrationPage, SellerDashboard, Cart, CheckOut, ProductDetails, WishlistPage } from "./Components/index.jsx";
import { Provider } from "react-redux";
import store from "./store/store.jsx";

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/seller-registration",
        element: <SellerRegistration />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <RegistrationPage />,
      },
      {
        path: "/sellerdashboard",
        element: <SellerDashboard />,
      },
      {
        path: "/cart",
        element: <Cart />,
        children: [
          {
            path: "checkout", // Relative path
            element: <CheckOut />,
          },
        ],
      },
      {
        path: "/product/:id", // Add route for product details page
        element: <ProductDetails />,
      },
      {
        path: "/wishlistpage", // Add route for product details page
        element: <WishlistPage />,
      },
    ],
  },
]);

export default App;
