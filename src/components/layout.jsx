import Navbar from "./navbar";
import logo from "../assets/img/logo-fluent.png";

export default function Layout({ children }) {
  return (
    <main>
      <Navbar />
      <section id="children" className="pt-28 px-8">
        {children}
      </section>
      <footer className="bg-[#020418] w-full px-5 py-10 text-white">
        <div className="flex space-x-28 items-center">
          <div className="w-1/6">
            <img src={logo} alt={logo} className="h-20" />
            <p className="text-xs">
              Jl. Raya Panglegur No.Km 3,5, Barat, Panglegur, Kec. Tlanakan,
              Kabupaten Pamekasan, Jawa Timur 69371
            </p>
          </div>
          <div className="flex space-x-10">
            <article id="service">
              <h4 className="text-lg font-bold">Service</h4>
              <p className="text-xs">About us</p>
              <p className="text-xs">Contact us</p>
              <p className="text-xs">Features</p>
              <p className="text-xs">Blog</p>
            </article>
            <article id="resource">
              <h4 className="text-lg font-bold">Resource</h4>
              <p className="text-xs">Illustration</p>
              <p className="text-xs">Design</p>
            </article>
            <article id="contact">
              <h4 className="text-lg font-bold">Contact us</h4>
              <p className="text-xs">example@example.example</p>
              <p className="text-xs">+62 79858391</p>
            </article>
          </div>
        </div>
        <p className="text-xs text-center mt-3">© Fluent English 2023</p>
      </footer>
    </main>
  );
}
