import { sideBar } from "@/lib/const";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-mainBackground flex flex-col gap-4 mt-6 px-4">
      {
        sideBar.map(item => {
          return(
            <Link className="border-y py-3" to={item.route} key={item.title}>
              {item.title}
            </Link>
          )
        })
      }
    </div>
  );
};

export default Sidebar;