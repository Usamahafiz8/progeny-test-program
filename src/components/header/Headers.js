// pages/components/Header.js
import { useState } from "react";
import { useRouter } from "next/router";

const Header = ({ role }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("role");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    router.push("/");
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const commonLinks = [{ href: "/", label: "Home" }];

  const adminLinks = [
    { href: "/admin", label: "Admin Dashboard" },
    { href: "/create-users", label: "Create User" },
    { href: "/user-list", label: "All Users" },
    { href: "/settings", label: "Settings" },
  ];

  const userLinks = [
    { href: "/profile", label: "Profile" },
    { href: "/settings", label: "Settings" },
  ];

  const navLinks = role === "admin" ? adminLinks : userLinks;

  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={toggleMenu}
              className="md:hidden text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
            <div className={`${isOpen ? "block" : "hidden"} md:block`}>
              <nav className="flex space-x-4">
                {commonLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {link.label}
                  </a>
                ))}
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
          <div>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <nav className="px-2 pt-2 pb-3 space-y-1">
            {commonLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.label}
              </a>
            ))}
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
