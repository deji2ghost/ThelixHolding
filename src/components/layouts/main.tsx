
import { Outlet } from "react-router-dom";
import Header from "./header";
import Sidebar from "./sidebar";

const Main = () => {
  return (
      <main>
        <Header />
        <section className="flex min-h-screen">
          <div className="w-[20%] border">
            <Sidebar />
          </div>
          <div className="w-[80%] border bg-[#f9f9f9] min-h-screen relative">
            <Outlet />
          </div>
        </section>
      </main>
  );
};

export default Main;