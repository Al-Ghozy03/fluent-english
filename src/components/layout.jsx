import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <main>
      <Navbar />
      <section id="children" className="pt-28 px-8">{children}</section>
      <section id="footer"></section>
    </main>
  );
}
