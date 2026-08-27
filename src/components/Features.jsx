'use client'

export default function Features() {
  const features = [
    { 
      icon: '🔬', 
      title: '극지 기후 연구', 
      description: '남극의 기후 변화와 대기 현상을 심층 연구합니다.' 
    },
    { 
      icon: '🧬', 
      title: '생물학 연구', 
      description: '극지 생물과 미생물 생태계를 조사합니다.' 
    },
    { 
      icon: '🪨', 
      title: '지질학 조사', 
      description: '남극 대륙의 지질 구조와 역사를 파악합니다.' 
    },
    { 
      icon: '🌊', 
      title: '해양 연구', 
      description: '해양 환경과 수심 생물을 조사합니다.' 
    },
    { 
      icon: '📡', 
      title: '첨단 관측 장비', 
      description: '최신 과학 기기로 지구 환경을 모니터링합니다.' 
    },
    { 
      icon: '👨‍🔬', 
      title: '국제 협력', 
      description: '전 세계 과학자들과 공동 연구를 진행합니다.' 
    },
  ]

  return (
    <section id="research" className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            주요 연구 활동
          </h2>
          <p className="text-lg text-blue-700">
            장보고 기지에서 진행 중인 다양한 과학 연구 프로그램
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-blue-400"
            >
              <div className="text-6xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">{feature.title}</h3>
              <p className="text-blue-700 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-900 to-cyan-900 text-white p-8 md:p-12 rounded-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-3xl font-bold mb-4">장보고 기지에 대해 더 알아보기</h3>
              <p className="text-lg text-blue-100">
                대한민국의 자랑스러운 남극 연구 기지인 장보고 기지에 대해 더 자세히 알아보세요.
              </p>
            </div>
            <a 
              href="https://www.kopri.re.kr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-cyan-400 text-blue-900 rounded-lg font-bold hover:bg-cyan-300 transition transform hover:scale-105 whitespace-nowrap"
            >
              더 알아보기 →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
