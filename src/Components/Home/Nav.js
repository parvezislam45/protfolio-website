import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Nav = () => {
  return (
    <div class="navbar bg-black">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              {/* <NavLink to = "/about">About</NavLink> */}
              <a href="skill">My skill</a>
            </li>
            <li>
              <NavLink to="/skills">Protfolio</NavLink>
            </li>
            <li>
              <NavLink to="/contract">Contract</NavLink>
            </li>
          </ul>
        </div>
        <h1 class="btn btn-ghost normal-case text-xl">Parvez Islam</h1>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">
          <li>
          <HashLink
              to="#home"
              scroll={(el) =>
                el.scrollIntoView({ behavior: "auto", block: "end" })
              }
            >
              Home
            </HashLink>
          </li>
          <li>
          <HashLink
              to="#web"
              scroll={(el) =>
                el.scrollIntoView({ behavior: "auto", block: "end" })
              }
            >
              Web-Site
            </HashLink>
          </li>
          <li>
          <HashLink
              to="#service"
              scroll={(el) =>
                el.scrollIntoView({ behavior: "auto", block: "end" })
              }
            >
              My Service
            </HashLink>
          </li>
          <li>
            {/* <NavLink to = "/skills">Protfolio</NavLink> */}
            <HashLink
              to="#skill"
              scroll={(el) =>
                el.scrollIntoView({ behavior: "auto", block: "end" })
              }
            >
              Skills
            </HashLink>
          </li>
          <li>
          <HashLink
              to="#contract"
              scroll={(el) =>
                el.scrollIntoView({ behavior: "auto", block: "end" })
              }
            >
              Contract
            </HashLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
