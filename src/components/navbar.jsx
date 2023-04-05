import { Link } from "react-router-dom";
import logo from "../assets/img/logo-fluent.png";

export default function Navbar() {
  return (
    <section
      id="navbar"
      className="bg-white backdrop-blur-lg bg-opacity-25 px-5 py-3 flex justify-between items-center fixed w-full z-[500]"
    >
      <Link to={"/"}>
        <img src={logo} alt={logo} className="h-16" />
      </Link>
      <nav className="text-sm flex space-x-5">
        <p>Home</p>
        <p>Skills</p>
        <p>Tips & Tricks</p>
        <p>About us</p>
      </nav>
      <div className="flex space-x-5 text-sm">
        <button className="font-semibold text-blue-theme">Login</button>
        <button className="font-semibold text-white px-5 py-2 rounded-full bg-blue-theme">Register</button>
      </div>
    </section>
  );
}
