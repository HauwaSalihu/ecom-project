import { Outlet } from "react-router";
import Navbar from "../components/ui/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;

//mainlayount is a layout component that will be used to wrap the entire application.
// It will contain the Navbar component and the Outlet component.
// The Outlet component is a special component provided by React Router that will render the child route components.
// This will allow us to render the child components of the MainLayout component based on the current route.
//  The Navbar component will contain the navigation links for the application. We will create the Navbar component in the next step.
// The Outlet component will render the child route components based on the current route.
//  We will define the routes in the App component in the next step.
