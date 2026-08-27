'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Jangbogo</h3>
            <p className="text-gray-400">Roblox와 Discord를 연동한 강력한 관리 시스템입니다.</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">링크</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-white transition">홈페이지</Link></li>
              <li><Link href="/login" className="hover:text-white transition">로그인</Link></li>
              <li><Link href="/admin" className="hover:text-white transition">관리자</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">커뮤니티</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="https://discord.gg/NSB9hVuawk" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Discord</a></li>
              <li><a href="https://www.roblox.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Roblox</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">연락처</h4>
            <p className="text-gray-400 mb-2">💬 Discord: NSB9hVuawk</p>
            <p className="text-gray-400">📧 Support 채널 확인</p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">© 2024 Jangbogo Project. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}