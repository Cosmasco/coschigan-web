import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white flex flex-col items-center justify-center p-6">
      <img src="/logo.png" alt="Cosschigan Logo" className="w-32 h-32 mb-6" />
      <h1 className="text-5xl font-bold mb-2">COSSCHIGAN</h1>
      <p className="text-lg italic mb-6">Where Elegance Meets Affordability</p>
      <Link to="/shop" className="bg-gradient-to-r from-indigo-500 to-teal-400 text-white px-6 py-3 rounded-2xl shadow-lg">Shop Now</Link>
    </div>
  );
}

function About() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center p-6">
      <h2 className="text-4xl font-bold mb-4">About Us</h2>
      <p className="max-w-2xl text-center">
        At Cosschigan, we blend style, quality, and affordability to redefine fashion for everyone. Our designs are crafted with precision, ensuring elegance is always within reach.
      </p>
    </div>
  );
}

function Shop() {
  return (
    <div className="min-h-screen bg-gray-100 text-black p-10">
      <h2 className="text-4xl font-bold mb-8 text-center">Shop</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="rounded-2xl shadow-md bg-white p-4 flex flex-col items-center">
            <div className="w-40 h-40 bg-gray-300 flex items-center justify-center mb-4">
              <span className="text-gray-600">Image</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Product {item}</h3>
            <p className="text-lg font-bold mb-2">₦{item * 5000}</p>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg">Shop Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center p-6">
      <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
      <p>Email: <a href="mailto:contact@cosschigan.com" className="text-indigo-600">contact@cosschigan.com</a></p>
      <p>Phone: <a href="tel:+2348066585236" className="text-indigo-600">+2348066585236</a></p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <nav className="flex justify-center space-x-6 p-4 bg-black text-white shadow-md">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;