import { useState, lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import './index.css'
import Header from './Header/Header.jsx';
import Footer from './Footer.jsx';

function App() {
  const [count, setCount] = useState(0)
  const Portfolio = lazy(() => import('./Portfolio'));
  const Contact = lazy(() => import('./Contact'));
  const Blog = lazy(() => import('./Blog'));
  const Home = lazy(() => import('./Home'));

  return (
    <div className='bg-[#121212] mt-[0px] pt-0 h-auto w-screen'>
      <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
          </Routes>
        <Footer />
      </Suspense>
      </BrowserRouter>
    </div>
  )
}

export default App

