'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-blue-950 via-blue-900 to-cyan-900 text-white py-24 md:py-40 overflow-hidden">
      {/* 배경 효과 */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-block mb-6">
            <span className="text-6xl">❄️</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            장보고 과학기지
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 text-cyan-200">
            대한민국 남극 연구의 중심
          </p>
          
          <p className="text-lg md:text-xl mb-10 text-blue-100 max-w-3xl mx-auto">
            남극 대륙에서 진행되는 첨단 과학 연구와 환경 조사의 거점으로,<br/>
            지구의 미래를 위한 중요한 데이터를 수집하고 있습니다.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://www.kopri.re.kr" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-8 py-4 bg-white text-blue-900 rounded-lg font-bold hover:bg-cyan-100 transition transform hover:scale-105 shadow-lg"
            >
              🌐 공식 홈페이지
            </a>
            <Link 
              href="#research" 
              className="px-8 py-4 bg-cyan-400 text-blue-900 rounded-lg font-bold hover:bg-cyan-300 transition transform hover:scale-105 shadow-lg"
            >
              📚 연구 정보
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 md:gap-8">
            <div className="text-center">
              <div className="text-4xl mb-2">🔬</div>
              <p className="text-sm md:text-base text-blue-100">첨단 연구</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🌍</div>
              <p className="text-sm md:text-base text-blue-100">기후 변화 연구</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">📊</div>
              <p className="text-sm md:text-base text-blue-100">데이터 수집</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
