// import { NavLink } from "react-router-dom";
// import { sideBar } from "../../lib/const";

const Sidebar = () => {
  return (
    <aside>
        sidebar
      {/* <nav className="flex flex-col gap-5">
        {sideBar.map((item, index) => (
          <ul className="flex flex-col gap-5" key={index}>
            <li className="flex cursor-pointer items-center gap-[10px] bg-darkolivegreen-300 text-darkolivegreen-100 rounded-[5px] py-[5px] px-[10px] font-[500] text-[16px] leading-[19.36px]">
              <img src={item.image} />
              {item.mainRoute}
            </li>
            <div className="flex flex-col gap-[10px]">
              <NavLink
                to={item.subRoute1}
                className={({ isActive }) =>
                  `py-[10px] pl-10 pr-[10px] font-[500] text-[16px] leading-[19.36px] cursor-pointer ${
                    isActive ? "bg-darkolivegreen-100 text-[#FFFFFF]" : "bg-transparent text-darkolivegreen-100"
                  }`
                }
              >
                {item.subRoute1}
              </NavLink>
              {item.subRoute2 && ( // Check if subRoute2 is defined
                <NavLink
                  to={item.subRoute2}
                  className={({ isActive }) =>
                    `py-[10px] pl-10 pr-[10px] font-[500] text-[16px] leading-[19.36px] cursor-pointer ${
                      isActive ? "bg-darkolivegreen-100 text-[#FFFFFF]" : "bg-transparent text-darkolivegreen-100"
                    }`
                  }
                >
                  {item.subRoute2}
                </NavLink>
              )}
            </div>
          </ul>
        ))}
      </nav> */}
    </aside>
  );
};

export default Sidebar;