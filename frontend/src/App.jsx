function App() {
  return (
    <div className="min-h-screen bg-[#15173D] text-[#f1e9e9]">
      
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6">
        <h1 className="text-2xl font-bold text-[#e491c9]">
          ZentoMax Tech
        </h1>

        <ul className="flex gap-8 text-[#f1e9e9] font-medium">
          <li className="hover:text-[#e491c9] cursor-pointer">Home</li>
          <li className="hover:text-[#e491c9] cursor-pointer">About Us</li>
          <li>
              <a href="#services" className="hover:text-[#e491c9] cursor-pointer">
                Services
              </a>
            </li>

          <li className="hover:text-[#e491c9] cursor-pointer">Portfolio</li>
          <li className="hover:text-[#e491c9] cursor-pointer">Contact Us</li>
        </ul>
      </nav>

      {/* hii */}

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">
        <h2 className="text-5xl font-extrabold mb-6">
          Build. Innovate. <span className="text-[#982598]">Scale.</span>
        </h2>

        <p className="max-w-2xl text-lg text-[#e491c9] mb-8">
          ZentoMax Tech delivers modern web solutions, scalable applications,
          and powerful digital experiences for startups and enterprises.
        </p>

        <button className="bg-[#982598] hover:bg-[#e491c9] hover:text-[#15173D] 
                           transition duration-300 px-8 py-3 rounded-xl font-semibold">
          Get Started
        </button>
      </section>

      {/* Services Section */}
      <section id="services" className="px-10 py-20">
        <h3 className="text-3xl font-bold text-center mb-12 text-[#e491c9]">
          Our Services
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="bg-[#1c1f4f] p-6 rounded-2xl shadow-lg hover:scale-105 transition">
            <h4 className="text-xl font-bold text-[#982598] mb-3">
              Web Development
            </h4>
            <p className="text-[#f1e9e9]">
              High-performance websites and web apps built using modern technologies.
            </p>
          </div>

          <div className="bg-[#1c1f4f] p-6 rounded-2xl shadow-lg hover:scale-105 transition">
            <h4 className="text-xl font-bold text-[#982598] mb-3">
              UI/UX Design
            </h4>
            <p className="text-[#f1e9e9]">
              Clean, intuitive, and engaging user interface designs.
            </p>
          </div>

          <div className="bg-[#1c1f4f] p-6 rounded-2xl shadow-lg hover:scale-105 transition">
            <h4 className="text-xl font-bold text-[#982598] mb-3">
              Startup Solutions
            </h4>
            <p className="text-[#f1e9e9]">
              Complete tech setup and scaling solutions for startups.
            </p>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-[#982598]">
        <p className="text-[#e491c9]">
          © 2026 ZentoMax Tech. All rights reserved.
        </p>
      </footer>

    </div>
  )
}

export default App
