import React from "react";

interface NavLink {
    label: string;
    href: string;
    active?: boolean;
}

const navLinks: NavLink[] = [
    { label: "Home", href: "/", active: true },
    { label: "Technologies", href: "/technologies" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
];

const Navbar: React.FC = () => {
    return (
        <nav className="bg-[#FEFEFE] shadow-sm sticky top-0 z-50">
            <div className="navbar container mx-auto px-6 py-3 sm:px-12 lg:px-32">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                aria-label="Menu"
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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                        >
                            {navLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className={`bg-transparent ${link.active ? "text-[#DB2777]" : "text-[#475569]"
                                            }`}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <a href="/" className="px-2">
                        <img
                            src="/logo-text.png"
                            alt="Dev Stack Logo"
                            className="h-9 w-auto object-contain"
                        />
                    </a>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-1 px-1">
                        {navLinks.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    className={`bg-transparent px-3 text-[15px] font-medium transition-colors hover:bg-transparent ${link.active
                                        ? "text-[#DB2777]"
                                        : "text-[#475569] hover:text-[#DB2777]"
                                        }`}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="navbar-end gap-2">
                    <button className="btn border-none bg-transparent px-4 text-[15px] font-medium text-[#334155] shadow-none hover:bg-transparent hover:text-[#DB2777]">
                        Sign In
                    </button>
                    <button className="btn rounded-full border-none bg-[#D91B7E] px-6 text-[15px] font-medium text-white shadow-none hover:bg-[#c70f6e] hover:shadow-none">
                        Sign Up
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;