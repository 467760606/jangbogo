'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-blue-950 to-blue-900 text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-3xl">❄️</span>
              <h3 className="text-2xl font-bold">장보고 기지</h3>
            </div>
            <p className="text-blue-300 leading-relaxed">
              대한민국의 남극 연구 기지로서 첨단 과학 연구와 국제 협력의 중심입니다. 지구 환경의 변화를 모니터링하고 극지 과학의 발전을 주도합니다.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-cyan-300">기지 정보</h4>
            <ul className="space-y-2 text-blue-200">
              <li className="flex items-center space-x-2">
                <span>📍</span>
                <span>남극 테라노바만</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>📅</span>
                <span>개소: 2014년</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>🌡️</span>
                <span>겨울: -60°C 이하</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>👥</span>
                <span>연구원: 30-40명</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-cyan-300">주요 연구</h4>
            <ul className="space-y-2 text-blue-200">
              <li>🔬 극지 기후 연구</li>
              <li>🧬 생물학 연구</li>
              <li>🪨 지질학 조사</li>
              <li>🌊 해양 환경 연구</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-cyan-300">연락처</h4>
            <div className="space-y-3 text-blue-200">
              <p className="font-semibold">극지연구소</p>
              <p className="flex items-center space-x-2">
                <span>🏛️</span>
                <span>국립극지연구소</span>
              </p>
              <p className="flex items-center space-x-2">
                <span>📞</span>
                <span>02-6740-1000</span>
              </p>
              <a 
                href="https://www.kopri.re.kr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-cyan-300 transition"
              >
                <span>🌐</span>
                <span>www.kopri.re.kr</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-blue-300 text-sm">
              © 2024 대한민국 남극 장보고 과학기지. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a 
                href="https://www.kopri.re.kr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-300 hover:text-white transition"
              >
                공식 사이트
              </a>
              <a 
                href="https://www.kopri.re.kr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-300 hover:text-white transition"
              >
                문의하기
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
