import { Link } from "react-router-dom"
const Navbar = ()=>{

    return(
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Denama</h1>

          <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
            <Link className="hover:text-blue-500 cursor-pointer" to= "/"> Home</Link>
            <Link className="hover:text-blue-500 cursor-pointer" to= "/about">About</Link>
            <Link className="hover:text-blue-500 cursor-pointer" to= "/service">Services</Link>
            <Link className="hover:text-blue-500 cursor-pointer" to= "/contact">Contact</Link>
          </ul>

          <button className="md:hidden text-2xl">☰</button>
        </div>
      </nav>
    )
}

export default Navbar