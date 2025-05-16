
import { Outlet } from "react-router-dom";
import Header from "./header";
import Sidebar from "./sidebar";

const Main = () => {
  return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <div className="w-[17%] hidden md:block border min-h-screen bg-mainBackground">
            <Sidebar />
          </div>
          <div className="w-full border bg-white min-h-screen relative p-5">
            <Outlet />
          </div>
        </div>
      </div>
  );
};

export default Main;