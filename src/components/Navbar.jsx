'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">J</span>
              </div>
              <span className="font-bold text-xl text-gray-800">Jangbogo</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-700 hover:text-blue-500 transition">기능</Link>
            <Link href="#services" className="text-gray-700 hover:text-blue-500 transition">서비스</Link>
            <a href="https://discord.gg/NSB9hVuawk" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-500 transition">Discord</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition font-medium">로그인</Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-500">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="#features" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">기능</Link>
            <Link href="#services" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">서비스</Link>
            <Link href="/login" className="block px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">로그인</Link>
          </div>
        )}
      </div>
    </nav>
  )
}