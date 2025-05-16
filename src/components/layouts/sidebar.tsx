import { sideBar } from "@/lib/const";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-mainBackground flex flex-col gap-2 mt-6">
      {
        sideBar.map(item => {
          return(
            <Link to={item.route} key={item.title}>
              {item.title}
            </Link>
          )
        })
      }
    </div>
  );
};

export default Sidebar;