import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Body from "./Components/Body";
import Error from "./Components/Error";
import SellerRegistration from "./Components/SellerRegistration";
import Login from "./Components/Login";
import RegistrationPage from "./Components/RegistrationPage.jsx"
import SellerDashboard from "./Components/SellerDashboard.jsx";
const App = () => {
  return (
    <>
      <RouterProvider router = {appRouter} />
    </>
  );
};



const AppLayout = () => {
  return (
    <>
      <div className="app">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}



const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout />,
    errorElement:<Error />,
    children: [
      {
        path : "/",
        element: <Body/>,
      },
      {
        path : "/seller-registration",
        element: <SellerRegistration/>,
      },
      {
        path : "/login",
        element: <Login/>,
      },
      {
        path : "/registrationpage",
        element: <RegistrationPage/>,
      },
      {
        path : "/sellerdashboard",
        element: <SellerDashboard/>,
      },
      

     

    ],
  },
]);


export default App
