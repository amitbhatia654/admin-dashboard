import {} from "react";

import "./App.css";
import Index from "./pages/Index";
import { Route, Routes } from "react-router-dom";
import Main_dashBoard from "./pages/dashboard/Main_dashBoard";
import LoginSignupPage from "./pages/LoginSignupPage";
import { ChakraProvider } from "@chakra-ui/react";
import { Toaster } from "react-hot-toast";
import { useFirebase } from "./context/FireBase";
import PrivateRoute from "./pages/PrivateRoute";
import Employee from "./pages/EmployeeManagement/Employee";
import CreateEmployeeData from "./pages/EmployeeManagement/CreateEmployeeData";

function App() {
  const firebase = useFirebase();

  return (
    <>
      <Routes>
        {" "}
        <Route
          path="/login"
          element={
            <ChakraProvider>
              <LoginSignupPage />
            </ChakraProvider>
          }
        ></Route>
        <Route path="/" element={<PrivateRoute />}>
          <Route index element={<Main_dashBoard></Main_dashBoard>}></Route>
          <Route path="employees" element={<Employee />}></Route>
          <Route
            path="/add-new-employee"
            element={<CreateEmployeeData />}
          ></Route>
          <Route path="customers" element={<h2>Emloyees Data</h2>}></Route>
          <Route path="orders" element={<h2>Order Data</h2>}></Route>
        </Route>
        <Route
          path="/*"
          element={<h3> Something Went Wrong or No Route Found</h3>}
        ></Route>
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
