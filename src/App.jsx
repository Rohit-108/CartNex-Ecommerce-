import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Body from "./Components/Body";
import Error from "./Components/Error";
import SellerRegistration from "./Components/SellerRegistration";
import Login from "./Components/Login";
import RegistrationPage from "./Components/RegistrationPage.jsx";
import SellerDashboard from "./Components/SellerDashboard.jsx";
import Cart from "./Components/Cart.jsx";
import CheckOut from "./Components/CheckOut.jsx";
import { Provider } from "react-redux";
import store from "./utils/store.jsx";

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
    ],
  },
]);

export default App;
