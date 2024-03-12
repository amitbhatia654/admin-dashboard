import {} from "react";

import "./App.css";
import Index from "./pages/Index";
import { Route, Routes } from "react-router-dom";
import Main_dashBoard from "./pages/dashboard/Main_dashBoard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />}>
          <Route
            // path="/dashboard"
            index
            element={<Main_dashBoard></Main_dashBoard>}
          ></Route>
          <Route path="employees" element={<h2>Emloyees Data</h2>}></Route>
          <Route path="customers" element={<h2>Emloyees Data</h2>}></Route>

          <Route path="orders" element={<h2>Order Data</h2>}></Route>
        </Route>
        {/* <Dashboard></Dashboard> */}

        <Route
          path="/*"
          element={<h3> Something Went Wrong or No Route Found</h3>}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
