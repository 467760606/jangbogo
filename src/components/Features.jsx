'use client'

export default function Features() {
  const features = [
    { 
      number: '01',
      icon: '🔬', 
      title: '극지 기후 연구', 
      description: '남극의 기후 변화와 대기 현상을 심층 분석합니다.' 
    },
    { 
      number: '02',
      icon: '🧬', 
      title: '생물학 연구', 
      description: '극지 생물과 미생물 생태계를 조사합니다.' 
    },
    { 
      number: '03',
      icon: '🪨', 
      title: '지질학 조사', 
      description: '남극 대륙의 지질 구조와 역사를 파악합니다.' 
    },
    { 
      number: '04',
      icon: '🌊', 
      title: '해양 환경 연구', 
      description: '해양 환경과 수심 생물을 체계적으로 연구합니다.' 
    },
  ]

  return (
    <section id="research" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            주요 연구
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl">
            장보고 기지에서 진행 중인 다양한 과학 연구 프로그램들을 소개합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group cursor-pointer"
            >
              <div className="mb-6">
                <p className="text-6xl font-bold text-gray-200 group-hover:text-gray-300 transition">
                  {feature.number}
                </p>
              </div>
              <div className="text-5xl mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-lg text-gray-600">{feature.description}</p>
              <div className="mt-6 h-1 w-12 bg-gray-900 group-hover:w-24 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
