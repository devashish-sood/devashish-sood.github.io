import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex flex-row justify-between my-8">
      <NavLink to="" className="font-semibold text-3xl pr-2">
        Devashish Sood
      </NavLink>
      <div className="flex items-end">
        <NavLink to="experience" className="pl-2">
          experience
        </NavLink>
        <NavLink to="projects" className="pl-2">
          projects
        </NavLink>
        <NavLink to="writing" className="pl-2">
          writing
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
