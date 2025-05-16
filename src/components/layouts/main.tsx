
import { Outlet } from "react-router-dom";
import Header from "./header";
import Sidebar from "./sidebar";

const Main = () => {
  return (
      <main>
        <Header />
        <section className="flex min-h-screen">
          <div className="w-[17%] hidden md:block border min-h-screen bg-mainBackground">
            <Sidebar />
          </div>
          <div className="w-full border bg-white min-h-screen relative p-5">
            <Outlet />
          </div>
        </section>
      </main>
  );
};

export default Main;