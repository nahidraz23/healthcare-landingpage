import { Link } from "react-router-dom";

const Navbar = () => {
    const links = [
        { title: "Home", path: "/" },
        { title: "Services", path: "" },
        { title: "Contact us", path: "" },
        { title: "Help", path: "" },
        { title: "Blogs", path: "" },
    ];

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links.map((link) => (
                            <a key={link.path} >
                                <Link className="hover:text-blue-300 hover:text-lg hover:font-semibold hover:border-b-2 ml-3" to={link.path}>{link.title}</Link>
                            </a>
                        ))}
                    </ul>
                </div>
                <h1 className="text-4xl font-semibold">Healthcare</h1>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links.map((link) => (
                        <a key={link.path} >
                            <Link className="hover:text-blue-300 hover:text-lg hover:font-semibold hover:border-b-2 ml-3" to={link.path}>{link.title}</Link>
                        </a>
                    ))}
                </ul>
            </div>
            <div className="navbar-end gap-5">
                <button className="btn btn-outline hover:bg-emerald-500">Sing in</button>
                <button className="btn btn-outline hover:bg-emerald-500">Sign up</button>
            </div>
        </div>
    );
};

export default Navbar;