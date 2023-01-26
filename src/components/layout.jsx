import { Link } from "react-router-dom";
import logo from "../assets/img/logo-fluent.png";
export default function Layout({ children }) {
  return (
    <main>
      <section id="navbar" className="bg-gray-200 px-5 flex justify-between items-center fixed w-full">
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
      <section id="children" className="pt-28 px-8">{children}</section>
      <section id="footer"></section>
    </main>
  );
}
