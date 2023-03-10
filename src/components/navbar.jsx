import { Link } from "react-router-dom";
import logo from "../assets/img/logo-fluent.png";

export default function Navbar() {
    return <section id="navbar" className="bg-white backdrop-blur-lg bg-opacity-25 px-5 flex justify-between items-center fixed w-full z-[500]">
    <Link to={"/"}>
      <img src={logo} alt={logo} className="h-20" />
    </Link>
    <nav className="text-sm flex space-x-5">
      <p>Home</p>
      <p>Programs</p>
      <p>FAQ</p>
      <p>About us</p>
    </nav>
  </section>
}