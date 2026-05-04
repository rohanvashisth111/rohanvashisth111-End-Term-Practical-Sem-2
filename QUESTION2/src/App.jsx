import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to my home page</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About</h1>
      <p>This is the about section</p>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <p>Reach me at <a href="mailto:hello@example.com">realrohanvashisth@gmail.com</a></p>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/" end>Home</NavLink> |{' '}
        <NavLink to="/about">About</NavLink> |{' '}
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}