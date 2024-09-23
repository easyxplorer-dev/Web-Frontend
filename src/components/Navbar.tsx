import { NavLink } from "react-router-dom";
import { NavItem } from "src/types/NavItem";

type Props = {
  data: NavItem[];
};

function Navbar({ data }: Props) {
  return (
    <>
      <header
        className="bg-DarkBlueGray shadow-lg relative text-white"
        style={{ zIndex: 10 }}
      >
        <nav className="navbar max-w-screen-xl mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow bg-gray-700"
              >
                {data.map((item) => (
                  <li key={item.id}>
                    <NavLink
                      to={item.url}
                      className={`focus:text-white focus:bg-gray-600`}
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <NavLink to={"/"} className="btn btn-ghost text-xl">
              EasyXplorer
            </NavLink>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {data.map((item) => (
                <li key={item.id}>
                  <NavLink
                    to={item.url}
                    className={`focus:text-white focus:bg-gray-600`}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn btn-sm bg-GoldenYellow uppercase text-white hover:bg-GoldenOrange border-none outline-none">
              Reserva ahora
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
