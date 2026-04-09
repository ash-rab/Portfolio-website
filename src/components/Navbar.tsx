// components/Navbar.tsx

'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const links = ['About', 'Skills', 'Projects', 'Achievements', 'Contact']

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 
                    flex items-center justify-between 
                    bg-[#121212]/80 backdrop-blur-md border-b border-white/5">

      {/* Logo */}
      <span className="text-white font-semibold tracking-widest text-sm">
        AAKASH K
      </span>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-white/60 hover:text-white text-sm 
                       tracking-wider transition-colors duration-200"
          >
            {link}
          </a>
        ))}

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/k-aakash-5a177b24a"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/60 hover:text-white transition-colors"
          title="Connect on LinkedIn"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
      </div>

      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white p-2"
      >
        {isOpen ? (
          // X icon
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          // Hamburger icon
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 
                        bg-[#121212]/95 backdrop-blur-md 
                        border-b border-white/10 
                        flex flex-col items-center gap-6 py-8
                        md:hidden">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-white/70 hover:text-white text-sm tracking-widest"
            >
              {link}
            </a>
          ))}

          <a
            href="https://www.linkedin.com/in/k-aakash-5a177b24a"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 text-sm tracking-widest"
          >
            LinkedIn ↗
          </a>
        </div>
      )}
    </nav>
  )
}