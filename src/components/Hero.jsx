'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Jangbogo 프로젝트</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">Roblox와 Discord를 연동한 강력한 관리 시스템</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/login" className="px-8 py-4 bg-white text-blue-600 rounded-lg font-bold hover:bg-gray-100 transition transform hover:scale-105">🎮 Roblox 로그인</Link>
            <a href="https://discord.gg/NSB9hVuawk" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-purple-500 text-white rounded-lg font-bold hover:bg-purple-600 transition transform hover:scale-105">💬 Discord 참여</a>
          </div>
        </div>
      </div>
    </section>
  )
}